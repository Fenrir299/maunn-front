export interface ArticleData {
  id: string;
  title: string;
  date: string;
  fileName: string;
  description: string;
  imgUrl: string;
  author: string;
}

const articlesData: ArticleData[] = [
  {
    id: "article-1",
    title: "Pourquoi Camille ?",
    date: "2023-04-27",
    fileName: "article-1.md",
    description: "Présentation du sujet",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Vincent_Willem_van_Gogh_002.jpg/260px-Vincent_Willem_van_Gogh_002.jpg",
    author: "Louis Giguet",
  },
];

export default articlesData;
