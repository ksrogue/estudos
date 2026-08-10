import "./styles.css";

function Button(props) {
  return <button onClick={props.onClick}>{props.number}</button>;
}

export default Button;
