type Props = {
  handleFavourites: () => void;
  handleLogout: () => void;
};

export default function Header({ handleFavourites, handleLogout }: Props) {
  return (
    <header>
      <h1>Quotes</h1>
      <div>
        <button onClick={handleFavourites}>Favourites</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
}
