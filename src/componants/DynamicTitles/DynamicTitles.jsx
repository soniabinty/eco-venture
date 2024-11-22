import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
   
    const routeTitles = {
      "/": "EcoVenture",
      "/login": "EcoVenture-Login",
      "/register": "EcoVenture-Register",
      "/myprofile": "EcoVenture-My Profile",
      "/update": "EcoVenture-Update Profile",
      "/forget": "EcoVenture-Forgot Password",
    };

    // Default title if no match
    const defaultTitle = "EcoVenture";

    // Set the document title
    document.title = routeTitles[location.pathname] || defaultTitle;
  }, [location]);
};

export default DynamicTitle;
