import { User, Venue, Show } from "../../models/index.js"

class ShowSeeder {
    static async seed() {

        const matty = await User.query().findOne({ username: "matty" })
        const jesse = await User.query().findOne({ username: "jesse" })
        const charlie = await User.query().findOne({ username: "charlie" })
        const pad = await User.query().findOne({ username: "pad" })
        const james = await User.query().findOne({ username: "james" })
        const zank = await User.query().findOne({ username: "zank" })
        const garrett = await User.query().findOne({ username: "garrett" })

        const sickoPitt = await Venue.query().findOne({ name: "Sicko Pitt" })
        const anteChamber = await Venue.query().findOne({ name: "Antediluvian Penetralia Chamber"})
        const chaiLatte = await Venue.query().findOne({ name: "Chaz's Chai Latte" })
        const paddys = await Venue.query().findOne({ name: "Paddy's Palace" })
        const zeldas = await Venue.query().findOne({ name: "Zelda's Castle" })
        const peach = await Venue.query().findOne({ name: "The Peach" })
        const metas = await Venue.query().findOne({ name: "MetaKnight's Chasm" })

        const shows = [
            {
                title: "FIGHT FOR YOUR LIFE: VOL 1",
                date: "9/25/2023",
                doors: "8pm",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/ffylvol1.webp",
                venueId: sickoPitt.id,
                hostId: matty.id
            },
            {
                title: "FIGHT FOR YOUR LIFE: VOL 2",
                date: "10/02/2023",
                doors: "8pm",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/ffylvol2.webp",
                venueId: sickoPitt.id,
                hostId: matty.id
            },
            {
                title: "FIGHT FOR YOUR LIFE: VOL 3",
                date: "10/09/2023",
                doors: "10pm",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/ffylvol3.webp",
                venueId: sickoPitt.id,
                hostId: matty.id
            },
            {
                title: "Bing Chat Discussion Forum",
                date: "10/11/2023",
                doors: "7pm",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/bingChat.jpeg",
                venueId: anteChamber.id,
                hostId: jesse.id
            },
            {
                title: "Disco-Kina AfterParty",
                date: "11/14/2023",
                doors: "11pm",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/discoKina.jpeg",
                venueId: anteChamber.id,
                hostId: jesse.id
            },
            {
                title: "CORE of ARMOR",
                date: "9/20/2023",
                doors: "8pm",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/coreOfArmor.jpeg",
                venueId: chaiLatte.id,
                hostId: charlie.id
            },
            {
                title: "Sean's 30th Birthday Bash!!!",
                date: "9/27/2023",
                doors: "10pm",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/seansBday.jpeg",
                venueId: chaiLatte.id,
                hostId: charlie.id
            },
            {
                title: "Save The People",
                date: "9/5/2023",
                doors: "8pm",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/saveThePeople.jpeg",
                venueId: paddys.id,
                hostId: pad.id
            },
            {
                title: "DAMN.",
                date: "10/8/2023",
                doors: "9pm",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/DAMN.jpeg",
                venueId: paddys.id,
                hostId: pad.id
            },
            {
                title: "Coders Gonna Code",
                date: "10/15/2023",
                doors: "7pm",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/codersGonnaCode.jpeg",
                venueId: paddys.id,
                hostId: pad.id
            },
            {
                title: "'It's Hiiiim!' A Celebration",
                date: "8/30/2023",
                doors: "9pm",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/itshim.webp",
                venueId: metas.id,
                hostId: garrett.id
            },
            {
                title: "Smash Tourney (Live): Round 1 ---FIGHT!",
                date: "8/30/2023",
                doors: "9pm",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/smashbrosround1.jpeg",
                venueId: metas.id,
                hostId: garrett.id
            },
            {
                title: "Smash Tourney (Live): Round 2 ---FIGHT!",
                date: "8/30/2023",
                doors: "9pm",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/smashBrosRound2.jpeg",
                venueId: metas.id,
                hostId: garrett.id
            },
            {
                title: "Smash Tourney (Live): Round 3 ---FINAL FIGHT!",
                date: "8/30/2023",
                doors: "9pm",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/smashBrosRound3.jpeg",
                venueId: metas.id,
                hostId: garrett.id
            },
            {
                title: "Nuit Empoisonnée",
                date: "9/5/2023",
                doors: "6pm",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/nuit.jpeg",
                venueId: zeldas.id,
                hostId: james.id
            },
            {
                title: "En Rouge, Mes Frères!",
                date: "9/6/2023",
                doors: "12pm",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/enRouge.jpeg",
                venueId: zeldas.id,
                hostId: james.id
            },
            {
                title: "Des Rayons de Soleil Magiques Pour Chasser les Démons",
                date: "9/7/2023",
                doors: "5am",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/desRayons.jpeg",
                venueId: zeldas.id,
                hostId: james.id
            },
            {
                title: "Peach Fest: Leftover Peaches!",
                date: "10/1/2023",
                doors: "8pm",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/peaches1.jpeg",
                venueId: peach.id,
                hostId: zank.id
            },
            {
                title: "Peach Fest: We Found MORE Peaches!!",
                date: "10/5/2023",
                doors: "6pm",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/wefoundPeaches.jpeg",
                venueId: peach.id,
                hostId: zank.id
            },
            {
                title: "Gudsforladt Record Release",
                date: "10/31/2023",
                doors: "8pm",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/gudsPromo.jpeg",
                venueId: sickoPitt.id,
                hostId: matty.id
            }
        ]
        
        for (const singleShow of shows) {
            const currentShow = await Show.query().findOne({ title: singleShow.title })
            if(!currentShow) {
                await Show.query().insert(singleShow)
            }
        }
    }
}

export default ShowSeeder