import { Router } from "express";
import { db, testResultsTable } from "@workspace/db";
import { desc, gte, sql } from "drizzle-orm";

const router = Router();

// GET /api/leaderboard
router.get("/", async (_req, res) => {
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  const entries = await db
    .select({
      id: testResultsTable.id,
      userName: testResultsTable.userName,
      score: testResultsTable.score,
      timeTaken: testResultsTable.timeTaken,
      createdAt: testResultsTable.createdAt,
    })
    .from(testResultsTable)
    .where(gte(testResultsTable.createdAt, todayStart))
    .orderBy(desc(testResultsTable.score))
    .limit(10);

  res.json(entries.map(e => ({
    ...e,
    createdAt: e.createdAt.toISOString(),
  })));
});

export default router;
