/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.table("venues", (table) => {
        table.string("image").defaultTo("https://express-file-uploading-part-2-production.s3.amazonaws.com/1691601293862")
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.table("venues", (table) => {
        table.dropColumn("image")
    })
}
