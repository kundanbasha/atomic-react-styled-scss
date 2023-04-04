import { useEffect, useState } from "react";
import { getFavouriteQuotes } from "../../utils/helpers";

export default function useFavouriteQuotes() {
  const [favouriteQuotes, setFavouriteQuotes] = useState([]);

  useEffect(() => {
    const favs: any = getFavouriteQuotes();
    setFavouriteQuotes(favs);
  }, []);

  return {
    favouriteQuotes,
    setFavouriteQuotes,
    favouriteQuotesKeys: Object.keys(favouriteQuotes),
  };
}
