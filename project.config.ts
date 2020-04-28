import path from 'path';

/**
 * Current App - 'canvas', 'svelte', or 'svg'
 */
export const APP_TYPE = process.env.APP_TYPE || 'canvas';

/**
 * Directory Paths
 */
const ROOT = path.resolve(__dirname);
const SOURCE = path.resolve(ROOT, 'src', `with-${APP_TYPE}`);
const OUTPUT = path.resolve(ROOT, 'public');

export const PATHS = {
  entry: path.join(SOURCE, 'index.ts'),
  output: OUTPUT,
  index: {
    input: path.join(SOURCE, 'index.html'),
    output: path.join(OUTPUT, 'index.html'),
  },
  aliases: {
    components: path.join(SOURCE, 'components'),
    store: path.join(SOURCE, 'store'),
    styles: path.join(SOURCE, 'styles'),
  },
};

/**
 * Server
 */
export const SERVER = {
  port: 8000,
};
