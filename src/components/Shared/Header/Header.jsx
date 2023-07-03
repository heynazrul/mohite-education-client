import { Link } from 'react-router-dom';

const Header = () => {
  const navItems = (
    <>
      <li>
        <Link
          to={'/'}
          className="mr-2 font-medium">
          Home
        </Link>
      </li>
      <li>
        <Link
          to={'/courses'}
          className="mr-2 font-medium">
          Courses
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start items-center">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-50 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <Link
          to={'/'}
          className="btn btn-ghost normal-case text-xl hidden lg:inline-flex">
          <div>
            <span className="font-bold text-center inline-block">Mohite</span>
            <span className="text-primary font-bold">Education</span>
          </div>
        </Link>
      </div>
      <div className="navbar-center ">
        <Link
          to={'/'}
          className="btn btn-ghost normal-case text-xl   lg:hidden">
          <div>
            <span className="font-bold text-center inline-block">Mohite</span>
            <span className="text-primary font-bold">Education</span>
          </div>
        </Link>
        <ul className="menu menu-horizontal px-1 hidden lg:flex">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <Link
          to={'login'}
          className="btn btn-outline btn-sm mr-4">
          Login
        </Link>
        <Link
          to={'login'}
          className="btn btn-neutral btn-sm">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Header;
