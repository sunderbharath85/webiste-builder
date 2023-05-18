import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  ChakraProvider,
  Flex,
  Box,
  Card,
  CardBody,
  Text,
} from "@chakra-ui/react";
import "./App.css";
import ComponentsMap from "./components/component-map";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { props } from "./component-props";
import Renderer from "./components/Renderer";
import Draggable from "./components/Draggable";
import Droppable from "./components/Droppable";
import shortid from "shortid";
import { findIndex } from "lodash";
import SortableItem from "./components/SortableItem";

function App() {
  const components = Object.keys(ComponentsMap);
  const [schema, setSchema] = useState([]);

  return (
    <ChakraProvider>
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={(event) => {
          const { over, active } = event;
          const componentProps = props[active.id];
          if (componentProps) {
            const newSchema = [...schema];
            const newId = shortid();
            console.log([...newSchema, { ...componentProps, id: newId }]);
            setSchema([...newSchema, { ...componentProps, id: newId }]);
          } else {
            const sourceIndex = findIndex(schema, { id: active.id });
            const targetIndex = findIndex(schema, { id: over.id });
            const workValue = schema.slice();
            const [deletedItem] = workValue.splice(sourceIndex, 1);
            workValue.splice(targetIndex, 0, deletedItem);
            setSchema(workValue);
          }
        }}
      >
        <Flex
          w="full"
          direction="row"
          alignItems="center"
          gap="2"
          bg="gray.100"
        >
          <Box shadow="xl" h="100vh" w="15%" p="1">
            <Flex direction="column" gap="3" p="5">
              {components.map((componentName, index) => (
                <Draggable id={componentName} key={index}>
                  <Card>
                    <CardBody>
                      <Text fontSize="xl">{componentName}</Text>
                    </CardBody>
                  </Card>
                </Draggable>
              ))}
            </Flex>
          </Box>
          <Box w="70%" h="100vh">
            <Box
              m="1rem"
              p="1"
              border="4px solid"
              borderColor="gray.200"
              position="fixed"
              right="15%"
              left="15%"
              bottom="20px"
              top="40px"
              overflowY="auto"
            >
              <Droppable id="ROOT" schema={schema} />
            </Box>
          </Box>
          <Box shadow="xl" w="15%" h="100vh">
            Test 3
          </Box>
        </Flex>
      </DndContext>
    </ChakraProvider>
  );
}

export default App;
