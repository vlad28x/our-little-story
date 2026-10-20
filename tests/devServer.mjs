import { createServer } from 'vite';
// Keep dependency prebundling separate from the user's running dev server.
const server=await createServer({cacheDir:'node_modules/.vite-dev-recovery',server:{host:'127.0.0.1',port:5174,strictPort:true}});
await server.listen();
