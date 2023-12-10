<script lang="ts">
	import { onMount } from 'svelte';
	import { store } from '../store/store';
  import logo from '$lib/asset/logo.png'
	let date = new Date();
  $: month = date.getMonth()
  $: day = date.getDate()
	$: hour = ('00' + date.getHours()).slice(-2);
	$: min = ('00'+ date.getMinutes()).slice(-2);
	// $: sec = date.getSeconds();	
	onMount( () => {
		setInterval(() => {
			date = new Date();
		}, 1000);
	});
  $: title = $store.parameters.title

</script>

<div class="container">
  <div class="logo">
    <img class='logo-image' src={logo} alt="logo"/>
  </div>
  <div class="title">
    <div class="title-window">
        {title}
    </div>
  </div>
  <div class="blank">
    
  </div>
  <div class="clock">
    <div class="clock-window">
      {month}/{day} {hour}:{min}
    </div>
  </div>
</div>

<style>
  .container {
    display: grid;
    height: 100%;

    grid-template:
     "logo title blank clock right" 1fr / 1fr 2fr 2fr 300px 60px
  }

  .logo {
    grid-area: logo;
    padding: 0 20px;
  } 

  .logo-image {
    margin: auto;
    height: 10vh;
  }

  .title {
    grid-area: title;
  }

  .title-window {
    margin-top: 10px;
    height: 70px;
    border: 4px solid #999;
    border-radius: 5px;
    box-sizing: border-box;
    background: #fff;
    color: #333;
    font-size: 40px;
    text-align: center;
    vertical-align: bottom;
    box-shadow: 10px 5px 5px #999;
    font-weight: 700;
  }

  .blank {
    grid-area: blank;
  }

  .clock {
    grid-area: clock;
  }

  .clock-window {
    margin-top: 10px;
    height: auto;
    border: 4px solid #999;
    border-radius: 5px;
    background: #fff;
    color: #333;
    font-size: 40px;
    text-align: center;
    vertical-align: bottom;
    box-shadow: 10px 5px 5px #999;
  }

</style>
