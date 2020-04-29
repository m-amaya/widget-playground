import { SvelteComponent } from 'svelte';

declare module '*.svelte' {
  const content: SvelteComponent;
  export default content;
}
