import styled from "styled-components";

const StyledLabel = styled.label``;

export default function LabelInput() {
  return (
    <div>
      <StyledLabel htmlFor="dummy-input">Label</StyledLabel>
      <input id="dummy-input" placeholder="Label Testing" />
    </div>
  );
}
