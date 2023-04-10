import QuoteItem from ".";
import { dummyQuote } from "../../../utils/data";

export default {
  title: "Molecules/Single-Quote-UI",
  component: QuoteItem,
};

export const QuoteItemComponent = {
  args: {
    quote: dummyQuote,
  },
};

export const IsFavouriteQuoteItemComponent = {
  args: {
    quote: dummyQuote,
    isFavourite: true,
  },
};

export const FavouriteQuoteItemComponent = {
  args: {
    quote: dummyQuote,
    enableFavourite: true,
  },
};

export const WithQuoteItemComponent = {
  args: {
    quote: dummyQuote,
    withAuthor: true,
  },
};
