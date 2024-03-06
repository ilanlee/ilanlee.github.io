<script>
    import GamesCard from "./GamesCard.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";

    let lim = true;

    let gamesList = [
        {
            name: "Modern Warefare: DMZ",
            imgUrl: "assets/dmz.png",
            summary: "Modern Warfare 2's free DMZ mode, fight for survival in the massive Al Mazrah map. Unlike the battle royale of Warzone 2.0, DMZ focuses on objectives and escaping with loot. Complete missions for factions, battle AI, and outmaneuver other players. Gather valuable gear, unlock permanent rewards, and experience the thrill of extraction – all while risking it all for the ultimate reward.",
            tags: [
                "Person Person",
                "shooter",
                "Cros-Play",
            ],

        },
        {
            name: "Horizon Forbidden West",
            imgUrl: "assets/forbiddenwest.png",
            summary: "Explore a corrupted future America in Horizon Forbidden West. Aloy, a skilled hunter, ventures into the dangerous Forbidden West to uncover the secrets of a mysterious plague.  Battle towering machines, unravel the truth, and restore balance to the ecosystem in this open-world action RPG.",
            tags: [
                "Open World",
                "Post Apocaliptic",
                "Sci-Fi",
            ]
        },
        {
            name: "Diablo 4",
            imgUrl: "assets/diablo4.png",
            summary: "Descend into a world brimming with demonic darkness in Diablo 4. Choose your hero from five distinct classes, each wielding unique powers to combat the legions of Hell. Master brutal combat, explore a vast open world, and customize your character for ultimate power in this action RPG sequel.",
            tags: [
                "Action RPG",
                "Open World",
                "Demon Slayer",
            ]
        },
        {
            name: "Age of Empires 2",
            imgUrl: "assets/ageofempires2.png",
            summary: "Command vast armies and rewrite history in Age of Empires 2. Choose from iconic civilizations, gather resources, build mighty empires, and conquer your foes in epic real-time strategy battles. Master economic management, research powerful technologies, and dominate the battlefield in this timeless classic.",
            tags: [
                "Real-Time Strategy",
                "Historical Warfare",
                "Civilization Building",
            ]
        },
        {
            name: "Super Mario Wonder",
            imgUrl: "assets/supermariowonder.png",
            summary: "Embark on a fantastical adventure in Super Mario Wonder! This rumored title promises a grand journey filled with exciting challenges and innovative gameplay. Explore sprawling worlds, overcome creative obstacles, and collect power-ups to help Mario save the day in this highly anticipated platformer.",
            tags: [
                "Platformer",
                "Family-Friendly",
                "3D Adventure",
            ]
        },
        {
            name: "Call of Duty: Modern Warfare 3 Warzone",
            imgUrl: "assets/codmw3warzone.png",
            summary: "Experience high-octane warfare in the free-to-play Call of Duty: Modern Warfare 3 Warzone. Drop into a massive map with up to 150 players, scavenge for weapons and equipment, and fight for survival in a last-man-standing battle royale. Utilize tactical strategies, eliminate opponents, and become the ultimate soldier in this intense online multiplayer experience.",
            tags: [
                "Battle Royale",
                "Modern Warfare",
                "First-Person Shooter",
            ],
        },
    ];
</script>

<SectionWrapper id="games">
    <div
        class="flex flex-col gap-10 sm:gap-14 md:gap-24 flex-1 items-center justify-center pb-10 md:pb-14"
    >
        <div class="flex flex-col gap-2">
            <p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
                Which <span class="text-indigo-400"
                    >Games</span
                > Are we playing
            </p>
            <h3
                class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center"
            >
                Find your favorite
            </h3>
        </div>
        
        {#each gamesList as game, index}
            <GamesCard {game} {index}>
                {#if index === 0}
                <div class="text-xl md:text-2xl font-medium mb-4">
                    {game.name}
                  </div>
                {:else if index === 1}
                <div class="text-xl md:text-2xl font-medium mb-4">
                    {game.name}
                  </div>
                {:else if index === 2}
                <div class="text-xl md:text-2xl font-medium mb-4">
                    {game.name}
                  </div>
                  {:else if index === 3}
                  <div class="text-xl md:text-2xl font-medium mb-4">
                      {game.name}
                    </div>
                  {:else if index === 4}
                  <div class="text-xl md:text-2xl font-medium mb-4">
                      {game.name}
                    </div>
                    {:else if index === 5}
                    <div class="text-xl md:text-2xl font-medium mb-4">
                        {game.name}
                      </div>
                {/if}
            </GamesCard>
        {/each}
    </div>
</SectionWrapper>