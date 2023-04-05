import { AppLayout } from "../../shared/layouts";
import { Container } from "../../shared/atoms";
import { LabeledHeading } from "../../shared/molecules";
import FavouriteList from "./list";
import "./favourites.styles.scss";

export default function Favourites() {
  return (
    <AppLayout>
      <Container className="favourites-container">
        <LabeledHeading
          label=""
          value={"Favourite List"}
          style={{ marginLeft: "-8px" }}
        />
        <FavouriteList />
      </Container>
    </AppLayout>
  );
}
