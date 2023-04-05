import { useFavouriteQuotes } from "../../shared/hooks";
import { IQuote } from "../quotes/list";
import { NotFound, QuoteItem } from "../../shared/molecules";

export default function FavouriteList() {
  const { favouriteQuotes } = useFavouriteQuotes();

  const favouriteQuotesArr = Object.values(favouriteQuotes);

  return (
    <ul className="quotes-wrap">
      {favouriteQuotesArr.length ? (
        favouriteQuotesArr?.map((fav: IQuote) => (
          <QuoteItem
            quote={fav}
            isFavourite={true}
            withAuthor={true}
            enableFavourite={false}
          />
        ))
      ) : (
        <NotFound />
      )}
    </ul>
  );
}
