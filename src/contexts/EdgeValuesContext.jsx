import React, { createContext, useContext, useState } from "react";

// Créer un contexte pour les valeurs des liaisons
const EdgeValuesContext = createContext();

// Hook personnalisé pour accéder aux valeurs des liaisons
export const useEdgeValues = () => {
  return useContext(EdgeValuesContext);
};

// Fournisseur de contexte
export const EdgeValuesProvider = ({ children }) => {
  const [edgeValues, setEdgeValues] = useState({}); // État pour stocker les valeurs des liaisons

  // Fonction pour mettre à jour les valeurs des liaisons
  const updateEdgeValue = (id, newValue) => {
    setEdgeValues((prevValues) => ({
      ...prevValues,
      [id]: newValue,
    }));
  };

  return (
    <EdgeValuesContext.Provider value={{ edgeValues, updateEdgeValue }}>
      {children}
    </EdgeValuesContext.Provider>
  );
};
