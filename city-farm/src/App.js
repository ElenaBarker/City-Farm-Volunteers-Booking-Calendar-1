import "./App.css";
import { useState } from "react";
import CalendarComponent from "./CalendarComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import VolunteerInstructionsComponent from "./VolunteerInstructionsComponent";


function App() {
  const [pageToShow, setPageToShow] = useState("volunteer");
  return (
    <div className="App">
      <HeaderComponent setPageToShow={setPageToShow} />
      <VolunteerInstructionsComponent pageToShow={pageToShow} />
      {pageToShow === "volunteer" ? <CalendarComponent /> : "Hello manager"}
      <FooterComponent />
    </div>
  );
}

export default App;
