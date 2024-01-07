<script lang="ts">
	import cat1 from '$lib/assets/image-preview/images/cat-1.jpg';
	import cat2 from '$lib/assets/image-preview/images/cat-2.jpg';
	import cat3 from '$lib/assets/image-preview/images/cat-3.jpg';

	const images = [cat1, cat2, cat3];
</script>

<div class="flex flex-col justify-center items-center h-[calc(100dvh)]">
	<div class="card card-bordered w-64 shadow-xl">
		<div class="card-body">
			<div class="card-title"><h1>Image Preview</h1></div>
			{#each images as img}
				<a href={img} target="_blank" class="group">
					<img
						src={img}
						alt={img}
						class="w-full h-40 object-cover rounded transform transition group-hover:translate-x-1"
					/>
				</a>
			{/each}
		</div>
	</div>
</div>
