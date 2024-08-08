import Container from "../Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b">
      <Container designs="flex justify-between p-5">
        <div className="flex gap-10">
          <h1 className="font-bold text-xl text-blue-800 hover:bg-blue-200 rounded p-1">
            StayEase
          </h1>

          <nav className="flex gap-5 items-center ">
            <Link className="hover:bg-blue-200 rounded p-1" to="/">
              Hotels
            </Link>
            <Link
              className="max-md:hidden hover:bg-blue-200 rounded p-1"
              to="/"
            >
              Popular
            </Link>
            <Link className="hover:bg-blue-200 rounded p-1" to="/admin/create">
              Create
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <button className="border border-blue-500 rounded-full py-1 px-5 max-md:hidden hover:bg-blue-200">
            Sign Up
          </button>
          <button className="bg-blue-500 text-white rounded-full py-1 px-5 hover:bg-opacity-85">
            Log In
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
