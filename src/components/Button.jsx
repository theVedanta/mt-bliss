import { Link } from "react-router-dom";

const Button = ({ text, className, onClick, style, to }) => {
    return (
        <Link
            className={`rounded-lg bg-blue flex justify-center items-center py-3 px-7 text-lg text-white font-medium transition-all hover:bg-sky-900 lap:px-6 lap:text-base ph:text-sm ph:py-2  ${className}`}
            to={to ? to : "#"}
            style={style}
            onClick={onClick}
        >
            {text}
        </Link>
    );
};

export default Button;
