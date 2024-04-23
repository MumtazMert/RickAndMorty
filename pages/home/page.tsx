"use client";

import React, { useState } from "react";
import { SearchBar } from "@/components/searchBar";
import { Loading } from "@/components/loading";
import { EpisodeList } from "@/components/episodeList";
import { useFetchEpisodes } from "@/hooks/fetchEpisodes";

const Home = () => {
  const [input, setInput] = useState("");
  const { data: episodes, isLoading } = useFetchEpisodes(input);

  return (
    <div>
      <SearchBar input={input} setInput={setInput} />
      {input &&
        (isLoading ? <Loading /> : <EpisodeList episodes={episodes || []} />)}
    </div>
  );
};

export default Home;
