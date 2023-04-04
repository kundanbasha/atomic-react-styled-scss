import { useFavouriteQuotes } from "../../shared/hooks";
import { QuoteItem } from "../../shared/molecules";

export default function QuotesList({ quotes }: { quotes: IQuote[] }) {
  const { favouriteQuotesKeys, setFavouriteQuotes } = useFavouriteQuotes();

  const updateFavouritesQuotes = (quotes: any) => {
    setFavouriteQuotes(quotes);
  };

  return (
    <ul className="quotes-wrap">
      {quotes &&
        quotes.map((quote: IQuote) => (
          <QuoteItem
            key={quote._id}
            quote={quote}
            isFavourite={favouriteQuotesKeys.includes(quote._id)}
            updateFavouritesQuotes={updateFavouritesQuotes}
          />
        ))}
    </ul>
  );
}

export interface IQuote {
  author: string;
  authorSlug: string;
  content: string;
  dateAdded: string;
  dateModified: string;
  length: number;
  tags: string[];
  _id: string;
}
