import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Header() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/abdulquadri-akos")
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
      });
  }, []);

  return (
    <>
      <Box as="section" margin="0 auto" paddingBlockEnd={50}>
        <Grid
          h={{ xl: "200", lg: "none" }}
          gridTemplateRows={{
            xl: "repeat(2, 1fr)",
            lg: "repeat(auto-fit, minmax(1fr, 1fr))",
          }}
          gridTemplateColumns={{
            xl: "repeat(5, 1fr)",
            lg: "1fr",
          }}
          gap={4}
        >
          <GridItem
            rowSpan={{ xl: 3, lg: 0 }}
            colSpan={1}
            display="flex"
            alignItems="center"
            flexDirection={"column"}
          >
            <Image
              borderRadius="full"
              boxSize="200px"
              src="https://avatars.githubusercontent.com/u/36640541?v=4"
              alt="Akosile Abdulquadri"
              border={"2px solid #000"}
            />

            <Box textAlign={"center"}>
              <Text fontSize="2xl" as="b">
                {apiData.name}
              </Text>
              <Text fontSize="md" color="brand.900">
                {apiData.bio}
              </Text>
            </Box>
          </GridItem>
          <GridItem colSpan={{ xl: 4, lg: 1 }}>
            <Card bg="brand.darkOlive" color="#fff">
              <CardBody>
                <Text fontSize="lg" as="b">
                  About Me
                </Text>

                <Text
                  py="2"
                  letterSpacing="wide"
                  textAlign={"justify"}
                  display={{
                    base: "none",
                    sm: "none",
                    md: "block",
                    lg: "block",
                    xl: "block",
                  }}
                >
                  I&apos;m Abdulquadri Akosile, a passionate and dedicated
                  individual pursuing my education at AltSchool Africa. I am
                  immersed in a dynamic learning environment that fosters
                  innovation and creativity in the technology field. I am
                  currently a student at AltSchool Africa, where I am honing my
                  skills and knowledge in various aspects of computer science
                  and software development. In addition to my academic pursuits,
                  I have practical experience in Desktop Publishing. This has
                  allowed me to blend my technical skills with a creative touch,
                  producing visually appealing and user-friendly designs.
                </Text>

                <Text
                  py="2"
                  letterSpacing="wide"
                  textAlign={"justify"}
                  display={{
                    base: "block",
                    sm: "block",
                    md: "none",
                    lg: "none",
                    xl: "none",
                  }}
                >
                  I&apos;m Abdulquadri Akosile, a passionate and dedicated
                  individual pursuing my education at AltSchool Africa. I am
                  immersed in a dynamic learning environment that fosters
                  innovation and creativity in the technology field.
                </Text>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem colSpan={{ xl: 2, lg: 1 }}>
            <Card bg="brand.paleYellow" color="brand.black">
              <CardBody>
                <Text as="b">Repositories</Text>
                <Text fontSize={"x-large"} fontWeight={"bold"}>
                  {apiData.public_repos}
                </Text>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem colSpan={1}>
            <Card bg="brand.paleYellow" color="brand.black">
              <CardBody>
                <Text as="b">Following</Text>
                <Text fontSize={"x-large"} fontWeight={"bold"}>
                  {apiData.following}
                </Text>
              </CardBody>
            </Card>
          </GridItem>

          <GridItem colSpan={1}>
            <Card bg="brand.paleYellow" color="brand.black">
              <CardBody>
                <Text as="b">Followers</Text>
                <Text fontSize={"x-large"} fontWeight={"bold"}>
                  {apiData.followers}
                </Text>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default Header;
