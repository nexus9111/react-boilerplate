import { Link } from "react-router-dom";
import "../style.css"
import { ButtonType } from "../../../../constants/Button";

// enum button type link or button


type ButtonProps = {
    type?: ButtonType;
    link?: string;
    label: string;
    onClick?: () => void;
}

const SecondaryButton = (props: ButtonProps) => {
    if (props?.type === ButtonType.link && props?.link) {
        return (
            <Link to={props.link}>
                <button className="secondary-button">
                    {props.label}
                </button>
            </Link>
        );
    }

    return (
        <button className="secondary-button" onClick={props.onClick}>
            {props.label}
        </button>
    );
}

export default SecondaryButton;