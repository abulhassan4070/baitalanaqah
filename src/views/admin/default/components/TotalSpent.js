// // Chakra imports
// import {
//   Box,
//   Button,
//   Flex,
//   Icon,
//   Text,
//   useColorModeValue,
// } from "@chakra-ui/react";
// // Custom components
// import Card from "components/card/Card.js";
// import LineChart from "components/charts/LineChart";
// import React from "react";
// import { MdBarChart, MdOutlineCalendarToday } from "react-icons/md";
// // Assets
// import {
//   lineChartDataTotalSpent,
//   lineChartOptionsTotalSpent,
// } from "variables/charts";

// export default function TotalSpent(props) {
//   const { ...rest } = props;

//   // Chakra Color Mode

//   const textColor = useColorModeValue("secondaryGray.900", "white");
//   const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
//   const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
//   const iconColor = useColorModeValue("brand.500", "white");
//   const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
//   const bgHover = useColorModeValue(
//     { bg: "secondaryGray.400" },
//     { bg: "whiteAlpha.50" }
//   );
//   const bgFocus = useColorModeValue(
//     { bg: "secondaryGray.300" },
//     { bg: "whiteAlpha.100" }
//   );
//   return (
//     <Card
//       justifyContent="center"
//       align="center"
//       direction="column"
//       w="100%"
//       mb="0px"
//       {...rest}
//     >
//       <Flex justify="space-between" ps="0px" pe="20px" pt="5px">
//         <Flex align="center" w="100%">
//           <Button
//             bg={boxBg}
//             fontSize="sm"
//             fontWeight="500"
//             color={textColorSecondary}
//             borderRadius="7px"
//           >
//             <Icon
//               as={MdOutlineCalendarToday}
//               color={textColorSecondary}
//               me="4px"
//             />
//             This week
//           </Button>
//           <Button
//             ms="auto"
//             align="center"
//             justifyContent="center"
//             bg={bgButton}
//             _hover={bgHover}
//             _focus={bgFocus}
//             _active={bgFocus}
//             w="37px"
//             h="37px"
//             lineHeight="100%"
//             borderRadius="10px"
//             {...rest}
//           >
//             <Icon as={MdBarChart} color={iconColor} w="24px" h="24px" />
//           </Button>
//         </Flex>
//       </Flex>
//       <Flex w="100%" flexDirection={{ base: "column", lg: "row" }}>
//         <Flex flexDirection="column" me="20px" mt="28px">
//           <Text
//             color={textColor}
//             fontSize="34px"
//             textAlign="start"
//             fontWeight="700"
//             lineHeight="100%"
//           >
//             $37.5K
//           </Text>
//           <Flex align="center" mb="20px">
//             <Text
//               color="secondaryGray.600"
//               fontSize="sm"
//               fontWeight="500"
//               mt="4px"
//               me="12px"
//             >
//               Total Purchase
//             </Text>
//           </Flex>
//           <Flex align="center">
//             <Box h="8px" w="8px" bg="#4318FF" borderRadius="50%" me="4px" />
//             <Text
//               fontSize="xs"
//               color="secondaryGray.600"
//               fontWeight="700"
//               mb="5px"
//             >
//               Events
//             </Text>
//           </Flex>
//           <Flex align="center">
//             <Box h="8px" w="8px" bg="#39B8FF" borderRadius="50%" me="4px" />
//             <Text
//               fontSize="xs"
//               color="secondaryGray.600"
//               fontWeight="700"
//               mb="5px"
//             >
//               Snacks
//             </Text>
//           </Flex>
//         </Flex>
//         <Box minH="260px" minW="75%" mt="auto">
//           <LineChart
//             chartData={lineChartDataTotalSpent}
//             chartOptions={lineChartOptionsTotalSpent}
//           />
//         </Box>
//       </Flex>
//     </Card>
//   );
// }
