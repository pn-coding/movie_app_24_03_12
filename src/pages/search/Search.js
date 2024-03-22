import { useForm } from "react-hook-form";
import styled from "styled-components";
import { searchMovie } from "../../api";
import { useState } from "react";
import { IMG_URL_SIZE } from "../../constant/url";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { Loading } from "../../components/Loading";
import { PageTitle } from "../../components/PageTitle";

const Container = styled.section`
  padding: 150px;
`;

const SForm = styled.form`
  position: relative;
  input {
    all: unset;
    border-bottom: 1px solid #555;
    width: 95%;
    font-size: 24px;
    padding-left: 5px;
    padding-bottom: 10px;
  }
  svg {
    font-size: 30px;
    position: absolute;
    right: 30px;
    top: 5px;
    opacity: 0.6;
  }
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 30px;
  column-gap: 10px;
`;

const Con = styled.div`
  h3 {
    margin-top: 10px;
  }
`;

const Bg = styled.div`
  height: 350px;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

const Text = styled.h3`
  margin: 100px 0 30px 0;
  font-size: 30px;
  font-weight: 700;
`;

export const Search = () => {
  const [term, setTerm] = useState();
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    const { search: keyword } = data;
    try {
      const { results } = await searchMovie(keyword);
      setTerm(results);
      setKeyword(keyword);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <PageTitle title={"Search"} />
      <SForm onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("search", {
            required: "내용을 입력해주세요.",
          })}
          type="text"
          placeholder="찾으시는 영화가 있나요?"
        />
        <IoIosSearch />
      </SForm>
      {errors ? errors?.search?.message : ""}
      {term ? <Text>"{keyword}" 검색 결과</Text> : ""}

      {term && (
        <ConWrap>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {term.map((data) => (
                <Con key={data.id}>
                  <Link to={`/detail/${data.id}`}>
                    <Bg>
                      {data.poster_path ? (
                        <img
                          src={`${IMG_URL_SIZE.size_200}${data.poster_path}`}
                          alt={data.title}
                        />
                      ) : (
                        <img
                          src="https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
                          alt="이미지 없음"
                        />
                      )}
                    </Bg>
                  </Link>
                </Con>
              ))}
            </>
          )}
        </ConWrap>
      )}
    </Container>
  );
};
