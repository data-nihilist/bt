import { User } from "../../models/index.js"

class UserSeeder {
    static async seed() {
        const users = [
            {
                username: "admin29",
                email: "admin29@admin29.com",
                password: "admin29",
            }
        ]

        for (const singleUser of users) {
            const currentUser = await User.query().findOne({ username: singleUser.username })
            if(!currentUser) {
                await User.query().insert(singleUser)
            }
        }
    }
}

export default UserSeeder