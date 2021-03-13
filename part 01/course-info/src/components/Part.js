import React from "react";

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} -  {props.exercises} Exercises
      </p>
    </div>
  );
};

export default Part;
