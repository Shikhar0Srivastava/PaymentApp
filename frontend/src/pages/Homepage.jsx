import { useNavigate } from "react-router-dom"

export const Homepage = () => {

    const navigate = useNavigate();

    return <div className="min-h-screen w-full bg-[#8476ba] flex">
        <div className="w-full rounded-xl bg-[#f0f1f0] m-4 mr-2 flex-col justify-center p-8">
            <div className="font-serif text-8xl text-center text-[#4d4281] mt-16 font-extrabold">
                Join the best website ever
            </div>
            <div className="text-center mt-16">
                <button onClick={() => {
                    navigate("/signup");
                }} className="bg-transparent hover:bg-[#4d4281] text-[#4d4281] hover:text-white py-2 px-4 border border-[#4d4281] hover:border-transparent rounded-xl h-[100px] w-[300px] text-4xl font-parkinsans hover:font-bold">
                    Sign Up
                </button>
            </div>
        </div>
        <div className="w-full rounded-xl bg-[#f0f1f0] m-4 ml-2 flex-col justify-center p-8">
        <   div className="font-serif text-8xl text-center text-[#4d4281] mt-16 font-extrabold">
                Sign in to the best website ever
            </div>
            <div className="text-center mt-16">
                <button onClick={() => {
                    navigate("/signin")
                }} className="bg-transparent hover:bg-[#4d4281] text-[#4d4281] hover:text-white py-2 px-4 border border-[#4d4281] hover:border-transparent rounded-xl h-[100px] w-[300px] text-4xl font-parkinsans hover:font-bold">
                    Sign In
                </button>
            </div>
        </div>
    </div>
}