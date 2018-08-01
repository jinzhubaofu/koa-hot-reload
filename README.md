## webpack-node-hot-reload

using webpack hmr feature to develop nodejs program with hot-reload.

### setup

```sh
git clone https://github.com/jinzhubaofu/koa-hot-reload.git --depth=1
cd koa-hot-reload
npm install # or yarn
npm start
open http://0.0.0.0:3000
```

Now you get ready to develop your koa app.

Edit any your source code in `src` except `index.js` and a hot-reload will patch to your running server. Then refresh your browser you will get your updates without restart the koa server.

### Internals

First of all, we use webpack to build koa app bundle which is put in directory `output`.

In development, the webpack compiler will watch all the source code. If you modify any of them, compiler will recompile and publish a hot-patch.

Second, we inject `webpack/hot/poll?1000` into the bundle which check out any updates every 1000ms. If there is any hot-patch, it will get it and apply patches to the running server.

Finally, hot-patch cannot automatically update the koa server because it will just run the hot-updated module again and the `server.js` just try to start a new koa server which is not going to work.

So we get a http-server and attach koa server to it. While a hot-patch applying, we remove the previous koa server and attach the new version koa server to it. These lines the `src/index.js` will finish the job, you and check it out.
