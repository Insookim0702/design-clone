function Card2() {
    return (
        <div className="relative h-48 w-64 rounded-3xl bg-blue-500 p-4 shadow-lg">
            <header>
                <p className="text-zinc-100">Profile</p>
            </header>
            <div className="absolute bottom-0 left-0 flex w-full justify-between rounded-3xl bg-white p-4">
                <div className="absolute left-1/2 -top-8 h-16 w-16 -translate-x-1/2 rounded-full bg-blue-100"></div>
                <div className="flex flex-col items-center">
                    <p className="text-xs text-zinc-400">Orders</p>
                    <p className=" text-xs font-semibold">340</p>
                </div>
                <div className="mt-10 flex flex-col items-center">
                    <h6 className="font-semibold">Tony Molloy</h6>
                    <p className="text-xs text-zinc-400">New York, USA</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xs text-zinc-400">Spent</p>
                    <p className="text-xs font-semibold">$2,310</p>
                </div>
            </div>
        </div>
    );
}

export default Card2;
