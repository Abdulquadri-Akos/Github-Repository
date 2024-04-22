import { Box, Text } from "@chakra-ui/react";

export default function footer() {
  const date = new Date().getFullYear();

  return (
    <Box
      fontWeight={"bold"}
      fontSize={"md"}
      marginBlock={5}
      textAlign={"center"}
    >
      <Text>{`${date} :: Akosile Abdulquadri - GitHub Repository`}</Text>
    </Box>
  );
}
