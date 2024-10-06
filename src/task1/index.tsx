import React, { FC } from "react";
import "./index.scss";
import { useFetch, useFetchTanstack, User } from "./hooks/useFetch";
import Input from "../components/Input";
import Card from "../components/Card";

const URL = `https://api.github.com/users?per_page=${100}`;

const Task1: FC = () => {
  // Use this api endpoint to get a list of users
  // https://api.github.com/users

  const [searchTerm, setSearchTerm] = React.useState("");
  const {
    data = [],
    error,
    isLoading,
  } = useFetch(`${URL}?per_page=${100}&query=${searchTerm}`);

  // we can also use Tanstack query
  // const { data = [], error, isLoading } = useFetchTanstack(URL);

  return (
    <div className="dashboard">
      {/* show the input search here */}
      <Input
        placeholder="Search by username"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />

      {/* show the loading state here */}
      {/* show the error if any here */}
      {/* show the filtered users here */}
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Something went wrong!</div>
      ) : (
        <ul>
          {!data?.length ? (
            <li>
              <Card style={{ textAlign: "center" }}>Oops! No users found.</Card>
            </li>
          ) : (
            data?.map((user: User) => {
              return (
                <li>
                  <Card
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <img
                      src={user.avatar_url}
                      style={{
                        borderRadius: "100%",
                        width: "3rem",
                        height: "3rem",
                      }}
                    />
                    <span>{user.login}</span>
                  </Card>
                </li>
              );
            })
          )}
        </ul>
      )}
    </div>
  );
};

export default Task1;
