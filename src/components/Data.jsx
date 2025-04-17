import React from "react";
import { useEdgeValues } from "../contexts/EdgeValuesContext";

function Data({ nodes }) {
  const { edgeValues } = useEdgeValues(); // Accéder aux valeurs des liaisons
  return (
    <div className="absolute w-auto h-auto right-4 bottom-4 bg-white p-4 shadow-lg">
      <div className="flex flex-row items-center justify-between">
        {/* Tableau */}
        <div className="overflow-x-auto">
          {nodes.length > 0 && (
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100 flex flex-row">
                {nodes.map((data) => (
                  <tr key={data.id} className="">
                    <th className="py-2 px-4 border">{data.data.label}</th>
                  </tr>
                ))}
              </thead>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Data;
