import React, { useEffect, useState } from "react";
import logoPegadaian from "../../assets/logo-pegadaian.png"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, reset } from "../../features/auth/authSlice";

const Login = ({
    forget = false
}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const inForget = forget;
    const passInvalid = password.length < 8;
    const dispatch = useDispatch()

    const { user, isSuccess } = useSelector((state) => state.auth);

    console.log(user);
    console.log(isSuccess);

    useEffect(() => {
        if (user || isSuccess) {
            navigate(`/superadmin/dashboard`);
        }
        dispatch(reset());
    }, [user, isSuccess, dispatch, navigate]);

    const Auth = (e) => {
        e.preventDefault();
        dispatch(LoginUser({ email, password }))
    };

    const handleChange = (setState) => (event) => {
        setState(event.target.value)
    }

    const handleForget = () => {
        !inForget ? navigate(`/superadmin/forget`) : navigate(-1)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let postData = {
            email: email,
            password: password,
        }
        console.log(postData)
    }

    return (
        <>
            <div className="h-screen flex flex-col lg:flex-row">
                <div className="order-2 lg:order-1 w-full xl:w-1/2 h-full flex justify-center items-center">
                    <div className="flex flex-col items-center py-20 xl:py-0 ">
                        <div className="flex flex-col items-center pb-5">
                            <img src={logoPegadaian} className="w-96 py-5"/>
                            <span className="text-2xl text-slate-800 font-semibold ">{!inForget ? "Sign In Super Admin" : "Forgotten Password ?"}</span>
                            {
                                inForget && (<span className="text-slate-700 py-5">Enter your email to reset your password:</span>)
                            }
                        </div>

                        <div className="w-full max-w-sm">
                            <form onSubmit={Auth} type="submit" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                                        Email
                                    </label>
                                    <input
                                        className="shadow border border-red-500 invalid:border-red-500 valid:border-lime-500 peer appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        value={email}
                                        onChange={handleChange(setEmail)}
                                        id="email"
                                        type="email"
                                        placeholder="yourname@gmail.com"
                                    />
                                    <p class="mt-2 invisible peer-invalid:visible text-red-500 text-xs italic">
                                        Please provide a valid email address.
                                    </p>
                                </div>
                                {
                                    !inForget && (
                                        <div className="mb-6">
                                            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                                                Password
                                            </label>
                                            <input
                                                className={`shadow appearance-none border ${passInvalid ? 'border-red-500' : "border-lime-500"}  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                                                value={password}
                                                onChange={handleChange(setPassword)}
                                                id="password"
                                                type="password"
                                                placeholder="********" />
                                            {
                                                passInvalid &&
                                                <p className="text-red-500 text-xs italic">Please choose a password.</p>
                                            }
                                        </div>
                                    )
                                }
                                <div className={`flex items-center justify-between py-2`}>
                                    <div>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                                            <span>
                                                {!forget ? "Sign In" : "Request"}
                                            </span>
                                        </button>
                                    </div>
                                    {
                                        <div onClick={handleForget} className={!inForget ? `inline-block align-baseline font-bold text-sm text-blue-400 hover:text-blue-500 cursor-pointer` : `bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer`}>
                                            {!inForget ? "Lupa Password?" : "Cancel"}
                                        </div>
                                    }
                                </div>
                            </form>

                            <p className="text-center text-gray-500 text-xs">
                                &copy;2023 PT PEGADAIAN.
                            </p>

                        </div>
                    </div>

                </div>
                <div className="order-1 lg:order-2 w-full place-items-end xl:w-3/5 h-full bg-login bg-cover bg-center flex justify-center items-center">
                    <div className="p-8 text-white flex flex-col ">
                        <h1 className="text-2xl sm:text-4xl lg:text-6xl transition-all duration-100 font-bold mb-4">Pegadaian Digital Service</h1>
                        <p>Mengatasi Masalah tanpa Masalah.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
