import React from "react";
import { Button } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";

const App = () => {
  return (
    <Button
      type="primary"
      icon={<PlusCircleFilled />}
      data-testid="add-contact-button"
    >
      Add
    </Button>
  );
};

export default App;
