import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/password">
        <button>Admin page</button>
      </Link>
    </div>
  );
};

export default Home;
