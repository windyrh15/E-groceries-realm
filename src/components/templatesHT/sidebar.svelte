<script>
    import { fade } from 'svelte/transition';
    export let show = false; // Properti yang di-bind dari parent
  </script>
  
  {#if show}
    <div class="z-10 flex flex-col gap-5 justify-center items-center fixed top-0 right-0 w-full h-full bg-fuchsia-50"
         transition:fade>
      <a href="#" on:click={() => show = false}>Home</a>
      <a href="#" on:click={() => show = false}>Features</a>
      <a href="#" on:click={() => show = false}> Our Product</a>
      <a href="#" on:click={() => show = false}>Testimonial</a>
      <a href="#" on:click={() => show = false}>About</a>
      
    </div>
  {/if}
  