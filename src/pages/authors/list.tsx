import { Link } from "react-router-dom";
import { IAuthor } from "./interface";
import AuthorItem from "./author.item";

type Authors = {
  authors: IAuthor[];
};

export default function AuthorsList({ authors }: Authors) {
  return (
    <ul className="authors-list">
      {authors &&
        authors?.map((author: IAuthor) => (
          <AuthorItem key={author._id} author={author} />
        ))}
    </ul>
  );
}
