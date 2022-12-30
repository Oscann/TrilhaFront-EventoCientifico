import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { ArticleData } from "../../../pages/api/article";

export default function ArticleCard({ data }: { data: ArticleData }) {
  return (
    <Card>
      <Link href={`/article?id=${data.id}`}>
        <CardContent>
          <div className="article-image">
            <Image src={data.articleImage} alt={data.title} fill />
          </div>
          <div className="article-info">
            <h3 className="title">{data.title}</h3>
            <span className="author">{data.author}</span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

const Card = styled.article`
  position: relative;

  width: 31%;
  padding-bottom: 28%;

  border-radius: 8px;

  overflow: hidden;

  box-shadow: 0px 0px 3px;
  background-color: #d9d9d9;
`;

const CardContent = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  & div.article-image {
    position: relative;

    width: 100%;
    height: 66%;
  }

  & div.article-info {
    width: 100%;
    height: 34%;

    background-color: #fff;

    padding: 16px;

    overflow: hidden;

    & * {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    & h3.title {
      color: #000;

      -webkit-line-clamp: 2;

      font-size: 20px;

      margin-bottom: 4px;
    }

    & span.author {
      color: #505050;
      -webkit-line-clamp: 1;

      font-size: 14px;
    }
  }
`;
