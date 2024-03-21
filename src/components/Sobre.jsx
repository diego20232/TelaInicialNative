import React from "react";
import { StyleSheet, View, Text } from "react-native";


export default () => {


    return (
        <View>
            <Text style={text.text}>
             Pet shop ou loja de animais é um estabelecimento comercial especializado em vender animais, geralmente filhotes,
             destinados a serem animais de estimação, bem como alimentos,
             acessórios e artigos para entusiastas, além de oferecer serviços de embelezamento como banho, tosa e perfumaria.
            </Text>
        </View>
    )
}

const text = StyleSheet.create(
    {
        text: {
            fontSize: 25,
            textAlign: 'center',
            marginTop: 100,
            color: 'white',
            margin: 10,
            padding: 10,
        }
    }
)