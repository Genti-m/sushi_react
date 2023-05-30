import React from "react";
import PropTypes from "prop-types";

const ComponentTest = ({ test, testFunction }) => {
  return <div>{test}
      <button type="button" onClick={testFunction}>setTest</button>
      </div>;
};

ComponentTest.propTypes = {
  test: PropTypes.string,
  testFunction: PropTypes.func,
};

export default ComponentTest;
