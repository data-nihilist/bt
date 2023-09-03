/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("rules", (table) => {
        table.bigIncrements("id")
        table.bigInteger("venueId")
            .notNullable()
            .unsigned()
            .index()
            .references("venues.id")
            .onDelete("CASCADE")
        table.bigInteger("announcementId")
            .notNullable()
            .unsigned()
            .index()
            .references("announcements.id")
            .onDelete("CASCADE")
        table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
        table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
    
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("rules")
}
