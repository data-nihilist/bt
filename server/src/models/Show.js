const Model = require("./Model.js")

class Show extends Model {
    static get tableName() {
        return "shows"
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["title", "date", "venueId", "hostId", "image", "doors"],
            properties: {
                title: { type: "string", minLength: 1 },
                date: { type: ["string", "integer"] },
                venueId: { type: ["string", "integer"] },
                hostId: { type: ["string", "integer"] },
                image: { type: "string" },
                doors: { type: ["string", "integer"], minLength: 1 }
            }
        }
    }

    static get relationMappings() {
        const { Venue, User, Track, Vibe, Lineup, Artist } = require("./index.js")
        return {
            venue: {
                relation: Model.BelongsToOneRelation,
                modelClass: Venue,
                join: {
                    from: "shows.venueId",
                    to: "venues.id"
                }
            },
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: "shows.hostId",
                    to: "users.id"
                }
            },
            tracks: {
                relation: Model.ManyToManyRelation,
                modelClass: Track,
                join: {
                    from: "shows.id",
                    through: {
                        from: "vibes.showId",
                        to: "vibes.trackId",
                    },
                    to: "tracks.id"
                }
            },
            vibe: {
                relation: Model.BelongsToOneRelation,
                modelClass: Vibe,
                join: {
                    from: "shows.id",
                    to: "vibes.showId"
                }
            },
            lineup: {
                relation: Model.BelongsToOneRelation,
                modelClass: Lineup,
                join: {
                    from: "shows.id",
                    to: "lineups.showId"
                }
            },
            artists: {
                relation: Model.ManyToManyRelation,
                modelClass: Artist,
                join: {
                    from: "shows.id",
                    through: {
                        from: "lineups.showId",
                        to: "lineups.artistId",
                    },
                    to: "artists.id"
                }
            }
        }
    }
}

module.exports = Show