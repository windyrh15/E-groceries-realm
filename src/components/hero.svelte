<script>
	import { onMount } from 'svelte';

	let images = [
		'/assets/images/hero-2.webp',
		'/assets/images/hero-1.webp',
		'/assets/images/hero-3.webp',
		'/assets/images/hero-4.webp'
	];

	onMount(() => {
		const carousel = document.getElementById('carousel'); // Wrapper carousel
		const totalSlides = images.length; // Jumlah slide berdasarkan array
		let currentIndex = 0; // Indeks slide aktif
		const autoplayInterval = 3000; // Interval autoplay

		function updateSlide() {
			const offset = -currentIndex * 100; // Pindahkan slide dengan persen
			carousel.style.transform = `translateX(${offset}%)`;
			carousel.style.transition = 'transform 0.5s ease-in-out';
		}

		setInterval(() => {
			currentIndex = (currentIndex + 1) % totalSlides; // Loop ke awal jika akhir tercapai
			updateSlide();
		}, autoplayInterval);

		updateSlide();
	});
</script>

<div id="home" class="background relative mt-12 w-full overflow-hidden">
	<!-- Carousel Wrapper -->
	<div id="carousel" class="flex">
		{#each images as image, index}
			<img
				src={image}
				class="mx-auto h-auto max-h-[300px] max-h-[400px] w-full object-contain md:pt-10 lg:pt-10"
				alt={`Image ${index + 1}`}
			/>
		{/each}
	</div>
</div>

<style>
	.flex {
		display: flex;
		width: 100%;
		transition: transform 0.5s ease-in-out;
	}

	.flex img {
		flex-shrink: 0;
		width: 100%;
		height: auto;
	}

	.background {
		background-color: #fffcfc;
		background-image: url('https://www.transparenttextures.com/patterns/axiom-pattern.png');
		/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
	}
</style>
