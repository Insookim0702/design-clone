import { BsThreeDots } from "react-icons/bs";

function Card3() {
    return (
        <div className="w-64 rounded-2xl bg-white p-4 shadow-xl">
            <header className="mb-5 flex justify-between">
                <h6 className="font-semibold">payment method</h6>
                <button>
                    <BsThreeDots className="text-gray-400 w-6 h-6" />
                </button>
            </header>
            <div className="flex gap-4">
                <button className="h-7 rounded bg-blue-500  px-2 py-0 text-xs text-zinc-100">
                    visa
                </button>
                <button className="h-7 rounded bg-blue-100 px-2 py-0 text-xs font-semibold">
                    Table
                </button>
                <button className="h-7 rounded bg-blue-100 px-2 py-0 text-xs font-semibold">
                    pay
                </button>
                <button className="h-7 rounded bg-blue-100 px-2 py-0 text-xs font-semibold">
                    pay
                </button>
            </div>
        </div>
    );
}

export default Card3;
