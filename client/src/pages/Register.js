import { useState, useEffect } from "react";
import Logo from "../components/Logo";
import FormRow from "../components/FormRow";
import { toast } from "react-toastify";
import styled from "styled-components";
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  //global state and useNavigate

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password(!isMember && !name)) {
      toast.warning("Please fill out all values");
    }
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {/* name input */}
        {!values.isMember && (
          <FormRow
            type="text"
            value={values.name}
            name="name"
            handleChange={handleChange}
          />
        )}
        {/* email input */}
        <FormRow
          type="email"
          value={values.email}
          name="email"
          handleChange={handleChange}
        />
        {/* password input */}
        <FormRow
          type="password"
          value={values.password}
          name="password"
          handleChange={handleChange}
        />
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}{" "}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
        <button className="btn btn-block">submit</button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }
  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    cursor: pointer;
    color: var(--primary-500);
  }
`;

export default Register;
