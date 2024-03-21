import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Menu from "./components/Menu";
import Entrada from "./components/Entrada";
import Sobre from "./components/Sobre";

// import { Text } from "react-native-paper";


export default () => {

    return (
    <View style={texto.geral}>
        <Image source={require('./imagens/cat.png')} style={texto.imagem} resizeMode="center"/>
        <Text style={texto.texto}>Sobre Nós</Text>
        <Sobre/>
        {/* <Entrada/> */}

        {/* <Menu/> */}
    </View>
    )
}

const texto = StyleSheet.create(
    {
        texto: {
            marginTop: -200,
            marginLeft: 150,
            color: 'white',
            fontSize: 35,
            textAlign: 'center',
            fontFamily: "sans-serif-light",
            fontWeight: 'bold',
            fontStyle: 'italic',
        },
        geral: {
            alignItems: 'center',
            flex: 1,
           backgroundColor: '#4F4F4F',
        },
        imagem: {
            marginLeft: -190,
            marginTop: -50
        }
    }
)