import { useState } from "react";
import { IQuote } from "../../../pages/quotes/list";
import HeartIcon from "../../../assets/icons/heart.svg";
import FilledHeartIcon from "../../../assets/icons/heart-filled.svg";
import ArrowUpIcon from "../../../assets/icons/arrow-up.svg";
import ArrowDownIcon from "../../../assets/icons/arrow-down.svg";
import { setLocalItem, getFavouriteQuotes } from "../../../utils/helpers";
import "./quote-item.styles.scss";
import { Blockquote } from "../../atoms";

type Props = {
  quote: IQuote;
  isFavourite: boolean;
  withAuthor?: boolean;
  enableFavourite?: boolean;
  updateFavouritesQuotes?: (quotes: any) => void;
};

export default function QuoteItem({
  quote,
  isFavourite,
  withAuthor = false,
  enableFavourite = true,
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
    updateFavouritesQuotes && updateFavouritesQuotes(favs);
    setLocalItem("favourites", JSON.stringify(favs));
  };

  return (
    <li className="quote-item">
      <div className="quote-item-header">
        <p>{expand ? (withAuthor ? quote.author : "") : quote.content}</p>
        <div className="button-group">
          {enableFavourite ? (
            <img
              className="icon"
              alt="Favourite"
              src={isFavourite ? FilledHeartIcon : HeartIcon}
              onClick={handleFavourite}
            />
          ) : null}
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
          <Blockquote>{quote.content}</Blockquote>
        </div>
      )}
    </li>
  );
}
