import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import venuesRouter from "./api/v1/venuesRouter.js";
import venueShowsRouter from "./api/v1/venueShowsRouter.js"
import tracksRouter from "./api/v1/tracksRouter.js"
import showsRouter from "./api/v1/showsRouter.js"
import vibesRouter from "./api/v1/vibesRouter.js"
import artistsRouter from "./api/v1/artistsRouter.js"
import lineupsRouter from "./api/v1/lineupsRouter.js"
import announcementsRouter from "./api/v1/announcementsRouter.js"
import rulesRouter from "./api/v1/rulesRouter.js"

const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);
rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);

//place your server-side routes here
rootRouter.use("/api/v1/venues", venuesRouter);
rootRouter.use("/api/v1/venues/:name/:id", venueShowsRouter);
rootRouter.use("/api/v1/tracks", tracksRouter);
rootRouter.use("/api/v1/shows", showsRouter)
rootRouter.use("/api/v1/vibes", vibesRouter)
rootRouter.use("/api/v1/artists", artistsRouter)
rootRouter.use("/api/v1/lineups", lineupsRouter)
rootRouter.use("/api/v1/announcements", announcementsRouter)
rootRouter.use("/api/v1/rules", rulesRouter)

export default rootRouter;