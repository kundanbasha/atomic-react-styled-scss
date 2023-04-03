import { IAuthor } from "./interface";
import { Link } from "react-router-dom";
import Avatar from "../../shared/atoms/avatar";

export default function AuthorItem({ author }: { author: IAuthor }) {
  return (
    <Link to={`/quotes?author=${author.name}`}>
      <li>
        <div className="avatar-wrap">
          <Avatar
            fontSize="40px"
            height="96px"
            width="96px"
            text={author.name}
          />
        </div>
        <div className="details">
          <h3>{author.name}</h3>
          <p title={author?.quoteCount?.toString()}>
            <span>Total quotes:</span>
            {author.quoteCount}
          </p>
          <p title={author?.bio} className="ellipsis">
            <span>Bio:</span>
            {author.bio}
          </p>
        </div>
      </li>
    </Link>
  );
}
