import React, { useEffect, useState } from "react";
import "./Switch.css";

const Switch = () => {
  const [theme, setTheme] = useState("light");

  const handleChange = (e) => setTheme(e.target.checked ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="container-switch">
      <p>Dark Mode </p>
      <label className="switch">
        <input
          type="checkbox"
          onChange={handleChange}
          checked={theme === "dark"}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Switch;
