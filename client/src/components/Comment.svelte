<script lang="ts">
	import SampleComment from './SampleComment.svelte';
</script>

<div class="container">
	<div class="comment-window">
		<!-- <SampleComment /> -->
	</div>
</div>

<style>
	.container {
		padding: 10px;
		width: 100%;
		height: 100%;
	}

	.comment-window {
		height: 100%;
		width: 90%;
		border: 4px solid #999;
		border-radius: 5px;
		box-sizing: border-box;
		background: #fff;
		color: #333;
		font-size: 40px;
		text-align: center;
		vertical-align: bottom;
		box-shadow: 10px 5px 5px #999;
		/* font-weight: 700; */
	}
</style>
