import { useState } from "react"
import uselogin from "../../hooks/useLogin";

const Login = () => {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    const {loading, login} = uselogin()

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await login(username, password)
    }

    return (
        <div className="flex flec-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 
                            bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">

                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Login
                    <span className="text-blue-500"> Chit-Chat</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-center">Username</span>
                        </label>
                        <input 
                            type="text" 
                            placeholder="Enter Username" 
                            className="w-full input input-bordered h-10"
                            value={username}
                            onChange={(e) => setusername(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="w-full input input-bordered h-10"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        />
                    </div>

                    <a href="/signup" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                        {"Don't"} have a account ?
                    </a>

                    <div>
                        <button className="btn btn-block stn-sm mt-2" disabled={loading}>
                            {loading ? <span className="loading loading-spinner"></span> : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login


// Starter Code -> 
/*
const Login = () => {
    return (
        <div className="flex flec-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 
                            bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">

                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Login
                    <span className="text-blue-500"> Chit-Chat</span>
                </h1>
                <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-center">Username</span>
                        </label>
                        <input 
                            type="text" 
                            placeholder="Enter Username" 
                            className="w-full input input-bordered h-10"
                        />
                    </div>

                    <div>
                        <label className="label">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="w-full input input-bordered h-10"
                        />
                    </div>

                    <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                        {"Don't"} have a account ?
                    </a>

                    <div>
                        <button className="btn btn-block stn-sm mt-2">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
*/