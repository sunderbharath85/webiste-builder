import { Flex, Grid, GridItem, Stack } from "@chakra-ui/react";
import React from "react";
import Droppable from "./Droppable";
import { DndContext } from "@dnd-kit/core";

const ColumnLayout = ({ id, components }) => {
  return (
    <DndContext onDragEnd={(e) => console.log(e)}>
      <Droppable id={id} schema={components}>
        <Grid templateColumns="repeat(2,1fr)" gap={4}>
          <GridItem colSpan={1} bg="tomato" p="2rem"></GridItem>
          <GridItem colSpan={1} bg="tomato" p="2rem"></GridItem>
        </Grid>
      </Droppable>
    </DndContext>
  );
};

export default ColumnLayout;
