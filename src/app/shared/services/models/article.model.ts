export interface Article {
    title: string,
    author: string,
    description: string,
    content: string,
    publishedAt: string,
    source: {
      id: number,
      name:string,
    },
    urlToImage:string,
    url:string
  }