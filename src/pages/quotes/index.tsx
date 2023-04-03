import QuotesList from "./list";
import { AppLayout } from "../../shared/layouts";
import { Container } from "../../shared/atoms";

export default function Quotes() {
  return (
    <AppLayout>
      <Container>
        <QuotesList />
      </Container>
    </AppLayout>
  );
}
