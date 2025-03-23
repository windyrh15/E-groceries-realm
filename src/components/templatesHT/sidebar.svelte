<script>
	import { fade } from 'svelte/transition';
	export let show = false; // Properti yang di-bind dari parent
</script>

{#if show}
	<div
		class="fixed top-0 right-0 z-30 flex h-full w-full flex-col items-center justify-center gap-5 bg-fuchsia-50"
		transition:fade
	>
		<a href="#home" on:click={() => (show = false)}>Home</a>
		<a href="#feature" on:click={() => (show = false)}>Features</a>
		<a href="#bestproduct" on:click={() => (show = false)}> Our Product</a>
		<a href="#testimoni" on:click={() => (show = false)}>Testimonial</a>
		<a href="#about" on:click={() => (show = false)}>About</a>
	</div>
{/if}
