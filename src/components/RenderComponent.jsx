import React from "react";
import componentMap from "./component-map";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Box, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const RenderComponent = ({ type, properties, children, id, components }) => {
  const Component = componentMap[type];
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <>
      {Component && (
        <Box
          borderWidth="2px"
          borderColor="gray.100"
          p="2"
          m={1}
          borderStyle="dashed"
          ref={setNodeRef}
          style={style}
          {...attributes}
          {...listeners}
          position="relative"
        >
          {type === "Flex" && (
            <IconButton
              icon={<AddIcon />}
              position="absolute"
              colorScheme="red"
              size="10px"
              bottom="-10px"
              right="50%"
            />
          )}
          <Component {...properties} components={components}>
            {children}
          </Component>
        </Box>
      )}
    </>
  );
};

export default RenderComponent;
