<script>
    import CoopsCard from "./CoopsCard.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";
    import Stars from "./Stars.svelte";

    let lim = true;

    let coopsList = [
        {
            name: "FermoShak",
            imgUrl: "assets/coops/fermoshak.png",
            info: "When Fermoshak isn't conquering virtual worlds, he can be found pouring over architectural blueprints, planning their next travel adventure, or simply soaking up the beauty of nature. This well-rounded gamer brings a unique perspective to everything they do, whether it's strategizing the perfect build or appreciating the intricate design of a real-world landmark.",
            games: [
                "Horizon",
                "DMZ",
                "Warzone",
            ],
        },
        {
            name: "SNIP",
            imgUrl: "assets/coops/snip.png",
            info: "SNIP isn't your typical streamer. By day, he dives into the fascinating world of machine learning, but when he hits 'go live,' his loyal companion Argo might steal the show! This streamer isn't afraid to bring the outdoors in, with breaks featuring epic dog walks or even incorporating Argo into his gameplay (think voice commands for in-game actions!). But SNIP's adventures extend far beyond the screen. When he's not gaming, he takes the plunge into the real world with a passion for scuba diving.  Imagine this: SNIP strategizing his next in-game move, then cutting to a breathtaking underwater scene where he's exploring a vibrant coral reef with Argo waiting patiently on the boat. SNIP's channel offers a unique blend of gaming passion, technological expertise, and a healthy dose of doggone fun, all wrapped up with a love for adventure above and below the surface.",
            games: [
                "Horizon",
                "DMZ",
                "GTA 5",
            ],
        },
        {
            name: "Devoted Princess",
            imgUrl: "assets/coops/devotedprincess.png",
            info: "Devoted Princess might throw you off at first. This streamer isn't your typical royalty; he reigns supreme in the world of first-person shooters. But beneath the in-game bravado lies a dedicated friend who cherishes his online community. When Devoted Princess isn't dominating the virtual battlefield, you can find him lacing up his shoes and hitting the pavement for a good run. He might even share his scenic jogs with the stream, offering a breath of fresh air between epic firefights. Devoted Princess's channel is a place for camaraderie, competitive spirit, and a healthy dose of #fitstreamer vibes.",
            games: [
                "Warzone",
                "Tony Hawk's Pro Skater 2",
                "Overcooked",
            ],
        },
        {
            name: "Player 4",
            imgUrl: "assets/coops/player4.png",
            info: "Info about Player 4.",
            games: [
                "Game 1",
                "Game 2",
                "Game 3",
            ],
        },
        {
            name: "Player 5",
            imgUrl: "assets/coops/player5.png",
            info: "Info about Player 5",
            games: [
                "Game 1",
                "Game 2",
                "Game 3",
            ],
        },
        {
            name: "Player 6",
            imgUrl: "assets/coops/player6.png",
            info: "Info about Player 6",
            games: [
                "Game 1",
                "Game 2",
                "Game 3",
            ],
        },
        {
            name: "Player 7",
            imgUrl: "assets/coops/player7.png",
            info: "Info about Player 7",
            games: [
                "Game 1",
                "Game 2",
                "Game 3",
            ],
        },
    ];
</script>

<SectionWrapper id="coops">
    <div
        class="flex flex-col gap-10 sm:gap-14 md:gap-24 py-20 flex-1 items-center justify-center"
    >
        <div class="flex flex-col gap-2">
            <p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
                Don't Just Play With Yourself!
            </p>
            <h3
                class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center"
            >
                Play with our <span class="text-indigo-400">Community</span>
            </h3>
        </div>
        <div class="flex flex-col md:flex-row gap-8 w-fit mx-auto">
            <div class="flex flex-col gap-8">
                {#each lim ? coopsList.slice(0, 4) : coopsList as gamer, index}
                    <CoopsCard {gamer} left={true} {index} />
                {/each}
            </div>
            <div class="w-[1px] bg-slate-950 hidden md:flex"></div>
            <div class="flex flex-col gap-8">
                {#each lim ? coopsList.slice(0, 4) : coopsList as gamer, index}
                    <CoopsCard {gamer} {index} />
                {/each}
            </div>
        </div>
        <button on:click={() => (lim = !lim)} class="specialBtn">
            <p>{lim ? "Show More" : "Show Less"}</p>
        </button>
        <div class="flex flex-col">
            <p class="mx-auto text-lg sm:text-xl md:text-2xl font-semibold">
                Our community consists of 1,349 gamers
            </p>
            <Stars />
        </div>
    </div>
</SectionWrapper>