import React, { useState, useEffect } from "react";

export const Loading = () => {
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

  if (error) {
    return <p>Not in here, buddy.</p>;
  }

  return isLoading ? <p>Loading...</p> : <p>Loaded!</p>;
};

const fakeLoading = () => new Promise((resolve) => setTimeout(resolve, 5000));
