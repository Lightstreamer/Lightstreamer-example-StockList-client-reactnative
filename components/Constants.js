/*
 * LIGHTSTREAMER - www.lightstreamer.com
 * Basic Stock-List Demo
 *
 *  Copyright (c) Lightstreamer Srl
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";

const stockList = ["Anduct", "Ations Europe", "Bagies Consulting", "BAY Corporation", "CON Consulting", "Corcor PLC", "CVS Asia", "Datio PLC", "Dentems", "ELE Manufacturing"]

for (var i = 1, items = []; i <= stockList.length; i++) {
  items[i-1] = "item" + i;
}

module.exports = {
    SERVER_ADDRESS: "http://push.lightstreamer.com",
    ADAPTER_SET: "DEMO",

    STOCKS: stockList,
    ITEMS: items,
    FIELDS: ["stock_name", "time", "last_price", "ask", "bid", "bid_quantity", "ask_quantity", "pct_change", "min", "max", "ref_price", "open_price", "item_status"],

    DATA_ADAPTER: "QUOTE_ADAPTER",

    SITE_URL: "https://www.lightstreamer.com",

    INIT_CONFIG: [{stock_name: stockList[0], last_price: "-", time: "-", pct_change: "-", bid: "-", bid_quantity: "-", min: "-", open_price: "-", ask: "-", ask_quantity: "-", max: "-"},
                  {stock_name: stockList[1], last_price: "-", time: "-", pct_change: "-", bid: "-", bid_quantity: "-", min: "-", open_price: "-", ask: "-", ask_quantity: "-", max: "-"},
                  {stock_name: stockList[2], last_price: "-", time: "-", pct_change: "-", bid: "-", bid_quantity: "-", min: "-", open_price: "-", ask: "-", ask_quantity: "-", max: "-"},
                  {stock_name: stockList[3], last_price: "-", time: "-", pct_change: "-", bid: "-", bid_quantity: "-", min: "-", open_price: "-", ask: "-", ask_quantity: "-", max: "-"},
                  {stock_name: stockList[4], last_price: "-", time: "-", pct_change: "-", bid: "-", bid_quantity: "-", min: "-", open_price: "-", ask: "-", ask_quantity: "-", max: "-"},
                  {stock_name: stockList[5], last_price: "-", time: "-", pct_change: "-", bid: "-", bid_quantity: "-", min: "-", open_price: "-", ask: "-", ask_quantity: "-", max: "-"},
                  {stock_name: stockList[6], last_price: "-", time: "-", pct_change: "-", bid: "-", bid_quantity: "-", min: "-", open_price: "-", ask: "-", ask_quantity: "-", max: "-"},
                  {stock_name: stockList[7], last_price: "-", time: "-", pct_change: "-", bid: "-", bid_quantity: "-", min: "-", open_price: "-", ask: "-", ask_quantity: "-", max: "-"},
                  {stock_name: stockList[8], last_price: "-", time: "-", pct_change: "-", bid: "-", bid_quantity: "-", min: "-", open_price: "-", ask: "-", ask_quantity: "-", max: "-"},
                  {stock_name: stockList[9], last_price: "-", time: "-", pct_change: "-", bid: "-", bid_quantity: "-", min: "-", open_price: "-", ask: "-", ask_quantity: "-", max: "-"}],

    /* COLOR SCHEME */
    COLOR_PALETTE: ["#000000", "#059dc7", "#05a5d1", "#3b3738", "#3e5b3e", "#83e2fc", "#dddddd", "#ece981", "#ffffff"],

    STATUS_DECODE: {
        "WS-STREAMING": "Connected over WS in streaming mode",
        "WS-POLLING": "Connected over WS in polling mode",
        "HTTP-POLLING": "Connected over HTTP in polling mode",
        "HTTP-STREAMING": "Connected over HTTP in streaming mode"
    },

    UNSELECTED_ROW: -1
};
