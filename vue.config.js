var express = require('express');
var app = express();
var appData = require('./data.json');
var seller = appData.seller;
var goods = appData.goods;
var ratings = appData.ratings;
module.exports = {
  devServer: {
    port: '8088',
    // proxy: ''
    before(app) {
      app.get('/api/seller', function (req, res) {
        res.json({
          errno: 0,
          data: seller
        });
      });

      app.get('/api/goods', function (req, res) {
        res.json({
          errno: 0,
          data: goods
        });
      });

      app.get('/api/ratings', function (req, res) {
        res.json({
          errno: 0,
          data: ratings
        });
      });
    }
  }
}
