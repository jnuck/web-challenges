import "./styles.css";
import Form from "./components/Form";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = event.target.elements;
    setName(formData.name.value);
    setEmail(formData.email.value);

    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form onHandleSubmit={handleSubmit} />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{name}</span>
      </p>
      <p>
        Email: <span className="output">{email}</span>
      </p>
    </div>
  );
}
