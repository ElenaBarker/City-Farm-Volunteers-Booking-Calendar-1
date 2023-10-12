import logo from "./logo.png"

const HeaderComponent = ({setPageToShow}) => {
    return (
      <header>
        <img className="App-logo" src={logo} alt="Logo" />
        WELCOME TO OUR CITY FARM
        <button
          onClick={() => {
            setPageToShow("volunteer");
          }}
        >
          Volunteer
        </button>
        <button
          onClick={() => {
            setPageToShow("manager");
          }}
        >
          Manager
        </button>
      </header>
    );
};

export default HeaderComponent;