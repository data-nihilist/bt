/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.table("shows", (table) => {
        table.string("doors").notNullable().unsigned()
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.table("shows", (table) => {
        table.dropColumn("doors")
    })
}
