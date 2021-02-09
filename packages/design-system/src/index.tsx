import React from "react";
import "twin.macro";

const ReactCustomTextField: React.FC = () => {
  return (
    <div>
      <h1 tw="text-green-500">Hello</h1>
      <input tw="bg-gray-700" type="text" placeholder="hello world" />
    </div>
  );
};

export default ReactCustomTextField;

export { Card } from "./card";
