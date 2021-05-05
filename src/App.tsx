import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import WizardForm from "./WizardForm";
import Home from "./Home";
import { useState } from "react";

const initialValues = {
  email: "",
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
  tos: false,
};
export type FormValues = typeof initialValues;
function App() {
  const [data, setData] = useState(initialValues);
  return (
    <BrowserRouter>
      <div>
        <div>
          <Link to="/">Home</Link> <Link to="/form">Form</Link>
          <h3>if form value is dirty, prompt before leave form route</h3>
        </div>
        <div>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/form">
              <WizardForm data={data} setData={setData} />
            </Route>
            <Route />
          </Switch>
        </div>
        <div>
          <h2>data in DB:(actually it's in useState hook ¯\_(ツ)_/¯)</h2>
          <code>{JSON.stringify(data, null, 2)}</code>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
