<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	export let formEl: HTMLFormElement;
</script>

<div class="flex flex-col justify-center items-center min-h-screen">
	<form
		method="get"
		class="card card-bordered w-64 shadow-xl"
		bind:this={formEl}
		on:change={() => {
			formEl.submit();
		}}
	>
		<div class="card-body">
			<div class="card-title">Filter radio</div>
			<div class="form-control">
				<label for="" class="label label-text">
					<span>Group string : {data.radio_string}</span>
				</label>
				<label class="flex justify-between btn btn-sm">
					<input
						type="radio"
						name="radio-string"
						class="radio radio-sm"
						value="A"
						bind:group={data.radio_string}
					/>
					<span class="label-text">A</span>
				</label>
			</div>
			<div class="form-control">
				<label class="flex justify-between btn btn-sm">
					<input
						type="radio"
						name="radio-string"
						class="radio radio-sm"
						value="B"
						bind:group={data.radio_string}
					/>
					<span class="label-text">B</span>
				</label>
			</div>
			<div class="form-control">
				<label class="flex justify-between btn btn-sm">
					<input
						type="radio"
						name="radio-string"
						class="radio radio-sm"
						value="C"
						bind:group={data.radio_string}
					/>
					<span class="label-text">C</span>
				</label>
			</div>
			<label for="" class="label label-text">
				<span>Group number : {data.radio_number}</span>
			</label>
			<div class="form-control">
				<label class="flex justify-between btn btn-sm">
					<input
						type="radio"
						name="radio-number"
						class="radio radio-sm"
						value="1"
						bind:group={data.radio_number}
					/>
					<span class="label-text">1</span>
				</label>
			</div>
			<div class="form-control">
				<label class="flex justify-between btn btn-sm">
					<input
						type="radio"
						name="radio-number"
						class="radio radio-sm"
						value="2"
						bind:group={data.radio_number}
					/>
					<span class="label-text">2</span>
				</label>
			</div>
			<div class="form-control">
				<label class="flex justify-between btn btn-sm">
					<input
						type="radio"
						name="radio-number"
						class="radio radio-sm"
						value="3"
						bind:group={data.radio_number}
					/>
					<span class="label-text">3</span>
				</label>
			</div>
			<!-- <div class="card-actions items-center">
				<button type="submit" class="btn btn-sm">Apply</button>
				<button type="submit" class="btn btn-xs btn-link link-neutral no-underline">Reset</button>
			</div> -->
		</div>
	</form>
</div>
