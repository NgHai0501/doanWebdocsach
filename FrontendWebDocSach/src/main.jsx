import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header/Header'
import MainContainer from './components/container/MainContainer'
import Footer from './components/footer/Footer'
import DescribeContainer from './components/container/DescribeContainer'
import DangNhap from './components/container/DangNhap'
import DangKi from './components/container/DangKi'
import Read from './components/container/Read'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navigate, redirect, RouterProvider } from 'react-router-dom'
import { BrowserRouter, createBrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { Children } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/index.scss'
import Tacgia from './components/admin/tacgia/Tacgia'
import Theloaisach from './components/admin/Theloai/Theloaisach'
import CreateTheloai from './components/admin/Theloai/CreateTheloai'
import UpdateTheloai from './components/admin/Theloai/UpdateTheloai'
import CreateTacgia from './components/admin/tacgia/CreateTacgia'
import UpdateTacgia from './components/admin/tacgia/UpdateTacgia'
import CreateBooks from './components/admin/books/CreateBooks'
import Books from './components/admin/books/Books'
import UpdateBook from './components/admin/books/UpdateBooks'
import TacGiaShowBooks from './components/container/TacGiaShowBooks'
import TheloaiShowBooks from './components/container/TheloaiShowBooks'
import SearchExtra from './components/container/SearchExtra'
import { useState } from 'react'
import HeaderAdmin from './components/admin/HeaderAdmin'


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(true)

  const handleLogout = () => {
    setIsAuthenticated(false); // Đánh dấu người dùng đã logout
    navigate("/login"); // Điều hướng về trang đăng nhập
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      ),
      errorElement: <DangKi />,
      children: [
        {
          path: "",
          element: <MainContainer />
        },
        {
          path: "books/:id",
          element: <DescribeContainer />
        },
        {
          path: "books/:id",
          element: <DescribeContainer />
        },
        {
          path: "books/tacgia/:id",
          element: <TacGiaShowBooks />
        },
        {
          path: "books/theloai/:id",
          element: <TheloaiShowBooks />
        },
        {
          path: "search",
          element: <SearchExtra />
        }
      ]
    },
    {
      path: "/books/read/:id",
      element: <Read />
    },
    {
      path: "/login",
      element: <DangNhap setIsAuthenticated={setIsAuthenticated} />
    },
    {
      path: '/admin',
      element: (
        <>
          <HeaderAdmin onLogOut={handleLogout} />
          <Outlet />
        </>
      ),
      children: [
        {
          path: "tacgia",
          element: <Tacgia />
        },
        {
          path: "tacgia/create",
          element: <CreateTacgia />
        },
        {
          path: "tacgia/update/:id",
          element: <UpdateTacgia />
        },
        {
          path: "theloai",
          element: <Theloaisach />
        },
        {
          path: "theloai/create",
          element: <CreateTheloai />
        },
        {
          path: "theloai/update/:id",
          element: <UpdateTheloai />
        },
        {
          path: "books",
          element: <Books />
        },
        {
          path: "books/create",
          element: <CreateBooks />
        },
        {
          path: "books/update/:id",
          element: <UpdateBook />
        }
      ]
    },
    {
      path: "/signIn",
      element: <DangKi />
    }

  ])

  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}




createRoot(document.getElementById('root')).render(<App />)
