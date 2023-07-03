import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
import Header from '../components/Shared/Header/Header';

const Main = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header></Header>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
