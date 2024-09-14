import React, { useEffect, useState } from 'react'
import { Card } from '../components'
import { useTitle } from '../hooks/useTitle';

export const Listcard = ({apipath, title}) => {
  const [articles, setArticles] = useState([]);
  const pageTitle = useTitle(title,apipath);

  const url = `https://newsapi.org/v2/top-headlines?category=${apipath}&apiKey=${process.env.REACT_APP_API_KEY}`;
  useEffect(() => {
    async function fetchArticles() {
       const response = await fetch(url);
       const json = await response.json();
       setArticles(json.articles);
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
