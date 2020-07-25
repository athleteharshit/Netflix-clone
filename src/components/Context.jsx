import React from "react";
import { firstName, lastName } from "../App";

const Context = () => {
  return (
    <>
      <firstName.Consumer>
        {(fName) => {
          return (
            <lastName.Consumer>
              {(lName) => (
                <h1>
                  I am {fName} {lName}
                </h1>
              )}
            </lastName.Consumer>
          );
        }}
      </firstName.Consumer>
    </>
  );
};

export default Context;
