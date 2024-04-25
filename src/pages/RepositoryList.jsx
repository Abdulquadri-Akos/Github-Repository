import {
  Box,
  Text,
  Spacer,
  Input,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  List,
  ListItem,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { useErrorBoundary } from "react-error-boundary";

export default function RepositoryList() {
  const [apiData, setApiData] = useState([]);

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const indexOfLastRecord = currentPage * recordsPerPage;
  const firstIndex = indexOfLastRecord - recordsPerPage;
  const records = apiData.slice(firstIndex, indexOfLastRecord);
  const noOfPages = Math.ceil(apiData.length / recordsPerPage);
  const numbers = [...Array(noOfPages + 1).keys()].slice(1);

  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    fetch("https://api.github.com/users/Abdulquadri-Akos/repos")
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
      })
      .catch((error) => {
        showBoundary(error);
      });
  }, [showBoundary]);

  function previousPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }

    // console.log("Previous Page");
  }

  function nextPage() {
    if (currentPage !== noOfPages) {
      setCurrentPage(currentPage + 1);
    }
    // console.log("Next Page");
  }

  function changeCurrentPage(e) {
    setCurrentPage(e);
  }

  return (
    <>
      <Header />
      <Box as="section" paddingTop={{ xl: 100, lg: "none" }}>
        <Box
          display={"flex"}
          flexDirection={{
            xl: "row",
            md: "row",
            lg: "row",
            sm: "column-reverse",
            base: "column-reverse",
          }}
          justifyContent={"center"}
          paddingBlock={4}
          paddingInline={2}
          gap={{
            xl: "none",
            md: "none",
            lg: "none",
            sm: "2",
            base: "2",
          }}
        >
          <Text fontSize={"2xl"} as={"b"}>
            List of Repositories
          </Text>
          <Spacer />
          <Input
            borderColor="brand.darkOlive"
            placeholder="Search for repository name...."
            size="md"
            width={{ xl: 300, md: 200 }}
            _hover={{ color: "brand.darkOlive" }}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>

        <TableContainer
          // display={{ sm: "none", xl: "block" }}
          borderRadius="20px"
          bg="brand.paleYellow"
        >
          <Table variant={"striped"} colorScheme="brand.white">
            <Thead bg="brand.darkOlive" height="70px">
              <Tr>
                <Th color="brand.white">Created Date</Th>
                <Th color="brand.white">Repository Name</Th>
                <Th color="brand.white">Language</Th>
                <Th color="brand.white"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {records
                .filter((repo) => {
                  return search.toLowerCase() === ""
                    ? repo
                    : repo.name.toLowerCase().includes(search.toLowerCase());
                })
                .map((repo) => {
                  return (
                    <Tr key={repo.id}>
                      <Td>{repo.created_at}</Td>
                      <Td>{repo.name}</Td>
                      <Td>
                        <Button
                          borderRadius={50}
                          bg="brand.paleYellowLight"
                          _hover={{
                            bg: "brand.paleYellowLight",
                          }}
                        >
                          {repo.language}
                        </Button>
                      </Td>
                      <Td>
                        <Link to={`/RepositoryDetails/${repo.name}`}>
                          <Button variant="primary">Details</Button>
                        </Link>
                      </Td>
                    </Tr>
                  );
                })}
            </Tbody>
          </Table>
        </TableContainer>
        {/* Pagination */}
        <Box as="nav" paddingY={5}>
          <List
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={5}
          >
            <ListItem onClick={previousPage}>
              <ChakraLink>
                <Button
                  border={"2px solid #000"}
                  color="brand.darkOlive"
                  bg="transparent"
                  _hover={{
                    bg: "brand.darkOlive",
                    color: "brand.white",
                  }}
                >
                  Previous
                </Button>
              </ChakraLink>
            </ListItem>
            {numbers.map((number, index) => (
              <ListItem key={index}>
                <Button variant="primary">
                  <ChakraLink onClick={() => changeCurrentPage(number)}>
                    {number}
                  </ChakraLink>
                </Button>
              </ListItem>
            ))}
            <ListItem onClick={nextPage}>
              <Button
                border={"2px solid #000"}
                color="brand.darkOlive"
                bg="transparent"
                _hover={{
                  bg: "brand.darkOlive",
                  color: "brand.white",
                }}
              >
                Next
              </Button>
            </ListItem>
          </List>
        </Box>

        {/* Error Page & Error Boundary Linking */}
        <Box display={"flex"} gap={4}>
          <Link to={"*"}>
            <Button variant={"primary"}>Error Page Test</Button>
          </Link>
          <Link to={"/ErrorBoundary"}>
            <Button variant={"primary"}>Error Boundary Test</Button>
          </Link>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
