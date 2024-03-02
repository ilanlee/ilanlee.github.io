<script>
  import SectionWrapper from "./SectionWrapper.svelte";

</script>
<footer class="py-1 sm:py-5 md:py-8 px-10 md:px-8" id="footer">
  <div class="max-w-[1200px] mx-auto w-full grid grid-cols-2 gap-8 text-base justify-items-center">
      <div class="flex flex-col gap-4">
          <p class="font-bold poppins text-base sm:text-lg">Support</p>
          <a href="./" target="_blank" class="cursor-pointer hover:text-indigo-400 duration-200">Contact Us</a>
      </div>
      <div class="flex flex-col gap-4">
          <p class="font-bold poppins text-base sm:text-lg">Follow Me</p>
          <div class="flex gap-2">
            <a href="https://www.youtube.com/@MuseBrheako" target="_blank" class="cursor-pointer hover:text-indigo-400 duration-200 w-full">
              <i class="fa-brands fa-youtube pr-2" />YouTube</a>
            <a href="./" target="_blank" class="cursor-pointer hover:text-indigo-400 duration-200 w-full">
              <i class="fa-brands fa-instagram pr-2" />
              Instagram
            </a>
          </div>
          <div class="flex gap-2">
              <a href="./" target="_blank" class="cursor-pointer hover:text-indigo-400 duration-200 w-full">
              <i class="fa-brands fa-facebook pr-2" />
              Facebook
            </a>
            <a href="https://twitter.com/MuseBrheako" target="_blank" class="cursor-pointer hover:text-indigo-400 duration-200 w-full">
              <i class="fa-brands fa-twitter pr-2" />
              Twitter
            </a>
          </div>
        </div>
  </div>
      <div class="flex items-center justify-center py-3">
          <h1 class="font-semibold text-black">
              Muse<span class="text-blue-700">Brheako</span>
          </h1>
      <p>©2023 All rights reserved.</p>
      </div>
  </footer>