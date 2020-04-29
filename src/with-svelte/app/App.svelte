<script>
  import { css } from 'emotion';
  import Background from './layers/Background.svelte';
  import Button from './components/Button.svelte';

  const container = css({
    position: 'relative',
    height: 310,
    width: 335,
  });
</script>

<div class={container}>
  <Background />
  <Button />
</div>
