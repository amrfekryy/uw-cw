import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

// TODO: Complete the useFetch hook to handle API calls and return data, loading, and error states

export interface User {
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

export const fetchMockUsers = async (users: User[]): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 1000); // simulate a 1-second delay
  });
};

export const useFetch = (url: string) => {
  const [data, setData] = useState<User[] | null>(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // this is the real data fetch. it only triggers the first time since the base url never changes
    const fetchData = async () => {
      console.log("fetchData");
      try {
        setIsLoading(true);

        await fetchMockUsers([]) // simulate a delay to see the loading indicator
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export const useFetchTanstack = (url: string) => {
  // we can also use Tanstack query. it provides a lot of features out of the box
  // like loading, error states, caching system and more.
  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchData", url],
    queryFn: async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  return { data, isLoading, error };
};

export const mockUsers: User[] = [
  {
    login: "mojombo",
    id: 1,
    node_id: "MDQ6VXNlcjE=",
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/mojombo",
    html_url: "https://github.com/mojombo",
    followers_url: "https://api.github.com/users/mojombo/followers",
    following_url:
      "https://api.github.com/users/mojombo/following{/other_user}",
    gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}",
    starred_url: "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/mojombo/subscriptions",
    organizations_url: "https://api.github.com/users/mojombo/orgs",
    repos_url: "https://api.github.com/users/mojombo/repos",
    events_url: "https://api.github.com/users/mojombo/events{/privacy}",
    received_events_url: "https://api.github.com/users/mojombo/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "defunkt",
    id: 2,
    node_id: "MDQ6VXNlcjI=",
    avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/defunkt",
    html_url: "https://github.com/defunkt",
    followers_url: "https://api.github.com/users/defunkt/followers",
    following_url:
      "https://api.github.com/users/defunkt/following{/other_user}",
    gists_url: "https://api.github.com/users/defunkt/gists{/gist_id}",
    starred_url: "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/defunkt/subscriptions",
    organizations_url: "https://api.github.com/users/defunkt/orgs",
    repos_url: "https://api.github.com/users/defunkt/repos",
    events_url: "https://api.github.com/users/defunkt/events{/privacy}",
    received_events_url: "https://api.github.com/users/defunkt/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "pjhyett",
    id: 3,
    node_id: "MDQ6VXNlcjM=",
    avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/pjhyett",
    html_url: "https://github.com/pjhyett",
    followers_url: "https://api.github.com/users/pjhyett/followers",
    following_url:
      "https://api.github.com/users/pjhyett/following{/other_user}",
    gists_url: "https://api.github.com/users/pjhyett/gists{/gist_id}",
    starred_url: "https://api.github.com/users/pjhyett/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/pjhyett/subscriptions",
    organizations_url: "https://api.github.com/users/pjhyett/orgs",
    repos_url: "https://api.github.com/users/pjhyett/repos",
    events_url: "https://api.github.com/users/pjhyett/events{/privacy}",
    received_events_url: "https://api.github.com/users/pjhyett/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "wycats",
    id: 4,
    node_id: "MDQ6VXNlcjQ=",
    avatar_url: "https://avatars.githubusercontent.com/u/4?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/wycats",
    html_url: "https://github.com/wycats",
    followers_url: "https://api.github.com/users/wycats/followers",
    following_url: "https://api.github.com/users/wycats/following{/other_user}",
    gists_url: "https://api.github.com/users/wycats/gists{/gist_id}",
    starred_url: "https://api.github.com/users/wycats/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/wycats/subscriptions",
    organizations_url: "https://api.github.com/users/wycats/orgs",
    repos_url: "https://api.github.com/users/wycats/repos",
    events_url: "https://api.github.com/users/wycats/events{/privacy}",
    received_events_url: "https://api.github.com/users/wycats/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "ezmobius",
    id: 5,
    node_id: "MDQ6VXNlcjU=",
    avatar_url: "https://avatars.githubusercontent.com/u/5?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/ezmobius",
    html_url: "https://github.com/ezmobius",
    followers_url: "https://api.github.com/users/ezmobius/followers",
    following_url:
      "https://api.github.com/users/ezmobius/following{/other_user}",
    gists_url: "https://api.github.com/users/ezmobius/gists{/gist_id}",
    starred_url: "https://api.github.com/users/ezmobius/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/ezmobius/subscriptions",
    organizations_url: "https://api.github.com/users/ezmobius/orgs",
    repos_url: "https://api.github.com/users/ezmobius/repos",
    events_url: "https://api.github.com/users/ezmobius/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/ezmobius/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "ivey",
    id: 6,
    node_id: "MDQ6VXNlcjY=",
    avatar_url: "https://avatars.githubusercontent.com/u/6?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/ivey",
    html_url: "https://github.com/ivey",
    followers_url: "https://api.github.com/users/ivey/followers",
    following_url: "https://api.github.com/users/ivey/following{/other_user}",
    gists_url: "https://api.github.com/users/ivey/gists{/gist_id}",
    starred_url: "https://api.github.com/users/ivey/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/ivey/subscriptions",
    organizations_url: "https://api.github.com/users/ivey/orgs",
    repos_url: "https://api.github.com/users/ivey/repos",
    events_url: "https://api.github.com/users/ivey/events{/privacy}",
    received_events_url: "https://api.github.com/users/ivey/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "evanphx",
    id: 7,
    node_id: "MDQ6VXNlcjc=",
    avatar_url: "https://avatars.githubusercontent.com/u/7?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/evanphx",
    html_url: "https://github.com/evanphx",
    followers_url: "https://api.github.com/users/evanphx/followers",
    following_url:
      "https://api.github.com/users/evanphx/following{/other_user}",
    gists_url: "https://api.github.com/users/evanphx/gists{/gist_id}",
    starred_url: "https://api.github.com/users/evanphx/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/evanphx/subscriptions",
    organizations_url: "https://api.github.com/users/evanphx/orgs",
    repos_url: "https://api.github.com/users/evanphx/repos",
    events_url: "https://api.github.com/users/evanphx/events{/privacy}",
    received_events_url: "https://api.github.com/users/evanphx/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "vanpelt",
    id: 17,
    node_id: "MDQ6VXNlcjE3",
    avatar_url: "https://avatars.githubusercontent.com/u/17?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/vanpelt",
    html_url: "https://github.com/vanpelt",
    followers_url: "https://api.github.com/users/vanpelt/followers",
    following_url:
      "https://api.github.com/users/vanpelt/following{/other_user}",
    gists_url: "https://api.github.com/users/vanpelt/gists{/gist_id}",
    starred_url: "https://api.github.com/users/vanpelt/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/vanpelt/subscriptions",
    organizations_url: "https://api.github.com/users/vanpelt/orgs",
    repos_url: "https://api.github.com/users/vanpelt/repos",
    events_url: "https://api.github.com/users/vanpelt/events{/privacy}",
    received_events_url: "https://api.github.com/users/vanpelt/received_events",
    type: "User",
    site_admin: false,
  },
];
