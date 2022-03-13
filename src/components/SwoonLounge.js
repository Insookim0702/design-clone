import { MdKeyboardBackspace } from "react-icons/md";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
function Scandinavian() {
    return (
        <div className="w-64 rounded-3xl bg-white p-4 shadow-lg">
            <header className="flex justify-between">
                <button>
                    <MdKeyboardBackspace className="text-gray-400 w-9 h-7" />
                </button>
                <div className="flex items-center gap-3">
                    <div className="flex  text-xs">
                        <AiFillStar className="text-yellow-200 " />
                        4.9
                    </div>
                    <div className="shadow-lg p-1 rounded-md">
                        <AiFillHeart className="text-pink-400" />
                    </div>
                </div>
            </header>

            <img className="h-56" src="" alt="" />
            <div className="">
                <div>
                    <h6 className="text-sm font-semibold leading-3">
                        Swoon Lounge
                    </h6>
                    <p className="text-xs text-zinc-400">Chair</p>
                </div>
                <div className="flex justify-between mb-5">
                    <div className="flex items-center gap-5">
                        <div className=" rounded-xl border border-yellow-600 p-2px">
                            <p className=" h-3 w-3 rounded-xl bg-yellow-600"></p>
                        </div>
                        <p className="h-3 w-3 rounded-xl bg-gray-300 "></p>
                        <p className="h-3 w-3 rounded-xl bg-black"></p>
                    </div>
                    <div className="flex">
                        <button className="rounded-md bg-blue-100 px-2 text-zinc-500">
                            -
                        </button>
                        <p className=" mx-2 px-1 ">1</p>
                        <button className="rounded-md bg-blue-100 px-2 text-zinc-500">
                            +
                        </button>
                    </div>
                </div>
                <footer className="flex justify-between">
                    <h4 className="text-xl font-semibold">$450</h4>
                    <button className="rounded-lg bg-blue-500 p-1 px-6  text-xs text-zinc-100">
                        Add to cart
                    </button>
                </footer>
            </div>
        </div>
    );
}

export default Scandinavian;
