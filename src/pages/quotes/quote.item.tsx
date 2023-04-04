import { useState } from "react";
import { IQuote } from "./list";
import HeartIcon from "../../assets/icons/heart.svg";
import FilledHeartIcon from "../../assets/icons/heart-filled.svg";
import ArrowUpIcon from "../../assets/icons/arrow-up.svg";
import ArrowDownIcon from "../../assets/icons/arrow-down.svg";
import { setLocalItem } from "../../utils/helpers";
import { getFavouriteQuotes } from "./list";

type Props = {
  quote: IQuote;
  isFavourite: boolean;
  updateFavouritesQuotes: (quotesKeys: string[]) => void;
};

export default function QuoteItem({
  quote,
  isFavourite,
  updateFavouritesQuotes,
}: Props) {
  const [expand, setExpand] = useState(false);

  const handleFavourite = () => {
    let favs: any = getFavouriteQuotes();
    let keys = Object.keys(favs);
    if (!keys.includes(quote._id)) {
      favs[quote._id] = quote;
    } else {
      delete favs[quote._id];
    }
    updateFavouritesQuotes(Object.keys(favs));
    setLocalItem("favourites", JSON.stringify(favs));
  };

  return (
    <li className="quote-item">
      <div className="quote-item-header">
        <p>{expand ? "" : quote.content}</p>
        <div className="button-group">
          <img
            className="icon"
            alt="Favourite"
            src={isFavourite ? FilledHeartIcon : HeartIcon}
            onClick={handleFavourite}
          />
          <img
            className="icon"
            onClick={() => setExpand(!expand)}
            alt="Arrow"
            src={expand ? ArrowUpIcon : ArrowDownIcon}
          />
        </div>
      </div>
      {expand && (
        <div className="expanded-quote">
          <blockquote>{quote.content}</blockquote>
        </div>
      )}
    </li>
  );
}
