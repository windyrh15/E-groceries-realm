<script>
	import { fade } from 'svelte/transition';
	export let showStore = false; // Properti yang di-bind dari parent
</script>

{#if showStore}
	<div
		id="store-scroll"
		class="fixed top-0 right-0 z-50 h-full w-full overflow-y-auto backdrop-blur-md"
		transition:fade
	>
		<!-- Header -->
		<header class="flex w-full items-center justify-between px-8 py-4 shadow-lg backdrop-blur-md">
			<!-- Judul Header -->
			<h1 class="hidden text-xl font-semibold md:flex">Store Page</h1>

			<!-- Search Input -->
			<input
				type="text"
				placeholder="Search products..."
				class="rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-fuchsia-500 focus:outline-none"
			/>

			<!-- Bagian Close dan Cart -->
			<div class="flex items-center justify-center gap-6">
				<!-- Cart Icon -->
				<button class="relative cursor-pointer">
					<i class="fa-solid fa-cart-shopping text-lg"></i>
					<span
						class="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white"
					>
						3
					</span>
				</button>
				<!-- Close Button -->
				<a href="#home" class="cursor-pointer text-xl" on:click={() => (showStore = false)}>
					<i class="fa-solid fa-xmark"></i>
				</a>
			</div>
		</header>

		<!-- Main Content -->
		<div class="p-8">
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				<!-- Contoh Card 1 -->
				<div class="rounded-lg bg-white p-5 shadow-md">
					<img
						src="https://via.placeholder.com/150"
						alt="Product 1"
						class="mb-4 w-full rounded-md"
					/>
					<h3 class="text-lg font-semibold">Product 1</h3>
					<p class="text-sm text-gray-600">Description of Product 1.</p>
					<p class="mt-3 text-lg font-bold text-fuchsia-500">$29.99</p>
					<button class="mt-4 w-full rounded bg-fuchsia-500 py-2 text-white hover:bg-fuchsia-600">
						Add to Cart
					</button>
				</div>

				<!-- Contoh Card 2 -->
				<div class="rounded-lg bg-white p-5 shadow-md">
					<img
						src="https://via.placeholder.com/150"
						alt="Product 2"
						class="mb-4 w-full rounded-md"
					/>
					<h3 class="text-lg font-semibold">Product 2</h3>
					<p class="text-sm text-gray-600">Description of Product 2.</p>
					<p class="mt-3 text-lg font-bold text-fuchsia-500">$19.99</p>
					<button class="mt-4 w-full rounded bg-fuchsia-500 py-2 text-white hover:bg-fuchsia-600">
						Add to Cart
					</button>
				</div>

				<div class="rounded-lg bg-white p-5 shadow-md">
					<img
						src="https://via.placeholder.com/150"
						alt="Product 2"
						class="mb-4 w-full rounded-md"
					/>
					<h3 class="text-lg font-semibold">Product 2</h3>
					<p class="text-sm text-gray-600">Description of Product 2.</p>
					<p class="mt-3 text-lg font-bold text-fuchsia-500">$19.99</p>
					<button class="mt-4 w-full rounded bg-fuchsia-500 py-2 text-white hover:bg-fuchsia-600">
						Add to Cart
					</button>
				</div>

				<div class="rounded-lg bg-white p-5 shadow-md">
					<img
						src="https://via.placeholder.com/150"
						alt="Product 2"
						class="mb-4 w-full rounded-md"
					/>
					<h3 class="text-lg font-semibold">Product 2</h3>
					<p class="text-sm text-gray-600">Description of Product 2.</p>
					<p class="mt-3 text-lg font-bold text-fuchsia-500">$19.99</p>
					<button class="mt-4 w-full rounded bg-fuchsia-500 py-2 text-white hover:bg-fuchsia-600">
						Add to Cart
					</button>
				</div>

				<div class="rounded-lg bg-white p-5 shadow-md">
					<img
						src="https://via.placeholder.com/150"
						alt="Product 2"
						class="mb-4 w-full rounded-md"
					/>
					<h3 class="text-lg font-semibold">Product 2</h3>
					<p class="text-sm text-gray-600">Description of Product 2.</p>
					<p class="mt-3 text-lg font-bold text-fuchsia-500">$19.99</p>
					<button class="mt-4 w-full rounded bg-fuchsia-500 py-2 text-white hover:bg-fuchsia-600">
						Add to Cart
					</button>
				</div>

				<div class="rounded-lg bg-white p-5 shadow-md">
					<img
						src="https://via.placeholder.com/150"
						alt="Product 2"
						class="mb-4 w-full rounded-md"
					/>
					<h3 class="text-lg font-semibold">Product 2</h3>
					<p class="text-sm text-gray-600">Description of Product 2.</p>
					<p class="mt-3 text-lg font-bold text-fuchsia-500">$19.99</p>
					<button class="mt-4 w-full rounded bg-fuchsia-500 py-2 text-white hover:bg-fuchsia-600">
						Add to Cart
					</button>
				</div>

				<div class="rounded-lg bg-white p-5 shadow-md">
					<img
						src="https://via.placeholder.com/150"
						alt="Product 2"
						class="mb-4 w-full rounded-md"
					/>
					<h3 class="text-lg font-semibold">Product 2</h3>
					<p class="text-sm text-gray-600">Description of Product 2.</p>
					<p class="mt-3 text-lg font-bold text-fuchsia-500">$19.99</p>
					<button class="mt-4 w-full rounded bg-fuchsia-500 py-2 text-white hover:bg-fuchsia-600">
						Add to Cart
					</button>
				</div>

				<div class="rounded-lg bg-white p-5 shadow-md">
					<img
						src="https://via.placeholder.com/150"
						alt="Product 2"
						class="mb-4 w-full rounded-md"
					/>
					<h3 class="text-lg font-semibold">Product 2</h3>
					<p class="text-sm text-gray-600">Description of Product 2.</p>
					<p class="mt-3 text-lg font-bold text-fuchsia-500">$19.99</p>
					<button class="mt-4 w-full rounded bg-fuchsia-500 py-2 text-white hover:bg-fuchsia-600">
						Add to Cart
					</button>
				</div>

				<div class="rounded-lg bg-white p-5 shadow-md">
					<img
						src="https://via.placeholder.com/150"
						alt="Product 2"
						class="mb-4 w-full rounded-md"
					/>
					<h3 class="text-lg font-semibold">Product 2</h3>
					<p class="text-sm text-gray-600">Description of Product 2.</p>
					<p class="mt-3 text-lg font-bold text-fuchsia-500">$19.99</p>
					<button class="mt-4 w-full rounded bg-fuchsia-500 py-2 text-white hover:bg-fuchsia-600">
						Add to Cart
					</button>
				</div>

				<div class="rounded-lg bg-white p-5 shadow-md">
					<img
						src="https://via.placeholder.com/150"
						alt="Product 2"
						class="mb-4 w-full rounded-md"
					/>
					<h3 class="text-lg font-semibold">Product 2</h3>
					<p class="text-sm text-gray-600">Description of Product 2.</p>
					<p class="mt-3 text-lg font-bold text-fuchsia-500">$19.99</p>
					<button class="mt-4 w-full rounded bg-fuchsia-500 py-2 text-white hover:bg-fuchsia-600">
						Add to Cart
					</button>
				</div>

				<!-- Tambahkan lebih banyak card sesuai kebutuhan -->
			</div>
		</div>
	</div>
{/if}
