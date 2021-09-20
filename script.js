"use strict";
let ws = new WebSocket("wss://stream.binance.com:9443/ws/btcaud@trade");
let stockPriceElement = document.getElementById("stock-price");
let lastPrice = null;

ws.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let price = parseFloat(stockObject.p).toFixed(2);
  stockPriceElement.innerText = price;

  stockPriceElement.style.color =
    !lastPrice === price ? "black" : price > lastPrice ? "green" : "red";

  lastPrice = price;
};
