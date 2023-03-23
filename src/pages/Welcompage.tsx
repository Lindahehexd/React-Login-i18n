import { Heading, Container, Badge } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Layout from "../components/Layout/Layout";

const Welcompage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Heading p={2}>
        {t("welcomePage.title")}
        <Badge colorScheme="green" fontSize="lg" mx={4}>
        PRIVATE
        </Badge>
      </Heading>
      <Container maxW="container.lg" overflowX="auto" py={4}>
        {t("welcomePage.content")}
      </Container>
    </Layout>
  );
};

export default Welcompage;
