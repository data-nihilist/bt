const Model = require("./Model.js")

class Vibe extends Model {
    static get tableName() {
        return "vibes"
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["showId", "trackId"],
            properties: {
                showId: { type: "string" },
                trackId: { type: "string" }
            }
        }
    }

    static get relationMappings() {
        const { Show, Track } = require("./index.js")
        return {
            shows: {
                relation: Model.HasManyRelation,
                modelClass: Show,
                join: {
                    from: "vibes.showId",
                    to: "shows.id"
                }
            },
            tracks: {
                relation: Model.HasManyRelation,
                modelClass: Track,
                join: {
                    from: "vibes.trackId",
                    to: "tracks.id"
                }
            }
        }
    }
}

module.exports = Vibe