import React, { useState, useEffect, useCallback } from "react";
import {
  ReactFlow,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const ReactFlowComponent = ({ fieldValue }) => {
  // Générer une liste de lettres de l'alphabet en fonction de fieldValue
  const generateAlphabet = (num) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet.slice(0, num).split("");
  };

  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  // Utiliser useEffect pour mettre à jour les nœuds lorsque fieldValue change
  useEffect(() => {
    const letters = generateAlphabet(fieldValue);

    const updatedNodes = letters.map((letter, index) => {
      // Placer le premier nœud en haut (0, 0)
      const isFirst = index === 0;
      const isLast = index === letters.length - 1;

      // Espacement et disposition
      const verticalSpacing = 100; // Espacement vertical entre les nœuds
      const horizontalSpacing = 150; // Espacement horizontal entre les nœuds

      // Pour le premier et le dernier nœud, placer tout en haut ou en bas respectivement
      let xPosition = 0;
      let yPosition = 0;

      if (isFirst) {
        // Premier nœud (en haut du graphe)
        yPosition = 0;
        xPosition = 0;
      } else if (isLast) {
        // Dernier nœud (en bas du graphe)
        yPosition = (letters.length - 1) * verticalSpacing;
        xPosition = 0;
      } else {
        // Nœuds intermédiaires (en formant un losange)
        yPosition = index * verticalSpacing; // Augmente verticalement
        xPosition =
          (index - Math.floor(letters.length / 2)) * horizontalSpacing; // Déplacement horizontal
      }

      return {
        id: (index + 1).toString(),
        data: { label: letter },
        position: { x: xPosition, y: yPosition },
      };
    });

    setNodes(updatedNodes);

    // Créer les bords reliant chaque nœud successivement
    const updatedEdges = letters.slice(0, -1).map((_, index) => ({
      id: `e${index + 1}`,
      source: (index + 1).toString(),
      target: (index + 2).toString(),
    }));

    setEdges(updatedEdges);
  }, [fieldValue]); // Déclenche ce useEffect lorsque fieldValue change

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <div className="h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default ReactFlowComponent;
