import "./Button.css";

export default function Button({ icon, action, onclick }) {
    return (
        <a className="button" href={onclick}>
            {icon}
            {action}
        </a>
    );
}
