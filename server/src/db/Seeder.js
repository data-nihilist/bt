/* eslint-disable no-console */
import { connection } from "../boot.js"
import UserSeeder from "./seeders/UserSeeder.js"
import VenueSeeder from "./seeders/VenueSeeder.js"
import ShowSeeder from "./seeders/ShowSeeder.js"
import TrackSeeder from "./seeders/TrackSeeder.js"
import ArtistSeeder from "./seeders/ArtistSeeder.js"
import LineupSeeder from "./seeders/LineupSeeder.js"
import VibeSeeder from "./seeders/VibeSeeder.js"

class Seeder {
  static async seed() {
    // include individual seed commands here
    console.log("Logging in users...")
    await UserSeeder.seed()

    console.log("...Registering venues...")
    await VenueSeeder.seed()

    console.log("Hanging up flyers..")
    await ShowSeeder.seed()

    console.log("Let there be music!")
    await TrackSeeder.seed()

    console.log("We need artists...creating artist profiles..")
    await ArtistSeeder.seed()

    console.log("Inviting artists to shows..")
    await LineupSeeder.seed()

    console.log("..setting..the..vibe..!")
    await VibeSeeder.seed()
    
    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder