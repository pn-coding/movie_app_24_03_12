import { useEffect, useState } from "react";
import { movieDetail } from "../../api";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
import styled from "styled-components";
import { IMG_URL } from "../../constant/url";
import { Contents } from "./Contents";
import { spacing } from "../../components/GlobalStyled";

export const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const detailData = await movieDetail(id);
        setData(detailData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  console.log(data);

  return <>{isLoading ? <Loading /> : <Contents detailData={data} />}</>;
};
