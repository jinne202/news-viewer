import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
    background-color: white;
    border-radius : 30px;
    box-sizing : border-box;
    padding: 3rem;
    width : 768px;
    height : 700px;
    margin : 0 auto;
    overflow-y : scroll;
    @media screen and (max-width : 768px){
        width : 100%;
        padding: 1rem 0;
    }
`;

const NewsList = ({category}) => {
    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=au${query}&apiKey=c60f3e16e5cb4a18964073ef0b5990d8`
        );
    }, [category]);

    if (loading) {
        return <NewsListBlock>R O A D I N G ...</NewsListBlock>
    }
    if (!response) {
        return null;
    }
    if (error) {
        return <NewsListBlock>Error ahahahahah</NewsListBlock>
    }
    const {articles} = response.data;
    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key = {article.url} article = {article}/>
            ))}
        </NewsListBlock>
    );
};

export default NewsList;