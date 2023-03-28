import { Icon, SimpleGrid } from "@chakra-ui/react";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import { AdminContext } from "contexts/AdminContext";
import React from "react";
import { FaUsers } from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";
import { MdDeliveryDining, MdOutlineDeliveryDining } from "react-icons/md";
import { boxBg } from "variables/constants";
import { brandColor } from "variables/constants";
import { getAdminDashData } from "variables/functions";
export default function Statistics() {
  const admin = React.useContext(AdminContext);
  const [data, setData] = React.useState({
    freeusers: 0,
    paidusers: 0,
    totalusers: 0,
    deliverypartners: 0,
    deliveryboys: 0,
    vendors: 0,
  });
  React.useEffect(() => {
    console.log(admin);
    getAdminDashData(admin.user.username, admin.user.token, "getDashboardDetails").then((data) => {
      if (data.error.code === "#200") {
        setData(data.data);
      } else {
        console.log(data.error);
      }
    });
  }, [admin]);
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
      gap="20px"
      mb="20px"
    >
      <MiniStatistics
        startContent={
          <IconBox
            w="56px"
            h="56px"
            bg={boxBg}
            icon={<Icon w="32px" h="32px" as={FaUsers} color={brandColor} />}
          />
        }
        name="Total Users"
        value={data.totalusers}
      />
      <MiniStatistics
        startContent={
          <IconBox
            w="56px"
            h="56px"
            bg={boxBg}
            icon={<Icon w="32px" h="32px" as={FaUsers} color={brandColor} />}
          />
        }
        name="Free Users"
        value={data.freeusers}
      />
      <MiniStatistics
        startContent={
          <IconBox
            w="56px"
            h="56px"
            icon={<Icon w="32px" h="32px" as={FaUsers} color={brandColor} />}
          />
        }
        name="Paid Users"
        value={data.paidusers}
      />
      <MiniStatistics
        startContent={
          <IconBox
            w="56px"
            h="56px"
            icon={
              <Icon
                w="32px"
                h="32px"
                as={MdDeliveryDining}
                color={brandColor}
              />
            }
          />
        }
        name="Delivery Partners"
        value={data.deliverypartners}
      />
      <MiniStatistics
        startContent={
          <IconBox
            w="56px"
            h="56px"
            bg={boxBg}
            icon={
              <Icon
                w="32px"
                h="32px"
                as={MdOutlineDeliveryDining}
                color={brandColor}
              />
            }
          />
        }
        name="Delivery Boys"
        value={data.deliveryboys}
      />
      <MiniStatistics
        startContent={
          <IconBox
            w="56px"
            h="56px"
            icon={
              <Icon w="32px" h="32px" as={IoRestaurant} color={brandColor} />
            }
          />
        }
        name="Vendors"
        value={data.vendors}
      />
    </SimpleGrid>
  );
}
