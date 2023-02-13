import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { LocationProvider } from '../context/locationcontext';
import {
    styles
} from './styles';

const Stack = createStackNavigator();

import { Home } from '../pages/Home/index';
import { Status } from '../pages/Status/index';

export default function Routes() {
    return (
        <NavigationContainer>
            <LocationProvider>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={({ navigation }) => ({
                            headerTitle: "Olá, bem-vindo",
                            headerTintColor: '#CDD4ED',
                            headerStyle: {
                                backgroundColor: '#1c1c85',
                                height: 75
                            },
                            headerTitleAlign: 'left',
                            headerRight: () => (
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Status')}>
                                    <Text style={styles.NextOrPrevious}>Status</Text>
                                </TouchableOpacity>
                            )
                        })}
                    />

                    <Stack.Screen
                        name="Status"
                        component={Status}
                        options={({ navigation }) => ({
                            headerTintColor: '#CDD4ED',
                            headerStyle: {
                                backgroundColor: '#1c1c85',
                                height: 75
                            },
                            headerTitleAlign: 'center',
                            headerLeft: () => (
                                <TouchableOpacity
                                    style={{ marginLeft: 20 }}
                                    onPress={() => navigation.navigate('Home')}>
                                    <Text style={styles.NextOrPrevious}>Voltar</Text>
                                </TouchableOpacity>
                            )
                        })}
                    />
                </Stack.Navigator>
            </LocationProvider>
        </NavigationContainer>
    );
}
