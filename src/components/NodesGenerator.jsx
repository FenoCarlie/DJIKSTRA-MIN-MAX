import { useEffect } from "react";

const NodesGenerator = ({ fieldValue, setNodes }) => {
  useEffect(() => {
    const generateAlphabet = (num) => {
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      return alphabet.slice(0, num).split("");
    };

    const letters = generateAlphabet(fieldValue);
    const updatedNodes = [];
    const verticalSpacing = 300; // Espacement entre les nœuds dans une "colonne"
    const horizontalSpacing = 400; // Espacement entre les colonnes (plus large)

    let index = 0;
    let col = 1;
    let xPosition = 0;

    while (index < letters.length) {
      const nodesInCol = Math.min(col, letters.length - index); // 2 ou 3 nœuds dans la "colonne"
      const totalHeight = (nodesInCol - 1) * verticalSpacing;
      let yStart = -totalHeight / 2; // Centrage vertical

      for (let i = 0; i < nodesInCol; i++) {
        updatedNodes.push({
          id: (index + 1).toString(),
          type: "circle",
          data: { label: letters[index] },
          position: { x: xPosition, y: yStart + i * verticalSpacing },
        });
        index++;
      }

      col = col === 3 ? 2 : 3; // Alterne entre 3 et 2 nœuds par colonne
      xPosition += horizontalSpacing; // Passe à la colonne suivante
    }

    setNodes(updatedNodes);
  }, [fieldValue, setNodes]);

  return null;
};

export default NodesGenerator;
