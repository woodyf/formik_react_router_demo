import { Field } from "formik";
import { Link } from "react-router-dom";

const Basic = () => {
  return (
    <div>
      <div>
        <Field type="text" name="email" placeholder="Email" />
      </div>
      <div>
        <Field type="text" name="firstName" placeholder="First Name" />
      </div>
      <div>
        <Field type="text" name="lastName" placeholder="Last Name" />
      </div>
      <Link to="/form/location">Next</Link>
    </div>
  );
};

export default Basic;
