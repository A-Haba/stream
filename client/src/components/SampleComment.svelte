<script lang="ts">
	import { onMount, tick } from 'svelte';

	let list: Array<{ comment: string; id: number }> = [];
	let ulElement: HTMLUListElement;
	const comments = [
		'test',
		'あああああああああああ',
		'初見です',
		'うおおおおおおおおおおおおお',
		'草'
	];

	const getRandomComment = () => {
		return comments[Math.floor(Math.random() * comments.length)];
	};

	onMount(() => {
		setInterval(() => {
			list.push({ comment: getRandomComment(), id: Math.random() });
			if (list.length === 101) {
				list.shift();
			}
			list = list;
		}, 1000);
	});

	$: if (list) {
		scrollToBottom(ulElement);
	}

	const scrollToBottom = async (node: HTMLUListElement) => {
		if (!node) return;
		await tick();
		node.scroll({ top: node.scrollHeight, behavior: 'smooth' });
	};
</script>

<ul class="comment-ul" bind:this={ulElement}>
	{#each list as comment (comment.id)}
		<li class="comment">{comment.comment}</li>
	{/each}
</ul>

<style>
	.comment-ul {
		margin: 0;
		padding: 0;
		overflow: hidden;
		height: 100%;
		list-style: none;
		font-size: 20px;
		text-align: left;
	}

	.comment {
		margin: 0;
		animation: slidein 0.2s linear;
	}

	@keyframes slidein {
		0% {
			transform: translateX(100%);
		}
		100% {
			transform: translateX(0);
		}
	}
</style>
