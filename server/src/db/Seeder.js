/* eslint-disable no-console */
import { connection } from "../boot.js"
import UserSeeder from "./seeders/UserSeeder.js"
import VenueSeeder from "./seeders/VenueSeeder.js"
import ShowSeeder from "./seeders/ShowSeeder.js"

class Seeder {
  static async seed() {
    // include individual seed commands here
    console.log("logging in users...")
    await UserSeeder.seed()

    console.log("...registering venues...")
    await VenueSeeder.seed()

    console.log("haning up flyers..")
    await ShowSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder