import "./repo.css";

const Repo = (props) => {
  return (
    <div className="repo-container">
      <h3 className="repo-name">{props.repoName || "nome do repositório"}</h3>
      <p className="repo-desc">{props.repoDesc || "sem descrição"}</p>
    </div>
  );
};

export default Repo;
