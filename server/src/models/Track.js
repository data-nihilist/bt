const Model = require("./Model.js")

class Track extends Model {
    static get tableName() {
        return "tracks"
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["artist", "title", "uri", "albumUrl", "showId"],
            properties: {
                artist: { type: "string" },
                title: { type: "string" },
                uri: { type: "string" },
                albumUrl: { type: "string" },
                showId: { type: ["integer", "string"] }
            }
        }
    }

    static get relationMappings() {
        const { Show } = require("./index.js")
        return {
            shows: {
                relation: Model.BelongsToOneRelation,
                modelClass: Show,
                join: {
                    from: "tracks.showId",
                    to: "shows.id"
                }
            }
        }
    }
}

module.exports = Track