"use client";

// Home.tsx
import React, { useState } from "react";
import axios from "axios";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Loading } from "../components/loading";
import { EpisodeList } from "../components/episodeList";
import { SearchBar } from "../components/searchBar";

const queryClient = new QueryClient();

const fetchEpisodes = async (input: string) => {
  const res = await axios.get(
    `https://rickandmortyapi.com/api/episode?name=${input}`
  );
  return res.data.results;
};

const Home = () => {
  const [input, setInput] = useState("");

  const { data: episodes, isLoading } = useQuery(
    ["episodes", input],
    () => fetchEpisodes(input),
    {
      enabled: !!input,
    }
  );

  return (
    <div>
      <h1>My Homepage</h1>
      <p>Welcome to my homepage!</p>
      <SearchBar input={input} setInput={setInput} />
      {input &&
        (isLoading ? <Loading /> : <EpisodeList episodes={episodes || []} />)}
    </div>
  );
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}
