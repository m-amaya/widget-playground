import backgroundLayer from './components/background';
import todoLayer from './components/todo';

const widget = <HTMLCanvasElement>document.getElementById('widget');
widget.width = window.innerWidth;
widget.height = window.innerHeight;

const ctx = widget.getContext('2d');

if (ctx) {
  backgroundLayer(ctx);
  todoLayer(ctx);
}
