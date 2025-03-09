<script>
	import { page } from '$app/state';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header class="bg-white shadow-md">
	<div class="container mx-auto px-4 py-4">
		<div class="flex flex-col items-center justify-between md:flex-row">
			<div class="mb-4 flex items-center md:mb-0">
				<div class="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-orange-600">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 text-white"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
						/>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
						/>
					</svg>
				</div>
				<h1 class="text-2xl font-bold text-gray-800">Amsterdam Museums</h1>
			</div>
			<nav>
				<ul class="flex space-x-6"></ul>
			</nav>
		</div>
	</div>
</header>
