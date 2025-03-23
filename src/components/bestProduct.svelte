<script>
	import Store from './stores/store.svelte';

	let store_show = false; // Reactive variable to control sidebar visibility
</script>

<div id="bestproduct" class="background best-products-section bg-white px-5 py-10">
	<div class="container mx-auto text-center">
		<!-- Combined Heading for CTA and Best Products -->
		<h2 class="mb-4 text-3xl font-bold text-fuchsia-600">
			Discover the Magic of Our Products from Another Realm
		</h2>
		<p class="mb-8 text-lg text-gray-600">
			Journey into the extraordinary world of freshness, where every vegetable is harvested with
			care and packed with the magical touch of our 'fantasy realm.' From leafy greens to vibrant
			produce, each item is a treasure waiting for your table. Ready to bring the magic home?
		</p>

		<!-- Product Cards -->
		<div class="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-3">
			<!-- Product 1 -->
			<div class="product-card rounded-lg bg-fuchsia-50 p-6 shadow-lg">
				<img
					src="/assets/images/bestProduct/magicalCarrot.webp"
					alt="Product 1"
					class="mb-4 h-40 w-full rounded-lg object-cover"
				/>
				<h3 class="text-lg font-semibold text-fuchsia-600">Magical Carrots</h3>
				<p class="mb-3 text-sm text-gray-600">
					These carrots are so fresh, they might just jump into your basket!
				</p>
				<p class="mb-4 font-bold text-fuchsia-700">$3.99 / kg</p>
				<button
					class="rounded-lg bg-fuchsia-500 px-6 py-2 text-white transition hover:bg-fuchsia-700"
				>
					Buy Now
				</button>
			</div>

			<!-- Product 2 -->
			<div class="product-card rounded-lg bg-fuchsia-50 p-6 shadow-lg">
				<img
					src="/assets/images/bestProduct/fantasySpinach.webp"
					alt="Product 2"
					class="mb-4 h-40 w-full rounded-lg object-cover"
				/>
				<h3 class="text-lg font-semibold text-fuchsia-600">Fantasy Spinach</h3>
				<p class="mb-3 text-sm text-gray-600">
					Add some strength and magic to your meals with this nutritious spinach!
				</p>
				<p class="mb-4 font-bold text-fuchsia-700">$2.49 / kg</p>
				<button
					class="rounded-lg bg-fuchsia-500 px-6 py-2 text-white transition hover:bg-fuchsia-700"
				>
					Buy Now
				</button>
			</div>

			<!-- Product 3 -->
			<div class="product-card rounded-lg bg-fuchsia-50 p-6 shadow-lg">
				<img
					src="/assets/images/bestProduct/goldenTomatoes.webp"
					alt="Product 3"
					class="mb-4 h-40 w-full rounded-lg object-cover"
				/>
				<h3 class="text-lg font-semibold text-fuchsia-600">Golden Tomatoes</h3>
				<p class="mb-3 text-sm text-gray-600">
					Juicy and vibrant, perfect for salads or sauces. Straight from another realm.
				</p>
				<p class="mb-4 font-bold text-fuchsia-700">$4.99 / kg</p>
				<button
					class="rounded-lg bg-fuchsia-500 px-6 py-2 text-white transition hover:bg-fuchsia-700"
				>
					Buy Now
				</button>
			</div>
		</div>

		<div class="mt-10">
			<p class="mb-4 text-gray-600">
				Explore more of our products from another realm and discover why even dragons choose these
				veggies for their feasts!
			</p>
			<button
				class="cursor-pointer rounded-lg bg-fuchsia-500 px-8 py-3 text-lg text-white shadow-md transition duration-300 hover:bg-fuchsia-700"
				on:click={() => (store_show = !store_show)}
			>
				Explore All Products
			</button>
		</div>
	</div>
</div>

<Store bind:showStore={store_show} />

<style>
	.background {
		background-color: #fffcfc;
		background-image: url('https://www.transparenttextures.com/patterns/axiom-pattern.png');
		/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
	}
</style>
