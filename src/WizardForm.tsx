import { Form, Formik } from "formik";
import { Dispatch, SetStateAction, useCallback } from "react";
import {
  matchPath,
  Prompt,
  Redirect,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import { FormValues } from "./App";
import Basic from "./form/Basic";
import Location from "./form/Location";
import Submit from "./form/Submit";
import Monitor from "./Monitor";

interface WizardFormProps {
  data: FormValues;
  setData: Dispatch<SetStateAction<FormValues>>;
}

const WizardForm = ({ data, setData }: WizardFormProps) => {
  const match = useRouteMatch();
  const onSubmit = useCallback(
    (v: FormValues) => {
      alert("let's just pretend that form values are saved to DB");
      setData(v);
    },
    [setData]
  );
  return (
    <div>
      <Formik
        initialValues={data}
        enableReinitialize={true}
        onSubmit={onSubmit}
      >
        {({ dirty }) => (
          <>
            <Prompt
              when={dirty}
              message={({ pathname }) => {
                return matchPath(pathname, { path: match.path })
                  ? true
                  : "Are you sure you want to navigate away?";
              }}
            />
            <Form>
              <Switch>
                <Redirect from={match.path} exact to={`${match.path}/basic`} />
                <Route path={`${match.path}/basic`}>
                  <Basic />
                </Route>
                <Route path={`${match.path}/location`}>
                  <Location />
                </Route>
                <Route path={`${match.path}/submit`}>
                  <Submit />
                </Route>
              </Switch>
              <Monitor />
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};
export default WizardForm;
