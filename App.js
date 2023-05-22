import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Constant from './components/Constants';
import Info from './components/Info';
import Detail from './components/Detail';
import List from './components/List';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="List"
        screenOptions={{
          headerTintColor: Constant.COLOR_PALETTE[2]
        }}
      >
        <Stack.Screen name="List" component={List} options={({ route, navigation }) => ({
          title: 'Lightstreamer Stock List',
          headerRight: () => (
            <Text 
                style={{
                    color: Constant.COLOR_PALETTE[2], 
                    fontWeight: 'bold',
                    marginRight: 10}}
                onPress={() => navigation.navigate('Info')}>
            i</Text>
          ),
        })} />
        <Stack.Screen name="Info" component={Info} options={{ 
          title: 'Info'
        }} />
        <Stack.Screen name="Detail" component={Detail} options={({ route, navigation }) => ({
          title: route.params.initialData.stock_name
        })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;