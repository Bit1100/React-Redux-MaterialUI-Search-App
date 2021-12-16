import Form from "./components/Form";
import Search from "./components/Search";
import Table from "./components/Table";
import GlobalData from "./components/GlobalData";

import "./assets/styles/main.scss";

const App = () => {
  return (
    <>
      <div className="container">
        <GlobalData>
          <Form />
          <Search />
          <Table />
        </GlobalData>
      </div>
    </>
  );
};

export default App;
