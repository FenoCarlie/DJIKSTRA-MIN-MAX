// EdgeModifier.js
import React from "react";

const EdgeModifier = ({ edges, nodes, updateEdgeLabel }) => {
  return (
    <div className="absolute w-[200px] top-[175px] left-4 bg-white p-4 shadow-lg">
      <h3 className="font-bold">Modifier une liaison</h3>
      <div className="flex flex-col max-h-[500px] overflow-auto w-full">
        {edges.map((edge) => {
          const sourceLabel = nodes.find((node) => node.id === edge.source)
            ?.data.label;
          const targetLabel = nodes.find((node) => node.id === edge.target)
            ?.data.label;

          return (
            <div
              key={edge.id}
              className="flex items-center space-x-2 mt-2w w-full justify-between pr-4 my-2"
            >
              <span className="flex flex-row">
                {sourceLabel} → {targetLabel} :
              </span>
              <input
                type="text"
                value={edge.label}
                onChange={(e) => updateEdgeLabel(edge.id, e.target.value)}
                className="border rounded px-2 py-1 w-[50%]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EdgeModifier;
