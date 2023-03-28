import { Box, Button, Text, useToast } from "@chakra-ui/react";
import InputField from "components/fields/InputField";
import { AdminContext } from "contexts/AdminContext";
import React from "react";
import { setAdminDashData } from "variables/functions";
import { getAdminDashData } from "variables/functions";
export default function ActivationCharges() {
  const [apiData, setApiData] = React.useState({});
  const admin = React.useContext(AdminContext);
  const [gst_inrupees, setGst_inrupees] = React.useState(0);
  const toast = useToast();
  React.useEffect(() => {
    getAdminDashData(
      admin.user.username,
      admin.user.token,
      "getActivationCommission"
    ).then((res) => {
      setApiData(res.data);
      setGst_inrupees(res.data.gst_inrupees);
    });
  }, [admin]);
  return (
    <Box
      mt={{ base: "130px", md: "80px", xl: "80px" }}
      backgroundColor="#fff"
      p="20px"
    >
      {apiData && (
        <>
          <div class="row">
            <div class="col-md-6">
              <InputField
                label="Database Maintenance Charges"
                type="text"
                value={apiData.activation_amount}
                onChange={(e) => {
                  setApiData({ ...apiData, activation_amount: e.target.value });
                }}
              />
              <InputField
                label="CGST (in Rs.)"
                type="text"
                value={apiData.cgst}
                onChange={(e) => {
                  setApiData({ ...apiData, cgst: e.target.value });
                  setGst_inrupees(
                    parseFloat(e.target.value) +
                      parseFloat(apiData.sgst) +
                      parseFloat(apiData.igst)
                  );
                }}
              />
              <InputField
                label="SGST (in Rs.)"
                type="text"
                value={apiData.sgst}
                onChange={(e) => {
                  setApiData({ ...apiData, sgst: e.target.value });
                  setGst_inrupees(
                    parseFloat(apiData.cgst) +
                      parseFloat(e.target.value) +
                      parseFloat(apiData.igst)
                  );
                }}
              />
              <InputField
                label="IGST (in Rs.)"
                type="text"
                value={apiData.igst}
                onChange={(e) => {
                  setApiData({ ...apiData, igst: e.target.value });
                  setGst_inrupees(
                    parseFloat(apiData.cgst) +
                      parseFloat(apiData.sgst) +
                      parseFloat(e.target.value)
                  );
                }}
              />
              <InputField
                label="Margin Amount (in Rs.)"
                type="text"
                value={apiData.margin_amount}
                onChange={(e) => {
                  setApiData({ ...apiData, margin_amount: e.target.value });
                }}
              />
              <InputField
                label="Level-1 Commission (in Rs.)"
                type="text"
                name="first_level_commision_inrupees"
                value={apiData.first_level_commision_inrupees}
                onChange={(e) => {
                  setApiData({
                    ...apiData,
                    first_level_commision_inrupees: e.target.value,
                  });
                }}
              />
              <InputField
                label="Level-2 Commission (in Rs.)"
                type="text"
                name="second_level_commision_inrupees"
                value={apiData.second_level_commision_inrupees}
                onChange={(e) => {
                  setApiData({
                    ...apiData,
                    second_level_commision_inrupees: e.target.value,
                  });
                }}
              />
              <InputField
                label="Level-3 Commission (in Rs.)"
                type="text"
                name="third_level_commision_inrupees"
                value={apiData.third_level_commision_inrupees}
                onChange={(e) => {
                  setApiData({
                    ...apiData,
                    third_level_commision_inrupees: e.target.value,
                  });
                }}
              />
              <InputField
                label="Level-4 Commission (in Rs.)"
                type="text"
                name="fourth_level_commision_inrupees"
                value={apiData.fourth_level_commision_inrupees}
                onChange={(e) => {
                  setApiData({
                    ...apiData,
                    fourth_level_commision_inrupees: e.target.value,
                  });
                }}
              />
              <InputField
                label="Level-5 Commission (in Rs.)"
                type="text"
                name="fifth_level_commision_inrupees"
                value={apiData.fifth_level_commision_inrupees}
                onChange={(e) => {
                  setApiData({
                    ...apiData,
                    fifth_level_commision_inrupees: e.target.value,
                  });
                }}
              />
              <InputField
                label="Reward Wallet (in %.)"
                type="text"
                name="reward"
                value={apiData.reward}
                onChange={(e) => {
                  setApiData({ ...apiData, reward: e.target.value });
                }}
              />
              <InputField
                label="Live Wallet (in %.)"
                type="text"
                name="reward"
                value={apiData.live}
                onChange={(e) => {
                  setApiData({ ...apiData, live: e.target.value });
                }}
              />
            </div>
          </div>
          <Text>
            <b>Activation Amount : </b> {apiData.activation_amount} <br />
            <b>GST in Rupees : </b> {gst_inrupees}
            <br />
            <b>Total Amount : </b>
            {parseFloat(apiData.activation_amount) + parseFloat(gst_inrupees)}
            <br />
          </Text>
          <Button
            fontSize="sm"
            variant="brand"
            fontWeight="500"
            type="submit"
            w="100%"
            h="50"
            mt="24px"
            onClick={() => {
              var newJson = {
                activation_amount: apiData.activation_amount,
                cgst: apiData.cgst,
                sgst: apiData.sgst,
                igst: apiData.igst,
                gst_inrupees: gst_inrupees,
                total_amount:
                  parseFloat(apiData.activation_amount, 2) +
                  parseFloat(gst_inrupees, 2),
                margin_amount: apiData.margin_amount,
                first_level_commision_inrupees:
                  apiData.first_level_commision_inrupees,
                second_level_commision_inrupees:
                  apiData.second_level_commision_inrupees,
                third_level_commision_inrupees:
                  apiData.third_level_commision_inrupees,
                fourth_level_commision_inrupees:
                  apiData.fourth_level_commision_inrupees,
                fifth_level_commision_inrupees:
                  apiData.fifth_level_commision_inrupees,
                reward: apiData.reward,
                live: apiData.live,
                net_income: parseFloat(
                  parseFloat(apiData.activation_amount) -
                    parseFloat(gst_inrupees, 2),
                  2
                ),
              };
              var totalPercentage =
                parseFloat(newJson.reward) + parseFloat(newJson.live);
              if (totalPercentage !== 100) {
                toast({
                  title: "Error",
                  description: "Total Live and Reward Wallet should be 100%",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
                return;
              }
              var totalAmount =
                parseFloat(newJson.first_level_commision_inrupees) +
                parseFloat(newJson.second_level_commision_inrupees) +
                parseFloat(newJson.third_level_commision_inrupees) +
                parseFloat(newJson.fourth_level_commision_inrupees) +
                parseFloat(newJson.fifth_level_commision_inrupees);

              if (totalAmount !== parseFloat(newJson.margin_amount)) {
                toast({
                  title: "Error",
                  description:
                    "Total Commission should be equal to Margin Amount",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
                return;
              }
              setAdminDashData(
                admin.user.username,
                admin.user.token,
                "setActivationCommission",
                newJson
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
