import "./App.css";
import CalendarComponent from "./CalendarComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import VolunteerInstructionsComponent from "./VolunteerInstructionsComponent";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/36347/cow-pasture-animal-almabtrieb.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      
      }}
    >
      <HeaderComponent />
      <VolunteerInstructionsComponent />
      <CalendarComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
