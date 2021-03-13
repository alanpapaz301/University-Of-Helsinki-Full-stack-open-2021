import React from "react";

const Total = (props) => {
  const result = props.parts.reduce( ( sum, { exercises } ) => sum + exercises , 0)

  return (
    <div>
      <p>
        Number of exercises{" "}
        {result}
      </p>
    </div>
  );
};

export default Total;
