import React from "react";

interface event {
  name?: string;
  value?: string;
}

export interface basicInterface extends event {
  id?: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // onChange?: ({ target }: { target: event }) => void;
}
