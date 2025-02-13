"use client";

import Button from "../button/Button";
import AuthContainer from "../container/AuthContainer";
import Input from "../input/Input";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { FaGoogle } from "react-icons/fa6";
import SectionTitle from "../sectionTitle/SectionTitle";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const RegisterClient = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios.post("/api/register", data).then(() => {
      toast.success("User registered successfully");
      signIn("credentials", {
        email: data.email,
        password: data.password,
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
    });
  };
  return (
    <div className="bg-gray-800 md:h-screen w-full">
      <AuthContainer className="flex flex-col  w-full max-w-[460px] px-4">
        <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md">
          <SectionTitle title="Register" center />
          <Input
            placeholder="Ad"
            type="text"
            id="name"
            register={register}
            errors={errors}
            required
          />
          <Input
            placeholder="Email"
            type="text"
            id="email"
            register={register}
            errors={errors}
            required
          />
          <Input
            placeholder="Parola"
            type="password"
            id="password"
            register={register}
            errors={errors}
            required
          />
          <Button text="Kayıt Ol" onClick={handleSubmit(onSubmit)} />

          <div className="text-center my-2 font-bold text-lg">OR</div>
          <Button
            text="Google İle Üye Ol"
            icon={FaGoogle}
            outline
            onClick={() => signIn("google")}
            className="!bg-white !text-black hover:!bg-gray-500"
          />
        </div>
        <div className="flex justify-end w-full gap-x-2  mt-1 text-white">
          Already have an account?
          <Link className="" href="/register">
            Sign in
          </Link>
        </div>
      </AuthContainer>
    </div>
  );
};

export default RegisterClient;
