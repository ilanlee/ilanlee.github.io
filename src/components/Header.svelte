<script>
    import { openModal } from "../store";
</script>

<header class="flex flex-col relative z-20 bg-yellow-100">
    <div
        class="max-w-[1400px] mx-auto w-full flex items-center justify-center p-4 py-7"
    >
        <a href="./">
            <h1 class="font-semibold text-black">
                Muse<span class="text-blue-700">Brheako</span>
            </h1>
        </a>
        </div>
        <div class="max-w-[1400px] mx-auto w-full flex items-center justify-center p-4 py-2">
        <button
            on:click={() => ($openModal = true)}
            class="sm:hidden grid place-items-center"
        >
            <i class="fa-solid fa-bars"></i>
        </button>
        <nav class="hidden sm:flex items-center gap-4 lg:gap-6">
            <a href="#games" class="duration-200 hover:text-blue-700 cursor-pointer">Games</a>
            <a href="#coop" class="duration-200 hover:text-blue-700 cursor-pointer">CO-OPs</a>
            <a href="#randomvideos" class="duration-200 hover:text-blue-700 cursor-pointer">Random Video</a>
            <a href="#faqs" class="duration-200 hover:text-blue-700 cursor-pointer">FAQs</a>
            <a href="#footer" class="duration-200 hover:text-blue-700 cursor-pointer">About Us</a>
            <div class="absolute bottom-0 left-10 w-1/2 h-[1px] bg-slate-950"></div>
        </nav>
    </div>
</header>