"use client";

import Button from "../button/Button";
import AuthContainer from "../container/AuthContainer";
import Input from "../input/Input";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { FaGoogle } from "react-icons/fa6";
import SectionTitle from "../sectionTitle/SectionTitle";
import Link from "next/link";

const RegisterClient = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);
  return (
    <div className="bg-gray-800 md:h-screen w-full">
      <AuthContainer className="flex flex-col  w-full max-w-[460px] px-4">
        <form
          action="#"
          method="POST"
          className="bg-gray-500 p-5 rounded-md shadow-md w-full "
        >
          <SectionTitle title="Register" allClass="text-white" />
          <div className="grid grid-cols-6 gap-x-4 mb-5">
            <div className="col-span-6 sm:col-span-3">
              <Input
                placeholder="First name"
                id="name"
                type="text"
                register={register}
                errors={errors}
                required
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <Input
                placeholder="Last name"
                id="surname"
                type="text"
                register={register}
                errors={errors}
                required
              />
              {/* <label
                htmlFor="last-name"
                className="block text-sm font-medium text-white"
              >
                Last name
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
              /> */}
            </div>

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

            <div className="col-span-6 mb-3">
              <select
                aria-placeholder="Country"
                id="country"
                name="country"
                autoComplete="country-name"
                className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
                <option>Turkey</option>
                <option>Germany</option>
                <option>France</option>
                <option>Italy</option>
                <option>Spain</option>
                <option>United Kingdom</option>
                <option>Japan</option>
              </select>
            </div>

            <div className="col-span-6">
              <Input
                placeholder="Address"
                id="address"
                type="text"
                register={register}
                errors={errors}
                required
              />
            </div>
          </div>
          <Button text="Register" onClick={handleSubmit(onSubmit)} />
          <div className="flex items-center justify-center my-2 text-white">
            OR
          </div>
          <Button
            text="Google Register"
            icon={<FaGoogle size={24} />}
            onClick={() => {}}
          />
        </form>
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
