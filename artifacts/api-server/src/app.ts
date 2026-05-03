import express, { type Application } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Application = express();

app.use(
  (pinoHttp as Function)({
    logger,
    serializers: {
      req(req: Record<string, unknown>) {
        return {
          id: req["id"],
          method: req["method"],
          url: (req["url"] as string)?.split("?")[0],
        };
      },
      res(res: Record<string, unknown>) {
        return {
          statusCode: res["statusCode"],
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
