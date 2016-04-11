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

'use strict';

const React = require('react-native');
const Constant = require('./Constants');
const Subscribable = require('Subscribable');

const {
    StyleSheet,
    Text,
    View
} = React;

/*
   React mixins are no longer supported when using React components
   written in ES6, so we use React.createClass syntax.
*/
const Detail = React.createClass({
    mixins: [Subscribable.Mixin],

    getInitialState: function() {
        var obj = this.props.initialData;
        return obj;
    },

    componentDidMount: function() {
        this.addListenerOn(this.props.events, 'updateEvent', this.miscFunction);
    },

    miscFunction: function(args) {
        var obj = args.updateObj;
        this.setState(obj);
    },

    render: function() {
        var pC = this.state.pct_change;
        var formattedChange = pC !== '-' ? (pC >= 0 ? '+' + pC + '%' : '' + pC + '%') : pC;
        var changeColor = pC !== '-' ? (pC >= 0 ? 'green' : 'red') : Constant.COLOR_PALETTE[1];

        return(
          <View style={styles.container}>
              {/* Left container */}
              <View style={styles.subContainer}>
                  <Text style={styles.fieldTitle}>
                      Last
                  </Text>
                  <Text style={styles.fieldDetail}>
                      {this.state.last_price}
                  </Text>
                  <Text style={styles.fieldTitle}>
                      Change
                  </Text>
                  <Text style={[styles.fieldDetail, {color: changeColor}]}>
                      {formattedChange}
                  </Text>
                  <Text style={styles.fieldTitle}>
                      Bid
                  </Text>
                  <Text style={styles.fieldDetail}>
                      {this.state.bid}
                  </Text>
                  <Text style={styles.fieldTitle}>
                      Bid Size
                  </Text>
                  <Text style={styles.fieldDetail}>
                      {this.state.bid_quantity}
                  </Text>
                  <Text style={styles.fieldTitle}>
                      Min
                  </Text>
                  <Text style={styles.fieldDetail}>
                      {this.state.min}
                  </Text>
              </View>
              {/* Right container */}
              <View style={styles.subContainer}>
                  <Text style={styles.fieldTitle}>
                      Time
                  </Text>
                  <Text style={styles.fieldDetail}>
                      {this.state.time}
                  </Text>
                  <Text style={styles.fieldTitle}>
                      Open
                  </Text>
                  <Text style={styles.fieldDetail}>
                      {this.state.open_price}
                  </Text>
                  <Text style={styles.fieldTitle}>
                      Ask
                  </Text>
                  <Text style={styles.fieldDetail}>
                      {this.state.ask}
                  </Text>
                  <Text style={styles.fieldTitle}>
                      Ask Size
                  </Text>
                  <Text style={styles.fieldDetail}>
                      {this.state.ask_quantity}
                  </Text>
                  <Text style={styles.fieldTitle}>
                      Max
                  </Text>
                  <Text style={styles.fieldDetail}>
                      {this.state.max}
                  </Text>
              </View>
          </View>
        )
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        flexWrap: 'nowrap',
        padding: 15,
        paddingTop: 60
    },
    subContainer: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        padding: 15
    },
    fieldTitle: {
        fontSize: 16,
        fontWeight: 'normal',
        height: 30,
        textAlign: 'left'
    },
    fieldDetail: {
        backgroundColor: Constant.COLOR_PALETTE[5],
        color: Constant.COLOR_PALETTE[1],
        fontWeight: 'bold',
        textAlign: 'right'
    }
});

module.exports = Detail;
