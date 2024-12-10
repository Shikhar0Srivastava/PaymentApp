export function SendMoney() {
    const name = "Shikhar"

    return <div className="bg-slate-300 h-screen flex justify-center items-center">

        {/* MAIN CARD */}
        <div className="border h-min max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col justify-center">

                {/* TITLE */}
                <div className="text-4xl font-bold p-6 text-center">
                    Send Money            
                </div>

                <div className="p-6">
                    <div className="flex space-x-4 mb-4">

                        {/* AVATAR */}
                        <div className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-green-400">
                            <div className="text-white text-xl">{name[0]}</div>
                        </div>

                        {/* NAME */}
                        <div className="flex items-center font-semibold text-2xl">{name}</div>
                    </div>

                    {/* INPUT */}
                    <label className="font-semibold">Enter amount (in ₹)</label>
                    <input type="text" placeholder="Enter amount..." className="border-2 rounded-md px-2 py-1 mt-2 mb-6 w-full"/>

                    {/* BUTTON */}
                    <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white hover:bg-green-800">Click to send</button>
                </div>
            </div>
        </div>
    </div>
}