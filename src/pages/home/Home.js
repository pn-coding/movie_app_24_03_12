import { useEffect, useState } from "react";
import { nowPlaying } from "../../api";
import { MainBanner } from "./MainBanner";
import { Loading } from "../../components/Loading";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowData, setNowData] = useState();

  useEffect(() => {
    (async () => {
      const { results } = await nowPlaying();
      setNowData(results);
      setIsLoading(false);
    })();
  }, []);
  console.log(nowData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>{nowData && <MainBanner imgUrl={nowData} />}</>
      )}
    </>
  );
};
