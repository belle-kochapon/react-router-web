import { useForm } from "react-hook-form";
// import { useState } from "react";

type UserRegisterInputs = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    fullname: string;
    surname: string;
};

function UserRegisterForm() {
    const { register, handleSubmit } = useForm<UserRegisterInputs>(); // custom hook, different from useState
    // const [username, setUsername] = useState();
    const onSubmit = (data: any) => {
    console.log(data);
    };

    return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    {/* Add validation : https://react-hook-form.com/docs/useform/register */}
        <label htmlFor="">Username:</label>
        <input {...register("username", { required: true, minLength: 3 })} type="text" id="username" />
        <label htmlFor="">Email:</label>
        <input {...register("email")} type="text" id="email" />
        <label htmlFor="">Password:</label>
        <input {...register("password")} type="password" id="password" /> 
        <label htmlFor="">Confirm Password:</label>
        <input {...register("confirmPassword")} type="text" id="confirmPassword" />
        <label htmlFor="">Full name:</label>
        <input {...register("fullname")} type="text" id="fullname" />
        <label htmlFor="">Surname:</label>
        <input {...register("surname")} type="text" id="surname" /> 
        <input type="submit" value="Submit" />
    </form>
    {/* HTML link tag : cannot use in React file without React Route */}
    <a href="google.com">Link to Google</a>
    </>
    );
}

export default UserRegisterForm

// Can use this file as Form.tsx, and create more than 1 function as different type of form such as RegisterForm, LoginForm, etc., then export them all in this file.
