/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("shows", (table) => {
        table.bigIncrements("id")
        table.string("title").notNullable()
        table.string("date").notNullable()
        table.bigInteger("venueId")
            .notNullable()
            .unsigned()
            .index()
            .references("venues.id")
            .onDelete('CASCADE')
        table.bigInteger("hostId")
            .notNullable()
            .unsigned()
            .index()
            .references("users.id")
            // .onDelete('CASCADE')
        table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
        table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("shows")
}
