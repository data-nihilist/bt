/* eslint-disable import/no-extraneous-dependencies */
const Bcrypt = require("bcrypt");
const unique = require("objection-unique");
const Model = require("./Model");

const saltRounds = 10;

const uniqueFunc = unique({
  fields: ["email", "username"],
  identifiers: ["id"],
});

class User extends uniqueFunc(Model) {
  static get tableName() {
    return "users";
  }

  set password(newPassword) {
    this.cryptedPassword = Bcrypt.hashSync(newPassword, saltRounds);
  }

  authenticate(password) {
    return Bcrypt.compareSync(password, this.cryptedPassword);
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["email", "username"],
      properties: {
        email: { type: "string", pattern: "^\\S+@\\S+\\.\\S+$" },
        cryptedPassword: { type: "string" },
        username: { type: "string", minLength: 1 },
      },
    };
  }

  $formatJson(json) {
    const serializedJson = super.$formatJson(json);

    if (serializedJson.cryptedPassword) {
      delete serializedJson.cryptedPassword;
    }

    return serializedJson;
  }

  static get relationMappings() {
    const { Venue, Show, Track, Artist } = require("./index.js")
    return {
      venues: {
        relation: Model.HasManyRelation,
        modelClass: Venue,
        join: {
          from: "users.id",
          to: "venues.hostId"
        }
      },
      shows: {
        relation: Model.HasManyRelation,
        modelClass: Show,
        join: {
          from: "users.id",
          to: "shows.hostId"
        }
      },
      tracks: {
        relation: Model.HasManyRelation,
        modelClass: Track,
        join: {
          from: "users.id",
          to: "tracks.userId"
        }
      },
      artists: {
        relation: Model.HasManyRelation,
        modelClass: Artist,
        join: {
          from: "users.id",
          to: "artists.userId"
        }
      }
    }
  }
}

module.exports = User;
