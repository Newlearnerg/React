import { useState, useEffect } from "react";

function Bai1(){
      const [data, SetData] = useState(null)

  useEffect(() =>{
    fetchData()
  }, [])

  // const fetchData = async() =>{
  //   try{
  //     const respone = await fetch("https://jsonplaceholder.typicode.com/users");
  //     if (!respone.ok){
  //       throw new Error("Phan hoi mang khong hop le");
  //     }
  //     const result = await respone.json()
  //     SetData(result)
  //   }catch(error){
  //   console.log("Loi khi lay du lieu", error.message);
  //   }
  // }; 

  const fetchData = () => {
    const respone = fetch("https://jsonplaceholder.typicode.com/users")
    .then((respone) => {
      if(!respone.ok){
        throw new Error("Phan hoi mang khong hop le")
      }
      return respone.json()
    }).then((result) => {
      SetData(result)
    }).catch((error)=>{
      console.log("Loi khi lay du lieu", error.message);
    })
  }

  return (
    <>
      <div>
        {data ? (
          <>
            {data.map(user => (
              <div key={user.id} className="user">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </div>
            ))}
          </>
          )
         :
         (
          <p>Đang tải...</p>
          )
        }
      </div>
    </>
  )
}

export default Bai1