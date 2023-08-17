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
                location: { type: "string" },
                image: { type: "string" }
            }
        }
    }

    static get relationMappings() {
        const { User, Show } = require("./index.js")
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: "venues.hostId",
                    to: "users.id"
                }
            },
            shows: {
                relation: Model.HasManyRelation,
                modelClass: Show,
                join: {
                    from: "venues.id",
                    to: "shows.venueId"
                }
            }
        }
    }
}

module.exports = Venue