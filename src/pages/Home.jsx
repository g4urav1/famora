import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/context";

export default function Home() {
  const { loggedin } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedin) {
      navigate("/menu");
    }
  }, [loggedin, navigate]);

  return (
    <>
      
        <div>
          Home Page
      </div>
    </>
  );
}