import { Container } from "../../atoms";
import { HeaderWrap } from "./header.styles";
import { Button } from "../../atoms";
import { Link } from "react-router-dom";

type Props = {
  handleLogout?: () => void;
};

export default function Header({ handleLogout }: Props) {
  return (
    <HeaderWrap>
      <Container className="header-container">
        <Link to="/" className="quotes-title">
          <h1>Quotes</h1>
        </Link>
        <div className="button-group">
          <Link to="/favourites">{HeartIcon}</Link>
          <Button role="button" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </Container>
    </HeaderWrap>
  );
}

const HeartIcon = (
  <>
    <svg
      version="1.0"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 64 64"
      enableBackground="new 0 0 64 64"
    >
      <path
        fill="#031424"
        d="M47.977,5.99c-4.416,0-8.414,1.792-11.308,4.686l-4.685,4.654l-4.686-4.654
C24.406,7.782,20.408,5.99,15.992,5.99C7.161,5.99,0,13.15,0,21.982c0,4.416,2.85,8.539,5.747,11.432l23.41,23.414
c1.562,1.562,4.092,1.562,5.653,0l23.349-23.352c2.896-2.893,5.81-7.078,5.81-11.494C63.969,13.15,56.808,5.99,47.977,5.99z"
      />
    </svg>
  </>
);
