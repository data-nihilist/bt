import { Show, Track, Vibe } from "../../models/index.js"

class VibeSeeder {
    static async seed() {

        const ffyl1 = await Show.query().findById(1)
        const ffyl2 = await Show.query().findById(2)
        const ffyl3 = await Show.query().findById(3)
        const bingChat = await Show.query().findById(4)
        const discoKinaAP = await Show.query().findById(5)
        const coreOfArmor = await Show.query().findById(6)
        const seanbday = await Show.query().findById(7)
        const saveThePeople = await Show.query().findById(8)
        const damn = await Show.query().findById(9)
        const coders = await Show.query().findById(10)
        const nuit = await Show.query().findById(15)
        const enRouge = await Show.query().findById(16)
        const desRayons = await Show.query().findById(17)
        const peachFest = await Show.query().findById(18)
        const peachFest2 = await Show.query().findById(19)
        const str1 = await Show.query().findById(12)
        const str2 = await Show.query().findById(13)
        const str3 = await Show.query().findById(14)

        const warzone1 = await Track.query().findById(1)
        const girlpool1 = await Track.query().findById(2)
        const discharge1 = await Track.query().findById(3)
        const discharge2 = await Track.query().findById(4)
        const stevenmanson = await Track.query().findById(5)
        const blackflag1 = await Track.query().findById(6)
        const blackflag2 = await Track.query().findById(7)
        const blackflag3 = await Track.query().findById(8)
        const blackflag4 = await Track.query().findById(9)
        const afternoongentlemen1 = await Track.query().findById(10)
        const afternoongentlemen2 = await Track.query().findById(11)
        const theclash1 = await Track.query().findById(12)
        const theclash2 = await Track.query().findById(13)
        const theclash3 = await Track.query().findById(14)
        const anthrax = await Track.query().findById(15)
        const discharge3 = await Track.query().findById(16)
        const soad1 = await Track.query().findById(17)
        const soad2 = await Track.query().findById(18)
        const soad3 = await Track.query().findById(19)
        const soad4 = await Track.query().findById(20)
        const soad5 = await Track.query().findById(21)
        const soad6 = await Track.query().findById(22)
        const soad7 = await Track.query().findById(23)
        const soad8 = await Track.query().findById(24)
        const lamp1 = await Track.query().findById(25)
        const lamp2 = await Track.query().findById(26)
        const lamp3 = await Track.query().findById(27)
        const guds1 = await Track.query().findById(28)
        const guds2 = await Track.query().findById(29)
        const braid1 = await Track.query().findById(30)
        const braid2 = await Track.query().findById(31)
        const braid3 = await Track.query().findById(32)
        const bikini1 = await Track.query().findById(33)
        const bikini2 = await Track.query().findById(34)
        const bikini3 = await Track.query().findById(35)
        const bikini4 = await Track.query().findById(36)
        const bikini5 = await Track.query().findById(37)
        const bikini6 = await Track.query().findById(38)
        const bikini7 = await Track.query().findById(39)
        const bikini8 = await Track.query().findById(40)
        const bikini9 = await Track.query().findById(41)
        const molly1 = await Track.query().findById(42)
        const molly2 = await Track.query().findById(43)
        const molly3 = await Track.query().findById(44)
        const subverts1 = await Track.query().findById(45)
        const subverts2 = await Track.query().findById(46)
        const subverts3 = await Track.query().findById(47)
        const subverts4 = await Track.query().findById(48)
        const lastpriority1 = await Track.query().findById(49)
        const lastpriority2 = await Track.query().findById(50)
        const lastpriority3 = await Track.query().findById(51)
        const nofx1 = await Track.query().findById(52)
        const nofx2 = await Track.query().findById(53)
        const nofx3 = await Track.query().findById(54)
        const nofx4 = await Track.query().findById(55)
        const nofx5 = await Track.query().findById(56)
        const nofx6 = await Track.query().findById(57)
        const nofx7 = await Track.query().findById(58)
        const nofx8 = await Track.query().findById(59)
        const rkl1 = await Track.query().findById(60)
        const rkl2 = await Track.query().findById(61)
        const rkl3 = await Track.query().findById(62)
        const rkl4 = await Track.query().findById(63)
        const rkl5 = await Track.query().findById(64)
        const rkl6 = await Track.query().findById(65)
        const stevie = await Track.query().findById(66)
        const sonic1 = await Track.query().findById(67)
        const sonic2 = await Track.query().findById(68)
        const sonic3 = await Track.query().findById(69)
        const sonic4 = await Track.query().findById(70)
        const sonic5 = await Track.query().findById(71)
        const sonic6 = await Track.query().findById(72)
        const sonic7 = await Track.query().findById(73)
        const sonic8 = await Track.query().findById(74)
        const firehose1 = await Track.query().findById(75)
        const firehose2 = await Track.query().findById(76)
        const firehose3 = await Track.query().findById(77)
        const firehose4 = await Track.query().findById(78)
        const alex1 = await Track.query().findById(79)
        const alex2 = await Track.query().findById(80)
        const alex3 = await Track.query().findById(81)
        const alex4 = await Track.query().findById(82)
        const alex5 = await Track.query().findById(83)
        const alex6 = await Track.query().findById(84)
        const alex7 = await Track.query().findById(85)
        const alex8 = await Track.query().findById(86)
        const alex9 = await Track.query().findById(87)
        const alex10 = await Track.query().findById(88)
        const sexpistols = await Track.query().findById(89)
        const kendrick1 = await Track.query().findById(90)
        const kendrick2 = await Track.query().findById(91)
        const kendrick3 = await Track.query().findById(92)
        const kendrick4 = await Track.query().findById(93)
        const thug1 = await Track.query().findById(94)
        const thug2 = await Track.query().findById(95)
        const thug3 = await Track.query().findById(96)
        const yg1 = await Track.query().findById(97)
        const yg2 = await Track.query().findById(98)
        const yg3 = await Track.query().findById(99)
        const yg4 = await Track.query().findById(100)
        const alex11 = await Track.query().findById(101)
        const alex12 = await Track.query().findById(102)
        const alex13 = await Track.query().findById(103)
        const alex14 = await Track.query().findById(104)
        const alex15 = await Track.query().findById(105)
        const alex16 = await Track.query().findById(106)
        const alex17 = await Track.query().findById(107)
        const alex18 = await Track.query().findById(108)
        const daft1 = await Track.query().findById(109)
        const daft2 = await Track.query().findById(110)
        const daft3 = await Track.query().findById(111)
        const daft4 = await Track.query().findById(112)
        const daft5 = await Track.query().findById(113)
        const daft6 = await Track.query().findById(114)
        const justice1 = await Track.query().findById(115)
        const justice2 = await Track.query().findById(116)
        const justice3 = await Track.query().findById(117)
        const justice4 = await Track.query().findById(118)
        const potus = await Track.query().findById(119)
        const yn = await Track.query().findById(120)
        const peachpit = await Track.query().findById(121)
        const tyler = await Track.query().findById(122)
        const seven1 = await Track.query().findById(123)
        const seven2 = await Track.query().findById(124)
        const seven3 = await Track.query().findById(125)
        const seven4 = await Track.query().findById(126)
        const seven5 = await Track.query().findById(127)
        const nestalgica = await Track.query().findById(128)
        const arcadeplayer = await Track.query().findById(129)
        const vgr = await Track.query().findById(130)
        const adol1 = await Track.query().findById(131)
        const adol2 = await Track.query().findById(132)
        const adol3 = await Track.query().findById(133)
        const adol4 = await Track.query().findById(134)

        const vibes = [
            {
                showId: ffyl1.id,
                trackId: warzone1.id
            },
            {
                showId: ffyl1.id,
                trackId: discharge1.id
            },
            {
                showId: ffyl1.id,
                trackId: discharge2.id
            },
            {
                showId: ffyl1.id,
                trackId: stevenmanson.id
            },
            {
                showId: ffyl2.id,
                trackId: warzone1.id
            },
            {
                showId: ffyl2.id,
                trackId: discharge2.id
            },
            {
                showId: ffyl2.id,
                trackId: afternoongentlemen1.id
            },
            {
                showId: ffyl2.id,
                trackId: blackflag1.id
            },
            {
                showId: ffyl3.id,
                trackId: warzone1.id
            },
            {
                showId: ffyl3.id,
                trackId: discharge1.id
            },
            {
                showId: ffyl3.id,
                trackId: afternoongentlemen2.id
            },
            {
                showId: ffyl3.id,
                trackId: discharge3.id
            },
            {
                showId: ffyl3.id,
                trackId: afternoongentlemen1.id
            },
            {
                showId: ffyl3.id,
                trackId: blackflag1.id
            },
            {
                showId: ffyl3.id,
                trackId: blackflag2.id
            },
            {
                showId: ffyl3.id,
                trackId: stevenmanson.id
            },
            {
                showId: bingChat.id,
                trackId: molly1.id
            },
            {
                showId: bingChat.id,
                trackId: bikini1.id
            },
            {
                showId: bingChat.id,
                trackId: bikini2.id
            },
            {
                showId: bingChat.id,
                trackId: molly2.id
            },
            {
                showId: bingChat.id,
                trackId: bikini3.id
            },
            {
                showId: bingChat.id,
                trackId: bikini4.id
            },
            {
                showId: bingChat.id,
                trackId: bikini5.id
            },
            {
                showId: bingChat.id,
                trackId: molly3.id
            },
            {
                showId: bingChat.id,
                trackId: bikini6.id
            },
            {
                showId: bingChat.id,
                trackId: soad5.id
            },
            {
                showId: bingChat.id,
                trackId: soad6.id
            },
            {
                showId: bingChat.id,
                trackId: soad7.id
            },
            {
                showId: bingChat.id,
                trackId: soad8.id
            },
            {
                showId: bingChat.id,
                trackId: bikini7.id
            },
            {
                showId: bingChat.id,
                trackId: bikini8.id
            },
            {
                showId: bingChat.id,
                trackId: bikini9.id
            },
            {
                showId: discoKinaAP.id,
                trackId: blackflag4.id
            },
            {
                showId: discoKinaAP.id,
                trackId: subverts1.id
            },
            {
                showId: discoKinaAP.id,
                trackId: subverts2.id
            },
            {
                showId: discoKinaAP.id,
                trackId: subverts3.id
            },
            {
                showId: discoKinaAP.id,
                trackId: subverts4.id
            },
            {
                showId: discoKinaAP.id,
                trackId: anthrax.id
            },
            {
                showId: discoKinaAP.id,
                trackId: theclash1.id
            },
            {
                showId: discoKinaAP.id,
                trackId: lastpriority3.id
            },
            {
                showId: discoKinaAP.id,
                trackId: lastpriority2.id
            },
            {
                showId: discoKinaAP.id,
                trackId: lastpriority1.id
            },
            {
                showId: coreOfArmor.id,
                trackId: rkl1.id
            },
            {
                showId: coreOfArmor.id,
                trackId: rkl2.id
            },
            {
                showId: coreOfArmor.id,
                trackId: rkl3.id
            },
            {
                showId: coreOfArmor.id,
                trackId: rkl4.id
            },
            {
                showId: coreOfArmor.id,
                trackId: rkl5.id
            },
            {
                showId: coreOfArmor.id,
                trackId: rkl6.id
            },
            {
                showId: coreOfArmor.id,
                trackId: seven1.id
            },
            {
                showId: coreOfArmor.id,
                trackId: nofx1.id
            },
            {
                showId: coreOfArmor.id,
                trackId: nofx2.id
            },
            {
                showId: coreOfArmor.id,
                trackId: nofx3.id
            },
            {
                showId: coreOfArmor.id,
                trackId: nofx4.id
            },
            {
                showId: coreOfArmor.id,
                trackId: nofx5.id
            },
            {
                showId: coreOfArmor.id,
                trackId: theclash2.id
            },
            {
                showId: saveThePeople.id,
                trackId: sonic1.id
            },
            {
                showId: saveThePeople.id,
                trackId: sonic2.id
            },
            {
                showId: saveThePeople.id,
                trackId: sonic3.id
            },
            {
                showId: saveThePeople.id,
                trackId: sonic4.id
            },
            {
                showId: saveThePeople.id,
                trackId: sonic5.id
            },
            {
                showId: saveThePeople.id,
                trackId: firehose1.id
            },
            {
                showId: saveThePeople.id,
                trackId: firehose2.id
            },
            {
                showId: saveThePeople.id,
                trackId: sonic6.id
            },
            {
                showId: saveThePeople.id,
                trackId: firehose3.id
            },
            {
                showId: saveThePeople.id,
                trackId: sonic7.id
            },
            {
                showId: saveThePeople.id,
                trackId: firehose4.id
            },
            {
                showId: saveThePeople.id,
                trackId: sonic8.id
            },
            {
                showId: damn.id,
                trackId: kendrick1.id
            },
            {
                showId: damn.id,
                trackId: kendrick2.id
            },
            {
                showId: damn.id,
                trackId: kendrick3.id
            },
            {
                showId: damn.id,
                trackId: kendrick4.id
            },
            {
                showId: damn.id,
                trackId: yg1.id
            },
            {
                showId: damn.id,
                trackId: thug1.id
            },
            {
                showId: damn.id,
                trackId: thug2.id
            },
            {
                showId: damn.id,
                trackId: thug3.id
            },
            {
                showId: damn.id,
                trackId: tyler.id
            },
            {
                showId: damn.id,
                trackId: yn.id
            },
            {
                showId: damn.id,
                trackId: yg2.id
            },
            {
                showId: damn.id,
                trackId: yg3.id
            },
            {
                showId: damn.id,
                trackId: yg4.id
            },
            {
                showId: coders.id,
                trackId: alex1.id
            },
            {
                showId: coders.id,
                trackId: alex2.id
            },
            {
                showId: coders.id,
                trackId: alex3.id
            },
            {
                showId: coders.id,
                trackId: alex4.id
            },
            {
                showId: coders.id,
                trackId: alex5.id
            },
            {
                showId: coders.id,
                trackId: alex6.id
            },
            {
                showId: coders.id,
                trackId: alex7.id
            },
            {
                showId: coders.id,
                trackId: alex8.id
            },
            {
                showId: coders.id,
                trackId: alex9.id
            },
            {
                showId: coders.id,
                trackId: alex10.id
            },
            {
                showId: coders.id,
                trackId: alex11.id
            },
            {
                showId: coders.id,
                trackId: alex12.id
            },
            {
                showId: coders.id,
                trackId: alex13.id
            },
            {
                showId: coders.id,
                trackId: alex14.id
            },
            {
                showId: coders.id,
                trackId: alex15.id
            },
            {
                showId: coders.id,
                trackId: alex16.id
            },
            {
                showId: coders.id,
                trackId: alex17.id
            },
            {
                showId: coders.id,
                trackId: alex18.id
            },
            {
                showId: nuit.id,
                trackId: braid1.id
            },
            {
                showId: nuit.id,
                trackId: braid2.id
            },
            {
                showId: nuit.id,
                trackId: braid3.id
            },
            {
                showId: enRouge.id,
                trackId: guds1.id
            },
            {
                showId: enRouge.id,
                trackId: guds2.id
            },
            {
                showId: enRouge.id,
                trackId: lamp1.id
            },
            {
                showId: enRouge.id,
                trackId: lamp2.id
            },
            {
                showId: enRouge.id,
                trackId: lamp3.id
            },
            {
                showId: enRouge.id,
                trackId: sexpistols.id
            },
            {
                showId: desRayons.id,
                trackId: daft1.id
            },
            {
                showId: desRayons.id,
                trackId: daft2.id
            },
            {
                showId: desRayons.id,
                trackId: daft3.id
            },
            {
                showId: desRayons.id,
                trackId: daft4.id
            },
            {
                showId: desRayons.id,
                trackId: daft5.id
            },
            {
                showId: desRayons.id,
                trackId: daft6.id
            },
            {
                showId: desRayons.id,
                trackId: justice1.id
            },
            {
                showId: desRayons.id,
                trackId: justice2.id
            },
            {
                showId: desRayons.id,
                trackId: justice3.id
            },
            {
                showId: desRayons.id,
                trackId: justice4.id
            },
            {
                showId: peachFest.id,
                trackId: potus.id
            },
            {
                showId: peachFest2.id,
                trackId: girlpool1.id
            },
            {
                showId: peachFest2.id,
                trackId: blackflag3.id
            },
            {
                showId: peachFest2.id,
                trackId: theclash3.id
            },
            {
                showId: str1.id,
                trackId: soad1.id
            },
            {
                showId: str1.id,
                trackId: soad2.id
            },
            {
                showId: str1.id,
                trackId: nofx8.id
            },
            {
                showId: str1.id,
                trackId: nofx7.id
            },
            {
                showId: str1.id,
                trackId: nofx6.id
            },
            {
                showId: str1.id,
                trackId: soad3.id
            },
            {
                showId: str2.id,
                trackId: soad4.id
            },
            {
                showId: str2.id,
                trackId: peachpit.id
            },
            {
                showId: str2.id,
                trackId: daft5.id
            },
            {
                showId: str2.id,
                trackId: adol1.id
            },
            {
                showId: str2.id,
                trackId: adol2.id
            },
            {
                showId: str2.id,
                trackId: adol3.id
            },
            {
                showId: str2.id,
                trackId: adol4.id
            },
            {
                showId: str3.id,
                trackId: nestalgica.id
            },
            {
                showId: str3.id,
                trackId: vgr.id
            },
            {
                showId: str3.id,
                trackId: arcadeplayer.id
            },
            {
                showId: str3.id,
                trackId: seven2.id
            },
            {
                showId: str3.id,
                trackId: seven3.id
            },
            {
                showId: str3.id,
                trackId: seven4.id
            },
            {
                showId: str3.id,
                trackId: seven5.id
            },
            {
                showId: seanbday.id,
                trackId: stevie.id
            },
        ]

        for (const singleVibe of vibes) {
            const currentVibe = await Vibe.query().findOne({ showId: singleVibe.showId }&&{ trackId: singleVibe.trackId })
            if(!currentVibe) {
                await Vibe.query().insert(singleVibe)
            }
        }
    }
}

export default VibeSeeder