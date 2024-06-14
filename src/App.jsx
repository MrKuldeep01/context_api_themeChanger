import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import useTheme, { ThemeProvidor } from "./contexts/ThemeContext";

function App() {
  const [themeMode, setThemeMode] = useState('light');
  function darkTheme() {
    setThemeMode("dark");
  }
  function lightTheme() {
    setThemeMode("light");
  }

  useEffect(() => {
    let root = document.querySelector("html");
    root.classList.remove("dark", "light");
    root.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvidor value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvidor>
  );
}

export default App;
