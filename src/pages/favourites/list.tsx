import { useFavouriteQuotes } from "../../shared/hooks";
import { IQuote } from "../quotes/list";
import { QuoteItem } from "../../shared/molecules";

export default function FavouriteList() {
  const { favouriteQuotes } = useFavouriteQuotes();

  return (
    <ul className="quotes-wrap">
      {favouriteQuotes &&
        Object.values(favouriteQuotes).map((fav: IQuote) => (
          <QuoteItem
            quote={fav}
            isFavourite={true}
            withAuthor={true}
            enableFavourite={false}
          />
        ))}
    </ul>
  );
}
