import React, { createContext, useContext, useState, useEffect } from "react";

export const Context = createContext(null);

export const FluxProvider = ({ children }) => {
  const [state, setState] = useState({
    store: {
      allCharacters: [],
      allPlanets: [],
      allEcos: [],
    },
    actions: {
      getAllPlanets: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/planets/");
          const data = await response.json();
          setStore({ allPlanets: data.results });
        } catch (error) {
          console.error("Error fetching planets:", error);
        }
      },
    },
  });

  const setStore = (updatedStore) => {
    setState({
      store: Object.assign(state.store, updatedStore),
      actions: { ...state.actions },
    });
  };

  useEffect(() => {
    // Aquí puedes realizar lógica que se ejecutará al cargar la aplicación
    // Puedes hacer llamadas a API, inicializar datos, etc.
  }, []);

  return (
    <Context.Provider
      value={{ store: state.store, actions: state.actions, setStore }}
    >
      {children}
    </Context.Provider>
  );
};
