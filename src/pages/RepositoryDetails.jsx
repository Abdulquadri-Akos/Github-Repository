import {
  Box,
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td,
  Button,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function RepositoryDetails() {
  const { repoName } = useParams();
  const [repoDetails, setRepoDetails] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/repos/Abdulquadri-Akos/${repoName}`)
      .then((response) => response.json())
      .then((data) => {
        setRepoDetails(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [repoName]);

  return (
    <>
      <Header />
      <Box as="section" paddingTop={{ xl: 100, lg: "none" }}>
        <Text fontSize={"2xl"} as={"b"}>
          Repository Details
        </Text>
        <TableContainer
          borderRadius="20px"
          bg="brand.paleYellow"
          marginBlockStart={"20px"}
        >
          <Table variant={"striped"} colorScheme="brand.white">
            <Tbody>
              <Tr>
                <Td fontWeight={"bold"}>Repository Name:</Td>
                <Td>{repoDetails?.name}</Td>
              </Tr>
              <Tr>
                <Td fontWeight={"bold"}>Description:</Td>
                <Td>{repoDetails?.description}</Td>
              </Tr>
              <Tr>
                <Td fontWeight={"bold"}>Language:</Td>
                <Td>{repoDetails?.language}</Td>
              </Tr>
              <Tr>
                <Td fontWeight={"bold"}>Created Date:</Td>
                <Td>{repoDetails?.created_at}</Td>
              </Tr>
              <Tr>
                <Td fontWeight={"bold"}>Updated Date:</Td>
                <Td>{repoDetails?.updated_at}</Td>
              </Tr>
              <Tr>
                <Td fontWeight={"bold"}>Last Pushed:</Td>
                <Td>{repoDetails?.pushed_at}</Td>
              </Tr>
              <Tr>
                <Td fontWeight={"bold"}>Stars:</Td>
                <Td>{repoDetails?.stargazers_count}</Td>
              </Tr>
              <Tr>
                <Td fontWeight={"bold"}>Forks:</Td>
                <Td>{repoDetails?.forks}</Td>
              </Tr>
              <Tr>
                <Td fontWeight={"bold"}>URL:</Td>
                <Td>
                  <ChakraLink href={repoDetails?.html_url} isExternal>
                    <Text
                      as="span"
                      textDecoration={"underline"}
                    >{`GitHub Link`}</Text>
                  </ChakraLink>
                </Td>
              </Tr>

              <Tr>
                <Td fontWeight={"bold"}>Home Page URL:</Td>
                <Td>
                  <ChakraLink href={repoDetails?.homepage} isExternal>
                    <Text
                      as="span"
                      textDecoration={"underline"}
                    >{`Website Link`}</Text>
                  </ChakraLink>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <Box paddingY={30}>
          <Link to="/">
            <Button
              border={"2px solid #000"}
              color="brand.darkOlive"
              bg="transparent"
              _hover={{
                bg: "brand.darkOlive",
                color: "brand.white",
              }}
              leftIcon={<ArrowBackIcon />}
            >
              Repository List
            </Button>
          </Link>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
