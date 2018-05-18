import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import Expo from 'expo';

import { Button } from 'react-native-elements';

export default class AuthScreen extends Component{
    onPressSignInFacebook = async () => {
        try{
            const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
                '1293925587411380',
                { permissions: ['public_profile'] }
            );
            console.log('token', token)
        }catch(err){
            console.log('onPressSignInFace', err);
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <Button
                    title = 'SignIn with Facebook'
                    raised
                    onPress={this.onPressSignInFacebook}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });