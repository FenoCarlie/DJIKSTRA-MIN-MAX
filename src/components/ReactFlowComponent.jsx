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
import CircleNode from "./CircleNode";
import { useEdgeValues } from "../contexts/EdgeValuesContext";
import Data from "./Data";

const ReactFlowComponent = ({ fieldValue }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const { updateEdgeValue } = useEdgeValues();

  const nodeTypes = {
    circle: CircleNode,
  };

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

    const sourceNode = nodes.find(
      (node) => node.id === edges.find((e) => e.id === id).source
    );
    const targetNode = nodes.find(
      (node) => node.id === edges.find((e) => e.id === id).target
    );

    if (sourceNode && targetNode) {
      updateEdgeValue(
        sourceNode.data.label,
        targetNode.data.label,
        id,
        newLabel
      ); // Mettre à jour le contexte global
    }
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
        nodeTypes={nodeTypes}
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

      <Data nodes={nodes} />
    </div>
  );
};

export default ReactFlowComponent;
