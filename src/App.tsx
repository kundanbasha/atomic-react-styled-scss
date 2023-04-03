import React, { useState } from "react";
import { Button, Input } from "./shared/atoms";

function App() {
  const [username, setUsername] = useState<string | undefined>("");
  return (
    <div>
      <Input
        type="text"
        value={username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUsername(e.target.value)
        }
      />
      <Button>Submit</Button>
    </div>
  );
}

export default App;
