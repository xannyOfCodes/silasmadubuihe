import { useEffect, useState } from "react";
import { FaToggleOff } from "react-icons/fa6";
 import { FaToggleOn } from "react-icons/fa6";

const ThemeToggle = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle("dark", savedTheme === "dark");
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(prefersDark ? "dark" : "light");
            document.documentElement.classList.toggle("dark", prefersDark);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

  return (
    <div>
        <div onClick={toggleTheme}
        className='text-3xl ease-out 0.3s dark:text-zinc-100'>
            {
                theme === "dark" ? <FaToggleOn /> : <FaToggleOff />
            }
        </div>
    </div>
  )
}

export default ThemeToggle
