import { RANDOM_QUOTE } from "../../../utils/endpoints";
import { Blockquote } from "../../atoms";
import { useFetch } from "../../hooks";

export default function RandomQuote() {
  const { loading, data: quote, error } = useFetch(RANDOM_QUOTE);

  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <Blockquote size="36px">{quote?.content || ""}</Blockquote>
      )}
    </div>
  );
}
