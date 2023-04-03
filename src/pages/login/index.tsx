import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../shared/atoms";
import { setLocalItem, getLocalItem } from "../../utils/helpers";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(getLocalItem() || "");

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
    <form onSubmit={onSubmit}>
      <Input
        name="username"
        value={username}
        onChange={onInputChange}
        type="text"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
