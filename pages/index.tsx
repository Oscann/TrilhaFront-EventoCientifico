import styled from "styled-components";
import Footer from "../components/organisms/Footer";
import ArticleCard from "../components/molecules/ArticleCard";
import Header from "../components/organisms/Header";
import LandingPage from "../components/organisms/LandingPage";
import { useEffect, useState } from "react";
import axios from "axios";
import { ArticleData } from "./api/article";
import Link from "next/link";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [articlesData, setArticlesData] = useState<Array<ArticleData> | null>(
    null
  );

  useEffect(() => {
    axios
      .get("/api/article")
      .then((res) => {
        setArticlesData(res.data.slice(0, 6));
        setLoading(false);
      })
      .catch((ex) => {
        console.log(ex);
      });
  }, []);

  return (
    <>
      <Header />
      <main>
        <LandingPage />
        <StyledHr />
        <ArticlesSection>
          <h1>Artigos</h1>
          <div className="articles">
            {loading ? (
              <SkeletonLoading />
            ) : (
              articlesData?.map((data, index) => {
                return <ArticleCard data={data} key={index} />;
              })
            )}
          </div>
        </ArticlesSection>
      </main>
      <Footer />
    </>
  );
}

function SkeletonLoading() {
  return (
    <>
      <div className="skeleton-article" />
      <div className="skeleton-article" />
      <div className="skeleton-article" />
      <div className="skeleton-article" />
      <div className="skeleton-article" />
      <div className="skeleton-article" />
    </>
  );
}

const StyledHr = styled.hr`
  width: 100%;
  height: 0;

  border: 18px solid #000;
`;

const ArticlesSection = styled.section`
  width: 100%;

  padding: 94px;

  display: flex;
  flex-direction: column;
  gap: 88px;

  & div.articles {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    gap: 20px 3.5%;

    & div.skeleton-article {
      width: 31%;
      padding-bottom: 28%;

      background-color: #d9d9d9;

      border-radius: 8px;
    }
  }
`;
