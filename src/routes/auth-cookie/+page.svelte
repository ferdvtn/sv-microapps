<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="text-2xl">Hello,</h1>
<h1 class="text-3xl font-semibold">{data.user?.name ?? 'Guest'}</h1>
