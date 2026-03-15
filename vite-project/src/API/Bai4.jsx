import {useState, useEffect} from 'react'

function Bai4(){
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("")

    //Lay toan bo data
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((resolve) => resolve.json())
        .then((data) => setPosts(data))
        .catch(() => {
            console.log("Khong lay duoc data")
        })
    }, []);

    // //Rendering input
    // useEffect(() => {
    //     const filtered = posts.filter((post) => {
    //         post.title.toLowerCase().includes(search.toLowerCase())
    //     });
    //     setFilteredData(filtered);

    // }, [search, posts]);

    return(
        <div>
            <input
             type="text"
             placeholder='Nhập input để tìm title'
             value = {search}
             onChange={(e) => setSearch(e.target.value)}/>

             <ul>
                {
                posts.filter( post =>
                        post.title.toLowerCase().includes(search.toLowerCase())
                    ).map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
             </ul>
        </div>
    )
}

export default Bai4