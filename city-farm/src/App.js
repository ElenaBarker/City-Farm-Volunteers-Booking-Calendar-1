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
      {pageToShow === "volunteer" && <VolunteerInstructionsComponent />}
      <CalendarComponent pageToShow={pageToShow} />
      <FooterComponent />
    </div>
  );
}

export default App;
