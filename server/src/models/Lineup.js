const Model = require("./Model.js")

class Lineup extends Model {
    static get tableName() {
        return "lineups"
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["showId", "artistId"],
            properties: {
                showId: { type: ["integer", "string"] },
                artistId: { type: ["integer", "string" ]}
            }
        }
    }
    
    static get relationMappins() {
        const { Show, Artist } = require("./index.js")
        return {
            shows: {
                relation: Model.HasManyRelation,
                modelClass: Show,
                join: {
                    from: "lineups.showId",
                    to: "shows.id"
                }
            },
            artists: {
                relation: Model.HasManyRelation,
                modelClass: Artist,
                join: {
                    from: "lineups.artistId",
                    to: "artists.id"
                }
            }
        }
    }
}

module.exports = Lineup