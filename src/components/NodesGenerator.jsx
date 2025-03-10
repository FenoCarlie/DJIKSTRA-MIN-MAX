import { useEffect } from "react";

const NodesGenerator = ({ fieldValue, setNodes }) => {
  useEffect(() => {
    const generateAlphabet = (num) => {
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      return alphabet.slice(0, num).split("");
    };

    const letters = generateAlphabet(fieldValue);
    const updatedNodes = [];
    const horizontalSpacing = 180; // Espacement horizontal entre les nœuds (plus grand)
    const verticalSpacing = 150; // Espacement vertical entre les rangées (plus grand)

    let index = 0;
    let row = 1;
    let yPosition = 0;

    while (index < letters.length) {
      const nodesInRow = Math.min(row, letters.length - index); // Nombre de nœuds dans la rangée
      const totalWidth = (nodesInRow - 1) * horizontalSpacing;
      let xStart = -totalWidth / 2; // Centrage des nœuds

      for (let i = 0; i < nodesInRow; i++) {
        updatedNodes.push({
          id: (index + 1).toString(),
          data: { label: letters[index] },
          position: { x: xStart + i * horizontalSpacing, y: yPosition },
        });
        index++;
      }

      row = row === 3 ? 2 : 3; // Alterner entre 2 et 3 nœuds par ligne
      yPosition += verticalSpacing;
    }

    setNodes(updatedNodes);
  }, [fieldValue, setNodes]);

  return null;
};

export default NodesGenerator;
