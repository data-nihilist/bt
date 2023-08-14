const Model = require("./Model.js")

class Venue extends Model {
    static get tableName() {
        return "venues"
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["name", "location"],
            properties: {
                name: { type: "string" },
                location: { type: "string" }
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
                    from: "venues.hostId",
                    to: "users.id"
                }
            }
        }
    }
}

module.exports = Venue