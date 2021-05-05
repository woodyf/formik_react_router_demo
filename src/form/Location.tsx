import { Field } from "formik";
import { Link } from "react-router-dom";

const Location = () => {
  return (
    <div>
      <div>
        <Field type="text" name="address" placeholder="Address" />
      </div>
      <div>
        <Field type="text" name="city" placeholder="City" />
      </div>
      <div>
        <Field type="text" name="state" placeholder="State" />
      </div>
      <div>
        <Field type="text" name="zipCode" placeholder="Zip Code" />
      </div>
      <Link to="/form/basic">Back</Link> <Link to="/form/submit">Next</Link>
    </div>
  );
};

export default Location;
