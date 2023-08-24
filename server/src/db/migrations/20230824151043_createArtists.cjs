/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("artists", (table) => {
        table.bigIncrements("id")
        table.string("name").notNullable()
        table.string("genre").notNullable()
        table.string("originCity").notNullable()
        table.string("description").notNullable()
        table.boolean("touring").defaultTo(false)
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
    return knex.schema.dropTableIfExists("artists")
}
