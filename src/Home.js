import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch(
    'https://my-json-server.typicode.com/vongngagiun/json-server-blog-practice/db',
  );

  return (
    <div className="home">
      {error && <div>Could not fetch the data for the resource</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;
