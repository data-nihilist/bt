const Model = require("./Model.js")

class Show extends Model {
    static get tableName() {
        return "shows"
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["title", "date", "venueId", "hostId", "image", "doors"],
            properties: {
                title: { type: "string", minLength: 1 },
                date: { type: ["string", "integer"] },
                venueId: { type: ["string", "integer" ]},
                hostId: { type: ["string", "integer" ]},
                image: { type: "string" },
                doors: { type: ["string", "integer"], minLength: 1 }
            }
        }
    }

    static get relationMappings() {
        const { Venue, User, Track } = require("./index.js")
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
            },
            tracks: {
                relation: Model.HasManyRelation,
                modelClass: Track,
                join: {
                    from: "shows.id",
                    to: "tracks.showId"
                }
            }
        }
    }
}

module.exports = Show