import useFetch from "../../../shared/hooks/useFetch";
import { useSearchParams } from "react-router-dom";

export default function QuotesList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const author = searchParams.get("author");
  const { loading, data: quotes, error } = useFetch(`quotes?author=${author}`);

  return (
    <div>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <ul>
          {quotes &&
            quotes.map((quote: IQuote) => (
              <li key={quote._id}>
                <h4>Author:{quote.author}</h4>
                <p>{quote.content}</p>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

interface IQuote {
  author: string;
  authorSlug: string;
  content: string;
  dateAdded: string;
  dateModified: string;
  length: number;
  tags: string[];
  _id: string;
}
