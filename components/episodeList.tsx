export const EpisodeList = ({ episodes }: { episodes: any[] }) => (
  <ul>
    {episodes.map((episode: any) => (
      <li key={episode.id}>{episode.name}</li>
    ))}
  </ul>
);
