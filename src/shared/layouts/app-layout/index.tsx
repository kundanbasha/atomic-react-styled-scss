import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn, removeLocalItem } from "../../../utils/helpers";
import { Header } from "../../../shared/organisms";
type Props = {
  children: ReactNode;
};

export default function AppLayout({ children }: Props) {
  const navigate = useNavigate();
  const username = isLoggedIn();

  const redirectToLogin = () => navigate("/");

  useEffect(() => {
    if (!username) redirectToLogin();
  }, [username]);

  const handleFavourites = () => {};

  const handleLogout = () => {
    removeLocalItem("username");
    redirectToLogin();
  };

  return (
    <div>
      <Header handleLogout={handleLogout} handleFavourites={handleFavourites} />
      {children}
    </div>
  );
}
