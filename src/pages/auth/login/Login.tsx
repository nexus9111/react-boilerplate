import { Form, Input } from 'antd';
import { useNavigate } from 'react-router';
import { useSetRecoilState } from 'recoil';

import { authToken } from '../../../helpers/store/token';
import { openNotification } from '../../../helpers/notification';

import PrimaryButton from '../../../components/common/Buttons/Primary/PrimaryButton';
import SecondaryButton from '../../../components/common/Buttons/Secondary/SecondaryButton';
import { ButtonType } from '../../../constants/Button';

import { login } from '../../../api/auth';

import './style.css';

type LoginValues = {
    username: string;
    password: string;
    remember: boolean;
}

export default function Login() {
    const navigate = useNavigate();
    const setToken = useSetRecoilState(authToken);

    const onFinish = async (values: LoginValues) => {
        const loginResp = login(values.username, values.password);
        if (!loginResp || !loginResp.success) {
            if (loginResp?.error) {
                openNotification("❌ Login Failed", loginResp.error);
                return;
            }
            openNotification("❌ Login Failed", "Please check your username and password.")
            return;
        }

        setToken(loginResp.data?.token);
        navigate('/home');
    };

    const onFinishFailed = () => {
        openNotification("❌ Login Failed", "Please check your username and password.")
    };

    return (
        <div className="login-page">
            <Form
                className='login-form'
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
                    <PrimaryButton label='Login' />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <SecondaryButton type={ButtonType.link} link='/register' label="I don't have an account" />
                </Form.Item>
            </Form>


        </div>
    )
}
