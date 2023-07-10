import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const { user, logOut, setLoading } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('Logged Out!');
        setLoading(false);
        // navigate('/', {replace: true})
      })
      .catch((error) => console.log(error));
  };

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

  const userNavItem = (
    <>
      {/* Conditional Login button */}
      {user ? (
        <>
          <Link
            onClick={handleLogOut}
            className="btn btn-primary btn-sm mr-3 hidden lg:inline-flex">
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link
            to={'/login'}
            className="btn btn-outline btn-sm mr-3 hidden lg:inline-flex">
            Login
          </Link>
          <Link
            to={'register'}
            className="btn btn-neutral btn-sm hidden lg:inline-flex">
            Register
          </Link>
        </>
      )}
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
            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-gray-50 rounded-box w-52">
            {navItems}
            {user ? (
              <>
                <Link
                  onClick={handleLogOut}
                  className="btn btn-primary btn-sm">
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link
                  to={'/login'}
                  className="btn btn-outline btn-sm mb-2">
                  Login
                </Link>
                <Link
                  to={'register'}
                  className="btn btn-neutral btn-sm">
                  Register
                </Link>
              </>
            )}
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
        {/* shopping cart */}
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost hover:bg-transparent mr-2">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm badge-primary indicator-item">1</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-2 z-[20] card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div className="card-body">
              <span className="font-bold text-lg">1 Items</span>
              <span className="text-secondary-focus">Subtotal: $999</span>
              <div className="card-actions">
                <Link
                  to={'/cart'}
                  className="btn btn-primary btn-sm btn-block">
                  View cart
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Conditional User Profile */}
        {user && (
          <Link
            to={'/'}
            className="inline-flex mr-3">
            <div
              className="avatar tooltip  tooltip-bottom z-30"
              data-tip={`${user?.displayName ? user.displayName : ''}`}>
              <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt=""
                  />
                ) : (
                  <FaUserCircle size={32}></FaUserCircle>
                )}
              </div>
            </div>
          </Link>
        )}

        {userNavItem}
        {/* <Link
          to={'login'}
          className="btn btn-outline btn-sm mr-4">
          Login
        </Link> */}
      </div>
    </div>
  );
};

export default Header;
