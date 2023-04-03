import Container from "../../shared/atoms/container";
import { useFetch } from "../../shared/hooks";
import { Link } from "react-router-dom";
import { AppLayout } from "../../shared/layouts";

export default function Authors() {
  const { loading, data: authors, error } = useFetch("authors");

  return (
    <AppLayout>
      <Container>
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          <ul>
            {authors &&
              authors?.map((author: IAuthor) => (
                <Link key={author._id} to={`/quotes?author=${author.name}`}>
                  <li>{author.name}</li>
                </Link>
              ))}
          </ul>
        )}
      </Container>
    </AppLayout>
  );
}

interface IAuthor {
  bio: string;
  dateAdded: string;
  dateModified: string;
  description: string;
  link: string;
  name: string;
  quoteCount: number;
  slug: string;
  _id: string;
}
