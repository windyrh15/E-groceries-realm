<script>
	import '../app.css';
	let { children } = $props();

	import Header from '../components/templatesHT/header.svelte';
	import Footer from '../components/templatesHT/footer.svelte';
</script>

<Header />
{@render children()}
<Footer />
