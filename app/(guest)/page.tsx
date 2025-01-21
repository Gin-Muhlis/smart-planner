import AuthGreeting from "@/components/auth-greeting";
import LoginForm from "@/components/forms/login-form";
import { Lightbulb } from "lucide-react";
import Link from "next/link";

const Login = () => {
  const greetingTitle = "Selamat Datang";
  const greetingDescription =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. similique consequatur perferendis reprehenderit placeat maiorespariatur adios prefrence nile";

  return (
    <section className="card-auth">
      <div className="auth-form">
        <div className="absolute left-5 top-5 flex md:hidden">
          <Lightbulb className="text-primary" size={24} />
          <h2 className="text-primary font-bold text-md">Smart Planner</h2>
        </div>
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-2 text-center">Masuk ke akun</h1>
          <p className="text-sm text-center text-stone opacity-80">
            Track, analysis, and smarter
          </p>
          <LoginForm />
          <p className="text-sm text-center">
            Belum memiliki akun?{" "}
            <Link href="/register" className="font-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
      <AuthGreeting title={greetingTitle} description={greetingDescription} />
    </section>
  );
};

export default Login;
