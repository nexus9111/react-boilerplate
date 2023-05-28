import PrimaryButton from '../../components/common/Buttons/Primary/PrimaryButton';
import { ButtonType } from '../../constants/Button';

import "./style.css"

const NotFound = () => {
    return (
        <div className="container">
            <h1>Not Found</h1>
            <PrimaryButton label="Go Home" link="/home" type={ButtonType.link} />
        </div>
    );
}

export default NotFound;