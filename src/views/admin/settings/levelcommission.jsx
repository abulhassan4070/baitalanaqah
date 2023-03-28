import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  SimpleGrid,
  useToast,
} from "@chakra-ui/react";
import InputField from "components/fields/InputField";
import { AdminContext } from "contexts/AdminContext";
import React from "react";
import { setAdminDashData } from "variables/functions";
import { getAdminDashData } from "variables/functions";
export default function LevelCommission() {
  const [apiData, setApiData] = React.useState({});
  const admin = React.useContext(AdminContext);
  const toast = useToast();
  React.useEffect(() => {
    getAdminDashData(
      admin.user.username,
      admin.user.token,
      "getPackageCommission"
    ).then((res) => {
      setApiData(res.data);
    });
  }, [admin]);
  return (
    <Box mt={{ base: "130px", md: "80px", xl: "80px" }} backgroundColor="#fff">
      {apiData && (
        <>
          <Accordion allowToggle={true}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <>Reward Revolving level 1</>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel p={10}>
                <SimpleGrid columns={{ base: 2 }} spacing="20px">
                  <div class="col-md-6">
                    <InputField
                      label="Reward-6 (in %)"
                      type="text"
                      name="one_6"
                      value={apiData.one_6}
                      onChange={(e) => {
                        setApiData({ ...apiData, one_6: e.target.value });
                      }}
                    />
                    <InputField
                      label="Reward-7 (in %)"
                      type="text"
                      name="one_7"
                      value={apiData.one_7}
                      onChange={(e) => {
                        setApiData({ ...apiData, one_7: e.target.value });
                      }}
                    />
                    <InputField
                      label="Reward-8 (in %)"
                      type="text"
                      name="one_8"
                      value={apiData.one_8}
                      onChange={(e) => {
                        setApiData({ ...apiData, one_8: e.target.value });
                      }}
                    />
                  </div>
                  <div class="col-md-6">
                    <InputField
                      label="Adjustable Amount"
                      type="text"
                      name="adjust_one_amount"
                      value={apiData.adjust_one_amount}
                      onChange={(e) => {
                        setApiData({
                          ...apiData,
                          adjust_one_amount: e.target.value,
                        });
                      }}
                    />
                    <InputField
                      label="Live Wallet"
                      type="text"
                      name="one_live"
                      value={apiData.one_live}
                      onChange={(e) => {
                        setApiData({ ...apiData, one_live: e.target.value });
                      }}
                    />
                    <InputField
                      label="Reward Wallet"
                      type="text"
                      name="one_reward"
                      value={apiData.one_reward}
                      onChange={(e) => {
                        setApiData({ ...apiData, one_reward: e.target.value });
                      }}
                    />
                  </div>
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <>Reward Revolving level 2</>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel p={10}>
                <SimpleGrid columns={{ base: 2 }} spacing="20px">
                  <div class="col-md-6">
                    <InputField
                      label="Reward-9 (in %)"
                      type="text"
                      name="two_9"
                      value={apiData.two_9}
                      onChange={(e) => {
                        setApiData({ ...apiData, two_9: e.target.value });
                      }}
                    />
                    <InputField
                      label="Reward-10 (in %)"
                      type="text"
                      name="two_10"
                      value={apiData.two_10}
                      onChange={(e) => {
                        setApiData({ ...apiData, two_10: e.target.value });
                      }}
                    />
                  </div>
                  <div class="col-md-6">
                    <InputField
                      label="Adjustable Amount"
                      type="text"
                      name="adjust_two_amount"
                      value={apiData.adjust_two_amount}
                      onChange={(e) => {
                        setApiData({
                          ...apiData,
                          adjust_two_amount: e.target.value,
                        });
                      }}
                    />
                    <InputField
                      label="Live Wallet"
                      type="text"
                      name="two_live"
                      value={apiData.two_live}
                      onChange={(e) => {
                        setApiData({ ...apiData, two_live: e.target.value });
                      }}
                    />
                    <InputField
                      label="Reward Wallet"
                      type="text"
                      name="two_reward"
                      value={apiData.two_reward}
                      onChange={(e) => {
                        setApiData({ ...apiData, two_reward: e.target.value });
                      }}
                    />
                  </div>
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <>Reward Revolving level 3</>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel p={10}>
                <SimpleGrid columns={{ base: 2 }} spacing="20px">
                  <div class="col-md-6">
                    <InputField
                      label="Reward-1 (in %)"
                      type="text"
                      name="three_1"
                      value={apiData.three_1}
                      onChange={(e) => {
                        setApiData({ ...apiData, three_1: e.target.value });
                      }}
                    />

                    <InputField
                      label="Reward-2 (in %)"
                      type="text"
                      name="three_2"
                      value={apiData.three_2}
                      onChange={(e) => {
                        setApiData({ ...apiData, three_2: e.target.value });
                      }}
                    />

                    <InputField
                      label="Reward-3 (in %)"
                      type="text"
                      name="three_3"
                      value={apiData.three_3}
                      onChange={(e) => {
                        setApiData({ ...apiData, three_3: e.target.value });
                      }}
                    />

                    <InputField
                      label="Reward-4 (in %)"
                      type="text"
                      name="three_4"
                      value={apiData.three_4}
                      onChange={(e) => {
                        setApiData({ ...apiData, three_4: e.target.value });
                      }}
                    />

                    <InputField
                      label="Reward-5 (in %)"
                      type="text"
                      name="three_5"
                      value={apiData.three_5}
                      onChange={(e) => {
                        setApiData({ ...apiData, three_5: e.target.value });
                      }}
                    />
                    <InputField
                      label="Reward-6 (in %)"
                      type="text"
                      name="three_6"
                      value={apiData.three_6}
                      onChange={(e) => {
                        setApiData({ ...apiData, three_6: e.target.value });
                      }}
                    />

                    <InputField
                      label="Reward-7 (in %)"
                      type="text"
                      name="three_7"
                      value={apiData.three_7}
                      onChange={(e) => {
                        setApiData({ ...apiData, three_7: e.target.value });
                      }}
                    />

                    <InputField
                      label="Reward-8 (in %)"
                      type="text"
                      name="three_8"
                      value={apiData.three_8}
                      onChange={(e) => {
                        setApiData({ ...apiData, three_8: e.target.value });
                      }}
                    />

                    <InputField
                      label="Reward-9 (in %)"
                      type="text"
                      name="three_9"
                      value={apiData.three_9}
                      onChange={(e) => {
                        setApiData({ ...apiData, three_9: e.target.value });
                      }}
                    />

                    <InputField
                      label="Reward-10 (in %)"
                      type="text"
                      name="three_10"
                      value={apiData.three_10}
                      onChange={(e) => {
                        setApiData({ ...apiData, three_10: e.target.value });
                      }}
                    />
                  </div>
                  <div class="col-md-6">
                    <InputField
                      label="Adjustable Amount"
                      type="text"
                      name="adjust_three_amount"
                      value={apiData.adjust_three_amount}
                      onChange={(e) => {
                        setApiData({
                          ...apiData,
                          adjust_three_amount: e.target.value,
                        });
                      }}
                    />
                    <InputField
                      label="Live Wallet"
                      type="text"
                      name="three_live"
                      value={apiData.three_live}
                      onChange={(e) => {
                        setApiData({ ...apiData, three_live: e.target.value });
                      }}
                    />
                    <InputField
                      label="Reward Wallet"
                      type="text"
                      name="three_reward"
                      value={apiData.three_reward}
                      onChange={(e) => {
                        setApiData({
                          ...apiData,
                          three_reward: e.target.value,
                        });
                      }}
                    />
                  </div>
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <>Reward Revolving level 4</>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel p={10}>
                <SimpleGrid columns={{ base: 2 }} spacing="20px">
                  <div class="col-md-6">
                    <InputField
                      label="Reward-1 (in %)"
                      type="text"
                      name="four_1"
                      value={apiData.four_1}
                      onChange={(e) => {
                        setApiData({ ...apiData, four_1: e.target.value });
                      }}
                    />

                    <InputField
                      label="Reward-2 (in %)"
                      type="text"
                      name="four_2"
                      value={apiData.four_2}
                      onChange={(e) => {
                        setApiData({ ...apiData, four_2: e.target.value });
                      }}
                    />

                    <InputField
                      label="Reward-3 (in %)"
                      type="text"
                      name="four_3"
                      value={apiData.four_3}
                      onChange={(e) => {
                        setApiData({ ...apiData, four_3: e.target.value });
                      }}
                    />

                    <InputField
                      label="Reward-4 (in %)"
                      type="text"
                      name="four_4"
                      value={apiData.four_4}
                      onChange={(e) => {
                        setApiData({ ...apiData, four_4: e.target.value });
                      }}
                    />

                    <InputField
                      label="Reward-5 (in %)"
                      type="text"
                      name="four_5"
                      value={apiData.four_5}
                      onChange={(e) => {
                        setApiData({ ...apiData, four_5: e.target.value });
                      }}
                    />
                    <InputField
                      label="Reward-6 (in %)"
                      type="text"
                      name="four_6"
                      value={apiData.four_6}
                      onChange={(e) => {
                        setApiData({ ...apiData, four_6: e.target.value });
                      }}
                    />

                    <InputField
                      label="Reward-7 (in %)"
                      type="text"
                      name="four_7"
                      value={apiData.four_7}
                      onChange={(e) => {
                        setApiData({ ...apiData, four_7: e.target.value });
                      }}
                    />

                    <InputField
                      label="Reward-8 (in %)"
                      type="text"
                      name="four_8"
                      value={apiData.four_8}
                      onChange={(e) => {
                        setApiData({ ...apiData, four_8: e.target.value });
                      }}
                    />

                    <InputField
                      label="Reward-9 (in %)"
                      type="text"
                      name="four_9"
                      value={apiData.four_9}
                      onChange={(e) => {
                        setApiData({ ...apiData, four_9: e.target.value });
                      }}
                    />

                    <InputField
                      label="Reward-10 (in %)"
                      type="text"
                      name="four_10"
                      value={apiData.four_10}
                      onChange={(e) => {
                        setApiData({ ...apiData, four_10: e.target.value });
                      }}
                    />
                  </div>
                  <div class="col-md-6">
                    <InputField
                      label="Adjustable Amount"
                      type="text"
                      name="adjust_four_amount"
                      value={apiData.adjust_four_amount}
                      onChange={(e) => {
                        setApiData({
                          ...apiData,
                          adjust_four_amount: e.target.value,
                        });
                      }}
                    />
                    <InputField
                      label="Live Wallet"
                      type="text"
                      name="four_live"
                      value={apiData.four_live}
                      onChange={(e) => {
                        setApiData({ ...apiData, four_live: e.target.value });
                      }}
                    />
                    <InputField
                      label="Reward Wallet"
                      type="text"
                      name="four_reward"
                      value={apiData.four_reward}
                      onChange={(e) => {
                        setApiData({ ...apiData, four_reward: e.target.value });
                      }}
                    />
                  </div>
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <>Reward Revolving level 5</>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel p={10}>
                <SimpleGrid columns={{ base: 2 }} spacing="20px">
                  <div class="col-md-6">
                    <InputField
                      label="Reward-1 (in %)"
                      type="text"
                      name="five_1"
                      value={apiData.five_1}
                      onChange={(e) => {
                        setApiData({ ...apiData, five_1: e.target.value });
                      }}
                    />
                    <InputField
                      label="Reward-2 (in %)"
                      type="text"
                      name="five_2"
                      value={apiData.five_2}
                      onChange={(e) => {
                        setApiData({ ...apiData, five_2: e.target.value });
                      }}
                    />
                    <InputField
                      label="Reward-3 (in %)"
                      type="text"
                      name="five_3"
                      value={apiData.five_3}
                      onChange={(e) => {
                        setApiData({ ...apiData, five_3: e.target.value });
                      }}
                    />
                    <InputField
                      label="Reward-4 (in %)"
                      type="text"
                      name="five_4"
                      value={apiData.five_4}
                      onChange={(e) => {
                        setApiData({ ...apiData, five_4: e.target.value });
                      }}
                    />
                    <InputField
                      label="Reward-5 (in %)"
                      type="text"
                      name="five_5"
                      value={apiData.five_5}
                      onChange={(e) => {
                        setApiData({ ...apiData, five_5: e.target.value });
                      }}
                    />
                    <InputField
                      label="Reward-6 (in %)"
                      type="text"
                      name="five_6"
                      value={apiData.five_6}
                      onChange={(e) => {
                        setApiData({ ...apiData, five_6: e.target.value });
                      }}
                    />
                    <InputField
                      label="Reward-7 (in %)"
                      type="text"
                      name="five_7"
                      value={apiData.five_7}
                      onChange={(e) => {
                        setApiData({ ...apiData, five_7: e.target.value });
                      }}
                    />
                    <InputField
                      label="Reward-8 (in %)"
                      type="text"
                      name="five_8"
                      value={apiData.five_8}
                      onChange={(e) => {
                        setApiData({ ...apiData, five_8: e.target.value });
                      }}
                    />
                    <InputField
                      label="Reward-9 (in %)"
                      type="text"
                      name="five_9"
                      value={apiData.five_9}
                      onChange={(e) => {
                        setApiData({ ...apiData, five_9: e.target.value });
                      }}
                    />
                    <InputField
                      label="Reward-10 (in %)"
                      type="text"
                      name="five_10"
                      value={apiData.five_10}
                      onChange={(e) => {
                        setApiData({ ...apiData, five_10: e.target.value });
                      }}
                    />
                  </div>
                  <div class="col-md-6">
                    <InputField
                      label="Adjustable Amount"
                      type="text"
                      name="adjust_five_amount"
                      value={apiData.adjust_five_amount}
                      onChange={(e) => {
                        setApiData({
                          ...apiData,
                          adjust_five_amount: e.target.value,
                        });
                      }}
                    />
                    <InputField
                      label="Live Wallet"
                      type="text"
                      name="five_live"
                      value={apiData.five_live}
                      onChange={(e) => {
                        setApiData({ ...apiData, five_live: e.target.value });
                      }}
                    />
                    <InputField
                      label="Reward Wallet"
                      type="text"
                      name="five_reward"
                      value={apiData.five_reward}
                      onChange={(e) => {
                        setApiData({ ...apiData, five_reward: e.target.value });
                      }}
                    />
                  </div>
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <>Recursive Revolving</>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel p={10}>
                <SimpleGrid columns={{ base: 2 }} spacing="20px">
                  <div class="col-md-6">
                    <InputField
                      label="Reward-1 (in %)"
                      type="text"
                      name="rec_1"
                      value={apiData.rec_1}
                      onChange={(e) => {
                        setApiData({ ...apiData, rec_1: e.target.value });
                      }}
                    />

                    <InputField
                      label="Reward-2 (in %)"
                      type="text"
                      name="rec_2"
                      value={apiData.rec_2}
                      onChange={(e) => {
                        setApiData({ ...apiData, rec_2: e.target.value });
                      }}
                    />

                    <InputField
                      label="Reward-3 (in %)"
                      type="text"
                      name="rec_3"
                      value={apiData.rec_3}
                      onChange={(e) => {
                        setApiData({ ...apiData, rec_3: e.target.value });
                      }}
                    />

                    <InputField
                      label="Reward-4 (in %)"
                      type="text"
                      name="rec_4"
                      value={apiData.rec_4}
                      onChange={(e) => {
                        setApiData({ ...apiData, rec_4: e.target.value });
                      }}
                    />

                    <InputField
                      label="Reward-5 (in %)"
                      type="text"
                      name="rec_5"
                      value={apiData.rec_5}
                      onChange={(e) => {
                        setApiData({ ...apiData, rec_5: e.target.value });
                      }}
                    />
                    <InputField
                      label="Reward-6 (in %)"
                      type="text"
                      name="rec_6"
                      value={apiData.rec_6}
                      onChange={(e) => {
                        setApiData({ ...apiData, rec_6: e.target.value });
                      }}
                    />

                    <InputField
                      label="Reward-7 (in %)"
                      type="text"
                      name="rec_7"
                      value={apiData.rec_7}
                      onChange={(e) => {
                        setApiData({ ...apiData, rec_7: e.target.value });
                      }}
                    />

                    <InputField
                      label="Reward-8 (in %)"
                      type="text"
                      name="rec_8"
                      value={apiData.rec_8}
                      onChange={(e) => {
                        setApiData({ ...apiData, rec_8: e.target.value });
                      }}
                    />

                    <InputField
                      label="Reward-9 (in %)"
                      type="text"
                      name="rec_9"
                      value={apiData.rec_9}
                      onChange={(e) => {
                        setApiData({ ...apiData, rec_9: e.target.value });
                      }}
                    />

                    <InputField
                      label="Reward-10 (in %)"
                      type="text"
                      name="rec_10"
                      value={apiData.rec_10}
                      onChange={(e) => {
                        setApiData({ ...apiData, rec_10: e.target.value });
                      }}
                    />
                  </div>
                  <div class="col-md-6">
                    <InputField
                      label="Adjustable Amount"
                      type="text"
                      name="adjust_recursive_amount"
                      value={apiData.adjust_recursive_amount}
                      onChange={(e) => {
                        setApiData({
                          ...apiData,
                          adjust_recursive_amount: e.target.value,
                        });
                      }}
                    />
                    <InputField
                      label="Live Wallet"
                      type="text"
                      name="recursive_live"
                      value={apiData.recursive_live}
                      onChange={(e) => {
                        setApiData({
                          ...apiData,
                          recursive_live: e.target.value,
                        });
                      }}
                    />
                    <InputField
                      label="Reward Wallet"
                      type="text"
                      name="recursive_reward"
                      value={apiData.recursive_reward}
                      onChange={(e) => {
                        setApiData({
                          ...apiData,
                          recursive_reward: e.target.value,
                        });
                      }}
                    />
                  </div>
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Button
            fontSize="sm"
            variant="brand"
            fontWeight="500"
            type="submit"
            w="100%"
            h="50"
            mt="24px"
            onClick={() => {
              var levelOneCommission =
                parseFloat(apiData.one_6, 2) +
                parseFloat(apiData.one_7, 2) +
                parseFloat(apiData.one_8, 2);

              if (levelOneCommission !== 100) {
                toast({
                  title: "Error",
                  description: "Level 1 Commission must be 100%",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
                return;
              }
              var levelTwoCommission =
                parseFloat(apiData.two_9, 2) + parseFloat(apiData.two_10, 2);

              if (levelTwoCommission !== 100) {
                toast({
                  title: "Error",
                  description: "Level 2 Commission must be 100%",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
                return;
              }

              var levelThreeCommission =
                parseFloat(apiData.three_1, 2) +
                parseFloat(apiData.three_2, 2) +
                parseFloat(apiData.three_3, 2) +
                parseFloat(apiData.three_4, 2) +
                parseFloat(apiData.three_5, 2) +
                parseFloat(apiData.three_6, 2) +
                parseFloat(apiData.three_7, 2) +
                parseFloat(apiData.three_8, 2) +
                parseFloat(apiData.three_9, 2) +
                parseFloat(apiData.three_10, 2);

              if (levelThreeCommission !== 100) {
                toast({
                  title: "Error",
                  description: "Level 3 Commission must be 100%",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
                return;
              }

              var levelFourCommission =
                parseFloat(apiData.four_1, 2) +
                parseFloat(apiData.four_2, 2) +
                parseFloat(apiData.four_3, 2) +
                parseFloat(apiData.four_4, 2) +
                parseFloat(apiData.four_5, 2) +
                parseFloat(apiData.four_6, 2) +
                parseFloat(apiData.four_7, 2) +
                parseFloat(apiData.four_8, 2) +
                parseFloat(apiData.four_9, 2) +
                parseFloat(apiData.four_10, 2);

              if (levelFourCommission !== 100) {
                toast({
                  title: "Error",
                  description: "Level 4 Commission must be 100%",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
                return;
              }

              var levelFiveCommission =
                parseFloat(apiData.five_1, 2) +
                parseFloat(apiData.five_2, 2) +
                parseFloat(apiData.five_3, 2) +
                parseFloat(apiData.five_4, 2) +
                parseFloat(apiData.five_5, 2) +
                parseFloat(apiData.five_6, 2) +
                parseFloat(apiData.five_7, 2) +
                parseFloat(apiData.five_8, 2) +
                parseFloat(apiData.five_9, 2) +
                parseFloat(apiData.five_10, 2);

              if (levelFiveCommission !== 100) {
                toast({
                  title: "Error",
                  description: "Level 5 Commission must be 100%",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
                return;
              }

              var levelRecursiveCommission =
                parseFloat(apiData.rec_1, 2) +
                parseFloat(apiData.rec_2, 2) +
                parseFloat(apiData.rec_3, 2) +
                parseFloat(apiData.rec_4, 2) +
                parseFloat(apiData.rec_5, 2) +
                parseFloat(apiData.rec_6, 2) +
                parseFloat(apiData.rec_7, 2) +
                parseFloat(apiData.rec_8, 2) +
                parseFloat(apiData.rec_9, 2) +
                parseFloat(apiData.rec_10, 2);

              if (levelRecursiveCommission !== 100) {
                toast({
                  title: "Error",
                  description: "Recursive Commission must be 100%",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
                return;
              }

              var percentageCommission =
                parseFloat(apiData.one_live, 2) +
                parseFloat(apiData.one_reward, 2);

              if (percentageCommission !== 100) {
                toast({
                  title: "Error",
                  description: "Level 1 Live & Reward Commission must be 100%",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
                return;
              }

              percentageCommission =
                parseFloat(apiData.two_live, 2) +
                parseFloat(apiData.two_reward, 2);

              if (percentageCommission !== 100) {
                toast({
                  title: "Error",
                  description: "Level 2 Live & Reward Commission must be 100%",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
                return;
              }

              percentageCommission =
                parseFloat(apiData.three_live, 2) +
                parseFloat(apiData.three_reward, 2);

              if (percentageCommission !== 100) {
                toast({
                  title: "Error",
                  description: "Level 3 Live & Reward Commission must be 100%",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
                return;
              }

              percentageCommission =
                parseFloat(apiData.four_live, 2) +
                parseFloat(apiData.four_reward, 2);

              if (percentageCommission !== 100) {
                toast({
                  title: "Error",
                  description: "Level 4 Live & Reward Commission must be 100%",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
                return;
              }

              percentageCommission =
                parseFloat(apiData.five_live, 2) +
                parseFloat(apiData.five_reward, 2);

              if (percentageCommission !== 100) {
                toast({
                  title: "Error",
                  description: "Level 5 Live & Reward Commission must be 100%",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
                return;
              }

              percentageCommission =
                parseFloat(apiData.recursive_live, 2) +
                parseFloat(apiData.recursive_reward, 2);

              if (percentageCommission !== 100) {
                toast({
                  title: "Error",
                  description:
                    "Recursive Live & Reward Commission must be 100%",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
                return;
              }

              setAdminDashData(
                admin.user.username,
                admin.user.token,
                "setPackageCommission",
                apiData
              ).then((data) => {
                if (data.error.code === "#200") {
                  toast({
                    title: "Success",
                    description: "Updated Successfully",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  });
                } else {
                  toast({
                    title: "Error",
                    description: data.error.message,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                  });
                }
              });
            }}
          >
            Update
          </Button>{" "}
        </>
      )}
    </Box>
  );
}
