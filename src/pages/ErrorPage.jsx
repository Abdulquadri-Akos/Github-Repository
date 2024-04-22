import { Box, Text, Card, CardBody, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <Card bg="brand.paleYellowLight">
        <CardBody
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          paddingY={50}
        >
          <Image src="./src/assets/Error404.png" alt="Akosile Abdulquadri" />
          <Text fontSize="2xl" fontWeight="bold">
            404 - Page Not Found
          </Text>
          <Text fontSize="lg" fontWeight="medium" textAlign={"center"}>
            Sorry, the page you are looking for does not exist.
          </Text>
          <Box marginBlockStart={10}>
            <Link to={`/`}>
              <Button variant="primary">Return back to Home</Button>
            </Link>
          </Box>
        </CardBody>
      </Card>
    </>
  );
}
