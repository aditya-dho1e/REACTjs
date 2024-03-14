import { useState } from "react";

const ShortCircuitOverview = () => {
  const [truthy, setTruthy] = useState(true);
  const [falsy, setFalsy] = useState(false);
  return <h2>short circuit overview</h2>;
};
export default ShortCircuitOverview;
