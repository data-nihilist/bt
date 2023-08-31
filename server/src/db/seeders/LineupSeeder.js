import { Show, Artist, Lineup } from "../../models/index.js"

class LineupSeeder {
    static async seed() {

        const ffyl1 = await Show.query().findById(1)
        const ffyl2 = await Show.query().findById(2)
        const ffyl3 = await Show.query().findById(3)
        // no artists for this one. Just add everything from previous two that the host booked.
        const bingChat = await Show.query().findById(4)
        const discoKinaAP = await Show.query().findById(5)
        const coreOfArmor = await Show.query().findById(6)
        const saveThePeople = await Show.query().findById(8)
        const damn = await Show.query().findById(9)
        const coders = await Show.query().findById(10)
        const nuit = await Show.query().findById(15)
        const enRouge = await Show.query().findById(16)
        const desRayons = await Show.query().findById(17)
        const peachFest = await Show.query().findById(18)
        const peachFest2 = await Show.query().findById(19)
        // peaches again for the lolz
        const str1 = await Show.query().findById(12)
        // nothing planned, using previous 3 lineups
        const str2 = await Show.query().findById(13)
        const str3 = await Show.query().findById(14)

        const warzone = await Artist.query().findById(1)
        const halfLife = await Artist.query().findById(3)
        const barbedWireDolls = await Artist.query().findById(7)
        const blackFlag = await Artist.query().findById(5)
        const bikiniKill = await Artist.query().findById(14)
        const mollyMcguire = await Artist.query().findById(24)
        const americanConflict = await Artist.query().findById(8)
        const atomicMissiles = await Artist.query().findById(13)
        const conflictResolution = await Artist.query().findById(15)
        const subverts = await Artist.query().findById(31)
        const rkl = await Artist.query().findById(28)
        const artlessless = await Artist.query().findById(12)
        const nofx = await Artist.query().findById(25)
        const paranoia = await Artist.query().findById(26)
        const trapapoodle = await Artist.query().findById(32)
        const sonicYouth = await Artist.query().findById(30)
        const fireHose = await Artist.query().findById(18)
        const kendrick = await Artist.query().findById(22)
        const alexG = await Artist.query().findById(11)
        const hatchie = await Artist.query().findById(20)
        const alcest = await Artist.query().findById(10)
        const wimp = await Artist.query().findById(33)
        const daftPunk = await Artist.query().findById(16)
        const peaches = await Artist.query().findById(27)
        const adolescents = await Artist.query().findById(9)
        const smashFashion = await Artist.query().findById(29)
        const metaknight = await Artist.query().findById(23)

        const lineups = [
            {
                showId: ffyl1.id,
                artistId: warzone.id
            },
            {
                showId: ffyl1.id,
                artistId: halfLife.id
            },
            {
                showId: ffyl1.id,
                artistId: barbedWireDolls.id
            },
            {
                showId: ffyl2.id,
                artistId: blackFlag.id
            },
            {
                showId: ffyl3.id,
                artistId: warzone.id
            },
            {
                showId: ffyl3.id,
                artistId: halfLife.id
            },
            {
                showId: ffyl3.id,
                artistId: barbedWireDolls.id
            },
            {
                showId: ffyl3.id,
                artistId: blackFlag.id
            },
            {
                showId: bingChat.id,
                artistId: bikiniKill.id
            },
            {
                showId: bingChat.id,
                artistId: mollyMcguire.id
            },
            {
                showId: discoKinaAP.id,
                artistId: americanConflict.id
            },
            {
                showId: discoKinaAP.id,
                artistId: atomicMissiles.id
            },
            {
                showId: discoKinaAP.id,
                artistId: conflictResolution.id
            },
            {
                showId: discoKinaAP.id,
                artistId: subverts.id
            },
            {
                showId: coreOfArmor.id,
                artistId: rkl.id
            },
            {
                showId: coreOfArmor.id,
                artistId: artlessless.id
            },
            {
                showId: coreOfArmor.id,
                artistId: nofx.id
            },
            {
                showId: coreOfArmor.id,
                artistId: paranoia.id
            },
            {
                showId: coreOfArmor.id,
                artistId: trapapoodle.id
            },
            {
                showId: saveThePeople.id,
                artistId: sonicYouth.id
            },
            {
                showId: saveThePeople.id,
                artistId: fireHose.id
            },
            {
                showId: damn.id,
                artistId: kendrick.id
            },
            {
                showId: coders.id,
                artistId: alexG.id
            },
            {
                showId: coders.id,
                artistId: hatchie.id
            },
            {
                showId: nuit.id,
                artistId: alcest.id
            },
            {
                showId: enRouge.id,
                artistId: wimp.id
            },
            {
                showId: desRayons.id,
                artistId: daftPunk.id
            },
            {
                showId: peachFest.id,
                artistId: peaches.id
            },
            {
                showId: peachFest2.id,
                artistId: peaches.id
            },
            {
                showId: str1.id,
                artistId: wimp.id
            },
            {
                showId: str1.id,
                artistId: daftPunk.id
            },
            {
                showId: str1.id,
                artistId: peaches.id
            },
            {
                showId: str2.id,
                artistId: adolescents.id
            },
            {
                showId: str2.id,
                artistId: smashFashion.id
            },
            {
                showId: str3.id,
                artistId: metaknight.id
            }
        ]

        for (const singleLineup of lineups) {
            const currentLineup = await Lineup.query().findOne({ showId: singleLineup.showId }&&{ artistId: singleLineup.artistId })
            if(!currentLineup) {
                await Lineup.query().insert(singleLineup)
            }
        }
    }
}

export default LineupSeeder