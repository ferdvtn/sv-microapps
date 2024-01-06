<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="flex flex-col justify-center items-center min-h-screen">
	<slot />
	<br />
	{#if data.user}
		<form action="/auth-cookie/logout?" method="post">
			<button type="submit" class="btn btn-sm">Log out</button>
		</form>
	{:else}
		<a href="/auth-cookie/login" class="btn btn-sm">Log in</a>
	{/if}
</div>
