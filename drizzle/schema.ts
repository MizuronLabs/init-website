import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, boolean } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Lead inquiries — captures all gated content and contact form submissions.
 * formType distinguishes the inquiry source for routing and follow-up.
 */
export const leads = mysqlTable("leads", {
  id: int("id").autoincrement().primaryKey(),
  // Identity
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  organization: varchar("organization", { length: 255 }),
  jobTitle: varchar("jobTitle", { length: 255 }),
  phone: varchar("phone", { length: 64 }),
  country: varchar("country", { length: 100 }),
  // Buyer classification
  buyerType: mysqlEnum("buyerType", [
    "resort_hotel",
    "distributor",
    "importer",
    "government",
    "ngo",
    "investment_firm",
    "agricultural_business",
    "other",
  ]),
  // Form source
  formType: mysqlEnum("formType", [
    "trial_kit",
    "technical_datasheet",
    "export_desk",
    "distributor",
    "product_availability",
    "company_profile",
    "biochar_partnership",
    "general_contact",
  ]).notNull(),
  // Product interest
  productInterest: varchar("productInterest", { length: 255 }),
  // Trade details
  incoterms: mysqlEnum("incoterms", ["fob", "cif", "ddp", "tbd"]),
  destinationPort: varchar("destinationPort", { length: 255 }),
  estimatedQuantity: varchar("estimatedQuantity", { length: 255 }),
  // Message
  message: text("message"),
  // Status
  status: mysqlEnum("status", ["new", "contacted", "qualified", "closed"]).default("new").notNull(),
  // Gated content tracking
  contentRequested: varchar("contentRequested", { length: 255 }),
  contentDelivered: boolean("contentDelivered").default(false).notNull(),
  // Timestamps
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Lead = typeof leads.$inferSelect;
export type InsertLead = typeof leads.$inferInsert;
