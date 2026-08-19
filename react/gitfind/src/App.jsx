import { useState } from "react";
import SearchBar from "./components/search-bar";
import Profile from "./components/profile";
import Repo from "./components/repo";

function App() {
  const [user, setUser] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();
    if (newUser.login) {
      const { avatar_url, login, name, bio } = newUser;
      setCurrentUser({ avatar_url, login, name, bio });

      const reposData = await fetch(
        `https://api.github.com/users/${user}/repos`,
      );
      const newRepos = await reposData.json();
      if (newRepos.length) {
        setRepos(newRepos);
      }
    }
  };

  return (
    <div className="app-container">
      <h1>GitFind</h1>
      <SearchBar
        value={user}
        onChange={(e) => setUser(e.target.value)}
        onClick={handleGetData}
      />
      {currentUser?.name ? (
        <>
          <Profile
            src={currentUser.avatar_url}
            name={currentUser.name}
            user={`@${currentUser.login}`}
            desc={currentUser.bio}
          />
          <hr></hr>
          <h2>Repositórios</h2>
          {repos?.length ? (
            <div className="repo-list">
              {repos.map((repo) => (
                <Repo
                  repoName={repo.name}
                  repoDesc={repo.description}
                />
              ))}
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  );
}

export default App;
