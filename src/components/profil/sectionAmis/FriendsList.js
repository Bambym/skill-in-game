import React, {useState,useEffect}from 'react'
import "../../../css/myFriends/myFriends.css"

const FriendsList = ({friends, uid, reloadProfile}) => {
  console.log(friends)
  const [friendData, setFriendData] = useState([]);
  
  
 
  useEffect(() => {
    getFriendData();
  }, [friends]);

  const getFriendData = async () => {
    const initConfig = {
      method: "GET",
    };
    try {
      let response = await fetch(
        `http://localhost:5000/users/${friends}`,
        initConfig
      );
      let data = await response.json();

      console.log(data);

      setFriendData(data);
      reloadProfile()
    } catch (error) {}
  };
  
  
  return (
  <>
    <div className='myFriends' >

      
      {friendData.map((friend,key)=>(
        <>
          <div key={friend.id}>{friend.userName}</div>
          
        </>
        
      ))}
        
    </div>
  </>
  )
}

export default FriendsList