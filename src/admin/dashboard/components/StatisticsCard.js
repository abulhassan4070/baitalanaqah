import { Icon, SimpleGrid } from '@chakra-ui/react';
import MiniStatistics from 'components/card/MiniStatistics';
import IconBox from 'components/icons/IconBox';
import React from 'react';
import { FaCartPlus, FaPlayCircle, FaUsers } from 'react-icons/fa';
import {  MdWork } from 'react-icons/md';
import { boxBg } from 'variables/constants';
import { brandColor } from 'variables/constants';
export default function Statistics() {
  const [data, setData] = React.useState({
    unverifiedusers: 0,
    totalusers: 0,
    verifiedusers: 0,
    tailors: 0,
    showrooms: 0,
    orders: 0,
  });

  React.useEffect(() => {
    setData({
      unverifiedusers: 28,
      verifiedusers: 872,
      totalusers: 900,
      tailors: 13,
      showrooms: 3,
      orders: 329,
    });
  }, []);
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }}
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
        name="Verified Users"
        value={data.verifiedusers}
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
        name="Unverified Users"
        value={data.unverifiedusers}
      />
      <MiniStatistics
        startContent={
          <IconBox
            w="56px"
            h="56px"
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
            icon={
              <Icon
                w="32px"
                h="32px"
                as={MdWork}
                color={brandColor}
              />
            }
          />
        }
        name="Tailors"
        value={data.tailors}
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
                as={FaPlayCircle}
                color={brandColor}
              />
            }
          />
        }
        name="Showrooms"
        value={data.showrooms}
      />
      <MiniStatistics
        startContent={
          <IconBox
            w="56px"
            h="56px"
            icon={
              <Icon w="32px" h="32px" as={FaCartPlus} color={brandColor} />
            }
          />
        }
        name="Orders"
        value={data.orders}
      />
    </SimpleGrid>
  );
}
