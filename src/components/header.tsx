import { useAuth } from "@clerk/clerk-react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import LogoContainer from "./logo-container";
import NavigationRoutes from "./navigation-routes";
import { NavLink } from "react-router-dom";
import ProfileContainer from "./profile-container";
import ToggleContainer from "./toggle-container";
const Header = () => {
  const { userId } = useAuth();
  return (
    <header
      className={cn("w-full border-b duration-150 transition-all ease-in-out")}
    >
      <Container>
        <div className="flex items-center gap-4 w-full">
          {/* logo section */}
          <LogoContainer />

          {/* navigation section */}

          <nav className="hidden md:flex items-center gap-3">
            <NavigationRoutes />
            {/* only if user is authneticated then he ll see take an interview option in navigation bar */}
            {userId && (
              <NavLink
                to="/generate"
                className={({ isActive }) =>
                  cn(
                    "text-base text-neutral-600",
                    isActive && "text-neutral-900 font-semibold"
                  )
                }
              >
                Take an Interview
              </NavLink>
            )}
          </nav>

          <div className="ml-auto flex items-center gap-6">
            {/* profile */}
            <ProfileContainer />
            {/* if user is loggedin then we need to show user profile button otherwise we need to show login/register button */}

            {/* mobile toggle section */}
            <ToggleContainer />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
