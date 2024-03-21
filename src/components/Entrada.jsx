import React from "react";
import { StyleSheet, TouchableOpacity, View, Button, Text } from "react-native";





export default () => {





    return (
       <TouchableOpacity
       style={style.button}>
         <Text style={style.textBotao}></Text>
       </TouchableOpacity>
    )
}


const style = StyleSheet.create(
    {
        button : {
            backgroundColor: 'white',
            height: 100,
            width: 100,
            borderRadius: 50,
            borderWidth: 8,
            borderColor: '#00BFFF',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 95
        },
        textBotao: {
            color: 'white',
            fontSize: 25,
        }


    }
)