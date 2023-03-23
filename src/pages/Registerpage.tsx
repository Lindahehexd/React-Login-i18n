import { Heading, Container, Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Layout from "../components/Layout/Layout";
import SignUp from "../components/Auth/SignUp";

const Registerpage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Flex justify="center">
        <Heading>{t("registerPage.title")}</Heading>
      </Flex>
      <Container maxW="container.lg" overflowX="auto" py={4}>
        <Flex justify="center">
          <SignUp
            loginPlaceholder={t("registerPage.loginPlaceholder")}
            passwordPlaceholder={t("registerPage.passwordPlaceholder")}
            confirmPlaceholder={t("registerPage.confirmPlaceholder")}
            buttonContent={t("registerPage.button")}
          />
        </Flex>
      </Container>
    </Layout>
  );
};

export default Registerpage;
