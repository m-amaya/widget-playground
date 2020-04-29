import App from './app/App.svelte';

const widget = document.getElementById('widget') as HTMLDivElement;
const app = new App({ target: widget });

export default app;
