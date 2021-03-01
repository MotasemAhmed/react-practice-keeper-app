import Input from "../components/Input";
import Button from "./../components/Button";

function Login() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Button type="submit" buttonName="Login" />
    </form>
  );
}
export default Login;