"use client";
import Link from "next/link";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { SignupSchema, signupSchema } from "@/app/_util/validation/form";
import { submitSignupForm } from "@/app/actions/form"
import { useRouter } from "next/navigation";


export default function Page() {

const router = useRouter();
	
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignupSchema>({
		resolver: zodResolver(signupSchema),
	});

	const onSubmitForm: SubmitHandler<SignupSchema> = async (data) => {
		// call the server action
		const formData = new FormData();
		formData.append("fullName", data.fullName);
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);
 


		const { data: success, errors } = await submitSignupForm(formData);
		
		if (errors) {
			// handle errors (e.g., display an alert notification or add error messages to the form)
			console.log("An Error occurred",errors);
    }

    if (success) {
			// handle success (e.g., display a success notification)
			console.log("SUCCESS", success);
			router.push('/');
    }
  };

	return (
		<main className="flex justify-center items-center">
			{/* /* Do A multi-step form later* */}
			<section className="max-w-[350px] w-full mx-[auto] rounded bg-secondary p-4 text-text">
				<form className="" onSubmit={handleSubmit(onSubmitForm)}>
					<p className="text-center text-4xl font-bold">Signup </p>
					{/* */}
					<p className="text-center text-pretty text-sm italic leading-5">
						Signup now and get full access to our app.{" "}
					</p>
					<section className="flex flex-wrap flex-col gap-4 my-4">
						<section>
							<label htmlFor="fullName"></label>
							<input
								className={`w-full rounded border-background outline-0 bg-background p-[0.75em_1em] text-text ${
									errors.fullName ? "border-red-500 border-2" : ""
								}`}
								type="text"
								placeholder="Full Name"
								id="fullName"
								aria-invalid={errors.fullName ? "true" : "false"}
								{...register("fullName", { required: true })}
							/>

							{errors?.fullName?.message && (
								<p role="alert" className="text-red-500 italic text-xs">
									{errors?.fullName?.message}
								</p>
							)}
						</section>
						<section>
							<label htmlFor="username"></label>
							<input
								className={`w-full rounded border-background outline-0 bg-background p-[0.75em_1em] text-text  ${
									errors.username ? "border-red-500 border-2" : ""
								}`}
								type="text"
								placeholder="Username"
								id="username"
								aria-invalid={errors.username ? "true" : "false"}
								{...register("username", { required: true })}
							/>
							{errors?.username?.message && (
								<p role="alert" className="text-red-500 italic text-xs">
									{errors?.username?.message}
								</p>
							)}
						</section>

						<section>
							<label htmlFor="email"></label>
							<input
								className={`w-full rounded border-background outline-0 bg-background p-[0.75em_1em] text-text  ${
									errors.email ? "border-red-500 border-2" : ""
								}`}
								type="email"
								placeholder="Email"
								id="email"
								aria-invalid={errors.email ? "true" : "false"}
								{...register("email", { required: true })}
							/>
							{errors?.email?.message && (
								<p role="alert" className="text-red-500 italic text-xs">
									{errors?.email?.message}
								</p>
							)}
						</section>

						<section>
							<label htmlFor="password"></label>
							<input
								className={`w-full rounded border-background outline-0 bg-background p-[0.75em_1em] text-text  ${
									errors.password ? "border-red-500 border-2" : ""
								}`}
								type="password"
								placeholder="Password"
								id="password"
								aria-invalid={errors.password ? "true" : "false"}
								{...register("password", { required: true })}
							/>
							{errors?.password?.message && (
								<p role="alert" className="text-red-500 italic text-xs">
									{errors?.password?.message}
								</p>
							)}
						</section>

						<section>
							<label htmlFor="confirmPassword"></label>
							<input
								className={`w-full rounded border-background outline-0 bg-background p-[0.75em_1em] text-text  ${
									errors.confirmPassword ? "border-red-500 border-2" : ""
								}`}
								type="password"
								placeholder="Confirm password"
								id="confirmPassword"
								aria-invalid={errors.confirmPassword ? "true" : "false"}
								{...register("confirmPassword", { required: true })}
							/>
							{errors?.confirmPassword?.message && <p role="alert" className="text-red-500 italic text-xs">{errors?.confirmPassword?.message}</p>}
						</section>
					</section>

					<button className="block w-full bg-primary p-2 text-center bottom-0 rounded font-semibold">
						Submit
					</button>
					<p className="text-center text-sm leading-3 text-text mt-4">
						Already have an acount?{" "}
						<Link
							href="/login"
							className="hover:underline text-sm text-primary"
						>
							Signin
						</Link>{" "}
					</p>
				</form>
			</section>
		</main>
	);
}
