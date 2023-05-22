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

import React from 'react';
import { StyleSheet, Image, FlatList, Text, TouchableHighlight, View } from 'react-native';
import Constant from './Constants';
import { LightstreamerClient, Subscription, ConsoleLoggerProvider, ConsoleLogLevel } from 'lightstreamer-client-web/lightstreamer-core.esm';
import {g_eventEmitter} from './Globals';

LightstreamerClient.setLoggerProvider(new ConsoleLoggerProvider(ConsoleLogLevel.WARN));

export default class List extends React.Component {

    getUpdatedIndex(stock_name) {
        return Constant.STOCKS.indexOf(stock_name);
    }

    updateState(obj) {
        /* get right index */
        var index = this.getUpdatedIndex(obj.getValue("stock_name"));

        var updateObj = {
            stock_name: obj.getValue("stock_name"),
            last_price: obj.getValue("last_price"),
            time: obj.getValue("time"),
            pct_change: obj.getValue("pct_change"),
            ask: obj.getValue("ask"),
            ask_quantity: obj.getValue("ask_quantity"),
            bid: obj.getValue("bid"),
            bid_quantity: obj.getValue("bid_quantity"),
            min: obj.getValue("min"),
            max: obj.getValue("max"),
            open_price: obj.getValue("open_price")
        }

        /* update state datasource */
        var newArray = this.state.dataSource.slice();
        newArray[index] = updateObj;

        this.setState({
            dataSource: newArray,
        });

        /* notify detailView if there's an update regarding opened item */
        if(index.toString() === this.state.selectedRow.toString()) {
            g_eventEmitter.emit('updateEvent', {updateObj: updateObj});
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            dataSource: Constant.INIT_CONFIG,
            selectedRow: Constant.UNSELECTED_ROW,
            status: '-'
        }
    }

    setupLightstreamerItemsSubscription() {
        const myClient = new LightstreamerClient(Constant.SERVER_ADDRESS, Constant.ADAPTER_SET);

        /* React class instance reference */
        const that = this;

        myClient.addListener({
            onStatusChange: function(newStatus) {
                console.log(newStatus);

                var splittedStatus = newStatus.split(':');

                that.setState({
                    status: splittedStatus.length === 2 ? Constant.STATUS_DECODE[splittedStatus[1]] : splittedStatus[0]
                });
            }
        });

        myClient.connect();

        const mySubscription = new Subscription("MERGE", Constant.ITEMS, Constant.FIELDS);
        mySubscription.setDataAdapter(Constant.DATA_ADAPTER);
        mySubscription.setRequestedSnapshot("yes");

        mySubscription.addListener({
            onSubscription: function() {
                // console.log("SUBSCRIBED");
            },
            onUnsubscription: function() {
                // console.log("UNSUBSCRIBED");
            },
            onItemUpdate: function(obj) {
                // console.log("UPDATE FOR " + obj.getValue("stock_name"));

                that.updateState(obj)
            }
        });

        myClient.subscribe(mySubscription);
    }

    componentDidMount() {
        this.setupLightstreamerItemsSubscription();
    }

    customPop() {
        this.setState({
            selectedRow: Constant.UNSELECTED_ROW
        });

        this.props.navigation.pop()
    }

    pressRow(rowData, rowID) {
        this.props.navigation.push('Detail', { initialData: rowData })

        this.setState({
          selectedRow: rowID
        });
    }

    renderHeader() {
        return (
            /* List header */
            <View style={styles.headerContainer}>
                <View style={[styles.rowView, {backgroundColor: Constant.COLOR_PALETTE[2]}]}>
                    <Text style={[styles.headerStockText, {flex:36}]}>
                        Name
                    </Text>
                    <Text style={[styles.headerField, {flex:20}]}>
                        Last
                    </Text>
                    <Text style={[styles.headerField, {flex:20}]}>
                        Time
                    </Text>
                    <Text style={[styles.headerField, {flex:20}]}>
                        Chg.
                    </Text>
                    <Text style={[styles.headerField, {flex:4}]}>
                    </Text>
                </View>
            </View>
        )
    }

    renderRow({item: rowData, index: rowID, separators}) {
        var rowColor = rowID % 2 ? Constant.COLOR_PALETTE[5] : Constant.COLOR_PALETTE[8];

        var pC = rowData.pct_change;
        var formattedChange = pC !== '-' ? (pC >= 0 ? '+' + pC + '%' : '' + pC + '%') : pC;
        var changeColor = pC !== '-' ? (pC >= 0 ? 'green' : 'red') : Constant.COLOR_PALETTE[1];

        return (
            /* List */
            <TouchableHighlight onPress={()=> this.pressRow(rowData, rowID)}
                                underlayColor = {Constant.COLOR_PALETTE[3]}>
                <View style={[styles.rowView, {backgroundColor: rowColor}]}>
                    <Text style={{fontSize:14, flex: 36}}
                          numberOfLines={1}>
                        {rowData.stock_name}
                    </Text>
                    <Text style={styles.fieldText}
                          numberOfLines={1}>
                        {rowData.last_price}
                    </Text>
                    <Text style={styles.fieldText}
                          numberOfLines={1}>
                        {rowData.time}
                    </Text>
                    <Text style={[styles.fieldText, {color: changeColor}]}
                          numberOfLines={1}>
                        {formattedChange}
                    </Text>
                    <Text style={[styles.fieldText, {flex: 4, color: Constant.COLOR_PALETTE[3]}]}>
                        &gt;
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }
    
    render() {
        return (
          <View style={{flex:1}}>
              {/* List */}
              <FlatList ListHeaderComponent = {this.renderHeader.bind(this)}
                        data = {this.state.dataSource}
                        renderItem = {this.renderRow.bind(this)}>
              </FlatList>
              {/* StatusWidget */}
              <View style={styles.widgetContainer}>
                  <Text style={styles.widgetText}
                        numberOfLines={1}>
                      {this.state.status}
                  </Text>
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: Constant.COLOR_PALETTE[7],
        flex: 1,
        height: 60
    },
    headerStockText: {
        color: Constant.COLOR_PALETTE[8],
        fontSize: 18,
        textAlign: 'left'
    },
    headerField: {
        color: Constant.COLOR_PALETTE[8],
        fontSize: 18,
        textAlign: 'center'
    },
    rowView: {
        borderBottomWidth: 1,
        borderColor: Constant.COLOR_PALETTE[1],
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        padding: 16
    },
    fieldText: {
        color: Constant.COLOR_PALETTE[1],
        flex: 20,
        fontSize: 14,
        paddingTop: 3,
        textAlign: 'center'
    },
    widgetContainer: {
        backgroundColor: "yellow"
    },
    widgetText: {
        backgroundColor: Constant.COLOR_PALETTE[7],
        color: Constant.COLOR_PALETTE[4],
        fontSize:15,
        height:18,
        textAlign: "center"
    }
});
