<script lang="ts">
	const products = [
		{
			id: 1,
			title: 'Sony Headphone',
			image: 'product-1.jpg'
		},
		{
			id: 2,
			title: 'Canon DSLR',
			image: 'product-2.jpg'
		},
		{
			id: 3,
			title: 'Green mate shoes',
			image: 'product-3.jpg'
		},
		{
			id: 4,
			title: 'Lipstick',
			image: 'product-4.jpg'
		},
		{
			id: 5,
			title: 'Nike shoes',
			image: 'product-5.jpg'
		},
		{
			id: 6,
			title: 'Green Grass',
			image: 'product-6.jpg'
		}
	];
</script>

<div class="container mx-auto mb-9">
	<div class="grid grid-cols-2 gap-3 p-3">
		{#each products as p (p.id)}
			<div class="card card-compact card-bordered shadow-xl">
				<figure>
					<img
						src="/product/images/{p.image}"
						alt={p.image}
						class="aspect-square object-cover object-center"
					/>
				</figure>
				<div class="card-body">
					<div class="card-title">
						<div class="text-sm">{p.title}</div>
						<div class="badge badge-xs badge-secondary"><small>NEW</small></div>
					</div>
					<p class="text-xs">Lorem ipsum dolor sit amet.</p>
					<div class="card-actions justify-end">
						<div class="badge badge-xs badge-outline"><small>Sport</small></div>
						<div class="badge badge-xs badge-outline"><small>Lifestyle</small></div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
