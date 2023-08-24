/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("vibes", (table) => {
        table.bigIncrements("id")
        table.bigInteger("showId")
            .notNullable()
            .unsigned()
            .index()
            .references("shows.id")
        table.bigInteger("trackId")
            .notNullable()
            .unsigned()
            .index()
            .references("tracks.id")
        table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
        table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("vibes")
}
