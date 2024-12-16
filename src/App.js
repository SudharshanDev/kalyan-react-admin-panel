import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./Pages/Dashboard";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import Login from "./Pages/Auth/Login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
  <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
    
      </Route>
    </Routes>
  );
}

export default App;

// https://dashtar-admin.netlify.app/dashboard

// import { useLocation } from 'react-router-dom';
// import Header from './Components/Layouts/Header';
// import Footer from './Components/Layouts/Footer';

// const Layout = ({ children }) => {
//   const location = useLocation();

//   // Check if the current route is the login page
//   const isLoginPage = location.pathname === '/login';

//   return (
//     <>
//       {/* Render Header and Footer only if it's not the login page */}
//       {!isLoginPage && <Header />}
//       {children}
//       {!isLoginPage && <Footer />}
//     </>
//   );
// };

// export default Layout;

// import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import Layout from "./Layout";
// import Login from "./Pages/Login";
// import Home from "./Pages/Home"; // Example home page after login

// function App() {
//   return (
//     <Routes>
//       {/* Separate route for the login page */}
//       <Route path="/login" element={<Layout><Login /></Layout>} />

//       {/* Routes with Layout (Header and Footer) */}
//       <Route path="/" element={<Layout><Home /></Layout>} />
//     </Routes>
//   );
// }

// export default App;
