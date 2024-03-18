import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upComing } from "../../api";
import { MainBanner } from "./MainBanner";
import { Loading } from "../../components/Loading";
import "swiper/css";
import { Movies } from "./Movies";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [upData, setUpData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResult } = await nowPlaying();
        const { results: popResult } = await popular();
        const { results: topResult } = await topRated();
        const { results: upResult } = await upComing();

        setNowData(nowResult);
        setPopData(popResult);
        setTopData(topResult);
        setUpData(upResult);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        alert("에러 발생");
      }
    })();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {nowData && (
            <>
              <MainBanner imgUrl={nowData} />

              <Movies movieData={nowData} titleText={"현재 상영 영화"} />
              <Movies movieData={upData} titleText={"개봉 예정 영화"} />
              <Movies movieData={popData} titleText={"인기 영화"} />
              <Movies movieData={topData} titleText={"평점이 높은"} />
            </>
          )}
        </>
      )}
    </>
  );
};

// *예외
// 1. 컴파일 에러: 프로그램이 실행 되기 전에 발생하는 오류
// 2. 런타임 에러: 프로그램이 실행 중 발생하는 오류

// *try ~ catch
// =>발생 할 것 같은 예외 코드를 처리해주는 과정
// ex)
// try{
//   예외 가능성 있는 코드
// }catch(error){
//   예외가 발생했을때 처리
// }finally{
//   예외와 상관 없이 무조건 실행되어야 하는 코드 😎
// }
