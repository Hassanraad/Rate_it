import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Navbar from '../components/explore/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Outlet />
      <Footer />
    </>
  );
}