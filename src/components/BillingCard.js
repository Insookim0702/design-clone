function BillingCard() {
    return (
        <div className="w-64 rounded-2xl bg-white p-4 shadow-xl">
            <header className="font-semibold"> Select Item</header>
            <div className="flex justify-between">
                <p className="text-sm text-zinc-400">Grey Chair</p>
                <p className="text-sm font-semibold">$170</p>
            </div>
            <div className="flex justify-between">
                <p className="text-sm text-zinc-400">Tooly Table</p>
                <p className="text-sm font-semibold">$800</p>
            </div>
            <div className="my-2 border-b-2 border-dashed"></div>
            <div className="flex justify-between">
                <p className="text-sm font-semibold">Total</p>
                <p className="text-sm font-semibold">$970</p>
            </div>
            <footer className="mt-2 flex justify-center">
                <button className="h-8 w-2/3 rounded-lg bg-blue-500 text-center text-zinc-100">
                    Checkout
                </button>
            </footer>
        </div>
    );
}

export default BillingCard;
