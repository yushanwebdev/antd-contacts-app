import React, { useState } from "react";
import { Button } from "antd";
import { CodeSandboxCircleFilled, PlusCircleFilled } from "@ant-design/icons";
import AddDrawer from "./AddDrawer";

import "./App.less";

const App = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [values, setValues] = useState({});
  const [errorInfo, setErrorInfo] = useState("");

  const handleAddFormOnFinish = (values) => {
    setValues(values);
  };

  const handleAddFormOnFinishFailed = (errorInfo) => {
    setErrorInfo(errorInfo);
  };

  console.log("values: ", values);
  console.log("errorInfo: ", errorInfo);

  return (
    <>
      <Button
        type="primary"
        icon={<PlusCircleFilled />}
        data-testid="add-contact-button"
        onClick={() => setShowDrawer(true)}
      >
        Add
      </Button>
      <AddDrawer
        show={showDrawer}
        handleOnClose={() => setShowDrawer(false)}
        handleOnFinish={handleAddFormOnFinish}
        handleOnFinishFailed={handleAddFormOnFinishFailed}
      />
    </>
  );
};

export default App;
