import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import Home from './pages/Home';
import CreateRecord from './pages/createRecord';


const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: '#0B1f34'
                },
            }}
            >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="CreateRecord" component={CreateRecord}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;