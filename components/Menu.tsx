import { Menu, Box, Flex, MenuButton, MenuList, useColorMode, MenuItem, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import DarkModeSwitch from "./DarkModeSwitch";
import NextLink from "next/link";
import { useRouter } from "next/router";

const MenuHamburguer = () => {
  const { colorMode } = useColorMode();
  const iconColor = {
    light: "black",
    dark: "white",
  };
  const textColor = {
    light: "black",
    dark: "black",
  };
  const backgroundColor = {
    light: "white",
    dark: "light",
  };
  const menuIconColor = {
    light: "white",
    dark: "dark"
  };

  const router = useRouter();

  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      maxWidth="820px"
      minWidth="356px"
      width="100%"
      as="nav"
      px={5}
      my={8}
      mx="auto"
      display={["flex", "flex", "none", "none"]}
      color={textColor[colorMode]}
      backgroundColor={backgroundColor[colorMode]}
    >
      <Box>
        <Menu>
          <MenuButton
            color={iconColor[colorMode]}
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            _expanded={{ bg: menuIconColor[colorMode] }}
            _focus={{ boxShadow: "outline" }}
          />
          <MenuList color={iconColor[colorMode]}>
            <MenuItem>
              {" "}
              <NextLink href="/" passHref>
                Home
              </NextLink>
            </MenuItem>
            <MenuItem>
              {" "}
              <NextLink href="/projects" passHref>
                Projects
              </NextLink>
            </MenuItem>
            <MenuItem>
              {" "}
              <NextLink href="/images/Navid_Ali_Resume.pdf" passHref>
                Resume
              </NextLink>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <DarkModeSwitch />
    </Flex>
  );
};

export default MenuHamburguer;
