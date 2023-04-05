import QuotesList from "./list";
import QuotesShimmer from "./shimmer";
import { AppLayout } from "../../shared/layouts";
import { Container } from "../../shared/atoms";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../../shared/hooks";
import { LabeledHeading, NotFound } from "../../shared/molecules";
import { QUOTES } from "../../utils/endpoints";
import "./quotes.styles.scss";

export default function Quotes() {
  const [searchParams, setSearchParams] = useSearchParams();
  const author = searchParams.get("author");
  const { loading, data: quotes, error } = useFetch(`${QUOTES}${author}`);

  return (
    <AppLayout>
      <Container className="quotes-container">
        <LabeledHeading
          label="Author"
          value={author}
          labelSize="16px"
          direction="column"
        />
        {loading ? (
          <QuotesShimmer />
        ) : quotes && quotes.length ? (
          <QuotesList quotes={quotes} />
        ) : (
          <NotFound />
        )}
      </Container>
    </AppLayout>
  );
}
