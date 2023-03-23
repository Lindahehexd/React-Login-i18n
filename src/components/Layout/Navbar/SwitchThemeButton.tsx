import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BsSunFill } from "react-icons/bs";
import { IoMdMoon } from "react-icons/io";

const SwitchThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue("black", "white");

  return (
    <IconButton
      variant="link"
      aria-label="Switch color mode"
      icon={colorMode === "dark" ? <BsSunFill /> : <IoMdMoon />}
      onClick={toggleColorMode}
      color={color}
    />
  );
};

export default SwitchThemeButton;
