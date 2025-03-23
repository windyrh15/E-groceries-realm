<script>
	import Sidebar from './sidebar.svelte';
	let sidebar_show = false; // Reactive variable to control sidebar visibility
</script>

<div class="flex flex-col">
	<!-- Header -->
	<header
		class="fixed z-40 flex w-full items-center justify-between px-8 py-4 shadow-lg backdrop-blur-md"
	>
		<!-- Logo -->
		<div class="flex items-center">
			<img
				class="h-12 w-12 rounded-full border-2 border-fuchsia-700"
				src="/assets/images/logo/logo.webp"
				alt="Logo"
			/>
			<span class="ml-4 hidden text-2xl font-bold tracking-wide text-fuchsia-700 md:flex lg:flex"
				>E-Groceries</span
			>
		</div>

		<!-- Menu for larger screens -->
		<nav class="menu hidden items-center gap-8 md:flex lg:flex">
			<a
				href="#home"
				class="font-medium text-gray-800 transition-all duration-300 hover:text-fuchsia-600 hover:underline"
			>
				Home
			</a>
			<a
				href="#feature"
				class="font-medium text-gray-800 transition-all duration-300 hover:text-fuchsia-600 hover:underline"
			>
				Features
			</a>
			<a
				href="#bestproduct"
				class="font-medium text-gray-800 transition-all duration-300 hover:text-fuchsia-600 hover:underline"
			>
				Our Product
			</a>
			<a
				href="#testimoni"
				class="font-medium text-gray-800 transition-all duration-300 hover:text-fuchsia-600 hover:underline"
			>
				Testimonial
			</a>
			<a
				href="#about"
				class="font-medium text-gray-800 transition-all duration-300 hover:text-fuchsia-600 hover:underline"
			>
				About
			</a>
		</nav>

		<!-- Sidebar toggle for smaller screens -->
		<button
			class="rounded-full bg-fuchsia-600 p-2 text-white shadow-md transition hover:bg-fuchsia-700 md:hidden lg:hidden"
			on:click={() => (sidebar_show = !sidebar_show)}
		>
			<i class="fa-solid fa-bars text-2xl"></i>
		</button>
	</header>

	<!-- Sidebar -->
	<Sidebar bind:show={sidebar_show} />
</div>
