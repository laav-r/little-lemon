import styles from "./Button.module.css";

function Button(props) {
  return (
    <button
      type={props.type}
      className={`${styles.button} shadow ${props.class}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.name}
    </button>
  );
}

export default Button;
