import { Container } from "../../atoms";
import { HeaderWrap } from "./header.styles";
import { Button } from "../../atoms";

type Props = {
  handleFavourites: () => void;
  handleLogout: () => void;
};

export default function Header({ handleFavourites, handleLogout }: Props) {
  return (
    <HeaderWrap>
      <Container className="header-container">
        <h1>Quotes</h1>
        <div className="button-group">
          <Button onClick={handleFavourites}>Favourites</Button>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </Container>
    </HeaderWrap>
  );
}
