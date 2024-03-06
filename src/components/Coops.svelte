<script>
    import CoopsCard from "./CoopsCard.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";
    import Stars from "./Stars.svelte";

    let lim = true;

    let coopsList = [
        {
            name: "FermoShak",
            imgUrl: "assets/coops/fermoshak.png",
            info: "FermoShak's info.",
            games: [
                "Horizon",
                "DMZ",
                "Warzone",
            ],
        },
        {
            name: "SNIP",
            imgUrl: "assets/coops/snip.png",
            info: "SNIPs info.",
            games: [
                "Horizon",
                "DMZ",
                "GTA 5",
            ],
        },
        {
            name: "Devoted Princess",
            imgUrl: "assets/coops/devotedprincess.png",
            info: "Devopted Princess' info.",
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