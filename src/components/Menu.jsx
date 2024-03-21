import React from "react";
import { View, Text, StyleSheet, Image, Pressable, TouchableOpacity } from "react-native";
import { Button, IconButton } from "react-native-paper";
// import {Icon} from 'react-native-material-ui';
// import AccessibilityIcon from '@mui/icons-material/Accessibility';
import Icon from 'react-native-vector-icons/FontAwesome';


export default () => {





    return (
        <View style={image.geral}>

            <Button style={{
                padding: 60,
                backgroundColor: '#2F4F4F',
                width: 10,
                marginLeft: 40,
                marginTop: 70,
            }} textColor="white" buttonColor="white">aaaaa</Button>


            <Button icon={require('../assents/fonts/urso.png')} style={{
                padding: 60,
                backgroundColor: '#5F9EA0',
                width: 10,
                marginLeft: 220,
                marginTop: -159,
        
            }}/> 
            
            <Button style={{
                padding: 60,
                backgroundColor: '#2F4F4F',
                width: 10,
                marginLeft: 40,
                marginTop: 70,
            }} textColor="white" buttonColor="white">aaaaa</Button>

<Button icon={require('../assents/fonts/urso.png')} style={{
                padding: 60,
                backgroundColor: '#5F9EA0',
                width: 10,
                marginLeft: 220,
                marginTop: -159,
        
            }}/> 

<Button style={{
                padding: 60,
                backgroundColor: '#2F4F4F',
                width: 10,
                marginLeft: 40,
                marginTop: 45,
            }} textColor="white">aaaaa</Button>

<Button icon={require('../imagens/piggy.png')} style={{
                padding: 60,
                backgroundColor: '#5F9EA0',
                width: 10,
                marginLeft: 220,
                marginTop: -160,
                
            }}/> 



             
   

    

        
        </View>
    )
}

const image = StyleSheet.create(
    {
        imagem: {
            width: 110,
            borderRadius: 10,
        },
        geral: {
            display: 'flex',
        },
        botao: {
            color: 'white',
            padding: 60,
            backgroundColor: '#5F9EA0',
            width: 10,
            marginLeft: 220,
            marginTop: -159,
        }
    }
)