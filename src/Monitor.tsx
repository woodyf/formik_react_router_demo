import { useFormikContext } from "formik";

const Monitor = () => {
  const { values } = useFormikContext();
  return (
    <div>
      <h4>values in form</h4>
      <code>{JSON.stringify(values, null, 2)}</code>
    </div>
  );
};

export default Monitor;
