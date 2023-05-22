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
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Constant from './Constants';

export default class Info extends React.Component {
    constructor(props) {
        super(props);
    }
    
    handleClick() {
        var url = Constant.SITE_URL;

        Linking.canOpenURL(url).then(supported => {
            if (supported) {
              Linking.openURL(url);
            } else {
              console.log('Don\'t know how to open URI: ' + url);
            }
        }).catch(err => console.error('An error occurred', err));
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.container}>
                    <Image source={require('../images/logo-info.png')}
                           style={styles.logo}
                    />
                </View>
                <TouchableOpacity onPress={this.handleClick}>
                    <Text style={styles.link}>
                          www.lightstreamer.com
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    logo: {
        height: 62,
        width: 240
    },
    link: {
       color: Constant.COLOR_PALETTE[2],
       fontWeight: 'bold',
       padding: 8,
       textAlign: "center"
    }
});
