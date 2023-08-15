const Model = require("./Model.js")

class Show extends Model {
    static get tableName() {
        return "shows"
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["title", "date", "venueId", "hostId"],
            properties: {
                title: { type: "string", minLength: 1 },
                date: { type: ["string", "integer"] },
                venueId: { type: ["string", "integer" ]},
                hostId: { type: ["string", "integer" ]}
            }
        }
    }

    static get relationMappings() {
        const { Venue, User } = require("./index.js")
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
            }
        }
    }
}

module.exports = Show