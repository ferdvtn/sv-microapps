<script>
	import '../app.css';

	const apps = [
		{
			name: 'Auth cookie',
			url: '/auth-cookie'
		},
		{
			name: 'Filter radio',
			url: '/filter-radio'
		},
		{
			name: 'Image preview',
			url: '/image-preview'
		},
		{
			name: 'Product',
			url: '/product'
		}
	];
</script>

<slot />

<div class="fixed inset-x-0 bottom-0 bg-base-200 w-screen">
	<ul class="flex justify-start items-center text-sm overflow-y-scroll">
		{#each apps as app}
			<li class="p-1 text-nowrap text-center">
				<a href={app.url} class="btn btn-xs shadow bg-base-200 text-base-content">{app.name}</a>
			</li>
		{/each}
	</ul>
</div>
