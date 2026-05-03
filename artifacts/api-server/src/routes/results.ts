import { Router } from "express";
import { db, testResultsTable } from "@workspace/db";
import { eq, desc, sql, gte } from "drizzle-orm";
import { SubmitTestResultBody, GetResultByIdParams } from "@workspace/api-zod";

const router = Router();

function calculatePercentile(score: number): number {
  // Based on normal distribution with mean=100, sd=15
  // Approximate percentile mapping
  if (score >= 145) return 99;
  if (score >= 140) return 99;
  if (score >= 135) return 99;
  if (score >= 130) return 98;
  if (score >= 125) return 95;
  if (score >= 120) return 91;
  if (score >= 115) return 84;
  if (score >= 110) return 75;
  if (score >= 105) return 63;
  if (score >= 100) return 50;
  if (score >= 95) return 37;
  if (score >= 90) return 25;
  if (score >= 85) return 16;
  if (score >= 80) return 9;
  if (score >= 75) return 5;
  if (score >= 70) return 2;
  return 1;
}

function calculateIQScore(correctAnswers: number, totalQuestions: number, timeTaken: number): number {
  const accuracy = correctAnswers / totalQuestions;
  const baseScore = 70 + Math.round(accuracy * 60);
  const timeBonus = timeTaken < 600 ? 5 : timeTaken < 900 ? 3 : timeTaken < 1200 ? 1 : 0;
  return Math.min(145, Math.max(70, baseScore + timeBonus));
}

// POST /api/results
router.post("/", async (req, res) => {
  const parsed = SubmitTestResultBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }

  const { userName, score: providedScore, timeTaken, correctAnswers, totalQuestions } = parsed.data;

  const score = providedScore ?? calculateIQScore(correctAnswers, totalQuestions, timeTaken);
  const percentile = calculatePercentile(score);

  // MySQL does not support .returning() — use .$returningId() then fetch
  const [inserted] = await db.insert(testResultsTable).values({
    userName: userName ?? null,
    score,
    timeTaken,
    correctAnswers,
    totalQuestions,
    percentile,
  }).$returningId();

  const result = await db.query.testResultsTable.findFirst({
    where: eq(testResultsTable.id, inserted.id),
  });

  res.status(201).json({
    ...result,
    createdAt: result!.createdAt.toISOString(),
  });
});

// GET /api/results/:id
router.get("/:id", async (req, res) => {
  const parsed = GetResultByIdParams.safeParse({ id: Number(req.params.id) });
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid ID" });
    return;
  }

  const result = await db.query.testResultsTable.findFirst({
    where: eq(testResultsTable.id, parsed.data.id),
  });

  if (!result) {
    res.status(404).json({ error: "Result not found" });
    return;
  }

  res.json({
    ...result,
    createdAt: result.createdAt.toISOString(),
  });
});

export default router;
