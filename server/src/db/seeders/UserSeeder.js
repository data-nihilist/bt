import { User } from "../../models/index.js"

class UserSeeder {
    static async seed() {
        const users = [
            {
                username: "matty",
                email: "matty@matty.com",
                password: "matty",
            },
            {
                username: "james",
                email: "james@james.com",
                password: "james",
            },
            {
                username: "charlie",
                email: "charlie@charlie.com",
                password: "charlie",
            },
            {
                username: "jesse",
                email: "jesse@jesse.com",
                password: "jesse",
            },
            {
                username: "pad",
                email: "pad@pad.com",
                password: "pad",
            },
            {
                username: "zank",
                email: "zank@zank.com",
                password: "zank",
            },
            {
                username: "garrett",
                email: "garrett@garrett.com",
                password: "garrett",
            },
            {
                username: "gavin",
                email: "gavin@gavin.com",
                password: "gavin",
            },
            {
                username: "bhumi",
                email: "bhumi@bhumi.com",
                password: "bhumi",
            },
            {
                username: "sindhu",
                email: "sindhu@sindhu.com",
                password: "sindhu",
            },
            {
                username: "joey",
                email: "joey@joey.com",
                password: "joey",
            },
            {
                username: "dan",
                email: "dan@dan.com",
                password: "dan",
            },
            {
                username: "brian",
                email: "brian@brian.com",
                password: "brian",
            },
            {
                username: "lilly",
                email: "lilly@lilly.com",
                password: "lilly",
            },
            {
                username: "eduardo",
                email: "eduardo@eduardo.com",
                password: "eduardo",
            },
            {
                username: "nick",
                email: "nick@nick.com",
                password: "nick",
            },
            {
                username: "kerrin",
                email: "kerrin@kerrin.com",
                password: "kerrin",
            },
            {
                username: "nader",
                email: "nader@nader.com",
                password: "nader",
            },
            {
                username: "martin",
                email: "martin@martin.com",
                password: "martin",
            },
            {
                username: "dan",
                email: "dan@dan.com",
                password: "dan",
            },
            {
                username: "evan",
                email: "evan@evan.com",
                password: "evan"
            },
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