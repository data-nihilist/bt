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
                touring: { type: "boolean" },
                userId: { type: ["integer", "string"]}
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
                    from: "artists.userId",
                    to: "users.id"
                }
            }
        }
    }
}

module.exports = Artist