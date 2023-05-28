import { Link } from "react-router-dom";
import { ButtonType } from "../../../../constants/Button";
import "../style.css"

type ButtonProps = {
    type?: ButtonType;
    link?: string;
    label: string;
    onClick?: () => void;
}

const PrimaryButton = (props: ButtonProps) => {
    if (props?.type === ButtonType.link && props?.link) {
        return (
            <Link to={props.link}>
                <button className="primary-button">
                    {props.label}
                </button>
            </Link>
        );
    }

    return (
        <button className="primary-button" onClick={props.onClick}>
            {props.label}
        </button>
    );
}

export default PrimaryButton;