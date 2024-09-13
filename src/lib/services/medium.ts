export interface MediumArticle {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: {
    link: string;
    type: string;
    length: number;
  };
  categories: string[];
}

interface MediumResponse {
  status: string;
  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items: MediumArticle[];
}

export async function getMediumArticles(): Promise<MediumArticle[]> {
  return fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@demirtasdurmus"
  )
    .then<MediumResponse>((res) => res.json())
    .then((data) => data.items)
    .catch((error) => {
      console.error("Error fetching Medium articles:", error);
      return [];
    });
}
