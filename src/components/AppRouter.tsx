import { Center, Spinner, Switch } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes, Navigate } from "react-router-dom";
import { auth } from "../firebase/clientApp";
import Homepage from "../pages/Homepage";
import Loginpage from "../pages/Loginpage";
import Profilepage from "../pages/Profilepage";
import Registerpage from "../pages/Registerpage";
import Welcompage from "../pages/Welcompage";

const AppRouter = () => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        setUser(user);
        setLoading(false);
      });
  
      return unsubscribe;
    }, []);
    if (loading) {
      return <Center h='100vh'>
        <Spinner/>
      </Center>;
    }
    return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route
          path="/welcome"
          element={user ? <Welcompage /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/profile"
          element={user ? <Profilepage /> : <Navigate to="/login" replace />}
        />
      </Routes>
    );
  };
  
  export default AppRouter;