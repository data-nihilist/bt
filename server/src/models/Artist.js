const Model = require("./Model.js")

class Artist extends Model {
    static get tableName() {
        return "artists"
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["name", "genre", "originCity", "description", "userId"],
            properties: {
                name: { type: "string" },
                genre: { type: "string" },
                originCity: { type: "string" },
                description: { type: "string" },
                userId: { type: ["integer", "string"] }
            }
        }
    }

    static get relationMappings() {
        const { User, Show, Lineup } = require("./index.js")
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: "artists.userId",
                    to: "users.id"
                }
            },
            lineup: {
                relation: Model.BelongsToOneRelation,
                modelClass: Lineup,
                join: {
                    from: "artists.id",
                    to: "lineups.showId"
                }
            },
            shows: {
                relation: Model.ManyToManyRelation,
                modelClass: Show,
                join: {
                    from: "artists.id",
                    through: {
                        from: "lineups.artistId",
                        to: "lineups.showId",
                    },
                    to: "shows.id"
                }
            }
        }
    }
}

module.exports = Artist