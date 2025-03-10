import React, { useState, useCallback } from "react";
import {
  ReactFlow,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import NodesGenerator from "./NodesGenerator";
import EdgeModifier from "./EdgeModifier";

const ReactFlowComponent = ({ fieldValue }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  console.log(nodes);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, label: 0 }, eds)),
    []
  );

  // Fonction pour mettre à jour le label d'une liaison (edge)
  const updateEdgeLabel = (id, newLabel) => {
    setEdges((eds) =>
      eds.map((edge) => (edge.id === id ? { ...edge, label: newLabel } : edge))
    );
  };

  return (
    <div className="h-full">
      <NodesGenerator
        fieldValue={fieldValue}
        setNodes={setNodes}
        setEdges={setEdges}
      />
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

      <EdgeModifier
        edges={edges}
        nodes={nodes}
        updateEdgeLabel={updateEdgeLabel}
      />
    </div>
  );
};

export default ReactFlowComponent;
