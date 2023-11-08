import { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit} data-testid="form">
        <input
          name="name"
          data-testid="name-input"
          type="text"
          onChange={handleChange}
        />
        <input
          name="email"
          data-testid="email-input"
          type="text"
          onChange={handleChange}
        />
        <input
          name="password"
          data-testid="password-input"
          type="password"
          onChange={handleChange}
        />
        <button type="submit" data-testid="sendBtn">
          Send
        </button>
      </form>
      <p data-testid="paragraph">{`Hello ${formData.name}`}</p>
    </>
  );
};

export default RegisterForm;
