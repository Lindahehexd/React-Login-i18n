import { Badge, Container, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useTranslation } from "react-i18next";
import { auth } from "../firebase/clientApp";
import Layout from "../components/Layout/Layout";

const Profilepage = () => {
  const [user] = useAuthState(auth);
  const { t } = useTranslation();

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <Layout>
      <Heading>
        {t("profilePage.title")}
        <Badge colorScheme="green" fontSize="lg" mx={4}>
          PRIVATE
        </Badge>
      </Heading>
      <Container maxW="container.lg" overflowX="auto" py={4}>
        <Text fontSize="lg" fontWeight={700} mb={4}>
          {t("profilePage.heading")}
        </Text>
        {user ? (
          <div>{user && <pre> {JSON.stringify(user, null, 2)}</pre>}</div>
        ) : (
          <div>
            <p>Please log in to view your profile.</p>
          </div>
        )}
      </Container>
    </Layout>
  );
};

export default Profilepage;
