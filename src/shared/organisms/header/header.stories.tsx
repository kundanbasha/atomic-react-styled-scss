import Header from ".";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Organisms/Header",
  component: Header,
  argTypes: {
    handleLogout: {
      action: "click",
    },
  },
};

export const HeaderComponent = {
  render: ({ ...args }) => {
    return (
      <MemoryRouter>
        <Header {...args} />
      </MemoryRouter>
    );
  },
  args: {
    handleLogout: () => {
      return console.log("logout clicked");
    },
  },
};
