import { Form, Input } from 'antd';
import { useNavigate } from 'react-router';
import { useSetRecoilState } from 'recoil';

import { authToken } from '../../../helpers/store/token';
import { openNotification } from '../../../helpers/notification';
import PrimaryButton from '../../../components/common/Buttons/Primary/PrimaryButton';
import SecondaryButton from '../../../components/common/Buttons/Secondary/SecondaryButton';

import './style.css';
import { ButtonType } from '../../../constants/Button';
import { register } from '../../../api/auth';

type LoginValues = {
    username: string;
    password: string;
    remember: boolean;
}

export default function Register() {
    const navigate = useNavigate();
    const setToken = useSetRecoilState(authToken);

    const onFinish = async (values: LoginValues) => {
        const registerResp = register(values.username, values.password);
        if (!registerResp || !registerResp.success) {
            if (registerResp?.error) {
                openNotification("❌ Register Failed", registerResp.error);
                return;
            }
            openNotification("❌ Register Failed", "Please check your username and password.")
            return;
        }

        setToken(registerResp.data?.token);
        navigate('/home');
    };

    const onFinishFailed = () => {
        openNotification("❌ Login Failed", "Please check your username and password.")
    };

    return (
        <div className="register-page">
            <Form
                className='register-form'
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <PrimaryButton label='Register' />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <SecondaryButton type={ButtonType.link} link='/' label='I already have an account ?' />
                </Form.Item>
            </Form>
        </div>
    )
}
