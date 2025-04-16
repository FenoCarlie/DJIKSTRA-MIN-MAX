// CircleNode.jsx
import React from "react";
import { Handle, Position } from "@xyflow/react";

const CircleNode = ({ data }) => {
  return (
    <div
      style={{
        width: 100,
        height: 100,
        borderRadius: "50%",
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid black",
        fontSize: 20,
      }}
    >
      {data.label}
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default CircleNode;
