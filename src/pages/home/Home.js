import { useEffect, useState } from "react";
import { nowPlaying } from "../../api";
import styled from "styled-components";
import { IMG_URL } from "../../constant/url";
import { MainBanner } from "./MainBanner";

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
        "loading.."
      ) : (
        <>{nowData && <MainBanner imgUrl={nowData} />}</>
      )}
    </>
  );
};
