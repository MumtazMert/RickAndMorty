import React from "react";
import { useLoading } from "../hooks/useLoading";

export const Loading = () => {
  const { isLoading, error } = useLoading();

  if (error) {
    return <p>Not in here, buddy.</p>;
  }

  return isLoading ? <p>Loading...</p> : <p>Loaded!</p>;
};