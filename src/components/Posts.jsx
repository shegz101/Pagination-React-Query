import '../App.css';
import { getPosts } from '../api/axios';
import { useEffect, useState } from 'react';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {

        getPosts(page).then(json => setPosts(json))

    }, [page])


    return (
        <div className="posts__section">
            <div className="pages__section">
                <button>prev</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <p>...</p>
                <button>10</button>
                <button>Next</button>
            </div>

            <div className='blog__posts'>
                <div className='posts'>
                    {
                        posts.map((post) => (
                            <div className='post'>
                                <p>{post.id}</p>
                                <p>{post.title}</p>
                                <p>{post.body}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
 
export default Posts;