import "./profile.css"

const Profile = (props) => {


    return (
        <div className="profile-container">
            <div className="image-container">
                <img src={props.src} alt={props.alt || "foto do usuario"} />
            </div>
            <div className="info-container">
                <h3>{props.name || "nome"}</h3>
                <span>{props.user || "@usuario"}</span>
                <p>{props.desc || "descrição"}</p>
            </div>
        </div>
    )
}

export default Profile;