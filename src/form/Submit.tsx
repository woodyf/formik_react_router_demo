import { Field } from "formik";
import { Link } from "react-router-dom";

const Submit = () => {
  return (
    <div>
      <div>
        <Field type="checkbox" name="tos" />
        <label>Terms of Service</label>
      </div>
      <Link to="/form/location">Back</Link>{" "}
      <button type="submit">submit</button>
    </div>
  );
};

export default Submit;
