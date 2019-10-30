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
import { Text } from 'react-native';

import Constant from './components/Constants';
import Info from './components/Info';
import Detail from './components/Detail';
import List from './components/List';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
    List: {
        screen: List,
        navigationOptions: ({navigation}) =>  ({
            title: 'Lightstreamer Stock List',
            headerRight: (
                    <Text 
                        style={{
                            color: Constant.COLOR_PALETTE[2], 
                            fontWeight: 'bold',
                            marginRight: 10}}
                        onPress={() => navigation.navigate({routeName: 'Info'})}>
                    i</Text>
            ),
        })
    },
    Info: {
        screen: Info,
        navigationOptions: () =>  ({
            title: 'Info',
        })
    },
    Detail: {
        screen: Detail,
        navigationOptions: ({navigation}) =>  ({
            title: navigation.getParam('initialData').stock_name,
        })
    }
}, {
    initialRouteName: 'List',
    cardStyle: {flex: 1},
    defaultNavigationOptions: {
        headerTintColor: Constant.COLOR_PALETTE[2],
    },
});

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;
