"use client";

import Button from "../button/Button";
import AuthContainer from "../container/AuthContainer";
import Input from "../input/Input";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { FaGoogle } from "react-icons/fa6";
import SectionTitle from "../sectionTitle/SectionTitle";
import Link from "next/link";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const LoginClient = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      if (callback?.ok) {
        router.push("/");
        router.refresh();
        toast.success("User logged in successfully");
      }
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };
  return (
    <div className="bg-gray-800 md:h-screen w-full">
      <AuthContainer className="flex flex-col items-end justify-end w-full max-w-[460px] px-4">
        <form
          action="#"
          method="POST"
          className="bg-gray-500 p-5 rounded-md shadow-md w-72 sm:min-w-96"
        >
          <SectionTitle title="Login" allClass="text-white" />
          <div className="grid grid-cols-6 gap-x-4 mb-5">
            <div className="col-span-6">
              <Input
                placeholder="E-Mail"
                id="mail"
                type="text"
                register={register}
                errors={errors}
                required
              />
            </div>
            <div className="col-span-6">
              <Input
                placeholder="Password"
                id="password"
                type="password"
                register={register}
                errors={errors}
                required
              />
            </div>
          </div>
          <Button text="Login" onClick={handleSubmit(onSubmit)} />
          <div className="flex items-center justify-center my-2 text-white">
            OR
          </div>
          <Button
            text="Google Login"
            icon={<FaGoogle size={24} />}
            onClick={() => {}}
          />
        </form>
        <Link className="flex justify-end  mb-1 text-white" href="/register">
          Create your bew account
        </Link>
      </AuthContainer>
    </div>
  );
};

export default LoginClient;
