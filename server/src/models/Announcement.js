const Model = require("./Model.js")

class Announcement extends Model {
    static get tableName() {
        return "announcements"
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: [ "update" ],
            properties: {
                update: { type: "string", minLength: 1 },
            }
        }
    }

    static get relationMappings() {
        const { Venue, Rule } = require("./index.js")
        return {
            venues: {
                relation: Model.ManyToManyRelation,
                modelClass: Venue,
                join: {
                    from: "announcements.id",
                    through: {
                        from: "rules.announcementId",
                        to: "rules.venueId"
                    },
                    to: "venues.id"
                }
            },
            rules: {
                relation: Model.BelongsToOneRelation,
                modelClass: Rule,
                join: {
                    from: "announcements.id",
                    to: "rules.announcementId"
                }
            }
        }
    }
}

module.exports = Announcement