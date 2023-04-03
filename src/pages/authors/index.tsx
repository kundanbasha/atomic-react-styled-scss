import { Container } from "../../shared/atoms";
import { useFetch } from "../../shared/hooks";
import { AppLayout } from "../../shared/layouts";
import AuthorsList from "./list";
import "./authors.styles.scss";

export default function Authors() {
  const { loading, data: authors, error } = useFetch("authors");

  return (
    <AppLayout>
      <Container>
        {loading ? <h4>Loading...</h4> : <AuthorsList authors={authors} />}
      </Container>
    </AppLayout>
  );
}
