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
  SimpleGrid,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link, NavLink } from "react-router-dom";
import logotext from "../assets/img/logotext.png";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
import { Context } from "../contexts/Wrapper";
import axios from "axios";
import { apiUrl } from "variables/constants";

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
            onClick={() => {
              // remove overflow hidden from body and add it to html
              document.body.classList.toggle("overflow-hidden");
              document.documentElement.classList.toggle("overflow-hidden");
              onToggle();
            }}
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
        <Flex display={"flex"}>
          <select
            value={context.locale}
            onChange={context.selectLanguage}
            style={{ fontSize: "10px", cursor: "pointer" }}
          >
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
                aria-label="Title"
                icon={
                  <Icon
                    icon="solar:bag-3-outline"
                    fontWeight={100}
                    width={30}
                    height={30}
                  />
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
                aria-label="Title"
                icon={
                  <Icon
                    fontWeight={100}
                    icon="fa-regular:user"
                    width={20}
                    height={20}
                  />
                }
              />
            </Link>
          </Box>
        </Stack>
      </Flex>

      <Collapse
        in={isOpen}
        transition={{ enter: { duration: 0 }, exit: { duration: 0 } }}
        animateOpacity
      >
        <MobileNav onToggle={() => onToggle()} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const { t } = useTranslation();
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl()}getProductCategories`)
      .then((response) => {
        localStorage.setItem("categories", JSON.stringify(response.data));
        console.log(response.data);
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Stack direction={"row"} spacing={4} w={"100%"}>
      {NAV_ITEMS.map((navItem) => {
        if (navItem.logo === true) {
          return (
            <Link to={"/"} className="nomargin">
              <img
                src={logotext}
                alt="logo"
                style={{
                  maxWidth: "150px",
                  height: "auto",
                  margin: "0 10px",
                  width: "100%",
                }}
              />
            </Link>
          );
        }
        return (
          <Box
            key={navItem.label}
            px={5}
            className="nomargin"
            style={{
              WebkitShapeMargin: "0px",
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
            {(navItem.label === "men" || navItem.label === "women") && (
              <Popover trigger={"hover"}>
                <PopoverTrigger>
                  <NavLink to={navItem.href ?? "#"}>
                    <Flex
                      to={navItem.href ?? "#"}
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
                  </NavLink>
                </PopoverTrigger>
                <PopoverContent
                  width={{ base: "100%", lg: "max-content" }}
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                >
                  <Top3Categories
                    categories={categories}
                    label={navItem.label}
                  />
                </PopoverContent>
              </Popover>
            )}
            {!navItem.children &&
              navItem.label !== "men" &&
              navItem.label !== "women" && (
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
const Top3Categories = ({ categories, label }) => {
  const { t } = useTranslation();
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const [top3Categories, setTop3Categories] = useState([]);
  useEffect(() => {
    if (categories.length > 0) {
      var index = 0;
      let top3 = [];
      for (let i = 0; i < categories.length; i++) {
        if (index === 3) {
          break;
        }
        if (categories[i].categoryName.startsWith(label)) {
          top3.push(categories[i]);
          index++;
        }
      }
      setTop3Categories(top3);
    }
  }, [categories, label]);

  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, md: 3 }}
      spacing={4}
      className="hfont"
    >
      {top3Categories.map((category) => (
        <NavLink
          to={`/shop/${category.categoryName}`}
          p={2}
          fontSize={"sm"}
          fontWeight={500}
          color={linkColor}
          activeClassName="active"
          display={"flex"}
        >
          <Image
            src={category.categoryImage}
            alt={category.categoryName}
            width={200}
            height={200}
          />
          <Text
            textAlign={"center"}
            fontSize={"lg"}
            fontWeight={800}
            transition={"all .3s ease"}
            _groupHover={{ color: "black" }}
            className="hfont"
          >
            {t(category.categoryName.replace(label + "", ""))}
          </Text>
        </NavLink>
      ))}
    </SimpleGrid>
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

const MobileNav = (onToggle) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
      height={"100vh"}
    >
      {NAV_ITEMS.map((navItem) => {
        if (navItem.logo === true) {
          return <></>;
        }
        return <MobileNavItem key={navItem.label} {...navItem} {...onToggle} />;
      })}
      <NavLink
        to={"/cart"}
        onClick={(e) => {
          onToggle();
          document.body.classList.remove("overflow-hidden");
          document.documentElement.classList.remove("overflow-hidden");
        }}
        className={"hfont"}
        style={{
          fontSize: "16px",
          padding: "10px 0",
          display: "flex",
        }}
        activeClassName="active"
      >
        <Text
          fontWeight={400}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {"Cart"}
        </Text>
        <Spacer />
        <Icon
          fontWeight={100}
          icon="material-symbols:chevron-right"
          color="pink.400"
          transition={"all .25s ease-in-out"}
          w={6}
          h={6}
        />
      </NavLink>
      <NavLink
        to={"/login"}
        onClick={(e) => {
          onToggle();
          document.body.classList.remove("overflow-hidden");
          document.documentElement.classList.remove("overflow-hidden");
        }}
        className={"hfont"}
        style={{
          fontSize: "16px",
          padding: "10px 0",
          display: "flex",
        }}
        activeClassName="active"
      >
        <Text
          fontWeight={400}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {"Login"}
        </Text>
        <Spacer />
        <Icon
          icon="material-symbols:chevron-right"
          color="pink.400"
          fontWeight={100}
          transition={"all .25s ease-in-out"}
          w={6}
          h={6}
        />
      </NavLink>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href, onToggle }) => {
  const { isOpen } = useDisclosure();
  const { t } = useTranslation();

  return (
    <NavLink
      to={href ?? "#"}
      onClick={(e) => {
        onToggle();
        document.body.classList.remove("overflow-hidden");
        document.documentElement.classList.remove("overflow-hidden");
      }}
      className={"hfont"}
      style={{
        fontSize: "16px",
        padding: "10px 0",
        display: "flex",
      }}
      activeClassName="active"
    >
      <Text fontWeight={400} color={useColorModeValue("gray.600", "gray.200")}>
        {t(label)}
      </Text>
      <Spacer />
      <Icon
        icon="material-symbols:chevron-right"
        color="pink.400"
        fontWeight={400}
        transition={"all .25s ease-in-out"}
        transform={isOpen ? "rotate(180deg)" : ""}
        w={6}
        h={6}
      />
    </NavLink>
  );
};

const NAV_ITEMS = [
  // {
  //   label: "suits",
  //   href: "shop/suits",
  // },
  // {
  //   label: "abaya",
  //   href: "shop/abaya",
  // },
  // {
  //   label: "Custom",
  //   href: "customize",
  // },
  {
    label: "shop",
    href: "shop",
  },
  {
    label: "Services",
    href: "services",
  },
  {
    logo: true,
  },
  // {
  //   label: "Clients",
  //   href: "clients",
  // },
  {
    label: "blogs",
    href: "blogs",
  },
  {
    label: "contact",
    href: "contact",
  },
  {
    label: "team",
    href: "about",
  },
  // {
  //   label: "more",
  //   href: "more",
  //   children: [
  //     {
  //       label: "contact",
  //       href: "contact",
  //     },
  //     {
  //       label: "team",
  //       href: "about",
  //     },
  //   ],
  // },
];
