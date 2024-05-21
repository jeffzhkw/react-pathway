import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import StarRating from "./StarRating.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <StarRating maxRating={10} />
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "OK", "Good", "Great"]}
      defaultRating={3}
    />
  </React.StrictMode>
);

//["Terrible", "Bad", "OK", "Good", "Great"]
