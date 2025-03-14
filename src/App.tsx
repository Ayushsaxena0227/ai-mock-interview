import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "@/layouts/public-layout";
import HomePage from "@/routes/home";
import AuthenticationLayout from "./layouts/auth-layout";
import SigninPage from "./routes/sign-in";
import SignUpPage from "./routes/sign-up";
import ProtectedRoutes from "./layouts/protected-routes";
import MainLayout from "./layouts/main-layout";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />}></Route>
        </Route>

        {/* Authentocation layout */}
        <Route element={<AuthenticationLayout />}>
          <Route path="/signin/*" element={<SigninPage />}></Route>
          <Route path="/signup/*" element={<SignUpPage />}></Route>
        </Route>

        {/* protected routes */}
        <Route
          element={
            <ProtectedRoutes>
              <MainLayout />
            </ProtectedRoutes>
          }
        >
          {/* add all the protect route */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
