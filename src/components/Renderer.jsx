import React from "react";
import RenderComponent from "./RenderComponent";

const Renderer = ({ components }) => {
  const getComponents = (componentsArray) => {
    return componentsArray.map((component, index) => (
      <RenderComponent
        {...component}
        key={index}
        index={index}
      ></RenderComponent>
    ));
  };
  return <>{getComponents(components)}</>;
};

export default Renderer;
