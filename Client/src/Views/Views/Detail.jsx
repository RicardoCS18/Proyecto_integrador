import { useState } from "react"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
    let [character, setCharacter] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.data.name) {
              setCharacter(data.data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <>
        <h2>{character.name}</h2>
        <h3>{character.status}</h3>
        <h3>{character.species}</h3>
        <h3>{character.gender}</h3>
        <h3>{character.origen}</h3>
        <img src={character.image} alt='character' />

        </>
    )
}
export default Detail