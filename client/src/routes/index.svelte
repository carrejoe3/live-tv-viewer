<script>
  import store from '../store';
  import { onMount } from 'svelte';
  import 'papercss/dist/paper.min.css';

  onMount(async () => {
    store.dispatch({ type:'INCREMENT' });
  })
</script>

<div class="container">
  <div id="iframeContainer" class="paper">
    <iframe
      title="Twitch Player"
      src="https://player.twitch.tv/?channel=twitchpresents&parent=localhost"
      height={"100%"}
      width={"100%"}
      allowfullscreen={true}>
    </iframe>
  </div>
</div>

<style>

  .container {
    width: 100vw;
    height: 100vh;    
    display: flex;
  }

  #iframeContainer {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
  }

</style>
