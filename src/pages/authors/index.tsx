import { Container } from "../../shared/atoms";
import { useFetch } from "../../shared/hooks";
import { AppLayout } from "../../shared/layouts";
import { LabeledHeading, NotFound } from "../../shared/molecules";
import { AUTHORS } from "../../utils/endpoints";
import AuthorsList from "./list";
import "./authors.styles.scss";
import AuthorsShimmer from "./shimmer";

export default function Authors() {
  const { loading, data: authors, error } = useFetch(AUTHORS);

  return (
    <AppLayout>
      <Container>
        <LabeledHeading
          label=""
          value={"Authors List"}
          style={{ marginLeft: "-8px" }}
        />
        {loading ? (
          <AuthorsShimmer />
        ) : authors?.length ? (
          <AuthorsList authors={authors} />
        ) : (
          <NotFound />
        )}
      </Container>
    </AppLayout>
  );
}
