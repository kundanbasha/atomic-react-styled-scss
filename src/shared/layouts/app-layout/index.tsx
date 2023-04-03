import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AppLayout({ children }: Props) {
  const handleLogout = () => {};
  const handleFavourites = () => {};
  return (
    <div>
      <header>
        <h1>Quotes</h1>
        <div>
          <button onClick={handleFavourites}>Favourites</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </header>
      {children}
    </div>
  );
}
