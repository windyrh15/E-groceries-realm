<script>
  import Sidebar from './sidebar.svelte';
  let sidebar_show = false; // Reactive variable to control sidebar visibility
</script>

<div class="flex flex-col">
  <!-- Header -->
  <header class="z-20 fixed w-full flex justify-between items-center px-8 py-4 shadow-lg backdrop-blur-md">
    <!-- Logo -->
    <div class="flex items-center">
      <img class="w-12 h-12 rounded-full border-2 border-fuchsia-700" src="/assets/images/logo/logo.webp" alt="Logo">
      <span class="ml-4 text-2xl font-bold text-fuchsia-700 tracking-wide hidden md:flex lg:flex">E-Groceries</span>
    </div>

    <!-- Menu for larger screens -->
    <nav class="menu hidden md:flex lg:flex items-center gap-8">
      <a href="#" 
         class="text-gray-800 font-medium hover:text-fuchsia-600 hover:underline transition-all duration-300">
        Home
      </a>
      <a href="#" 
         class="text-gray-800 font-medium hover:text-fuchsia-600 hover:underline transition-all duration-300">
        Features
      </a>
      <a href="#" 
         class="text-gray-800 font-medium hover:text-fuchsia-600 hover:underline transition-all duration-300">
        Our Product
      </a>
      <a href="#" 
         class="text-gray-800 font-medium hover:text-fuchsia-600 hover:underline transition-all duration-300">
        Testimonial
      </a>
      <a href="#" 
         class="text-gray-800 font-medium hover:text-fuchsia-600 hover:underline transition-all duration-300">
        About
      </a>
    </nav>

    <!-- Sidebar toggle for smaller screens -->
    <button class="md:hidden lg:hidden p-2 rounded-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white shadow-md transition" on:click={() => sidebar_show = !sidebar_show}>
      <i class="fa-solid fa-bars text-2xl"></i>
    </button>
  </header>

  <!-- Sidebar -->
  <Sidebar bind:show={sidebar_show} />
</div>