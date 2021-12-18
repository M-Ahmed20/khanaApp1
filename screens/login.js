import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { SocialIcon } from 'react-native-elements'
import SignUP from './signup';
import Home from './home'

function MainScreen({ navigation }) {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [errMsg, setErrMsg] = useState('')

   

    const LoginUser = async () => {
        try {
            console.log({ email, userRole })
            let { user } = await signInWithEmailAndPassword(auth, email, password);
            if(user){
                navigation.navigate('Home')
            }
        } catch (err) {
            setErrMsg(err.message);
            setTimeout(() => {
                setErrMsg('');
            }, 5000)
        }
    }


    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff', paddingTop: 100 }}>
            {/* <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://www.pngkey.com/png/full/367-3670153_user-login-gif-images-for-login.png',
                }}
            /> */}
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"

            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
                secureTextEntry={true}

            />

            <TouchableOpacity onPress={LoginUser}>
                <Text
                    style={styles.button}
                >
                    <Icon name="enter-outline" style={{ fontSize: 20, padding: 20 }} />

                    Sign In
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('Sign Up') }}>

                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Not have an account? Register.</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 250,
        margin: 12,
        borderWidth: 1.5,
        padding: 10,
        borderRadius: 15,
        // fontWeight:'bold',
        fontSize: 20,
        color: 'black',

        // textAlign:'center'


    },

    button: {
        height: 50,
        // width:100,
        margin: 12,
        borderWidth: 2,
        padding: 10,
        borderRadius: 15,
        fontSize: 20,
        color: 'black',


    },
    tinyLogo: {
        width: 300,
        height: 150,
        padding: 50
    },
    // iconimage: {
    //     flexDirection: 'row', flexWrap: 'wrap'
    // }

});
const Drawer=createDrawerNavigator()
const Stack = createNativeStackNavigator();
export default function StackScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={MainScreen}
                    options={{
                        title: 'Login',
                        headerStyle: {
                            backgroundColor: '#fff',
                        },
                        headerTintColor: 'black',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 20
                        },
                    }}
                />

                <Stack.Screen
                    name="Sign Up"
                    component={SignUP}
                    options={{
                        title: 'Sign Up',
                        headerStyle: {
                            backgroundColor: '#fff',
                        },
                        headerTintColor: 'black',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 20
                        },
                    }}
                />

                <Drawer.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Home',
                        headerStyle: {
                            backgroundColor: '#fff',
                        },      
                        headerTintColor: 'black',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 20
                        },
                    }}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}