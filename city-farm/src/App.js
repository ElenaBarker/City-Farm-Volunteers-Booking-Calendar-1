import "./App.css";
import CalendarComponent from "./CalendarComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(https://cdn.pixabay.com/photo/2013/08/28/00/54/field-176602_640.jpg)`,
      }}
    >
      <HeaderComponent />
      <CalendarComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
