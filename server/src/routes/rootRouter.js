import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import venuesRouter from "./api/v1/venuesRouter.js";
import venueShowsRouter from "./api/v1/venueShowsRouter.js"

const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);
rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);

//place your server-side routes here
rootRouter.use("/api/v1/venues", venuesRouter);
rootRouter.use("/api/v1/venues/:venueId/shows", venueShowsRouter)

export default rootRouter;