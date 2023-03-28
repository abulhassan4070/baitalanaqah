// import {
//   Button,
//   FormLabel,
//   HStack,
//   Radio,
//   RadioGroup,
//   SimpleGrid,
//   Stack,
// } from "@chakra-ui/react";
// import React from "react";
// export default function BankUpiVerificationApi() {
//   const [value, setValue] = React.useState("msg91");
//   return (
//     <>
//       <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px">
//         <>
//           <FormLabel display="flex" ms="4px" fontSize="sm" fontWeight="500">
//             Payout API Provider
//           </FormLabel>
//           <HStack spacing="24px">
//             <RadioGroup defaultValue="cashfree">
//               <Stack spacing={5} direction="row">
//                 <Radio value="cashfree" onChange={() => setValue("cashfree")}>
//                   Cashfree
//                 </Radio>
//                 <Radio
//                   value="instantpay"
//                   onChange={() => setValue("instantpay")}
//                 >
//                   Instantpay
//                 </Radio>
//               </Stack>
//             </RadioGroup>
//           </HStack>
//         </>
//       </SimpleGrid>
//       <Button
//         fontSize="sm"
//         variant="brand"
//         fontWeight="500"
//         type="submit"
//         w="100%"
//         h="50"
//         mt="24px"
//       >
//         Update
//       </Button>
//     </>
//   );
// }
