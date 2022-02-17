import React from 'react';
import {Image, StyleSheet, Dimensions,Text} from 'react-native';


import topo from '../assets/topo.png';

export default function Carrinho(){
    return  <> 
            <Image source={topo} style={estilos.topo}/>
            <Text style={estilos.carrinho}> Carrinho </Text>
            </>
}

const width = Dimensions.get('screen').width;


const estilos =StyleSheet.create({
    topo:{
        width:'100%',
        height:582 / 772 * width,

    },
    carrinho:{
        position:"absolute",
        padding: 40,
        textAlign: 'center',
        width: width,
        fontSize:20,
        fontWeight:'bold',
        lineHeight:40,
        color:"black",
    }



});