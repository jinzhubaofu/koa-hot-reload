import Koa from 'koa';
import App from './App';
import React from 'react';
import {renderToString} from 'react-dom/server';

const app = new Koa();

app.use(async ctx => {
  let {prefetch} = App;
  let data = typeof prefetch === 'function'
    ? await prefetch({pathname: ctx.path, querystring: ctx.querystring})
    : {};
  ctx.body = renderToString(<App {...data} />);
});

export function getHandler() {
  return app.callback();
}
