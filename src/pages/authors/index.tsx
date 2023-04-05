import { Container } from "../../shared/atoms";
import { useFetch } from "../../shared/hooks";
import { AppLayout } from "../../shared/layouts";
import { NotFound } from "../../shared/molecules";
import { AUTHORS } from "../../utils/endpoints";
import AuthorsList from "./list";
import "./authors.styles.scss";

export default function Authors() {
  const { loading, data: authors, error } = useFetch(AUTHORS);

  return (
    <AppLayout>
      <Container>
        {loading ? (
          <h4>Loading...</h4>
        ) : authors?.length ? (
          <AuthorsList authors={authors} />
        ) : (
          <NotFound />
        )}
      </Container>
    </AppLayout>
  );
}
