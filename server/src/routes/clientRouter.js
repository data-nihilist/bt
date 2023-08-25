import express from "express";
import getClientIndexPath from "../config/getClientIndexPath.js";
import SpotifyWebApi from 'spotify-web-api-node'
import config from "../config.js"

const router = new express.Router();

const clientRoutes = [
  "/venues",
  "/venues/:id",
  "/:venueId/shows",
  "/venues/:venueId/:id",
  "/user-sessions/new",
  "/users/new",
  "/refresh",
  "/",
  "/showplayground",
  "/artists",
  "/artists/new",
  "/artists/:id",
  "/maps"
];

const authedClientRoutes = ["/profile"];

router.get(authedClientRoutes, (req, res) => {
  if (req.user) {
    res.sendFile(getClientIndexPath());
  } else {
    res.redirect("/user-sessions/new")
  }
});

router.get(clientRoutes, (req, res) => {
  res.sendFile(getClientIndexPath());
});

//-----------------------------------------SPOTIFY STUFF

router.post('/showplayground', (req, res) => {
  const { code } = req.body
  const spotifyApi = new SpotifyWebApi({
    redirectUri: config.redirectUri.key,
    clientId: config.clientId.key,
    clientSecret: config.clientSecret.key
  })

  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in
      })
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(400)
    })
})

router.post('/refresh', (req, res) => {
  const refreshToken = req.body.refreshToken
  const spotifyApi = new SpotifyWebApi({
    redirectUri: config.redirectUri.key,
    clientId: config.clientId.key,
    clientSecret: config.clientSecret.key,
    refreshToken,
  })

  spotifyApi
    .refreshAccessToken()
    .then(data => {
      res.json({
        accessToken: data.data.accessToken,
        expiresIn: data.data.expiresIn
      })
    })
    .catch(() => {
      res.sendStatus(400)
    })
})

export default router;