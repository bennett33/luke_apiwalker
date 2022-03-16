import './App.css';
import Form from "./components/Form";
import People from "./views/People";
import Planets from "./views/Planets";
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";

    

function App() {
  return (
      <BrowserRouter>
      <div className="container mt-5">
        <Form />
        <Switch>
          <Route path="/people/:id">
            <People />
          </Route>
          <Route path="/planets/:id">
            <Planets />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
    );
  };

export default App;