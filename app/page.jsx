import RegisterForm from '../app/components/RegisterForm';
import LoginForm from './components/LoginForm';


const RegisterPage = () => {
  return (
    <div>
      <p>Registro de Usuário</p>
      <RegisterForm />
      <br />
      <p>Login</p>
      <LoginForm />
    </div>
  );
};

export default RegisterPage;
