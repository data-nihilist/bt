import { User, Artist } from "../../models/index.js"

class ArtistSeeder {
    static async seed() {

        const matty = await User.query().findOne({ username: "matty" })
        const jesse = await User.query().findOne({ username: "jesse" })
        const charlie = await User.query().findOne({ username: "charlie" })
        const pad = await User.query().findOne({ username: "pad" })
        const james = await User.query().findOne({ username: "james" })
        const zank = await User.query().findOne({ username: "zank" })
        const garrett = await User.query().findOne({ username: "garrett" })

        const artists = [
            {
                name: "Warzone",
                genre: "Punk",
                originCity: "Brooklyn, NY",
                description: "An American hardcore punk band formed on the Lower East Side of Manhattan in 1983. The band helped develop the New York hardcore sound, the hardcore skinhead style and the youth crew subgenre. -Wikipedia",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/warzoneMatty.jpeg",
                userId: matty.id
            },
            {
                name: "Lamp of Murmuur",
                genre: "Black Metal",
                originCity: "Los Angeles, CA",
                description: "Multi-faceted group of musicians band together to create cult antifascist metal. Striking the beast from within the very heart of the empire.",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/lampofmurmuurMatty.jpeg",
                userId: matty.id
            },
            {
                name: "Half-Life",
                genre: "Punk",
                originCity: "Pittsburgh, PA",
                description: "Little is known of this group, but they're music rules and I think you'll love their vibe!",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/halfLifeMatty.jpeg",
                userId: matty.id
            },
            {
                name: "Gudsforladt",
                genre: "Black Metal",
                originCity: "Boston, MA",
                description: "This group of musicians formed during their time in Salem, MA while attending Salem State University and their bonds have never been stronger. Nothing but power from this group of incredible musicians.",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/gudsforladtMatty.webp",
                userId: matty.id
            },
            {
                name: "Black Flag",
                genre: "Punk Rock",
                originCity: "Hermosa Beach, California",
                description: "Widely considered to be one of the first hardcore punk bands, as well as one of the pioneers of post-hardcore. -Wikipedia",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/blackFlagMatty.jpeg",
                userId: matty.id
            },
            {
                name: "Black Braid",
                genre: "Black Metal",
                originCity: "Los Angeles, CA",
                description: "An Indigenous Black Metal solo project hailing from the Adirondack Wilderness. This is a must follow band. They're incredible!",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/blackbraidMatty.jpeg",
                userId: matty.id
            },
            {
                name: "Barbed Wire Dolls",
                genre: "Grunge Punk",
                originCity: "Crete, Greece",
                description: "The band has been described as 'essentially a fiery, raging punk band with hints of ‘80s metal and thrash flourishes' and have been compared to bands such as L7 -Wikipedia. Honestly a slept on band that you've definitely already heard!",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/barbedWireDollsMatty.jpeg",
                userId: matty.id
            },
            {
                name: "American Conflict",
                genre: "Anarcho-punk/Hardcore-punk",
                originCity: "Eltham, London, England",
                description: "Conflict is an English anarcho-punk band originally based in Eltham in South London.",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/americanconflictJesse.webp",
                userId: jesse.id
            },
            {
                name: "Adolescents",
                genre: "Punk Rock",
                originCity: "Fullerton, CA",
                description: "Part of the hardcore punk movement in southern California in the early 1980s, they were one of the main punk acts to emerge from Orange County, along with their peers in Agent Orange and Social Distortion.",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/adolescentsGarrett.webp",
                userId: garrett.id
            },
            {
                name: "Alcest",
                genre: "Post Black Metal",
                originCity: "Bagnols-sur-Ceze",
                description: "It began in 2000 as a black metal solo project by Neige, then became a trio, but members Aegnor and Argoth left the band following the 2001 release of their first demo, leaving Neige as the sole member.",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/AlcestJames.jpeg",
                userId: james.id
            },
            {
                name: "Alex G",
                genre: "Indie Rock/Indie Folk",
                originCity: "Havertown, Pennsylvania",
                description: "The definition of GOOD indie music has arrived.",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/alexgPad.webp",
                userId: pad.id
            },
            {
                name: "Artlessless",
                genre: "Punk",
                originCity: "Michigan",
                description: "American punk rock band from Michigan formed in 1980 by Mykel Board. ",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/artlesslessCharlie.jpeg",
                userId: charlie.id
            },
            {
                name: "Atomic Missles",
                genre: "Punk",
                originCity: "Elizabeth, NJ",
                description: "Pop punk band from NJ, then Brooklyn, NY and then Los Angeles, CA. Active from approximately 1999-2005.",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/atomicMisslesJesse.jpeg",
                userId: jesse.id
            },
            {
                name: "Bikini Kill",
                genre: "Punk Rock",
                originCity: "Olympia, Washington",
                description: "American punk rock band formed in Olympia, Washington, in October 1990.The band pioneered the riot grrrl movement, with feminist lyrics and fiery performances.",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/bikikiKillJesse.webp",
                userId: jesse.id
            },
            {
                name: "Conflict Resolution",
                genre: "Hardcore Punk",
                originCity: "Pheonix, AZ",
                description: "Charged old school hardcore punk Fast East/West coast style punk with thrash metal influences and breakdowns. Lyrical subject matter is primarily focused on the current state of the United States. For fans of 80's punk and thrash metal. -Bandcamp",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/conflictResolutionJesse.webp",
                userId: jesse.id
            },
            {
                name: "Daft Punk",
                genre: "French House/Electronic",
                originCity: "Paris, France",
                description: "Daft Punk were a French electronic music duo formed in 1993 in Paris by Thomas Bangalter and Guy-Manuel de Homem-Christo. Combining elements of house music with funk, disco, techno, rock and synth-pop. -Wikipedia",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/daftPunkJames.jpeg",
                userId: james.id
            },
            {
                name: "Discharge",
                genre: "Hardcore Punk",
                originCity: "Stoke-on-Trent, England",
                description: "The musical sub-genre of D-beat is named after Discharge and the band's distinctive drumbeat. -Wikipedia",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/discharge.webp",
                userId: garrett.id
            },
            {
                name: "Fire Hose",
                genre: "Alt-Rock/Post-Punk",
                originCity: "San Pedro, California",
                description: "(stylized as fIREHOSE) was an American alternative rock band consisting of Mike Watt (bass, vocals), Ed Crawford (guitar, vocals), and George Hurley (drums). They were initially active from 1986 to 1994, and briefly reunited in 2012 -Wikipedia",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/fireHostPad.webp",
                userId: pad.id
            },
            {
                name: "Girl Pool",
                genre: "Indie Rock",
                originCity: "Los Angeles, CA",
                description: "Little is known of this group, but they're music rules and I think you'll love their vibe!",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/girlPoolJames.jpeg",
                userId: james.id
            },
            {
                name: "Hatchie",
                genre: "Dream-Pop/Shoegaze",
                originCity: "Brisbane, Queensland, Australia",
                description: "A cosmic concoction of dream-pop and shoegaze.",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/hatchiePad.jpeg",
                userId: pad.id
            },
            {
                name: "Home Sick",
                genre: "Alt-Rock/Post-Punk Revival",
                originCity: "Dokkum, Netherlands",
                description: "Little is known of this group, but they're music rules and I think you'll love their vibe!",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/homesickJesse.jpeg",
                userId: jesse.id
            },
            {
                name: "Kendrick Lamar",
                genre: "Hip hop/Progressive Rap",
                originCity: "Compton, California",
                description: "Lamar's musical style is known to be 'anti-flamboyant, interior and complex.' His work is generally categorized as progressive rap due to his contributions of broadening the genre's audience to reach mainstream listeners. -Wikipedia",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/kendrickPad.jpeg",
                userId: pad.id
            },
            {
                name: "MetaKnight",
                genre: "Legendary Smash Bros. Character",
                originCity: "...n/a",
                description: "'It's Him!!!!' -Garrett",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/metaknightGarrett.png",
                userId: garrett.id
            },
            {
                name: "Molly McCuire",
                genre: "Hard Rock",
                originCity: "Kansas City, Missouri",
                description: "A hard rock band that released a handful of 7''s on Caulfield and HitIt. They then released the full length 'Sisters Of...' in 1994 on Chicago based HitIt Recordings. Ken Andrews produced 'Lime' in 96 On Epic Records.",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/mollymcguireJesse.webp",
                userId: jesse.id
            },
            {
                name: "NOFX",
                genre: "Punk Rock/Hardcore Punk",
                originCity: "Los Angeles, California",
                description: "Apparently these guys are legends.",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/nofxCharlie.jpeg",
                userId: charlie.id
            },
            {
                name: "Paranoia",
                genre: "Gotch Rock",
                originCity: "Stoke-on-Trent, England",
                description: "Formed from the remnants of 'CIVIL DEFENSE'. -Discogs",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/paranoiaCharlie.jpeg",
                userId: charlie.id
            },
            {
                name: "Peaches",
                genre: "Electro/Clash",
                originCity: "Toronto, Ontario, Canada",
                description: "Gender identity is one theme of Peaches' music, often playing with traditional notions of gender roles representation. Her lyrics and live shows consciously blur the distinction between male and female. -Wikipedia",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/peachJames.jpeg",
                userId: james.id
            },
            {
                name: "RKL (Rich Kids on LSD)",
                genre: "Hardcore Punk/Skate Punk",
                originCity: "Montecito, California",
                description: "From West Coast hardcore to a mix of hardcore with rock and metal elements.",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/rklCharlie.jpeg",
                userId: charlie.id
            },
            {
                name: "Smash Fashion",
                genre: "Rock'n'Roll with a twist (?)",
                originCity: "Los Angeles, CA",
                description: "Meh.",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/smashFashionGarrett.jpeg",
                userId: garrett.id
            },            {
                name: "Sonic Youth",
                genre: "Alt Rock/Post-Punk",
                originCity: "New York, NY",
                description: "Sonic Youth emerged from the experimental no wave art and music scene in New York before evolving into a more conventional rock band and becoming a prominent member of the American noise rock scene. -Wikipedia",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/sonicYouthPad.jpeg",
                userId: pad.id
            },            {
                name: "The Subverts",
                genre: "Old School Punk",
                originCity: "Dekalb",
                description: "The Subverts were one of the earlier Chicago punk bands around, forming in 1979.",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/subvertsJesse.jpeg",
                userId: jesse.id
            },            {
                name: "Trap A Poodle",
                genre: "Punk?",
                originCity: "Sonoma County, California",
                description: "Little is known about this group. Come support them!",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/trapapoodleCharlie.jpeg",
                userId: charlie.id
            },            {
                name: "WIMP",
                genre: "Hardcore Punk",
                originCity: "Boston, MA",
                description: "Three of the best musicians I've ever had the chance to play a stage with. Love this band and their messages for social change and questioning the state of authority in the 21st century.",
                image: "https://breakable-toy-bucket-production.s3.amazonaws.com/wimpJames.jpeg",
                userId: james.id
            },
        ]

        for (const singleArtist of artists) {
            const currentArtist = await Artist.query().findOne({ name: singleArtist.name})
            if(!currentArtist) {
                await Artist.query().insert(singleArtist)
            }
        }
    }
}

export default ArtistSeeder