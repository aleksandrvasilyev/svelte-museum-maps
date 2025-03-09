<script>
	import MuseumMap from './MuseumMap.svelte';
	import { museums } from './museums.js';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Museum list app" />
</svelte:head>

<main class="container mx-auto flex-grow px-4 py-8">
	<section class="mb-12">
		<div class="mb-8 rounded-lg bg-gradient-to-r from-blue-800 to-orange-600 p-8 text-white">
			<h2 class="mb-4 text-3xl font-bold">Museum Finder</h2>
			<p class="max-w-full text-xl">
				We enable visitors to discover Amsterdam's rich cultural heritage through an interactive
				map, helping you find the perfect museums based on your interests, location, and
				preferences.
			</p>
		</div>

		<MuseumMap />

		<div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{#each museums as place}
				<div class="w-full overflow-hidden rounded-lg bg-white shadow-md">
					<div class="bg-gradient-to-r from-blue-500 to-blue-400 px-6 py-4">
						<h2 class="text-2xl font-bold text-white">{place.name}</h2>
					</div>

					<div class="p-6">
						<p class="mb-4 text-gray-700">{place.description}</p>

						<div class="mb-4 flex items-center">
							<div class="mr-2 font-bold text-orange-600">Rating:</div>
							<div class="flex items-center">
								<span class="mr-1 text-lg font-bold">{place.rating}</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5 text-yellow-500"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>
</main>
