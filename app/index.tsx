import { useEffect, useState } from "react"; /*aquí traemos Hooks*/
import { ScrollView, Text } from "react-native";
import PokemonCard from "../components/PokemonCard";

export default function Index() {/*creamo un componente llamado index*/
  const[results, setResults]= useState<any[]>([]);/*aquí creamos un estado llamado results usando useState*/
  useEffect(() => {/*setResult es la función que actualiza el estado*/
    console.log("entre en pantalla");/*any porque la API devuelve un arreglo de objetos*/
    getPokemons();/*este estado va a guardar la lista de pokemosnes que agarra de la API*/
  }, []);/*se ejecuta, cuando aparece en pantaala*/

  const getPokemons = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=160&offset=0";
    const response = await fetch(url); /*request a la api */
    const data = await response.json(); /*lo que retorna lo convierte en json*/
    console.log(data);
    setResults(data.results); /*acatualizas con data.result*/
  };
  return (
    <ScrollView>
      <Text>{results[128]?.name}</Text>
      {results.map((item) => {
        return <PokemonCard key={item.name} name={item.name} url={item.url}/>
      })}
    </ScrollView>
  );
}