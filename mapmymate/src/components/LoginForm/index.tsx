"use client";
import Image from "next/image";
import logo from "/public/whiteLogo.png";
import Link from "next/link";
// import InputComponent from "@/components/user-input";
import { useForm } from "react-hook-form";
import * as zod from "@hookform/resolvers/zod";
import {  userFormData,loginSchema } from "@/types/common";
import { Button } from "../ui/button";
import InputComponent from "../ui/user-input";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userFormData>({ resolver: zod.zodResolver(loginSchema) });

  const onSubmit = (data:userFormData) => {
    const userEmail = data.userEmail.trim()
    console.log(userEmail)
    console.log(data.userPassword)
  };

  return (
    <main className="bg-gradiant w-screen flex justify-center items-center">
      <section className=" flex h-full items-center justify-center ">
      <Card className="h-full w-[100%] max-w-[552px] rounded-[5px] bg-white pb-[20px] drop-shadow-[0_3px_20px_rgba(0,0,0,0.16)] md:h-auto ">
          <CardHeader className="bg-gradiant-green rounded-tl-[5px] rounded-tr-[5px] text-center ">
            <CardTitle
              className={`mt-[15px] font-myfontRegular text-[18px] font-semibold  text-white`}
            >
              
            </CardTitle>
            <div className="flex h-24 flex-col items-center  bg-[#0a3d62] text-white">
              <Image
                className=""
                height={90}
                src={logo}
                alt={"MMM logo"}
                priority
              />
              {/* <h1
                className={`font-sans text-center font-myfontRegular text-[1rem] font-semibold text-dark-green`}
              >
                Connect with budies
              </h1> */}
            </div>
          </CardHeader>
          <CardContent>
            

            <form
              className={`mb-[1rem] font-myfontRegular`}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <InputComponent
                    id={"email"}
                    type={"email"}
                    label={"Email"}
                    placeholder={"Enter Email"}
                    register={register("userEmail")}
                    error={errors.userEmail}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <InputComponent
                    id={"password"}
                    type={"password"}
                    label={"Password"}
                    placeholder={"Enter Password"}
                    register={register("userPassword")}
                    error={errors.userPassword}
                  />
                </div>
                <div className="flex justify-between">
                  <span className="font-myfontRegular text-[10px] text-dark-green md:text-[14px]">
                    Not a member?{" "}
                    <Link className="underline" href={"auth/sign-up"}>
                      Sign up
                    </Link>
                  </span>
                  <span className="font-myfontRegular text-[10px] text-dark-green md:text-[14px]">
                    <Link href={"auth/forgot-password"}>Forgot Password?</Link>
                  </span>
                </div>
              </div>
              <div className="mt-[27px] flex w-full justify-center">
              <Button className="self-end mt-10 w-20 py-2 px-4 bg  text-[#0a3d62] 
        hover:bg-[#0a3d62] bg-white hover:text-white rounded"> Login</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
