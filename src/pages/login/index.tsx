import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../shared/atoms";
import { LoginLayout } from "../../shared/layouts";
import { LabeledInput } from "../../shared/molecules";
import { setLocalItem, getLocalItem } from "../../utils/helpers";
import "./login.styles.scss";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(getLocalItem("username") || "");

  useEffect(() => {
    if (username) navigate("/authors");
  }, []);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLocalItem("username", username);
    navigate("/authors");
  };

  return (
    <LoginLayout>
      <form onSubmit={onSubmit} className="login-form">
        <LabeledInput
          labeledFor="username"
          label="Username"
          direction="column"
          labelSize="16px"
        >
          <Input
            id="username"
            name="username"
            value={username}
            onChange={onInputChange}
            type="text"
            placeholder="Enter Username"
          />
        </LabeledInput>
        <Button type="submit">Submit</Button>
      </form>
    </LoginLayout>
  );
}
