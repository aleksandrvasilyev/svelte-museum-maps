<script>
	import { onMount } from 'svelte';
	import { museums } from './museums.js';

	let map;
	let selectedMuseum = null;

	onMount(() => {
		initMap();
		return () => {
			if (map) {
				map.remove();
			}
		};
	});

	function initMap() {
		if (typeof L !== 'undefined') {
			map = L.map('map').setView([52.3676, 4.9011], 14);

			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

			museums.forEach((museum) => {
				const marker = L.marker(museum.coordinates).addTo(map).bindPopup(`
              <div class="popup-content">
                <h3>${museum.name}</h3>
                <p>${museum.description}</p>
                <p>Rating: ⭐ ${museum.rating}/5</p>
                <button class="popup-button">View Details</button>
              </div>
            `);

				marker.on('popupopen', () => {
					const button = document.querySelector('.popup-button');
					if (button) {
						button.addEventListener('click', () => {
							selectedMuseum = museum;
							marker.closePopup();
						});
					}
				});
			});
		}
	}

	function handleCloseInfo() {
		selectedMuseum = null;
	}
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
		integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
		crossorigin=""
	/>
	<script
		src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
		integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
		crossorigin=""
	></script>
</svelte:head>

<div class="museum-map-container">
	<div id="map" class="map-container"></div>

	{#if selectedMuseum}
		<div class="museum-info-panel">
			<button class="close-button" on:click={handleCloseInfo}>x</button>
			<h2>{selectedMuseum.name}</h2>
			<div class="rating">Rating: {selectedMuseum.rating}/5 ⭐</div>
			<p class="description">{selectedMuseum.description}</p>
			<div class="actions">
				<button class="action-button">Plan Visit</button>
				<button class="action-button">Get Directions</button>
			</div>
		</div>
	{/if}
</div>

<style>
	.museum-map-container {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.map-container {
		height: 500px;
		width: 100%;
		border-radius: 0.5rem;
	}

	.museum-info-panel {
		position: absolute;
		bottom: 1rem;
		left: 1rem;
		width: calc(100% - 2rem);
		max-width: 400px;
		background: white;
		padding: 1rem;
		border-radius: 0.5rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		z-index: 1000;
	}

	.close-button {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		background: none;
		border: none;
		font-size: 1.5rem;
		cursor: pointer;
	}

	h2 {
		margin-top: 0;
		color: #ff4500;
		font-size: 1.25rem;
		font-weight: bold;
	}

	.rating {
		margin-bottom: 0.5rem;
		font-weight: bold;
	}

	.description {
		margin-bottom: 1rem;
		color: #555;
	}

	.actions {
		display: flex;
		gap: 0.5rem;
	}

	.action-button {
		background-color: #0b3d91;
		color: white;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 0.25rem;
		cursor: pointer;
		font-weight: bold;
	}

	:global(.popup-content) {
		text-align: center;
		padding: 0.5rem;
	}

	:global(.popup-content h3) {
		margin-top: 0;
		color: #ff4500;
		font-size: 1rem;
	}

	:global(.popup-button) {
		background-color: #0b3d91;
		color: white;
		border: none;
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		cursor: pointer;
		margin-top: 0.5rem;
	}
</style>
