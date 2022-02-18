<script>
	import { Provider } from 'svelte-redux-connect';
	import store from '../store';
	import 'papercss/dist/paper.min.css';
	import { Button, Card } from 'spaper';
</script>

<Provider {store} />

<div class="container paper margin-top margin-bottom">
	<Card title="My awesome Paper card!" image="https://picsum.photos/768">
		Card Content
		<p slot="bottom">
			<Button>Check it out</Button>
		</p>
	</Card>
</div>
