import { COOKIE_NAME } from "@shared/const";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { getSessionCookieOptions } from "./_core/cookies";
import { notifyOwner } from "./_core/notification";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { systemRouter } from "./_core/systemRouter";
import { getAllLeads, getLeadById, insertLead, updateLeadStatus } from "./db";

// ─── Lead submission schema (public) ────────────────────────────────────────
const submitLeadSchema = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email().max(320),
  organization: z.string().max(255).optional(),
  jobTitle: z.string().max(255).optional(),
  phone: z.string().max(64).optional(),
  country: z.string().max(100).optional(),
  buyerType: z.enum([
    "resort_hotel",
    "distributor",
    "importer",
    "government",
    "ngo",
    "investment_firm",
    "agricultural_business",
    "other",
  ]).optional(),
  formType: z.enum([
    "trial_kit",
    "technical_datasheet",
    "export_desk",
    "distributor",
    "product_availability",
    "company_profile",
    "biochar_partnership",
    "general_contact",
  ]),
  productInterest: z.string().max(255).optional(),
  incoterms: z.enum(["fob", "cif", "ddp", "tbd"]).optional(),
  destinationPort: z.string().max(255).optional(),
  estimatedQuantity: z.string().max(255).optional(),
  message: z.string().max(5000).optional(),
  contentRequested: z.string().max(255).optional(),
});

export const appRouter = router({
  system: systemRouter,

  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  // ─── Leads ──────────────────────────────────────────────────────────────
  leads: router({
    /**
     * Public: submit any inquiry / gated content form.
     * Triggers an owner notification on success.
     */
    submit: publicProcedure
      .input(submitLeadSchema)
      .mutation(async ({ input }) => {
        await insertLead(input);

        // Notify owner of new lead
        const formLabel: Record<string, string> = {
          trial_kit: "Trial Kit Request",
          technical_datasheet: "Technical Datasheet Request",
          export_desk: "Export Desk Inquiry",
          distributor: "Distributor Inquiry",
          product_availability: "Product Availability Request",
          company_profile: "Company Profile Request",
          biochar_partnership: "Biochar Partnership Inquiry",
          general_contact: "General Contact",
        };

        await notifyOwner({
          title: `New Lead: ${formLabel[input.formType] ?? input.formType}`,
          content: `Name: ${input.name}\nEmail: ${input.email}\nOrganization: ${input.organization ?? "—"}\nCountry: ${input.country ?? "—"}\nProduct: ${input.productInterest ?? "—"}\nForm: ${input.formType}`,
        });

        return { success: true };
      }),

    /**
     * Admin: list all leads (protected, admin only).
     */
    list: protectedProcedure
      .query(async ({ ctx }) => {
        if (ctx.user.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }
        return getAllLeads();
      }),

    /**
     * Admin: update lead status.
     */
    updateStatus: protectedProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(["new", "contacted", "qualified", "closed"]),
      }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN" });
        }
        await updateLeadStatus(input.id, input.status);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
