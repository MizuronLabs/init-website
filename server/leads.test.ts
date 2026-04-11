import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// ─── Mock the database helpers ────────────────────────────────────────────────
vi.mock("./db", () => ({
  insertLead: vi.fn().mockResolvedValue({ insertId: 1 }),
  getAllLeads: vi.fn().mockResolvedValue([
    {
      id: 1,
      name: "Test Buyer",
      email: "buyer@example.com",
      organization: "Resort Group",
      jobTitle: "Procurement Manager",
      phone: null,
      country: "Maldives",
      buyerType: "resort_hotel",
      formType: "trial_kit",
      productInterest: "Vermicompost",
      incoterms: "cif",
      destinationPort: "Port of Male",
      estimatedQuantity: "500 kg",
      message: "Interested in trial kit",
      status: "new",
      contentRequested: "Vermicompost Trial Kit",
      contentDelivered: false,
      createdAt: new Date("2026-01-01"),
      updatedAt: new Date("2026-01-01"),
    },
  ]),
  getLeadById: vi.fn().mockResolvedValue(null),
  updateLeadStatus: vi.fn().mockResolvedValue({ affectedRows: 1 }),
  upsertUser: vi.fn(),
  getUserByOpenId: vi.fn(),
}));

// ─── Mock the notification helper ─────────────────────────────────────────────
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

// ─── Context helpers ──────────────────────────────────────────────────────────
function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: vi.fn() } as unknown as TrpcContext["res"],
  };
}

function createAdminContext(): TrpcContext {
  return {
    user: {
      id: 1,
      openId: "admin-user",
      email: "admin@mizuronglobal.com",
      name: "Admin User",
      loginMethod: "manus",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    },
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: vi.fn() } as unknown as TrpcContext["res"],
  };
}

function createUserContext(): TrpcContext {
  return {
    user: {
      id: 2,
      openId: "regular-user",
      email: "user@example.com",
      name: "Regular User",
      loginMethod: "manus",
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    },
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: vi.fn() } as unknown as TrpcContext["res"],
  };
}

// ─── Tests ────────────────────────────────────────────────────────────────────
describe("leads.submit", () => {
  it("accepts a valid trial kit submission", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.leads.submit({
      name: "Resort Manager",
      email: "manager@resort.com",
      country: "Maldives",
      formType: "trial_kit",
      buyerType: "resort_hotel",
      productInterest: "Vermicompost",
      organization: "Luxury Resort Group",
    });
    expect(result).toEqual({ success: true });
  });

  it("accepts a technical datasheet request", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.leads.submit({
      name: "Procurement Officer",
      email: "procurement@company.com",
      country: "Singapore",
      formType: "technical_datasheet",
      contentRequested: "Technical Datasheet",
    });
    expect(result).toEqual({ success: true });
  });

  it("accepts an export desk inquiry with trade fields", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.leads.submit({
      name: "Import Manager",
      email: "imports@tradeco.com",
      country: "UAE",
      formType: "export_desk",
      incoterms: "fob",
      destinationPort: "Port of Dubai",
      estimatedQuantity: "1 FCL",
      buyerType: "importer",
    });
    expect(result).toEqual({ success: true });
  });

  it("accepts a biochar partnership inquiry", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.leads.submit({
      name: "Investment Director",
      email: "director@fund.com",
      country: "Netherlands",
      formType: "biochar_partnership",
      buyerType: "investment_firm",
      message: "Interested in carbon infrastructure partnership for 2027 roadmap.",
    });
    expect(result).toEqual({ success: true });
  });

  it("rejects submission with invalid email", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(
      caller.leads.submit({
        name: "Test",
        email: "not-an-email",
        country: "India",
        formType: "general_contact",
      })
    ).rejects.toThrow();
  });

  it("rejects submission with empty name", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(
      caller.leads.submit({
        name: "",
        email: "test@example.com",
        country: "India",
        formType: "general_contact",
      })
    ).rejects.toThrow();
  });

  it("rejects submission with invalid formType", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(
      caller.leads.submit({
        name: "Test",
        email: "test@example.com",
        country: "India",
        formType: "invalid_form_type" as any,
      })
    ).rejects.toThrow();
  });
});

describe("leads.list", () => {
  it("allows admin to list all leads", async () => {
    const caller = appRouter.createCaller(createAdminContext());
    const result = await caller.leads.list();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty("name");
    expect(result[0]).toHaveProperty("email");
    expect(result[0]).toHaveProperty("formType");
  });

  it("rejects non-admin user from listing leads", async () => {
    const caller = appRouter.createCaller(createUserContext());
    await expect(caller.leads.list()).rejects.toThrow();
  });

  it("rejects unauthenticated user from listing leads", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(caller.leads.list()).rejects.toThrow();
  });
});

describe("leads.updateStatus", () => {
  it("allows admin to update lead status", async () => {
    const caller = appRouter.createCaller(createAdminContext());
    const result = await caller.leads.updateStatus({ id: 1, status: "contacted" });
    expect(result).toEqual({ success: true });
  });

  it("rejects non-admin from updating lead status", async () => {
    const caller = appRouter.createCaller(createUserContext());
    await expect(
      caller.leads.updateStatus({ id: 1, status: "contacted" })
    ).rejects.toThrow();
  });

  it("rejects invalid status values", async () => {
    const caller = appRouter.createCaller(createAdminContext());
    await expect(
      caller.leads.updateStatus({ id: 1, status: "invalid" as any })
    ).rejects.toThrow();
  });
});

describe("auth.logout", () => {
  it("clears session cookie and returns success", async () => {
    const ctx = createUserContext();
    const caller = appRouter.createCaller(ctx);
    const result = await caller.auth.logout();
    expect(result).toEqual({ success: true });
  });
});
