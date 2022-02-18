<script>
  import store from '../store';
  import { onMount } from 'svelte';
	import { Button, Card } from 'spaper';
  import 'papercss/dist/paper.min.css';

  onMount(async () => {
    store.dispatch({ type:'INCREMENT' });
  })
</script>

<div class="container paper margin-top margin-bottom">
	<Card title="My awesome Paper card!" image="https://picsum.photos/768">
		Card Content
		<p slot="bottom">
			<Button>Check it out</Button>
		</p>
	</Card>
</div>
