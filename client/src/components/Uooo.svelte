<script lang="ts">
import { onMount } from 'svelte';

interface Marquees {
  id: number;
  top:number;
  duration: number;
  length: number;
  size: number;
}

let marquees = new Array<Marquees>();

function addMarquee() {
  console.log('addMarquee')
  marquees = [...marquees,{
    id: Math.random(),
    top: Math.random() * 100,
    duration: Math.random() * 3 + 2.5,
    length: Math.floor(Math.random() * 10) + 5,
    size: Math.floor(Math.random() * 30) + 30
  } ]
}

onMount(() => {
  const interval = setInterval(addMarquee, 100);
  setTimeout(()=>{
    clearInterval(interval)
  },2500)

  return () => {
    clearInterval(interval);
  };
});
</script>
<div class="marquee-container">
  {#each marquees as marquee (marquee.id)}
    <div class="marquee" style="top: {marquee.top}%; animation-duration: {marquee.duration}s; font-size: {marquee.size}px">
      う{'お'.repeat(marquee.length)}
    </div>
  {/each}
</div>
<style>
  .marquee-container {
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: transparent;
  }

  .marquee {
    position: absolute;
    white-space: nowrap;
    color: #000;
    font-size: 24px;
    animation: move linear infinite;
  }

  @keyframes move {
    from {
      left: 100%;
    }
    to {
      left: -100%;
    }
  }
</style>