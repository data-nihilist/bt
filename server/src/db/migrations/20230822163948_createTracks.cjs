/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("tracks", (table) => {
        table.bigIncrements("id")
        table.string("artist").notNullable()
        table.string("title").notNullable()
        table.string("uri").notNullable()
        table.string("albumUrl").notNullable()
        table.bigInteger("userId")
            .notNullable()
            .unsigned()
            .index()
            .references("users.id")
        table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
        table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("tracks")
}
