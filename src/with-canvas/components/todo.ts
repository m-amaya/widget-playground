import title from './todo-title';

export default (ctx: CanvasRenderingContext2D) => {
  const width = window.innerWidth / 2 - 250;

  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(width, 150, 500, 600);

  title(ctx);
};
