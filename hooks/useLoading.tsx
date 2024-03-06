import { useState, useEffect } from "react";

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setError(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  useEffect(() => {
    fakeLoading().then(() => setIsLoading(false));
  }, []);

  return { isLoading, error };
};

const fakeLoading = () => new Promise((resolve) => setTimeout(resolve, 5000));
