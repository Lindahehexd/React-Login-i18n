import { Button, Input, Text, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { User } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, firestore } from "../../firebase/clientApp";
import { useNavigate } from "react-router-dom";

type registerProp = {
  loginPlaceholder: string;
  passwordPlaceholder: string;
  confirmPlaceholder: string;
  buttonContent: string;
};

const SignUp = ({
  loginPlaceholder,
  passwordPlaceholder,
  confirmPlaceholder,
  buttonContent,
}: registerProp) => {
  const navigate = useNavigate();
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, userCred, loading, authError] =
    useCreateUserWithEmailAndPassword(auth);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (error) setError("");
    if (signUpForm.password !== signUpForm.confirmpassword) {
      setError("password do not match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(
        signUpForm.email,
        signUpForm.password
      );
      navigate("/welcome");
    } catch (error: any) {
      setError(error.message);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({
      //update the state, name為下面input中的name 這樣就能對應到
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const createUserDoc = async (user: User) => {
    await addDoc(
      collection(firestore, "users"),
      JSON.parse(JSON.stringify(user))
    );
  };

  useEffect(() => {
    if (userCred) createUserDoc(userCred.user);
  }, [userCred]);

  return (
    <Flex w="375px">
      <form onSubmit={onSubmit}>
        <Input
          required
          name="email"
          placeholder={loginPlaceholder}
          type="email"
          mb={2}
          onChange={onChange}
          fontSize="sm"
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
        <Input
          required
          name="confirmpassword"
          placeholder={confirmPlaceholder}
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
          {authError?.message}
        </Text>
      </form>
    </Flex>
  );
};

export default SignUp;
