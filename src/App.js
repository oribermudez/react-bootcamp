import logo from "./logo.svg";
import "./App.css";

function App() {
  const users = [
    {
      name: "Teresa Smith",
      image: {
        url: "https://randomuser.me/api/portraits/women/74.jpg",
        description: "Avatar",
      },
      program: "Software Development",
      email: "tere.smith@gmail.com",
    },

    {
      name: "jhon Smith",
      image: {
        url: "https://randomuser.me/api/portraits/women/58.jpg",
        description: "Avatar",
      },
      program: "Software Development",
      email: "jhon.smith@gmail.com",
    },
  ];

  const [tere, jhon] = users;

  return (
    <div className="App">
      {users.map((user) => {
        return (
          <div>
            <p>{user.name}</p>
            <img src={user.image.url} alt={user.image.description} />
            <p>{user.program}</p>
            <p>{user.email} </p>
          </div>
        );
      })}
      ;
    </div>
  );
}

export default App;
