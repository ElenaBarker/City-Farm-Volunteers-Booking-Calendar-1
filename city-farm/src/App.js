import "./App.css";
import CalendarComponent from "./CalendarComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/36347/cow-pasture-animal-almabtrieb.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      
      }}
    >
      <HeaderComponent />
      <CalendarComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
