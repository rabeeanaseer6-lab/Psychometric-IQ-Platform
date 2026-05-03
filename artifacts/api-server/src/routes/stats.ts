import { Router } from "express";
import { db, testResultsTable } from "@workspace/db";
import { desc, gte, sql, count, avg, max } from "drizzle-orm";

const router = Router();

// GET /api/stats
router.get("/", async (_req, res) => {
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  const [allStats] = await db
    .select({
      totalTests: count(),
      averageScore: avg(testResultsTable.score),
      highestScore: max(testResultsTable.score),
    })
    .from(testResultsTable);

  const [todayStats] = await db
    .select({
      testsToday: count(),
    })
    .from(testResultsTable)
    .where(gte(testResultsTable.createdAt, todayStart));

  res.json({
    totalTests: Number(allStats.totalTests) || 0,
    averageScore: Math.round(Number(allStats.averageScore)) || 100,
    highestScore: Number(allStats.highestScore) || 0,
    testsToday: Number(todayStats.testsToday) || 0,
  });
});

export default router;
