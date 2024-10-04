/*
  You don't need to change anything in here.
*/

import { FC } from "react";

const Intro: FC = () => {
  return (
    <div style={{ textAlign: "left" }}>
      <h1>Welcome</h1>
      <p>
        If you are reading this, you are likely beginning the application process at UNIwise. This assignment offers you
        the opportunity to demonstrate your skills and challenge your competencies in modern frontend development.
      </p>
      <h2>Intro</h2>
      <p>
        Before you get started with the task read the following information.
      </p>
      <h3>Course of action</h3>
      <p>
        This assignment consists of a series of tasks that start simple and gradually increase in complexity and
        difficulty. You are encouraged to use code from third-party libraries and npm packages as needed. If a task
        feels too easy or too difficult, feel free to skip ahead or return to it later. We also welcome any comments or
        notes you wish to leave in the code, providing context or explaining your thought process. The goal of this
        assignment is to showcase both your current skills and your ability to tackle new challenges.
      </p>
      <h3>Technologies</h3>
      <p>
        This test is based on ReactJS with Typescript. It would be advantageous
        if you have or gain knowledge of those before the test. Also SCSS is
        used for styling.
      </p>
      <ul>
        <li>
          <a href="https://reactjs.org/">ReactJS</a> - The framework
        </li>
        <li>
          <a href="https://www.typescriptlang.org/">TypeScript</a> - Typed JavaScript
        </li>
        <li>
          <a href="https://sass-lang.com/">SCSS</a> - CSS with superpowers
        </li>
        <li>
          <a href="https://vitejs.dev/">Vite</a> - A fast development build tool
        </li>
        <li>
          <a href="https://vitest.dev/">Vitest</a> - A modern testing framework
        </li>
      </ul>
      <h3>Get started</h3>
      <p>
        When you are ready to start you can select a task in the top of the
        screen. The associated code wil be found in the corresponding folder
        inside the src folder.
      </p>
    </div>
  );
};

export default Intro;
