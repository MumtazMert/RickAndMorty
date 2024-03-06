import { useQuery } from "react-query";
import axios from "axios";

export const useFetchEpisodes = (input: string) => {
  return useQuery(
    ["episodes", input],
    async () => {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/episode?name=${input}`
      );
      return res.data.results;
    },
    {
      enabled: !!input,
    }
  );
};
