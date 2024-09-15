import React, { useEffect, useState } from 'react'
import { Card } from '../components'
import { useTitle } from '../hooks/useTitle';

export const Listcard = ({apipath, title}) => {
  const [articles, setArticles] = useState([]);
  const pageTitle = useTitle(title,apipath);

  // const url = `https://newsapi.org/v2/top-headlines?category=${apipath}&apiKey=${process.env.REACT_APP_API_KEY}`;
   const url =`https://api.thenewsapi.com/v1/news/top?api_token=${process.env.REACT_APP_API_KEY}&locale=us&categories=${apipath}`
  useEffect(() => {
    async function fetchArticles() {
       const response = await fetch(url);
       const json = await response.json();
        console.log(json);
       setArticles(json.data);
       console.log(articles);
    }
    fetchArticles();

  }, [url]);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {articles.map((article)=>(
            <Card key={article.id} article={article} />
          ))}


        </div>
      </section>
    </main>
  )
}
