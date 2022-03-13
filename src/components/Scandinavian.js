import { VscListSelection } from "react-icons/vsc";
function Scandinavian() {
    return (
        <div className="w-64 rounded-3xl bg-white p-4 shadow-lg">
            <header>
                <button>
                    <VscListSelection className="text-gray-400 w-6 h-6" />
                </button>
            </header>
            <img className="h-60" src="" alt="" />
            <div className="">
                <div>
                    <h6 className="text-sm font-semibold leading-3">
                        Scandinavian
                    </h6>
                    <p className="text-xs text-zinc-400">Table</p>
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center gap-5">
                        <div className=" rounded-xl border border-yellow-600 p-2px">
                            <p className=" h-3 w-3 rounded-xl bg-yellow-600"></p>
                        </div>
                        <p className="h-3 w-3 rounded-xl bg-gray-300 "></p>
                        <p className="h-3 w-3 rounded-xl bg-black"></p>
                    </div>
                    <h4 className="text-xl font-semibold">$600</h4>
                </div>
            </div>
        </div>
    );
}

export default Scandinavian;
