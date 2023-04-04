import { useEffect, useState } from "react";
import QuoteItem from "./quote.item";
import { getLocalItem, setLocalItem } from "../../utils/helpers";

export default function QuotesList({ quotes }: { quotes: IQuote[] }) {
  const [favouriteKeys, setFavouriteKeys] = useState<string[]>([]);

  useEffect(() => {
    const favs: any = getFavouriteQuotes();
    setFavouriteKeys(Object.keys(favs));
  }, []);

  const updateFavouritesQuotes = (quoteKeys: string[]) => {
    setFavouriteKeys(quoteKeys);
  };

  return (
    <ul className="quotes-wrap">
      {quotes &&
        quotes.map((quote: IQuote) => (
          <QuoteItem
            key={quote._id}
            quote={quote}
            isFavourite={favouriteKeys.includes(quote._id)}
            updateFavouritesQuotes={updateFavouritesQuotes}
          />
        ))}
    </ul>
  );
}

export const getFavouriteQuotes = () => {
  let favs: any = getLocalItem("favourites") || "{}";
  favs = favs ? JSON.parse(favs) : {};

  return favs;
};

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
