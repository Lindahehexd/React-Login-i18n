import { Heading, ListItem, OrderedList, Tag, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Layout from "../components/Layout/Layout";

const Homepage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Heading p={2} mb={4}>
        {t("homePage.title")}{" "}
      </Heading>
      <Tag fontSize="lg" fontWeight={700} ml={2} colorScheme='purple'>
        {t("homePage.heading")}{" "}
      </Tag>
      <OrderedList fontSize="md" my={4} p={2}>
        <ListItem mb={2}>{t("homePage.item1")} </ListItem>
        <ListItem mb={2}>{t("homePage.item2")} </ListItem>
        <ListItem mb={2}>{t("homePage.item3")} </ListItem>
        <ListItem mb={2}>{t("homePage.item4")} </ListItem>
        <ListItem mb={2}>{t("homePage.item5")} </ListItem>
        <ListItem mb={2}>{t("homePage.item6")} </ListItem>
        <ListItem mb={2}>{t("homePage.item7")} </ListItem>
        <ListItem mb={2}>{t("homePage.item8")} </ListItem>
      </OrderedList>
    </Layout>
  );
};

export default Homepage;
