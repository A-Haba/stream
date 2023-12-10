<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	import { setStorageValue, store } from '../store/store';
	import Comment from '../components/Comment.svelte';
	onMount(() => {
		setStorageValue(store.dispatch);

		const socket = new WebSocket('ws://127.0.0.1:8080/socket');
		socket.onopen = (e) => {
			console.log('open');
			console.log(e);
		};
		socket.onerror = (e) => {
			console.log('error');
			console.log(e);
		};
		socket.onclose = (e) => {
			console.log('close');
			console.log(e);
		};
		socket.onmessage = (e) => {
			console.log('getMessage');
			store.dispatchMessage(e.data);
		};
	});
</script>

<div class="container">
	<div class="head">
		<Header />
	</div>
	<div class="main"></div>
	<div class="comment">
		<Comment />
	</div>
	<div class="blank"></div>
	<div class="foot">
		<Footer />
	</div>
</div>

<style>
	.container {
		width: 100vw;
		height: 100vh;
		background:
			conic-gradient(
					#eee 30deg,
					transparent 30deg 90deg,
					#eee 90deg 150deg,
					transparent 150deg 210deg,
					#eee 210deg 270deg,
					transparent 270deg 330deg,
					#eee 330deg
				)
				50% 50% / 32px calc(1.732 * 32px),
			#fff;

		display: grid;

		grid-template:
			[header-left] 'head head' 10% [header-right]
			[main-left] 'main comment ' 50% [main-right]
			[main-left] 'main blank' 30% [main-right]
			[footer-left] 'foot foot' 10px [footer-right]
			/ 80% 20%;
	}

	.head {
		grid-area: head;
		background-color: transparent;
	}
	.main {
		grid-area: main;
		background-color: green;
	}
	.comment {
		grid-area: comment;
		background-color: transparent;
	}
	.blank {
		grid-area: blank;
		background-color: transparent;
	}
	.foot {
		grid-area: foot;
		background-color: transparent;
	}
</style>
