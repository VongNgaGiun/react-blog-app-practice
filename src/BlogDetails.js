import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(
    'https://my-json-server.typicode.com/vongngagiun/json-server-blog-practice' +
      id,
  );
  const history = useHistory();

  const handleDelete = () => {
    fetch(
      'https://my-json-server.typicode.com/vongngagiun/json-server-blog-practice' +
        blog.id,
      {
        method: 'DELETE',
      },
    ).then(() => {
      history.push('/');
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
