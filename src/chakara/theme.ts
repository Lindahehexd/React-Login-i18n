import { extendTheme, useColorModeValue } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: useColorModeValue("#FFFFFF", "#09090B"),
      },
    }),
  },
});
