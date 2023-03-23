import { Button, Input, Text, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/clientApp";

type loginProp = {
  loginPlaceholder: string;
  passwordPlaceholder: string;
  buttonContent: string;
};

const Login = ({
  loginPlaceholder,
  passwordPlaceholder,
  buttonContent,
}: loginProp) => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(loginForm.email, loginForm.password);
    } catch (error) {
      console.error(error);
      setLoginForm({ email: "", password: "" });
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    if (user) {
      navigate("/welcome");
    }
  }, [user, navigate]);

  return (
    <>
      <Flex w="375px">
        <form onSubmit={onSubmit}>
          <Input
            required
            name={"email"}
            placeholder={loginPlaceholder}
            type="email"
            mb={2}
            onChange={onChange}
            _placeholder={{ color: "gray.500" }}
          />
          <Input
            required
            name="password"
            placeholder={passwordPlaceholder}
            type="password"
            mb={2}
            onChange={onChange}
            fontSize="sm"
            _placeholder={{ color: "gray.500" }}
          />

          <Button
            w="100%"
            h="36px"
            my={2}
            type="submit"
            isLoading={loading}
            colorScheme="purple"
          >
            {buttonContent}
          </Button>
          <Text textAlign="center" mt={2} fontSize="sm" color="red.500">
            {error?.message}
          </Text>
        </form>
      </Flex>
    </>
  );
};

export default Login;
