import { FC } from "react";
import "./index.scss";


const Task1: FC = () => {

  // Use this api endpoint to get a list of users
  // https://api.github.com/users

  return (
    <div className="dashboard">
      {/* show the loading state here */}
      {/* show the error if any here */}
      {/* show the input search here */}
      <ul>
        {/* show the filtered users here */}
      </ul>
    </div>
  );
};

export default Task1;