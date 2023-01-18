import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
    const postElements = posts.map((post)=>
        <Article key={post.id} title={post.title} data={post.data} preview= {post.preview} minutes={post.minutes} />
        )
        return (
            <div>
                <main>
                    {postElements}
                </main>
            </div>
        )
}

export default ArticleList;