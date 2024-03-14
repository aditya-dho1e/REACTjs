import { useState } from "react";

const OtherInputs = () => {
  const framewroks = ["zoro", "mihawk", "ryuma", "rayleigh"];
  const [check, setCheck] = useState(false);
  const [framework, setFrameworks] = useState("");

  const handleCheck = (e) => {
    console.log(e.target.checked);
    setCheck(e.target.checked);
  };

  const handleChange = (e) => {
    setFrameworks(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(check, framework);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="shipping"> Free Shipping </label>
          <input
            type="checkbox"
            name="check"
            onChange={handleCheck}
            value={check}
          />
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            Framework
            <select name="framework" id="" onChange={handleChange}>
              {framewroks.map((f) => (
                <option key={f}>{f}</option>
              ))}
            </select>
          </label>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
