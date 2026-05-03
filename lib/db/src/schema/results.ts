import { mysqlTable, serial, varchar, int, timestamp } from "drizzle-orm/mysql-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const testResultsTable = mysqlTable("test_results", {
  id: serial("id").primaryKey(),
  userName: varchar("user_name", { length: 255 }),
  score: int("score").notNull(),
  timeTaken: int("time_taken").notNull(),
  correctAnswers: int("correct_answers").notNull(),
  totalQuestions: int("total_questions").notNull(),
  percentile: int("percentile").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertTestResultSchema = createInsertSchema(testResultsTable).omit({ id: true, createdAt: true, percentile: true });
export type InsertTestResult = z.infer<typeof insertTestResultSchema>;
export type TestResult = typeof testResultsTable.$inferSelect;
