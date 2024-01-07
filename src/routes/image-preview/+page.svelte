<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="flex flex-col justify-center items-center h-[calc(100dvh)]">
	<div class="card card-bordered w-64 shadow-xl">
		<div class="card-body justify-evenly">
			<div class="card-title"><h1>Image Preview</h1></div>
			{#each data.images as img}
				<a href="src/lib/assets/image-preview/images/{img}" target="_blank" class="group">
					<img
						src="src/lib/assets/image-preview/images/{img}"
						alt={img.toString()}
						class="w-full h-40 object-cover rounded transform transition group-hover:translate-x-1"
					/>
				</a>
			{/each}
		</div>
	</div>
</div>
