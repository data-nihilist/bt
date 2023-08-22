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
        const { User } = require("./index.js")
    return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: "tracks.userId",
                    to: "users.id"
                }
            }
        }
    }
}

module.exports = Track