import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      username: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullname">Full Name </label>
      <input
        placeholder="enter your full name"
        type="text"
        value={formData.fullName}
        id="fullname"
        name="fullName"
        onChange={handleInputChange}
      />

      <br></br>
      <br></br>

      <label htmlFor="username">Username </label>
      <input
        placeholder="enter username"
        type="text"
        value={formData.username}
        id="username"
        name="username"
        onChange={handleInputChange}
      />

      <br></br>
      <br></br>

      <label htmlFor="password">Password </label>
      <input
        placeholder="enter password"
        type="password"
        value={formData.password}
        id="password"
        name="password"
        onChange={handleInputChange}
      />

      <button>Submit</button>
    </form>
  );
}
