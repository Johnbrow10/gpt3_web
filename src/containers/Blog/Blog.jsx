import React from 'react';
import './blog.css';
import Article from '../../components/Article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from '../../assets/import'

const Blog = () => {
    return (
        <div className='gpt3__blog section__padding' id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">
                    Muita coisa está acontecendo,
                    Estamos postando no Blog sobre isso.
                </h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imgUrl={blog01} date="26, Sep 2023" title="GPT-3 e Open AI é o futuro. Vamos explorar como é?" />
                </div>
                <div className="gpt3__blog-container_groupB">
                    <Article imgUrl={blog02} date="26, Sep 2023" title="GPT-3 e Open AI é o futuro. Vamos explorar como é?" />
                    <Article imgUrl={blog03} date="26, Sep 2023" title="GPT-3 e Open AI é o futuro. Vamos explorar como é?" />
                    <Article imgUrl={blog04} date="26, Sep 2023" title="GPT-3 e Open AI é o futuro. Vamos explorar como é?" />
                    <Article imgUrl={blog05} date="26, Sep 2023" title="GPT-3 e Open AI é o futuro. Vamos explorar como é?" />
                </div>
            </div>
        </div>
    )
}

export default Blog