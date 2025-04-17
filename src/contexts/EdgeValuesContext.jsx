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
  const updateEdgeValue = (sourceLabel, targetLabel, id, newValue) => {
    const key = `${sourceLabel}${targetLabel}`;
    setEdgeValues((prevValues) => ({
      ...prevValues,
      [key]: { id, value: newValue },
    }));
  };

  return (
    <EdgeValuesContext.Provider value={{ edgeValues, updateEdgeValue }}>
      {children}
    </EdgeValuesContext.Provider>
  );
};
