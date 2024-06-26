import Input from "@/components/input";
import { useCallback, useState } from "react";
import axios from "axios";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const register = useCallback(async () =>{
    try {
      await axios.post('/api/register' , {
        email,
        name,
        password
      });
    } catch (error) {
      console.log(error);
    }
  },[])

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="Logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">{variant === 'login' ? 'Sign in' : 'Register'}</h2>
            <div className="flex flex-col gap-4">
            {
                variant === 'login' ?  null :
              <Input
                id="name"
                label="Username"
                onChange={(e: any) => setName(e.target.value)}
                value={name}
                type="text"
              />
            }
              <Input
                id="email"
                label="Email"
                onChange={(e: any) => setEmail(e.target.value)}
                value={email}
                type="email"
              />
                    <Input
                id="password"
                label="Password"
                onChange={(e: any) => setPassword(e.target.value)}
                value={password}
                type="password"
              />
                 
              
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
            {variant === 'login' ? 'Login' : 'Sign Up'}
            </button>
            <p className="text-neutral-500 mt-12">
            {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
              <span
                onClick={toggleVariant}
                className="ml-1 text-white cursor-pointer hover:underline"
              >
                 {variant === 'login' ? 'Create an account' : 'Login'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
