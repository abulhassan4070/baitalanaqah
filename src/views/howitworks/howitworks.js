import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  SimpleGrid,
  Image,
  Center,
  Text,
  Link,
  Avatar,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HeaderText } from "widgets/header";
import "../../assets/css/working.css";
import line from "../../assets/img/working/line.png";

const contents = [
  {
    id: 1,
    title: "CHOOSE",
    text1: "Your favorite fabric",
    text2:
      "Select the fabric that best suits your needs from over 150 choices, all<br />Made in Italy.",
    imageLeft: require("../../assets/img/working/left1.webp"),
    imageRight: require("../../assets/img/working/right1.webp"),
    avatar: require("../../assets/img/working/avatar1.webp"),
    avatar_name: "Fabrizio • Style Adivisor",
    avatar_text1: "Would you like to touch our fabrics?",
    avatar_text2:
      "Order your 5-swatch kit online, it's 10€ only.<br />You will receive a discount code of the same value that you will be able to use for your next purchase.",
  },
  {
    id: 2,
    title: "CUSTOMIZE",
    text1: "Real-time customization",
    text2:
      "Use our innovative 3D configurator to personalize every detail and see it in real time.",
    imageLeft: require("../../assets/img/working/left2.jpg"),
    imageRight: require("../../assets/img/working/right2.webp"),
    avatar: require("../../assets/img/working/avatar2.webp"),
    avatar_name: "Luisa • Atelier Manager",
    avatar_text1: "We will be with you step by step",
    avatar_text2:
      "We will advise you on the customization that best suits your favorite garment.",
  },
  {
    id: 3,
    title: "MEASURE",
    text1: "In store",
    text2:
      "Come to one of the Lanieri Stores: our Style Advisors will be happy to welcome you and help you choose the right garment for you.",
    imageLeft: require("../../assets/img/working/left3.webp"),
    imageRight: require("../../assets/img/working/right3.webp"),
    avatar: "",
    avatar_name: "",
    avatar_text1: "Online, anywhere you want",
    avatar_text2:
      "Follow the specially created video tutorials to take your measurements easily, accurately and professionally.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Container maxW={"7xl"} p="12">
        <Breadcrumb
          fontWeight="medium"
          fontSize="sm"
          spacing="8px"
          textTransform="uppercase"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink color="gray.500" style={{ textDecoration: "none" }}>
              <NavLink to="/">Home</NavLink>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink style={{ textDecoration: "none" }}>
              How it works
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <br />
        <HeaderText
          title="How It Works"
          subtitle="The story about how it works"
        />
      </Container>
      <Box>
        <section id="content" role="main" className="content-wrapper">
          <div className="wrapper">
            <div className="content-wrapper">
              <div className="sdoh">
                <div id="div1" className="single-banner light">
                  <div className="overlay"></div>
                  <span className="title">CHOOSE</span>
                  <span className="subtitle">
                    Our catalogue contains more than 150 refined and totally
                    made in Italy fabrics.
                  </span>
                </div>
                <div id="div2" className="single-banner light">
                  <div className="overlay"></div>
                  <span className="title">CUSTOMIZE</span>
                  <span className="subtitle">
                    Create a unique garment choosing among a wide range of
                    possibilities.
                  </span>
                </div>
                <div id="div3" className="single-banner light">
                  <div className="overlay"></div>
                  <span className="title">MEASURE</span>
                  <span className="subtitle">
                    Take your measurements with ease and discover the pleasure
                    of a perfect fit.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Box>
      {contents.map((c) => {
        return <MiddleContent content={c} />;
      })}
      <Box p={"100px"}>
        <Center>
          <Box
            p={"10px 20px"}
            bg={"black"}
            textTransform={"uppercase"}
            color="white"
          >
            Start your experience now
          </Box>
        </Center>
      </Box>
    </>
  );
}

function MiddleContent(props) {
  return (
    <SimpleGrid
      mt={"50px"}
      key={props.content.id}
      gridTemplateAreas={{
        base: "'choose' 'line' 'area1' 'area3' 'area4' 'area2'",
        md: "'choose choose' 'line line' 'area1 area2' 'area3 area2' 'area3 area4'",
      }}
      gridTemplateColumns={{ md: "45% 55%" }}
    >
      <Center gridArea={"choose"}>
        <Box fontSize={"4xl"}>{props.content.title}</Box>{" "}
      </Center>
      <Center gridArea={"line"}>
        <Box>
          <Image src={line} />
        </Box>
      </Center>
      <Box
        gridArea={"area1"}
        textAlign={props.content.id % 2 === 0 ? "left" : "right"}
        pr={props.content.id % 2 === 0 ? "0px" : "50px"}
        pl={props.content.id % 2 === 0 ? "50px" : "0px"}
        mt={{ base: "-150px", md: "auto" }}
        mb={"20px"}
      >
        <Text
          as={"span"}
          fontSize={"8xl"}
          fontWeight={"bold"}
          borderBottom="2px solid black"
          fontFamily={"serif"}
        >
          {props.content.id}
        </Text>
        <Text pt={"10px"}>{props.content.text1}</Text>
        <Text
          py={"20px"}
          dangerouslySetInnerHTML={{ __html: props.content.text2 }}
        ></Text>
        <Link _after={{ content: `">"` }}>Start </Link>
      </Box>
      <Box
        gridArea={"area2"}
        minH={"550px"}
        bgImage={props.content.imageRight}
        bgSize={"cover"}
        m={"20px 0 0 10px"}
      ></Box>
      <Box
        gridArea={"area3"}
        minH={"550px"}
        bgImage={props.content.imageLeft}
        bgSize={"cover"}
      ></Box>
      <Box
        gridArea={"area4"}
        bg={"gray.100"}
        p={"10px 20px"}
        m={"20px 0 0 10px"}
      >
        <Stack
          direction={{ md: "row", base: "column" }}
          spacing={4}
          align={"center"}
          p={"10px"}
        >
          {props.content.avatar !== "" ? (
            <VStack>
              <Avatar src={props.content.avatar} alt={"Author"} size={"3xl"} />
              <Text fontSize={"10px"}>{props.content.avatar_name}</Text>
            </VStack>
          ) : (
            <></>
          )}
          <Stack
            direction={"column"}
            spacing={0}
            fontSize={"sm"}
            textAlign={{ base: "center", md: "left" }}
          >
            <Text fontSize={"16px"} fontWeight={600}>
              {props.content.avatar_text1}
            </Text>
            <Text
              fontSize={"12px"}
              pt={"10px"}
              color={"gray.500"}
              dangerouslySetInnerHTML={{ __html: props.content.avatar_text2 }}
            ></Text>
          </Stack>
        </Stack>
      </Box>
    </SimpleGrid>
  );
}
