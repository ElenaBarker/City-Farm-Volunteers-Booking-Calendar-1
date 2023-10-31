
const HeaderComponent = ({ setPageToShow }) => {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="text-container">
          <h2>Welcome to our CITY FARM</h2>
          <div className="button-container">
            <button
              className="header-button"
              onClick={() => {
                setPageToShow("volunteer");
              }}
            >
              Volunteer
            </button>
            <button
              className="header-button"
              onClick={() => {
                setPageToShow("manager");
              }}> Manager
            </button>
          </div>
        </div>

      </div>
    </header>
  );
};

export default HeaderComponent;
