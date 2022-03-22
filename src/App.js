import "./App.css";

import Myphoto from "./component/Profile/assets/Myphoto.jpg";
import bb from "./component/Profile/assets/bb.jpg";
import cc from "./component/Profile/assets/cc.jpg";
import aa from "./component/Profile/assets/aa.jpg";



import Profile from "./component/Profile/Profile";

function App() {
  let users = [
    { fullName: "Gattoussi Emna", bio: "**You Can't Spell Awesome Without Me**", profession: "IT engineer" ,
     url : Myphoto },
    { fullName: "Angelia Jolie", bio: "**She's different**", profession: "Actress",
    url : bb
   },
    { fullName: "Elon Musk", bio: "**The Tesla Adventure**", profession: "CEO of Tesla Motors",
    url : cc },
    {fullName: "Helery Clinton", bio:"**Be Hopeful**", profession: "Politician, New York State Senator",url: aa}
  ];
  
  return (
    <div>
      <h1 className="title">My Work !</h1>
    <div className="card_boxs App">
      <h1></h1>
      {users.map((user) => (
        <Profile
        
          name={user.fullName}
          bio={user.bio}
          profession={user.profession}
          
          url = {user.url}
          
        ></Profile>
      ))}
    </div>
    </div>
  );
}

export default App;
