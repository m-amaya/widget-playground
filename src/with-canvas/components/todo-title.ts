import font from '../styles/font';

export default (ctx: CanvasRenderingContext2D) => {
  const x = window.innerWidth / 2 - 60;

  ctx.fillStyle = '#000000';
  ctx.font = `${font.weight.bold} 3rem ${font.family}`;
  ctx.fillText('Todos', x, 230);
};
