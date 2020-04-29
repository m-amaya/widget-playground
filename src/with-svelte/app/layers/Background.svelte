<script>
  import { css } from 'emotion';

  const container = css({
    position: 'relative',
    background: 'linear-gradient(0deg, #59DFFD 0%, #0D58AE 100%)',
    height: '100%',
    width: '100%',
  });

  const topBubble = css({
    position: 'absolute',
    top: 10,
    left: 40,
    background:
      'linear-gradient(315deg, rgba(174,174,174, 0.3) 0%, rgba(146, 142, 142, 0) 100%)',
    borderRadius: '50%',
    height: 40,
    width: 40,
  });
</script>

<div class={container}>
  <div class={topBubble} />
</div>
