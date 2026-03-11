import { useState, useEffect } from "react";

function Bai2(){
      const [data, SetData] = useState(null)
      const [loading, setLoading] = useState(true)
      const [error, setError] = useState(null)

  useEffect(() =>{
    fetchData()
  }, [])

  function wait(seconds) {
    return new Promise(resolve => {
        setTimeout(resolve, seconds * 1000); 
    });
}

  const fetchData = () => {
    setLoading(true)
    setError(null)
    const respone = fetch("https://jsonplaceholder.typicode.com/users")
    .then((respone) => {
      if(!respone.ok){
        throw new Error("Phan hoi mang khong hop le")
      }
      return respone.json()
    }).then((result) => {
      return wait(2).then(() => {
        SetData(result)
        setLoading(false)
      })
    }).catch((error)=>{
      console.log("Loi khi lay du lieu", error.message);
      setError(error.message)
      setLoading(false)
    })
  }

  return (
    <>
      <div>
        {loading ? (
          <p>Đang tải...</p>
        ) : error ? (
          <p style={{color: 'red'}}>Lỗi: {error}</p>
        ) : (
          <>
            {data && data.map(user => (
              <div key={user.id} className="user">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  )
}

export default Bai2