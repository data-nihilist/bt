const Model = require("./Model.js")

class Track extends Model {
    static get tableName() {
        return "tracks"
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["artist", "title", "uri", "albumUrl", "userId"],
            properties: {
                artist: { type: "string" },
                title: { type: "string" },
                uri: { type: "string" },
                albumUrl: { type: "string" },
                userId: { type: ["integer", "string"] }
            }
        }
    }

    static get relationMappings() {
        const { Show, Vibe } = require("./index.js")
        return {
            shows: {
                relation: Model.ManyToManyRelation,
                modelClass: Show,
                join: {
                    from: "tracks.id",
                    through: {
                        from: "vibes.trackId",
                        to: "vibes.showId",
                    },
                    to: "shows.id"
                }
            },
            vibe: {
                relation: Model.BelongsToOneRelation,
                modelClass: Vibe,
                join: {
                    from: "tracks.id",
                    to: "vibes.trackId"
                }
            }
        }
    }
}

module.exports = Track