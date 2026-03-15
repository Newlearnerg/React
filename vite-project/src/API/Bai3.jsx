import {useState, useEffect} from 'react'

function Bai3(){
    const [userId, setUserId] = useState("");
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if(!userId) return;

        //Check validation id:1-10
        if(userId < 1 || userId > 10){
            return;
        }

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(resolve => resolve.json())
        .then(data => setUserData(data))
        .catch(() => {
            console.log("khong lay duoc du lieu")
        })

    }, [userId]);

    return(
        <>
            <div>
                <input
                 type="number" 
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                />

                {userId <1 || userId > 10 ?
                    (<p>User not found</p>)
                    :
                    userData && (
                        <div>
                            <p>Name: {userData.name}</p>
                            <p>Phone: {userData.phone}</p>
                            <p>Website: {userData.website}</p>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Bai3