import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

// TODO: Complete the useFetch hook to handle API calls and return data, loading, and error states

export const mockUsers = [];

export const fetchMockUsers = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUsers);
    }, 1000); // simulate a 1-second delay
  });
};

export const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
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

// useFetch using TanStack Query
export const useFetchTanstack = (url: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchData", url], // Unique key for caching
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
