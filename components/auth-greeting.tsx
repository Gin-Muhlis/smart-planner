import React from 'react'
import { Lightbulb } from "lucide-react";
import Image from "next/image";

const AuthGreeting = ({title, description}: {title: string, description: string}) => {
  return (
    <div className="auth-greeting">
        <div className="absolute left-5 top-5 flex">
          <Lightbulb className="text-white" />
          <h2 className="text-white font-bold text-lg">Smart Planner</h2>
        </div>
        <div className="absolute right-16 top-20">
          <div className="w-12 h-12 bg-white opacity-50"></div>
          <div className="w-12 h-12 border-2 border-white opacity-50 absolute top-1/2 right-1/2"></div>
        </div>
        <Image
          src="/image-1.png"
          alt="Login Illustration"
          width={400}
          height={400}
          className="relative"
        />
        <div>
          <h1 className="text-white text-3xl text-center font-bold mb-2">
            {title}
          </h1>
          <p className="text-white text-center text-sm leading-5 w-11/12 mx-auto">
            {description}
          </p>
        </div>
        <div className="absolute bottom-4 left-4 grid grid-cols-4 gap-3 opacity-50">
          <div className="white-circle"></div>
          <div className="white-circle"></div>
          <div className="white-circle"></div>
          <div className="white-circle"></div>
          <div className="white-circle"></div>
          <div className="white-circle"></div>
          <div className="white-circle"></div>
          <div className="white-circle"></div>
          <div className="white-circle"></div>
          <div className="white-circle"></div>
          <div className="white-circle"></div>
          <div className="white-circle"></div>
          <div className="white-circle"></div>
          <div className="white-circle"></div>
          <div className="white-circle"></div>
          <div className="white-circle"></div>
        </div>
      </div>
  )
}

export default AuthGreeting