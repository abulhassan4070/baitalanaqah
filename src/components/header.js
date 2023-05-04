import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link, NavLink } from "react-router-dom";
import logotext from "../assets/img/logotext.png";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { Context } from "../contexts/Wrapper";

export default function NavigationHeader() {
  const context = useContext(Context);
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          display={{ base: "flex", md: "none" }}
          width={"100%"}
          justify={"center"}
        >
          <Link to={"/"}>
            <img
              src={logotext}
              alt="logo"
              style={{
                maxWidth: "150px",
                height: "auto",
                width: "100%",
              }}
            />
          </Link>
        </Flex>
        <Flex display={{ base: "flex", md: "flex" }}>
          <select value={context.locale} onChange={context.selectLanguage}>
            <option value="en">English</option>
            <option value="ar">اَلْعَرَبِيَّةُ</option>
          </select>
        </Flex>
        <Flex flex={{ base: 1 }} justify={"center"}>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Box display={{ base: "none", md: "flex" }}>
            <Link to={"/cart"}>
              <IconButton
                as="a"
                backgroundColor={"white"}
                href="#"
                aria-label="Twitter"
                icon={
                  <Icon icon="solar:bag-3-outline" width={30} height={30} />
                }
              />
            </Link>
          </Box>
          <Box display={{ base: "none", md: "flex" }}>
            <Link to={"/login"}>
              <IconButton
                as="a"
                href="#"
                backgroundColor={"white"}
                aria-label="Twitter"
                icon={<Icon icon="fa-regular:user" width={20} height={20} />}
              />
            </Link>
          </Box>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const { t } = useTranslation();
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4} w={"100%"}>
      {NAV_ITEMS.map((navItem) => {
        if (navItem.logo === true) {
          return (
            <Link to={"/"}>
              <img
                src={logotext}
                alt="logo"
                style={{
                  maxWidth: "150px",
                  height: "auto",
                  width: "100%",
                  margin: "5px 25px",
                }}
              />
            </Link>
          );
        }
        return (
          <Box
            key={navItem.label}
            px={5}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {navItem.children && (
              <Popover trigger={"hover"}>
                <PopoverTrigger>
                  <Flex
                    p={2}
                    fontSize={"sm"}
                    fontWeight={500}
                    color={linkColor}
                    className={"hfont header-nav-link"}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "16px",
                      cursor: "pointer",
                    }}
                  >
                    {t(navItem.label)}
                    <Icon icon="gridicons:dropdown" />
                  </Flex>
                </PopoverTrigger>
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              </Popover>
            )}
            {!navItem.children && (
              <NavLink
                to={navItem.href ?? "#"}
                p={2}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                className={"hfont header-nav-link"}
                activeClassName="active"
                display={"flex"}
              >
                {t(navItem.label)}
              </NavLink>
            )}
          </Box>
        );
      })}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  const { t } = useTranslation();
  return (
    <Link
      to={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "black" }}
            fontWeight={500}
            className="hfont"
          >
            {t(label)}
          </Text>
          <Text fontSize={"sm"}>{t(subLabel)}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon icon="material-symbols:chevron-right" color="pink.400" />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => {
        if (navItem.logo === true) {
          return <></>;
        }
        return <MobileNavItem key={navItem.label} {...navItem} />;
      })}
      <Stack
        flex={{ base: 1, md: 0 }}
        justify={"flex-start"}
        direction={"row"}
        spacing={6}
      >
        <Link to={"/cart"}>
          <IconButton
            as="a"
            backgroundColor={"white"}
            href="#"
            aria-label="Twitter"
            icon={<Icon icon="solar:bag-3-outline" width={30} height={30} />}
          />
        </Link>
        <Link to={"/login"}>
          <IconButton
            as="a"
            href="#"
            backgroundColor={"white"}
            aria-label="Twitter"
            icon={<Icon icon="fa-regular:user" width={20} height={20} />}
          />
        </Link>
      </Stack>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();
  const { t } = useTranslation();

  return (
    <Stack
      spacing={6}
      onClick={children && onToggle}
      style={{ cursor: "pointer" }}
    >
      <NavLink
        to={href ?? "#"}
        p={2}
        fontSize={"sm"}
        fontWeight={500}
        className={"hfont header-nav-link"}
        activeClassName="active"
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            icon="material-symbols:chevron-down"
            color="pink.400"
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </NavLink>
      {/* <Flex
        py={2}
        as={NavLink}
        to={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        className={"hfont header-nav-link"}
        activeClassName="active"
        _hover={{
          textDecoration: "none",
        }}
      >
       
      </Flex> */}

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} to={child.href}>
                {t(child.label)}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "shop",
    href: "shop",
  },
  {
    label: "collaborations",
    href: "collaborations",
  },
  {
    logo: true,
  },
  {
    label: "tailors",
    href: "tailors",
  },
  {
    label: "more",
    href: "more",
    children: [
      {
        label: "contact",
        subLabel: "contactSub",
        href: "contact",
      },
      {
        label: "story",
        subLabel: "storySub",
        href: "about",
      },
      // {
      //   label: "How",
      //   subLabel: "Know how it works",
      //   href: "howitworks",
      // },
      // {
      //   label: "Customize",
      //   subLabel: "Customizing suits",
      //   href: "customize",
      // },
      {
        label: "blogs",
        subLabel: "blogsSub",
        href: "blogs",
      },
    ],
  },
];
