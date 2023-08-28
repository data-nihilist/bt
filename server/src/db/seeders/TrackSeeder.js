import { User, Track } from "../../models/index.js"

class TrackSeeder {
    static async seed() {
        const matty = await User.query().findOne({ username: "matty" })

        const tracks = [
            {
                artist: "Warzone",
                title: "As One",
                uri: "spotify:track:4dexdo7qYptNz8fDYbNRtD",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851df561711b534a7d75584fb75",
                userId: matty.id
            },
            {
                artist: "Girlpool",
                title: "Before the World Was Big",
                uri: "spotify:track:1H0yDK57cwQ51e7vQcRzmR",
                albumUrl: "https://i.scdn.co/image/ab67616d000048518639414d100ab72c7f0057a4",
                userId: matty.id
            },
            {
                artist: "Discharge",
                title: "Protest and Survive",
                uri: "spotify:track:4DtfaYp1DEAQdSsUPy01QH",
                albumUrl: "https://i.scdn.co/image/ab67616d0000485116f3933abcef54f3ee6d3d6f",
                userId: matty.id
            },
            {
                artist: "Discharge",
                title: "Hear Nothing See Nothing Say Nothing",
                uri: "spotify:track:4jTLlwHR9tn7dIFUScOwRi",
                albumUrl: "https://i.scdn.co/image/ab67616d0000485116f3933abcef54f3ee6d3d6f",
                userId: matty.id
            },
            {
                artist: "Steven Mason",
                title: "Barbed Wire Dolls",
                uri: "spotify:track:09sH8Lyg58Y71Cerf9jjMY",
                albumUrl: "https://i.scdn.co/image/ab67616d000048512f0c87ac8679a820b4f6e6d9",
                userId: matty.id
            },
            {
                artist: "Black Flag",
                title: "Nervous Breakdown",
                uri: "spotify:track:3NoOwvxhI2yMYknxqnFUVx",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851a4eecbf28da3bd032e4c9e39",
                userId: matty.id
            },
            {
                artist: "Black Flag",
                title: "My War",
                uri: "spotify:track:4rrbptVnZifk4wC5mvNDPm",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851201df0174850103cee8d1f08",
                userId: matty.id
            },
            {
                artist: "Black Flag",
                title: "Rise Above",
                uri: "spotify:track:4kFfFe38CRVnTsakUTL4E4",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851ba9fff4147e9e1656a5c33e1",
                userId: matty.id
            },
            {
                artist: "Black Flag",
                title: "Wasted",
                uri: "spotify:track:4nrsxlCHeaa8NLrfhCI05b",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851a4eecbf28da3bd032e4c9e39",
                userId: matty.id
            },
            {
                artist: "Afternoon Gentlemen",
                title: "Good Morning Gentlemen",
                uri: "spotify:track:6Z2HfBxVTqgNMbqwBODW0J",
                albumUrl: "https://i.scdn.co/image/ab67616d000048512dbe0754284147e6e887d43f",
                userId: matty.id
            },
            {
                artist: "Afternoon Gentlemen",
                title: "Grind In The Mind",
                uri: "spotify:track:0eKjWnpwQ205Eu40b46lRZ",
                albumUrl: "https://i.scdn.co/image/ab67616d000048513dee1f008ce3f7aed5f4a025",
                userId: matty.id
            },
            {
                artist: "The Clash",
                title: "Straight to Hell - Remastered",
                uri: "spotify:track:2ax1vei61BzRGsEn6ckEdL",
                albumUrl: "https://i.scdn.co/image/ab67616d0000485125a4df452a3c42ccc2e9288b",
                userId: matty.id
            },
            {
                artist: "The Clash",
                title: "London Calling",
                uri: "spotify:track:124Y9LPRCAz3q2OP0iCvcJ",
                albumUrl: "https://i.scdn.co/image/ab67616d000048516e49cf8fd2505d4dc5368403",
                userId: matty.id
            },
            {
                artist: "The Clash",
                title: "Should I Stay or Should I Go - Remastered",
                uri: "spotify:track:39shmbIHICJ2Wxnk1fPSdz",
                albumUrl: "https://i.scdn.co/image/ab67616d0000485125a4df452a3c42ccc2e9288b",
                userId: matty.id
            },
            {
                artist: "Anthrax",
                title: "Discharge",
                uri: "spotify:track:6EICoCq5g518OAXwEdBhJY",
                albumUrl: "https://i.scdn.co/image/ab67616d0000485147c265a8dd3ca4a2349f43ab",
                userId: matty.id
            },
            {
                artist: "Discharge",
                title: "The More I See",
                uri: "spotify:track:2nqcspkQ4IUhwbhfVACBhR",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851ce1e9fcec422b5ae570df55f",
                userId: matty.id
            },
            {
                artist: "System Of A Down",
                title: "Chop Suey!",
                uri: "spotify:track:2DlHlPMa4M17kufBvI2lEN",
                albumUrl: "https://i.scdn.co/image/ab67616d0000485130d45198d0c9e8841f9a9578",
                userId: matty.id
            },
            {
                artist: "System Of A Down",
                title: "Sugar",
                uri: "spotify:track:31RTFPrB7wmYBhlkM2ILXG",
                albumUrl: "https://i.scdn.co/image/ab67616d000048512dc63e977bd5101072adcef6",
                userId: matty.id
            },
            {
                artist: "System Of A Down",
                title: "B.Y.O.B.",
                uri: "spotify:track:0EYOdF5FCkgOJJla8DI2Md",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851c65f8d04502eeddbdd61fa71",
                userId: matty.id
            },
            {
                artist: "System Of A Down",
                title: "Aerials",
                uri: "spotify:track:4e9eGQYsOiBcftrWXwsVco",
                albumUrl: "https://i.scdn.co/image/ab67616d0000485130d45198d0c9e8841f9a9578",
                userId: matty.id
            },
            {
                artist: "System Of A Down",
                title: "Lonely Day",
                uri: "spotify:track:1VNWaY3uNfoeWqb5U8x2QX",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851f5e7b2e5adaa87430a3eccff",
                userId: matty.id
            },
            {
                artist: "System Of A Down",
                title: "Hypnotize",
                uri: "spotify:track:6oO7WMjD6kEvCITLbVj0mu",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851f5e7b2e5adaa87430a3eccff",
                userId: matty.id
            },
            {
                artist: "System Of A Down",
                title: "Forest",
                uri: "spotify:track:1B5Y9I5wPfvD3C2A81A36C",
                albumUrl: "https://i.scdn.co/image/ab67616d0000485130d45198d0c9e8841f9a9578",
                userId: matty.id
            },
            {
                artist: "System Of A Down",
                title: "I-E-A-I-A-I-O",
                uri: "spotify:track:3RgDvs9Jpvn3kUuaTek1R5",
                albumUrl: "https://i.scdn.co/image/ab67616d000048517cf4c0d42c5b62c9deebdcd8",
                userId: matty.id
            },
            {
                artist: "Lamp of Murmuur",
                title: "A Burning Spear to the Heart of Dawn, Pt. I",
                uri: "spotify:track:6cq0WAAAZyBVbMSYiDxC0C",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851ffcf763cefc1eef78aba0f8f",
                userId: matty.id
            },
            {
                artist: "Lamp of Murmuur",
                title: "Riding Towards Thee Titanic Diadem",
                uri: "spotify:track:4Dn28SnzVvJxDLUnnUGyg4",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851e750c881ccbd1192e3c299d5",
                userId: matty.id
            },
            {
                artist: "Lamp of Murmuur",
                title: "Thine Be the Calvary",
                uri: "spotify:track:3wWVLP9Cz55ctjmODZiPC5",
                albumUrl: "https://i.scdn.co/image/ab67616d000048511bc971168a7dbe7947462958",
                userId: matty.id
            },
            {
                artist: "GUDSFORLADT",
                title: "The Tower of the Moon",
                uri: "spotify:track:3hKcfZ4800k5YgpHB8cDYC",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851330bc44c7c28dc11008bb66e",
                userId: matty.id
            },
            {
                artist: "GUDSFORLADT",
                title: "Ride Forever in the Shadow of the Mountain",
                uri: "spotify:track:3c4vsgD6NrPWtCoedXeu8p",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851330bc44c7c28dc11008bb66e",
                userId: matty.id
            },
            {
                artist: "Blackbraid",
                title: "The Spirit Returns",
                uri: "spotify:track:1sDgWN2Kyzde2fHKRDGy36",
                albumUrl: "https://i.scdn.co/image/ab67616d000048513f375ec32b041b6de3957d4a",
                userId: matty.id
            },
            {
                artist: "Blackbraid",
                title: "The River of Time Flows Through Me",
                uri: "spotify:track:1OIPWWdepB34NvBjGuoX6L",
                albumUrl: "https://i.scdn.co/image/ab67616d000048512225e43932a3ab5262165f3e",
                userId: matty.id
            },
            {
                artist: "Blackbraid",
                title: "A Fine Day to Die",
                uri: "spotify:track:4lZFMdDaZjOthVNvrMXTGa",
                albumUrl: "https://i.scdn.co/image/ab67616d000048513f375ec32b041b6de3957d4a",
                userId: matty.id
            },
            {
                artist: "Bikini Kill",
                title: "Rebel Girl",
                uri: "spotify:track:0XyjtybwqSdqMAFfBEkmZf",
                albumUrl: "https://i.scdn.co/image/ab67616d000048513aaf814e8350a1ae241603a0",
                userId: matty.id
            },
            {
                artist: "Bikini Kill",
                title: "DemiRep",
                uri: "spotify:track:2gnYFQWMzj8bNX4dDJyWzW",
                albumUrl: "https://i.scdn.co/image/ab67616d000048515d51cc215a4e6cdf1f96e4da",
                userId: matty.id
            },
            {
                artist: "Bikini Kill",
                title: "Double Dare Ya",
                uri: "spotify:track:2tRI6j8RxFwrxoRKs7dnV8",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851c65dc088e3dac29031e4959d",
                userId: matty.id
            },
            {
                artist: "Bikini Kill",
                title: "Suck My Left One",
                uri: "spotify:track:4IQY0TThr7YebYWf2X07xC",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851c65dc088e3dac29031e4959d",
                userId: matty.id
            },
            {
                artist: "Bikini Kill",
                title: "Carnival",
                uri: "spotify:track:7nvr4fAv279XAQ7flKOiuT",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851c65dc088e3dac29031e4959d",
                userId: matty.id
            },
            {
                artist: "Bikini Kill",
                title: "White Boy",
                uri: "spotify:track:2z5LG9pXrouLrzhdhqrVwl",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851c65dc088e3dac29031e4959d",
                userId: matty.id
            },
            {
                artist: "Bikini Kill",
                title: "Don't Need You",
                uri: "spotify:track:3RVxsu0EDweX6ffTLDy9WP",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851c65dc088e3dac29031e4959d",
                userId: matty.id
            },
            {
                artist: "Bikini Kill",
                title: "New Radio",
                uri: "spotify:track:4DgsvJNNGvV5WPQ40qR3R8",
                albumUrl: "https://i.scdn.co/image/ab67616d000048515d51cc215a4e6cdf1f96e4da",
                userId: matty.id
            },
            {
                artist: "Bikini Kill",
                title: "Sugar",
                uri: "spotify:track:3OJVrGpVbq0KD6j0NMOrlA",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851cd7384db88ba695ee9b6a3c7",
                userId: matty.id
            },
            {
                artist: "Bikini Kill",
                title: "Magnet",
                uri: "spotify:track:660s5fvZVVupYoxBPzS9Ze",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851cd7384db88ba695ee9b6a3c7",
                userId: matty.id
            },
            {
                artist: "Molly McGuire",
                title: "Coin Toss",
                uri: "spotify:track:5AwG43cXD6vehK8UYhK4Q9",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851f98ff36cb29bd07748e941a8",
                userId: matty.id
            },
            {
                artist: "Molly McGuire",
                title: "Broken Phones (feat. Allen Epley)",
                uri: "spotify:track:0YIxvXnZ9mtITWLXsQKtcn",
                albumUrl: "https://i.scdn.co/image/ab67616d0000485195b18199223a7fd880459de9",
                userId: matty.id
            },
            {
                artist: "Molly McGuire",
                title: "Humansville",
                uri: "spotify:track:07Pq1ZlWUY1anREFz2LDsL",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851f98ff36cb29bd07748e941a8",
                userId: matty.id
            },
            {
                artist: "The Subverts",
                title: "Monday Morning Tragedy",
                uri: "spotify:track:5UiCEOaHzZDCGFUXbhlsKu",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851ab2ba785e88180bb2226505e",
                userId: matty.id
            },
            {
                artist: "The Subverts",
                title: "Who I Am",
                uri: "spotify:track:3HeVoVhpKYTYxiHoC5sfG7",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851ab2ba785e88180bb2226505e",
                userId: matty.id
            },
            {
                artist: "The Subverts",
                title: "The End",
                uri: "spotify:track:1SoKvHXbgrpp8HtXqFODSz",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851ab2ba785e88180bb2226505e",
                userId: matty.id
            },
            {
                artist: "The Subverts",
                title: "Another Way",
                uri: "spotify:track:6TmZcMhwhQFc0TzSDoHOwK",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851ab2ba785e88180bb2226505e",
                userId: matty.id
            },
            {
                artist: "The Last Priority",
                title: "S.A.T.C.",
                uri: "spotify:track:4nVllCK4i7U8SibyhiY8ml",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851f5c5a5dc45f184d68df21ec0",
                userId: matty.id
            },
            {
                artist: "Last Priority",
                title: "The TRUTH",
                uri: "spotify:track:3J0knZpqbrrzsfGfKSfpDa",
                albumUrl: "https://i.scdn.co/image/ab67616d000048515fbae42ece8d5aaa2a2ed2f3",
                userId: matty.id
            },
            {
                artist: "Last Priority",
                title: "Flippin' The Script",
                uri: "spotify:track:7tAf987urCaUGo4pNoC8nS",
                albumUrl: "https://i.scdn.co/image/ab67616d000048515fbae42ece8d5aaa2a2ed2f3",
                userId: matty.id
            },
            {
                artist: "NOFX",
                title: "Linoleum",
                uri: "spotify:track:4uB28m7RAflobYpnLMb6A2",
                albumUrl: "https://i.scdn.co/image/ab67616d0000485131ce63f1e36e1a164510cdb5",
                userId: matty.id
            },
            {
                artist: "NOFX",
                title: "Bob",
                uri: "spotify:track:5XhMeCYrRhQjL4sUoOmUCE",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851f5f40f1013cd62539fac2e18",
                userId: matty.id
            },
            {
                artist: "NOFX",
                title: "Don't Call Me White",
                uri: "spotify:track:0cntShbC3GmWXygfH98brk",
                albumUrl: "https://i.scdn.co/image/ab67616d0000485131ce63f1e36e1a164510cdb5",
                userId: matty.id
            },
            {
                artist: "NOFX",
                title: "Dinosaurs Will Die",
                uri: "spotify:track:4kRDPODRnN9Cbyrcg9qTkE",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851530db954283883866bc21a95",
                userId: matty.id
            },
            {
                artist: "NOFX",
                title: "Drugs Are Good",
                uri: "spotify:track:0biTGVjFrAfNQHnAjnuqnZ",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851f85d0d4f29fc313bae8d1d48",
                userId: matty.id
            },
            {
                artist: "NOFX",
                title: "The Decline",
                uri: "spotify:track:2Wm84PF0DHyRQx79Lj9NwI",
                albumUrl: "https://i.scdn.co/image/ab67616d000048512b290a30ba2e35db4f53d681",
                userId: matty.id
            },
            {
                artist: "NOFX",
                title: "72 Hookers",
                uri: "spotify:track:7d70MVYrP46R4he4Zsvpzo",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851f96f2c0c57d0ae646cb8805c",
                userId: matty.id
            },
            {
                artist: "NOFX",
                title: "She's Nubs",
                uri: "spotify:track:2D38ZBnSMwhH48kMmZwaEP",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851f88be32bc75f9a8409793a51",
                userId: matty.id
            },
            {
                artist: "RKL",
                title: "Blocked Out",
                uri: "spotify:track:2SqJwm0PEqlm6Z5AqkCzpv",
                albumUrl: "https://i.scdn.co/image/ab67616d000048516b37fb6f9efa1ef4fc975a58",
                userId: matty.id
            },
            {
                artist: "RKL",
                title: "Think Positive",
                uri: "spotify:track:5JkhlisiGJbNYzNlCS8zCj",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851dbb6398ebedf4470cebb3abb",
                userId: matty.id
            },
            {
                artist: "RKL",
                title: "Betrayed",
                uri: "spotify:track:1oIUZgwz88zyRgau8ZqSZY",
                albumUrl: "https://i.scdn.co/image/ab67616d000048518a0ae46410bad5fd8d05b21b",
                userId: matty.id
            },
            {
                artist: "RKL",
                title: "Why",
                uri: "spotify:track:3xaBu99BAMANonvNgYMfqY",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851dbb6398ebedf4470cebb3abb",
                userId: matty.id
            },
            {
                artist: "RKL",
                title: "Pothead",
                uri: "spotify:track:6WcZX8jOKL4SGZ3Ls9lczn",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851dbb6398ebedf4470cebb3abb",
                userId: matty.id
            },
            {
                artist: "RKL",
                title: "Scab On My Brain",
                uri: "spotify:track:0oUc6X9vxksEXN2MbhwAID",
                albumUrl: "https://i.scdn.co/image/ab67616d000048516b37fb6f9efa1ef4fc975a58",
                userId: matty.id
            },
            {
                artist: "Stevie Wonder",
                title: "Happy Birthday",
                uri: "spotify:track:01lewSOj9ZaXplh9TpNKL4",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851fa5e6a681840021eb63e75ad",
                userId: matty.id
            },
            {
                artist: "Sonic Youth",
                title: "Superstar",
                uri: "spotify:track:5Ext9ObPEi7wIcv5AiQWJy",
                albumUrl: "https://i.scdn.co/image/ab67616d0000485158e762253dde898c519396bd",
                userId: matty.id
            },
            {
                artist: "Sonic Youth",
                title: "Kool Thing",
                uri: "spotify:track:1ZozGivTAYsOwhy6LVHsPX",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851b690940b6544fb39bf3653d2",
                userId: matty.id
            },
            {
                artist: "Sonic Youth",
                title: "Incinerate",
                uri: "spotify:track:0lDoG5fQ9cmpvpenwR7Jln",
                albumUrl: "https://i.scdn.co/image/ab67616d000048512fe7a57d52c0e58f650fdc4e",
                userId: matty.id
            },
            {
                artist: "Sonic Youth",
                title: "Bull In The Heather",
                uri: "spotify:track:6px1KhTqAfxdcF6A1JGSpx",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851f14a81ecf5c04d1cf6a55343",
                userId: matty.id
            },
            {
                artist: "Sonic Youth",
                title: "Sugar Kane",
                uri: "spotify:track:6q03mlzKsM1m3TLpi6T6Cw",
                albumUrl: "https://i.scdn.co/image/ab67616d0000485157fa1aac612a130fd53f9973",
                userId: matty.id
            },
            {
                artist: "Sonic Youth",
                title: "Schizophrenia",
                uri: "spotify:track:22t3vCXfjQhIiXzGVSZNOz",
                albumUrl: "https://i.scdn.co/image/ab67616d0000485174ad88a9df81d4a735fe1462",
                userId: matty.id
            },
            {
                artist: "Sonic Youth",
                title: "Dirty Boots",
                uri: "spotify:track:5X9c0LL84kJN8Ok2UC6B6w",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851b690940b6544fb39bf3653d2",
                userId: matty.id
            },
            {
                artist: "Sonic Youth",
                title: "Shadow of a Doubt",
                uri: "spotify:track:0mYaDPgvNkXgXS3TVjuITD",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851272b5e233006c97ac493334c",
                userId: matty.id
            },
            {
                artist: "fIREHOSE",
                title: "Brave Captain",
                uri: "spotify:track:3RD6AMDIgly2CO5nrqUnmc",
                albumUrl: "https://i.scdn.co/image/ab67616d0000485190617e80c59d30d8382aad17",
                userId: matty.id
            },
            {
                artist: "fIREHOSE",
                title: "Chemical Wire",
                uri: "spotify:track:0lzbx7ziePHfZMM4NX2Fu8",
                albumUrl: "https://i.scdn.co/image/ab67616d0000485190617e80c59d30d8382aad17",
                userId: matty.id
            },
            {
                artist: "Exilius Bliss",
                title: "Fire Hose",
                uri: "spotify:track:7scFQgL8XvmLZ4ZXBA9GeL",
                albumUrl: "https://i.scdn.co/image/ab67616d000048514fd9044cfb4d94d1b939a72c",
                userId: matty.id
            },
            {
                artist: "fIREHOSE",
                title: "Sometimes",
                uri: "spotify:track:6KPjfgWwPAofrorvBv05GL",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851bd992c8bb42c952580a58022",
                userId: matty.id
            },
            {
                artist: "POW!",
                title: "Fire Hose",
                uri: "spotify:track:2yOYF8DmLRzd52ccNJOtmC",
                albumUrl: "https://i.scdn.co/image/ab67616d000048513eac1591b4dd7299d85f947a",
                userId: matty.id
            },
            {
                artist: "Alex G",
                title: "Cross the Sea",
                uri: "spotify:track:73iWf3dFe1YpRbP590SvGQ",
                albumUrl: "https://i.scdn.co/image/ab67616d000048515cce078fbf09bbe8211caf12",
                userId: matty.id
            },
            {
                artist: "Alex G",
                title: "Blessing",
                uri: "spotify:track:5mKJrP0WTkVdZnrxwxOPoN",
                albumUrl: "https://i.scdn.co/image/ab67616d000048515cce078fbf09bbe8211caf12",
                userId: matty.id
            },
            {
                artist: "Alex G",
                title: "Miracles",
                uri: "spotify:track:5PZuWw56Wwc9W6nEi3ZcWO",
                albumUrl: "https://i.scdn.co/image/ab67616d000048515cce078fbf09bbe8211caf12",
                userId: matty.id
            },
            {
                artist: "Alex G",
                title: "After All",
                uri: "spotify:track:1wHiZMPV9waV8Uru0eW26d",
                albumUrl: "https://i.scdn.co/image/ab67616d000048515cce078fbf09bbe8211caf12",
                userId: matty.id
            },
            {
                artist: "Alex G",
                title: "Mission",
                uri: "spotify:track:2nxRNNXYZsiebwptaGgUTa",
                albumUrl: "https://i.scdn.co/image/ab67616d000048515cce078fbf09bbe8211caf12",
                userId: matty.id
            },
            {
                artist: "Alex G",
                title: "Ain't It Easy",
                uri: "spotify:track:3YdkukHIzvVxSvY92JAVw3",
                albumUrl: "https://i.scdn.co/image/ab67616d000048515cce078fbf09bbe8211caf12",
                userId: matty.id
            },
            {
                artist: "Alex G",
                title: "No Bitterness",
                uri: "spotify:track:3s3Twsw0pQr40yiZpS3toD",
                albumUrl: "https://i.scdn.co/image/ab67616d000048515cce078fbf09bbe8211caf12",
                userId: matty.id
            },
            {
                artist: "Alex G",
                title: "S.D.O.S",
                uri: "spotify:track:7E8bhgC7aPjbi9p2zBBWpX",
                albumUrl: "https://i.scdn.co/image/ab67616d000048515cce078fbf09bbe8211caf12",
                userId: matty.id
            },
            {
                artist: "Alex G",
                title: "Runner",
                uri: "spotify:track:5DRnssBoVo8e7uAQZkNT8O",
                albumUrl: "https://i.scdn.co/image/ab67616d000048515cce078fbf09bbe8211caf12",
                userId: matty.id
            },
            {
                artist: "Alex G",
                title: "Immunity",
                uri: "spotify:track:1EQFnxBTDsUJhnFzEYOuLc",
                albumUrl: "https://i.scdn.co/image/ab67616d000048515cce078fbf09bbe8211caf12",
                userId: matty.id
            },
            {
                artist: "Sex Pistols",
                title: "God Save the Queen",
                uri: "spotify:track:6ui6l3ZNvlrGQZArwo8195",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851d0f19de33459c832e50d6ecd",
                userId: matty.id
            },
            {
                artist: "Kendrick Lamar",
                title: "DNA.",
                uri: "spotify:track:6HZILIRieu8S0iqY8kIKhj",
                albumUrl: "https://i.scdn.co/image/ab67616d000048518b52c6b9bc4e43d873869699",
                userId: matty.id
            },
            {
                artist: "Kendrick Lamar",
                title: "PRIDE.",
                uri: "spotify:track:6IZvVAP7VPPnsGX6bvgkqg",
                albumUrl: "https://i.scdn.co/image/ab67616d000048518b52c6b9bc4e43d873869699",
                userId: matty.id
            },
            {
                artist: "Kendrick Lamar",
                title: "HUMBLE.",
                uri: "spotify:track:7KXjTSCq5nL1LoYtL7XAwS",
                albumUrl: "https://i.scdn.co/image/ab67616d000048518b52c6b9bc4e43d873869699",
                userId: matty.id
            },
            {
                artist: "Kendrick Lamar",
                title: "Alright",
                uri: "spotify:track:3iVcZ5G6tvkXZkZKlMpIUs",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851cdb645498cd3d8a2db4d05e1",
                userId: matty.id
            },
            {
                artist: "Young Thug",
                title: "Digits",
                uri: "spotify:track:4cg1yakyRSIOjxKM2I7J1q",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851a875c3ec944b4f164ab5c350",
                userId: matty.id
            },
            {
                artist: "Young Thug",
                title: "Best Friend",
                uri: "spotify:track:33JcUj9qQDayKswunZP9ar",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851bd29e861f5f985a1bbe50ff9",
                userId: matty.id
            },
            {
                artist: "Young Thug",
                title: "Check",
                uri: "spotify:track:1jk9c0gZI0wbn5GvAj7PBV",
                albumUrl: "https://i.scdn.co/image/ab67616d0000485188053a98d0abb8ed3a02efe1",
                userId: matty.id
            },
            {
                artist: "YG",
                title: "Why You Always Hatin?",
                uri: "spotify:track:4ezAjoV01phDz1SqO6SzEU",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851f731c8017e36b13e252bd2c6",
                userId: matty.id
            },
            {
                artist: "YG",
                title: "Who Do You Love?",
                uri: "spotify:track:7ngdkrVQPgP3AoIxUrTpHT",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851d5e1093f3b6f0a59114a4905",
                userId: matty.id
            },
            {
                artist: "YG",
                title: "Twist My Fingaz",
                uri: "spotify:track:0evVIHGlp94jOUMvoQZRVD",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851f731c8017e36b13e252bd2c6",
                userId: matty.id
            },
            {
                artist: "YG",
                title: "BPT",
                uri: "spotify:track:0toAMliqa1AlwX4GPH0B9n",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851d5e1093f3b6f0a59114a4905",
                userId: matty.id
            },
            {
                artist: "alex_g_offline",
                title: "Pretend",
                uri: "spotify:track:0tGqk0HlYMQ16aj7yJwleF",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851072e2599e77865ae194b8345",
                userId: matty.id
            },
            {
                artist: "alex_g_offline",
                title: "I Wait for You",
                uri: "spotify:track:7EDcAz6iuKSkxH4VcC3Oko",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851072e2599e77865ae194b8345",
                userId: matty.id
            },
            {
                artist: "Alex G",
                title: "Mary",
                uri: "spotify:track:4p9iQNEmsIGkB6eG8Val8n",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851c85ca3b845a922baff3041c7",
                userId: matty.id
            },
            {
                artist: "Alex G",
                title: "Forever",
                uri: "spotify:track:3suf1WpGLuPpq2DXkkmyK5",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851c85ca3b845a922baff3041c7",
                userId: matty.id
            },
            {
                artist: "Alex G",
                title: "Change",
                uri: "spotify:track:0bPiyfCmBIWqDDQZ6KqFXu",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851c85ca3b845a922baff3041c7",
                userId: matty.id
            },
            {
                artist: "Alex G",
                title: "16 Mirrors",
                uri: "spotify:track:4ff1q6L0CZ3nf3LKJ1O7lY",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851c85ca3b845a922baff3041c7",
                userId: matty.id
            },
            {
                artist: "Alex G",
                title: "Race",
                uri: "spotify:track:78bcWFqyuhOrC8wnkpgcft",
                albumUrl: "https://i.scdn.co/image/ab67616d0000485152d77e720679ad0b4a95c784",
                userId: matty.id
            },
            {
                artist: "Alex G",
                title: "Things to Do",
                uri: "spotify:track:1Ty1beNcNEbOXbO9fJNIXu",
                albumUrl: "https://i.scdn.co/image/ab67616d0000485152d77e720679ad0b4a95c784",
                userId: matty.id
            },
            {
                artist: "Daft Punk",
                title: "Instant Crush (feat. Julian Casablancas)",
                uri: "spotify:track:2cGxRwrMyEAp8dEbuZaVv6",
                albumUrl: "https://i.scdn.co/image/ab67616d000048519b9b36b0e22870b9f542d937",
                userId: matty.id
            },
            {
                artist: "Daft Punk",
                title: "Get Lucky (feat. Pharrell Williams and Nile Rodgers)",
                uri: "spotify:track:69kOkLUCkxIZYexIgSG8rq",
                albumUrl: "https://i.scdn.co/image/ab67616d000048519b9b36b0e22870b9f542d937",
                userId: matty.id
            },
            {
                artist: "Daft Punk",
                title: "Giorgio by Moroder",
                uri: "spotify:track:0oks4FnzhNp5QPTZtoet7c",
                albumUrl: "https://i.scdn.co/image/ab67616d000048519b9b36b0e22870b9f542d937",
                userId: matty.id
            },
            {
                artist: "Daft Punk",
                title: "Lose Yourself to Dance (feat. Pharrell Williams)",
                uri: "spotify:track:5CMjjywI0eZMixPeqNd75R",
                albumUrl: "https://i.scdn.co/image/ab67616d000048519b9b36b0e22870b9f542d937",
                userId: matty.id
            },
            {
                artist: "Daft Punk",
                title: "Fragments of Time (feat. Todd Edwards)",
                uri: "spotify:track:0IedgQjjJ8Ad4B3UDQ5Lyn",
                albumUrl: "https://i.scdn.co/image/ab67616d000048519b9b36b0e22870b9f542d937",
                userId: matty.id
            },
            {
                artist: "Daft Punk",
                title: "Give Life Back to Music",
                uri: "spotify:track:0dEIca2nhcxDUV8C5QkPYb",
                albumUrl: "https://i.scdn.co/image/ab67616d000048519b9b36b0e22870b9f542d937",
                userId: matty.id
            },
            {
                artist: "Justice",
                title: "D.A.N.C.E",
                uri: "spotify:track:33yAEqzKXexYM3WlOYtTfQ",
                albumUrl: "https://i.scdn.co/image/ab67616d000048511c0bcf8b536295438d26c70d",
                userId: matty.id
            },
            {
                artist: "Justice",
                title: "Genesis",
                uri: "spotify:track:4wSmqFg31t6LsQWtzYAJob",
                albumUrl: "https://i.scdn.co/image/ab67616d000048511c0bcf8b536295438d26c70d",
                userId: matty.id
            },
            {
                artist: "Justice",
                title: "Phantom",
                uri: "spotify:track:2weNFSRqkClXtfBPTteafY",
                albumUrl: "https://i.scdn.co/image/ab67616d000048511c0bcf8b536295438d26c70d",
                userId: matty.id
            },
            {
                artist: "Justice",
                title: "Phantom Pt. II",
                uri: "spotify:track:2A3emhzbZo7eSvEUtAm3ZS",
                albumUrl: "https://i.scdn.co/image/ab67616d000048511c0bcf8b536295438d26c70d",
                userId: matty.id
            },
            {
                artist: "The Presidents Of The United States Of America",
                title: "Peaches",
                uri: "spotify:track:5huLMzIzFEdVcvEzt2hfk1",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851f26fe2d28f3ea184db9be5a2",
                userId: matty.id
            },
            {
                artist: "Young Nudy",
                title: "Peaches & Eggplants (feat. 21 Savage)",
                uri: "spotify:track:1KUZ33cOqk3X4Ezk0aZnVp",
                albumUrl: "https://i.scdn.co/image/ab67616d000048518e91d3e431739b6e7fc3ed71",
                userId: matty.id
            },
            {
                artist: "Peach Pit",
                title: "Peach Pit",
                uri: "spotify:track:0ZK8TGOsngrstVPsnrHbK1",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851241c6f0d19ffcda38f58c7f8",
                userId: matty.id
            },
            {
                artist: "In The Valley Below",
                title: "Peaches",
                uri: "spotify:track:0JsRZWdSquAQtgyJO8mhLA",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851d6d43a45746154bf87fd682b",
                userId: matty.id
            },
            {
                artist: "Tyler, The Creator",
                title: "Peach Fuzz",
                uri: "spotify:track:0F58GE2TtHBim5o4ZTQUwK",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851819163623f3903ba5d39afc8",
                userId: matty.id
            },
            {
                artist: "7 Seconds",
                title: "99 Red Balloons",
                uri: "spotify:track:0rPsUVqhiwbTDegYNPysaV",
                albumUrl: "https://i.scdn.co/image/ab67616d0000485133022586455a2400bbbdfff2",
                userId: matty.id
            },
            {
                artist: "7 Seconds",
                title: "Young 'Til I Die",
                uri: "spotify:track:00Vly5Pr7X1YGgFJBE6cxA",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851ae366619723aa41ae9cc7973",
                userId: matty.id
            },
            {
                artist: "7 Seconds",
                title: "All Came Undone",
                uri: "spotify:track:3XhdiZ7lSt9F91jIRoVjyH",
                albumUrl: "https://i.scdn.co/image/ab67616d000048513a0fa6f5dbc54a131f31367f",
                userId: matty.id
            },
            {
                artist: "7 Seconds",
                title: "Sooner or Later",
                uri: "spotify:track:161AGnyxELSCSLQj510Xnp",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851347411c871a088f117e46454",
                userId: matty.id
            },
            {
                artist: "7 Seconds",
                title: "Meant to Be My Own",
                uri: "spotify:track:4fDpak2dBr6d3lJxJPqj3o",
                albumUrl: "https://i.scdn.co/image/ab67616d000048513a0fa6f5dbc54a131f31367f",
                userId: matty.id
            },
            {
                artist: "Nestalgica",
                title: "Super Smash Bros. Ultimate - Main Theme",
                uri: "spotify:track:6cMHf1j2knLaQPrtVeNe0q",
                albumUrl: "https://i.scdn.co/image/ab67616d000048517350fe679a38602c06e9a19d",
                userId: matty.id
            },
            {
                artist: "Arcade Player",
                title: "Bramble Blast",
                uri: "spotify:track:5mA8l37z8qnKcHXN2qlBlG",
                albumUrl: "https://i.scdn.co/image/ab67616d00004851a94c70e9c02f1f0580e3c10a",
                userId: matty.id
            },
            {
                artist: "VGR",
                title: "Super Smash Bros. Melee Menu Theme",
                uri: "spotify:track:6aI3vGRYPwHbhB1BaXESGR",
                albumUrl: "https://i.scdn.co/image/ab67616d000048512d2ac47edc7041283d4bf323",
                userId: matty.id
            },
            {
                artist: "Adolescents",
                title: "Kids of the Black Hole",
                uri: "spotify:track:7aDotQpUKpGFrOsrfQAxNc",
                albumUrl: "https://i.scdn.co/image/ab67616d000048518dea93736370144592f42556",
                userId: matty.id
            },
            {
                artist: "Adolescents",
                title: "Amoeba",
                uri: "spotify:track:1xQE0QHrmJUQweLoMB0ZWC",
                albumUrl: "https://i.scdn.co/image/ab67616d000048518dea93736370144592f42556",
                userId: matty.id
            },
            {
                artist: "Adolescents",
                title: "Wrecking Crew",
                uri: "spotify:track:5LWOLIZ00GdqFHw3E0QQbu",
                albumUrl: "https://i.scdn.co/image/ab67616d000048518dea93736370144592f42556",
                userId: matty.id
            },
            {
                artist: "Adolescents",
                title: "Escape from Planet Fuck",
                uri: "spotify:track:7mUcH5OWTVCRIaL0b6k4qO",
                albumUrl: "https://i.scdn.co/image/ab67616d000048519c4f35c7df39142687b5c135",
                userId: matty.id
            }
        ]

        for (const singleTrack of tracks) {
            const currentTrack = await Track.query().findOne({ title: singleTrack.title })
            if(!currentTrack) {
                await Track.query().insert(singleTrack)
            }
        }
    }
}

export default TrackSeeder