import { useState } from "react"
import GenderBox from "./GenderCheckbox"

const SignUp = () => {

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-mg bg-gray-400 bg-clip-padding
                            backdrop-filter backdrop-blur-lg bg-opacity-0">

                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Sign Up
                    <span className="text-blue-500"> Chit-Chat</span>
                </h1>
                <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-center">Full Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full input input-bordered h-10"
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-center">Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder="johndoe"
                            className="w-full input input-bordered h-10"
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-center">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full input input-bordered h-10"
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-center">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full input input-bordered h-10"
                        />
                    </div>

                    <GenderBox />

                    <a href="/login" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                        Already a member ?
                    </a>

                    <div>
                        <button className="btn btn-block btn-sm mt-2 border border-slate-700">
                            Sign Up
                        </button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp



// Starter Code
/*
const SignUp = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-mg bg-gray-400 bg-clip-padding
                            backdrop-filter backdrop-blur-lg bg-opacity-0">

                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Sign Up
                    <span className="text-blue-500"> Chit-Chat</span>
                </h1>
                <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-center">Full Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full input input-bordered h-10"
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-center">Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder="johndoe"
                            className="w-full input input-bordered h-10"
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-center">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full input input-bordered h-10"
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-center">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full input input-bordered h-10"
                        />
                    </div>

                    <GenderBox />

                    <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                        Already a member ?
                    </a>

                    <div>
                        <button className="btn btn-block btn-sm mt-2 border border-slate-700">
                            Sign Up
                        </button>

                    </div>
                </form>
            </div>
        </div>
    )
}
*/