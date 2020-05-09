const express = require('express');
const fs = require('fs');
const app = express();
const config = {
  port: 8000,
}

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Demo from './components/Demo';

app.get('/', (req, res) => {
  // 把public目录改为build目录
  var index = fs.readFileSync('./build/index.html');
  var demo = ReactDOMServer.renderToString(<Demo />);
  var html = index.toString().replace('hello~!', demo);
  res.send(html);
})
app.use('/', express.static('./build'));
app.listen(config.port, () => {
  console.log(`启动: 127.0.0.1:${config.port}`);
})
