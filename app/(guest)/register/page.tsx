import AuthGreeting from "@/components/auth-greeting";
import RegisterForm from "@/components/forms/register-form";
import { Lightbulb } from "lucide-react";
import Link from "next/link";

const Register = () => {
  const greetingTitle = "Track, analysis, and smarter";
  const greetingDescription =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. similique consequatur perferendis reprehenderit placeat maiorespariatur adios prefrence nile";

  return (
    <section className="card-auth">
      <AuthGreeting title={greetingTitle} description={greetingDescription} />
      <div className="auth-form">
        <div className="absolute left-5 top-5 flex md:hidden">
          <Lightbulb className="text-primary" size={24} />
          <h2 className="text-primary font-bold text-md">Smart Planner</h2>
        </div>
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-2 text-center">
            Daftar sekarang
          </h1>
          <p className="text-sm text-center text-stone opacity-80">
            Track, analysis, and smarter
          </p>
          <RegisterForm />
          <p className="text-sm text-center">
            Sudah memiliki akun?{" "}
            <Link href="/" className="font-bold">
              Masuk
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
