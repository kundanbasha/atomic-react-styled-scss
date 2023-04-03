import { isLoggedIn, removeLocalItem } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/atoms";
import { useEffect } from "react";
import QuotesList from "./list";

export default function Quotes() {
  const navigate = useNavigate();
  const username = isLoggedIn();

  const redirectToLogin = () => navigate("/");

  useEffect(() => {
    if (!username) redirectToLogin();
  }, [username]);

  const handleLogout = () => {
    removeLocalItem("username");
    redirectToLogin();
  };

  return (
    <div>
      <QuotesList />
      {username}
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}
