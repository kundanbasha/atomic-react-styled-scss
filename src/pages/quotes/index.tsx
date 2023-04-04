import QuotesList from "./list";
import { AppLayout } from "../../shared/layouts";
import { Container } from "../../shared/atoms";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../../shared/hooks";
import "./quotes.styles.scss";
import { LabeledHeading } from "../../shared/molecules";

export default function Quotes() {
  const [searchParams, setSearchParams] = useSearchParams();
  const author = searchParams.get("author");
  const { loading, data: quotes, error } = useFetch(`quotes?author=${author}`);

  return (
    <AppLayout>
      <Container className="quotes-container">
        <LabeledHeading
          label="Author"
          value={author}
          labelSize="16px"
          direction="column"
        />
        {loading ? <div>Loading...</div> : <QuotesList quotes={quotes} />}
      </Container>
    </AppLayout>
  );
}
