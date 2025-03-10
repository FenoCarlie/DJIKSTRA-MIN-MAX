// EdgeModifier.js
import React from "react";

const EdgeModifier = ({ edges, nodes, updateEdgeLabel }) => {
  return (
    <div className="absolute w-[321px] top-[175px] left-4 bg-white p-4 shadow-lg">
      <h3 className="font-bold">Modifier une liaison</h3>
      {edges.map((edge) => {
        const sourceLabel = nodes.find((node) => node.id === edge.source)?.data
          .label;
        const targetLabel = nodes.find((node) => node.id === edge.target)?.data
          .label;

        return (
          <div key={edge.id} className="flex items-center space-x-2 mt-2">
            <span>
              {sourceLabel} → {targetLabel} :
            </span>
            <input
              type="text"
              value={edge.label}
              onChange={(e) => updateEdgeLabel(edge.id, e.target.value)}
              className="border rounded px-2 py-1 "
            />
          </div>
        );
      })}
    </div>
  );
};

export default EdgeModifier;
