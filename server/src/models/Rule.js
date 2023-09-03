const Model = require("./Model.js")

class Rule extends Model{
    static get tableName() {
        return "rules"
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: [ "announcementId", "venueId" ],
            properties: {
                announcementId: { type: ["integer", "string"] },
                venueId: { type: ["integer", "string"] }
            }
        }
    }

    static get relationMappings() {
        const { Venue, Announcement } = require("./index.js")
        return {
            venues: {
                relation: Model.HasManyRelation,
                modelClass: Venue,
                join: {
                    from: "rules.venueId",
                    to: "venues.id"
                }
            },
            announcements: {
                relation: Model.HasManyRelation,
                modelClass: Announcement,
                join: {
                    from: "rules.announcementId",
                    to: "announcements.id"
                }
            }
        }
    }
}

module.exports = Rule