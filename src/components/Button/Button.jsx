import "./Button.css";

export default function Button({ icon, action, onclick, colorscheme }) {
    return (
        <a className={colorscheme} href={onclick}>
            {icon}
            {action}
        </a>
    );
}
