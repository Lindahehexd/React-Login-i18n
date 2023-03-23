import { Heading, Container, Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Layout from "../components/Layout/Layout";
import Login from "../components/Auth/Login";

const Loginpage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Flex justify="center">
        <Heading>{t("loginPage.title")}</Heading>
      </Flex>
      <Container maxW="container.lg" overflowX="auto" py={4}>
        <Flex justify="center">
          <Login
            loginPlaceholder={t("loginPage.loginPlaceholder")}
            passwordPlaceholder={t("loginPage.passwordPlaceholder")}
            buttonContent={t("loginPage.button")}
          />
        </Flex>
      </Container>
    </Layout>
  );
};

export default Loginpage;
