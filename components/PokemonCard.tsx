import React from "react";
import { Image, Text, View } from "react-native";

interface PokemonCardProps{
    name: string;
    url: string;
}
export default function PokemonCard(props: PokemonCardProps) {
    const id = 1;
    const pokemonImageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.url.split("/")[6]}.png`
    return(
        <View>
            <Image
             source={{uri:pokemonImageURL}} 
             style={{width: 100, height: 100}}
            />  
            <Text>{props.name}</Text>
            <Text>{props.url}</Text>
        </View>
    );

}
