export const props = {
  Flex: {
    type: "Flex",
    properties: {
      p: "2rem",
      bg: "gray.200",
    },
  },
  Button: {
    type: "Button",
    properties: {
      variant: "solid",
      colorScheme: "teal",
      w: "full",
    },
  },
  ColumnLayout: {
    type: "ColumnLayout",
    properties: {},
    components: [
      {
        type: "Flex",
        properties: {
          p: "2rem",
          bg: "gray.200",
        },
      },
      {
        type: "Flex",
        properties: {
          p: "2rem",
          bg: "gray.200",
        },
      },
    ],
  },
};
