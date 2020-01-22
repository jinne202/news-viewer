import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const categories = [
    {
        name : 'all',
        text : 'all'
    },
    {
        name : 'business',
        text : 'business'
    },
    {
        name : 'entertainment',
        text : 'entertainment'
    },
    {
        name : 'health',
        text : 'health'
    },
    {
        name : 'science',
        text : 'science'
    },
    {
        name : 'sports',
        text : 'sports'
    },
    {
        name : 'technology',
        text : 'tech'
    },
];

const CategoriesBlock = styled.div`
    display : flex;
    padding : 1rem;
    width : 720px;
    margin : 0 auto;
    @media screen and (max-width : 768px) {
        width : 100%;
        overflow-x : auto;
    }
`;

const Category = styled(NavLink)`
    font-size : 1.125rem;
    font-weight : 600;
    cursor: pointer;
    white-space : pre;
    text-decoration : none;
    color : inherit;
    padding : 0.25rem 0.9rem;
    border : 2px solid #f03e3e;
    border-radius : 15px;
    background-color : none;
    &:hover {
        color : white;
        background-color : #f03e3e;
    }

    &.active {
        background-color : #f03e3e;
        color : white;
    }

    & + & {
        margin-left : 0.9rem;
    }
`;

const Categories = () => {
    return(
        <CategoriesBlock>
            {categories.map(categoryItem => (
                <Category
                    key = {categoryItem.name}
                    activeClassName = "active"
                    exact = {categoryItem.name === 'all'}
                    to = {categoryItem.name === 'all' ? '/' : `/${categoryItem.name}`}
            >
                {categoryItem.text}
            </Category>
            ))}
        </CategoriesBlock>
    );
};

export default Categories;