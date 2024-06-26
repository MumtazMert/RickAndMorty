"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "../pages/home/page";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
