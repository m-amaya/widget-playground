<script>
  import { css } from 'emotion';
  import { BehaviorSubject } from 'rxjs';
  import { scan, tap } from 'rxjs/operators';

  const button = css({
    'position': 'absolute',
    'top': '50%',
    'left': '50%',
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'backgroundColor': '#9D1B1B',
    'borderRadius': '50%',
    'cursor': 'pointer',
    'height': 138,
    'width': 138,
    'transform': 'translate(-50%, -50%)',
    'zIndex': 0,
    '::before': {
      content: '" "',
      position: 'absolute',
      top: -1,
      left: -1,
      background:
        'radial-gradient(55.27% 66.54% at 37.59% 30.08%, #FF2C2C 0%, #A92222 98.9%), #C4C4C4;',
      borderRadius: '50%',
      height: 130,
      width: 130,
      zIndex: -100,
    },
  });

  const text = css({
    color: 'white',
    fontFamily: 'Source Sans Pro',
    fontSize: '2rem',
    fontWeight: 700,
  });

  const value = new BehaviorSubject(0).pipe(
    scan((acc) => acc + 1),
    tap(console.log),
  );

  const onClick = () => {
    value.next();
  };
</script>

<div class={button} on:click={onClick}>
  <div class={text}>{$value}</div>
</div>
