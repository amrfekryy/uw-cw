import React, { FC } from "react";
import "./index.scss";
import { useFetch, useFetchTanstack } from "./hooks/useFetch";

const URL = `https://api.github.com/users?per_page=${100}`;

interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

const Task1: FC = () => {
  // Use this api endpoint to get a list of users
  // https://api.github.com/users

  const { data = [], error, isLoading } = useFetch(URL);
  // const { data = [], error, isLoading } = useFetchTanstack(URL);

  const [searchTerm, setSearchTerm] = React.useState("");

  // filter users by search term
  const filteredUsers =
    (!searchTerm
      ? data
      : data?.filter((user: User) => user.login.includes(searchTerm))) || [];

  return (
    <div className="dashboard">
      {/* show the input search here */}
      <input
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
          {!filteredUsers.length ? (
            <li
              style={{
                textAlign: "center",
              }}
            >
              Oops! No users found.
            </li>
          ) : (
            filteredUsers.map((user: User) => {
              return (
                <li
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
