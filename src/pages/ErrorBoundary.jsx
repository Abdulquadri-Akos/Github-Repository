import { Text, Button, Card, CardBody, Box } from "@chakra-ui/react";

export default function Fallback({ error, resetErrorBoundary }) {
  return (
    <Box as="section" margin={"30"}>
      <Card bg="brand.paleYellowLight">
        <CardBody
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          margin={30}
          gap={4}
        >
          <Text fontSize={"large"} fontWeight={"bold"} textAlign={"center"}>
            Seems something went wrong, check your internet
          </Text>
          <Text color={"red"}>{error.message}</Text>
          <Box marginBlockStart={2}>
            <Button variant={"primary"} onClick={resetErrorBoundary}>
              Reset
            </Button>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
}
