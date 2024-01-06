<script lang="ts">
	import { enhance } from '$app/forms';
	import { fly } from 'svelte/transition';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<form
	action="?"
	method="post"
	class="w-64 card card-bordered relative shadow-xl"
	use:enhance={() => {
		form = null;

		return async (e) => {
			await e.update();
		};
	}}
>
	<div class="card-body">
		<div class="card-title">Login</div>
		<div class="form-control">
			<label for="username" class="label label-text">
				<span>Username</span>
			</label>
			<input
				type="text"
				name="username"
				id="username"
				value={form?.username ?? ''}
				class="input input-sm input-bordered"
			/>
		</div>
		<div class="form-control">
			<label for="password" class="label label-text">
				<span>Password</span>
			</label>
			<input
				type="password"
				name="password"
				id="password"
				value={form?.password ?? ''}
				class="input input-sm input-bordered"
			/>
		</div>
		<div class="card-actions items-center">
			<button type="submit" class="btn btn-sm">Enter</button>
			<a href={'#'} class="btn btn-xs btn-link link-neutral no-underline">Need help ?</a>
		</div>
	</div>

	<a href="/auth-cookie" class="absolute -top-8 btn btn-xs btn-link link-neutral no-underline"
		>{'< Back'}</a
	>

	{#if form?.error}
		<div
			class="absolute text-xs text-error bottom-2 left-1/2 transform -translate-x-1/2"
			in:fly={{ x: -20, delay: 100 }}
		>
			{form.message}
		</div>
	{/if}
</form>
