import useFetch from "../utils/utils";

function Posts() {
    //const [posts, setPosts] = useState<any[]>([]);
    const {data: posts = [], error, loading} = useFetch('https://jsonplaceholder.typicode.com/posts');
    if(loading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>{error}</div>
    }
    return (
        <div>
          {posts?.map((post: any) => (
            <div className='post-card'>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
          ))}
        </div>
    )
}

export default Posts;