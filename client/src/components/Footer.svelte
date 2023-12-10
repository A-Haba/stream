<script lang="ts">
	import { store } from "../store/store";

  $: message = $store.parameters.message
  $: messsageDuration = Math.ceil(message.length / 4) * 2
  $: style = message.length > 25 ? `animation: marquee ${messsageDuration}s linear infinite;` : `padding: 0; animation:none;`

</script>

<div class="container">
  <div class="tag">
    <div class="tag-text">
    #VTA受験中
    </div>
  </div>
  <div class="message">
    <div class="message-window">
      <span class="marquee-span" style="{style}">{message}</span>
    </div>
  </div>

  <div class="right">

  </div>
</div>

<style>
  .container {
    display: grid;
    height: 100%;

    grid-template:
     "tag message right" 1fr / 20% 60% 20%
  }

  .tag {
    grid-area: tag;
    height: 100%;
    width: 100%;
    position: relative;
  }

  .tag-text {
    position: absolute;
    margin: auto;
    font-size: 40px;
    font-weight: 700;
    color: blue;
    top: 0;
    bottom: 0px;
    left: 15px;
    height: 50px;
    font-weight: 700;
  }

  .message {
    grid-area: message;
  }

  .message-window {
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
    overflow: hidden;
    width: auto;
    box-shadow: 10px 5px 5px #999;
    font-weight: 700;
  }
  .marquee-span {
    display: inline-block;
    padding-left: 100%;
    white-space: nowrap;
    animation: marquee 10s linear infinite
  }

  @keyframes -global-marquee {
    from {
      transform: translate(0%);
    }
    to {
      transform: translate(-100%);
    }
  }

  .right {
    grid-area: right;
  }


</style>
