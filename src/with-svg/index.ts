import backgroundSvg from './components/background.svg';
import getImage from './utils/getImage';

const widget = document.getElementById('widget') as HTMLCanvasElement;
widget.width = window.innerWidth;
widget.height = window.innerHeight;

const ctx = widget.getContext('2d');

if (ctx) {
  getImage(backgroundSvg).onload = () => {
    ctx.drawImage(getImage(backgroundSvg), 0, 0);
  };
}
