import { useState } from "react";

const LoginButton = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <button
      onClick={handleAuth}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {isAuthenticated ? "Logout" : "Login"}
    </button>
  );
};

export default LoginButton;
