import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
    const {id} = useParams()
    const data = useLoaderData()
    // console.log(id, data)

    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(() => {
      if(id == "0") {
        setCategoryNews(data);
        return;
      }else if(id == "1") {
        const filteredNews = data.filter(news => news.others.is_today_pick == true);
        setCategoryNews(filteredNews);
        return;
      }else {
        const filteredNews = data.filter(news => news.category_id == id);
        console.log(filteredNews)
        setCategoryNews(filteredNews)
        }
    },[data, id])
    
    return (
        <div className='grid grid-cols-1 gap-5'>
          {/* <h1 className='text-accent font-bold mb-5 ms-5'>Total <span className='text-secondary'>{categoryNews.length}</span> news found.</h1> */}
            {
              categoryNews.map(news => 
              <NewsCard
                key={news.id}
                news={news}
              ></NewsCard>)
            }
        </div>
    );
};

export default CategoryNews;