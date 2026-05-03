import { Router, type IRouter } from "express";
import healthRouter from "./health";
import resultsRouter from "./results";
import leaderboardRouter from "./leaderboard";
import statsRouter from "./stats";

const router: IRouter = Router();

router.use(healthRouter);
router.use("/results", resultsRouter);
router.use("/leaderboard", leaderboardRouter);
router.use("/stats", statsRouter);

export default router;
