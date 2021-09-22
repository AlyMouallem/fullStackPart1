import React from "react";

export const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

export const Content = ({
  // part1,
  // part2,
  // part3,
  // exercises1,
  // exercises2,
  // exercises3,
  parts,
}) => {
  return (
    <>
      <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} />
      {/* <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} /> */}
    </>
  );
};

export const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises{" "}
      {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  );
};

const Part = ({ part, exercises }) => {
  return (
    <>
      <p>
        {part} {exercises}
      </p>
    </>
  );
};

const App = () => {
  // const course = "Half Stack application development";
  // const part1 = "Fundamentals of React";
  // const exercises1 = 10;
  // const part2 = "Using props to pass data";
  // const exercises2 = 7;
  // const part3 = "State of a component";
  // const exercises3 = 14;
  // const total = exercises1 + exercises2 + exercises3;

  // const course = "Half Stack application development";
  // const parts = [
  //   {
  //     name: "Fundamentals of React",
  //     exercises: 10,
  //   },
  //   {
  //     name: "Using props to pass data",
  //     exercises: 7,
  //   },
  //   {
  //     name: "State of a component",
  //     exercises: 14,
  //   },
  // ];
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  const parts = course.parts;
  return (
    <div>
      <Header course={course.name} />
      <Content
        // part1={parts[0].name}
        // part2={parts[1].name}
        // part3={parts[2].name}
        // exercises1={parts[0].exercises}
        // exercises2={parts[1].exercises}
        // exercises3={parts[2].exercises}
        parts={parts}
      />
      <Total
        parts={parts}
        // total={parts[0].exercises + parts[1].exercises + parts[2].exercises}
      />
    </div>
  );
};
export default App;
