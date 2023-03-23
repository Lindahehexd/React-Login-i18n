import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Collapse,
  VStack,
  HStack,
  Text,
  Button,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/clientApp";
import { signOut } from "firebase/auth";
import LanguagePicker from "./LanguagePicker";
import SwitchThemeButton from "./SwitchThemeButton";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);
  const border = useColorModeValue("3px solid black", "3px solid white");
  const iconBg = useColorModeValue("gray.50", "#333333");
  const borderBot = useColorModeValue("5px solid black", "5px solid white");
  const color = useColorModeValue("black", "white");
  const [user] = useAuthState(auth);

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        onClose();
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    // return a cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        p={4}
        h="90px"
        justify="center"
        align="center"
        px={5}
        borderBottom={borderBot}
      >
        <Link to="/">
          <Text fontSize="2xl" fontWeight="bold">
            React Login & i18n
          </Text>
        </Link>
        {isMobile ? (
          <IconButton
            bg={iconBg}
            border={border}
            icon={isOpen ? <RiCloseFill /> : <RxHamburgerMenu />}
            onClick={onToggle}
            variant="ghost"
            aria-label="Mobile Menu"
          />
        ) : (
          <HStack spacing={8}>
            {user ? (
              <>
                <Link to="/">
                  <Button color={color} variant="link">
                    {t("navbar.home")}
                  </Button>
                </Link>
                <Link to="/profile">
                  <Button color={color} variant="link">
                    {t("navbar.profile")}
                  </Button>
                </Link>
                <Button color={color} variant="link" onClick={logout}>
                  {t("navbar.logout")}
                </Button>
                <SwitchThemeButton />
                <LanguagePicker />
              </>
            ) : (
              <>
                <Link to="/">
                  <Button color={color} variant="link">
                    {t("navbar.home")}
                  </Button>
                </Link>
                <Link to="/login">
                  <Button color={color} variant="link">
                    {t("navbar.login")}
                  </Button>
                </Link>
                <Link to="/register">
                  <Button color={color} variant="link">
                    {t("navbar.register")}
                  </Button>
                </Link>
                <SwitchThemeButton />
                <LanguagePicker />
              </>
            )}
          </HStack>
        )}
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box pb={4} mt={8} w="100vw" zIndex={20}>
          <VStack spacing={4} alignItems="center">
            {user ? (
              <>
                <Link to="/">
                  <Button color={color} variant="link">
                    {t("navbar.home")}
                  </Button>
                </Link>
                <Divider />
                <Link to="/profile">
                  <Button color={color} variant="link">
                    {t("navbar.profile")}
                  </Button>
                </Link>
                <Divider />
                <Button color={color} variant="link" onClick={logout}>
                  登出
                </Button>
                <Divider />
                <SwitchThemeButton />
                <Divider />
                <Flex w="20%">
                  <LanguagePicker />
                </Flex>
                <Divider />
              </>
            ) : (
              <>
                <Link to="/">
                  <Button color={color} variant="link">
                    {t("navbar.home")}
                  </Button>
                </Link>
                <Divider />
                <Link to="/login">
                  <Button color={color} variant="link">
                    {t("navbar.login")}
                  </Button>
                </Link>
                <Divider />
                <Link to="/register">
                  <Button color={color} variant="link">
                    {t("navbar.register")}
                  </Button>
                </Link>
                <Divider />
                <SwitchThemeButton />
                <Divider />
                <Flex w="20%">
                  <LanguagePicker />
                </Flex>
                <Divider />
              </>
            )}
            <Flex minW={200}></Flex>
          </VStack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;
