/**
 * @file test
 * @author leon<ludafa@outlook.com>
 */

import React from 'react';

const App = ({title, message}) =>  {
  return (
    <div>
      <h3>{title}</h3>
      <p>this is a test</p>
      {message}
    </div>
  );
};

App.prefetch = async () => {
  return {
    message: 'hello world',
    title: 'hot ssr reload'
  }
};

export default App;
