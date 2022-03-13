function Card() {
    return (
        <>
            <div className="relative flex h-32 w-64 flex-col justify-between rounded-2xl bg-white p-4 shadow-lg">
                <div>
                    <p className="font-semibold leading-3">Jamm</p>
                    <p className="text-xs text-zinc-400">Table</p>
                </div>
                <div className="flex gap-2">
                    <p className="h-3  w-3 rounded-xl bg-red-600  "></p>
                    <p className="h-3 w-3 rounded-xl bg-green-600 "></p>
                    <p className="h-3 w-3 rounded-xl bg-indigo-600"></p>
                </div>
                <div className="flex justify-between">
                    <p className="text-xl font-semibold">$300</p>
                    <div className="w-22 flex h-8 items-center justify-between rounded-lg bg-blue-500 p-2">
                        <button className="rounded-md bg-white px-2 text-zinc-500">
                            -
                        </button>
                        <p className=" mx-2 px-1 text-white">1</p>
                        <button className="rounded-md bg-white px-2 text-zinc-500">
                            +
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
