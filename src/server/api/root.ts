import { userRouter } from "./routers/user";
import { createTRPCRouter } from "$/server/api/trpc";
import { travelRouter } from "./routers/travel";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  travel: travelRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
