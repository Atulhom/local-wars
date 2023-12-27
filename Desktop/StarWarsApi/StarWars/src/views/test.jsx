import React, { useEffect, useContext } from "react";
import { Context } from "../store/flux";

function Test() {
  // Obtén el estado y las acciones desde el contexto
  const { store, actions } = useContext(Context);

  // Desestructura los personajes del estado
  const { allCharacters } = store;

  // useEffect para cargar los personajes al montar el componente
  useEffect(() => {
    // Llama a la acción para obtener todos los personajes
    actions.getAllPlanets();
  }, []);

  return (
    <div>
      <h1>This is a test</h1>
      <h2>Characters:</h2>
      <ul>
        {allCharacters.map((character) => (
          <li key={character.uid}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
