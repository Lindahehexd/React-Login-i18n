import Navbar from "./Navbar/Navbar";
import { Container, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

type layoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: layoutProps) => {
  return (
    <>
      <Navbar />
      <Flex mt={8}>
        <Container maxW="container.lg">{children}</Container>
      </Flex>
    </>
  );
};

export default Layout;
