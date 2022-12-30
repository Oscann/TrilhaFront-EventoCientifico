import { NextApiRequest, NextApiResponse } from "next";

export interface ArticleData {
  id: number;
  title: string;
  author: string;
  publishDate: string;
  articleImage: string;
  content: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page, id } = req.query;

  if (id === undefined && page !== undefined) {
    let startingEndpoint = (Number(page) - 1) * 6;
    let artigosCopy = artigos.splice(artigos.length);
    res.status(200).json(artigos);
  } else {
    res.status(200).json(artigos[Number(id)]);
  }
}

const artigos: Array<ArticleData> = [
  {
    id: 0,
    title: "Lorem Ipsum solo amet",
    author: "Godalfredo",
    publishDate: "12-31-2022",
    articleImage: "/assets/coral-background-2.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ratione temporibus modi. Aspernatur totam tempore debitis dicta quis praesentium, quibusdam ducimus ex similique consequuntur molestias quia dignissimos animi eum assumenda?",
  },
  {
    id: 1,
    title: "Lorem Ipsum solo amet",
    author: "Godalfredo",
    publishDate: "12-31-2022",
    articleImage: "/assets/coral-background-2.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ratione temporibus modi. Aspernatur totam tempore debitis dicta quis praesentium, quibusdam ducimus ex similique consequuntur molestias quia dignissimos animi eum assumenda?",
  },
  {
    id: 2,
    title: "Lorem Ipsum solo amet",
    author: "Godalfredo",
    publishDate: "12-31-2022",
    articleImage: "/assets/coral-background-2.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ratione temporibus modi. Aspernatur totam tempore debitis dicta quis praesentium, quibusdam ducimus ex similique consequuntur molestias quia dignissimos animi eum assumenda?",
  },
  {
    id: 3,
    title: "Lorem Ipsum solo amet",
    author: "Godalfredo",
    publishDate: "12-31-2022",
    articleImage: "/assets/coral-background-2.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ratione temporibus modi. Aspernatur totam tempore debitis dicta quis praesentium, quibusdam ducimus ex similique consequuntur molestias quia dignissimos animi eum assumenda?",
  },
  {
    id: 4,
    title: "Lorem Ipsum solo amet",
    author: "Godalfredo",
    publishDate: "12-31-2022",
    articleImage: "/assets/coral-background-2.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ratione temporibus modi. Aspernatur totam tempore debitis dicta quis praesentium, quibusdam ducimus ex similique consequuntur molestias quia dignissimos animi eum assumenda?",
  },
  {
    id: 5,
    title: "Lorem Ipsum solo amet",
    author: "Godalfredo",
    publishDate: "12-31-2022",
    articleImage: "/assets/coral-background-2.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ratione temporibus modi. Aspernatur totam tempore debitis dicta quis praesentium, quibusdam ducimus ex similique consequuntur molestias quia dignissimos animi eum assumenda?",
  },
  {
    id: 6,
    title: "Lorem Ipsum solo amet",
    author: "Godalfredo",
    publishDate: "12-31-2022",
    articleImage: "/assets/coral-background-2.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ratione temporibus modi. Aspernatur totam tempore debitis dicta quis praesentium, quibusdam ducimus ex similique consequuntur molestias quia dignissimos animi eum assumenda?",
  },
  {
    id: 7,
    title: "Lorem Ipsum solo amet",
    author: "Godalfredo",
    publishDate: "12-31-2022",
    articleImage: "/assets/coral-background-2.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ratione temporibus modi. Aspernatur totam tempore debitis dicta quis praesentium, quibusdam ducimus ex similique consequuntur molestias quia dignissimos animi eum assumenda?",
  },
  {
    id: 8,
    title: "Lorem Ipsum solo amet",
    author: "Godalfredo",
    publishDate: "12-31-2022",
    articleImage: "/assets/coral-background-2.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ratione temporibus modi. Aspernatur totam tempore debitis dicta quis praesentium, quibusdam ducimus ex similique consequuntur molestias quia dignissimos animi eum assumenda?",
  },
];
