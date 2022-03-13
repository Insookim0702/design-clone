function AddToCart() {
    return (
        <div className="flex w-64 justify-between rounded-2xl bg-white p-4 py-5 shadow-xl">
            <div className="flex">
                <button className="rounded-md bg-blue-100 px-2 text-zinc-500">
                    -
                </button>
                <p className=" mx-2 px-1 ">1</p>
                <button className="rounded-md bg-blue-100 px-2 text-zinc-500">
                    +
                </button>
            </div>
            <button className="rounded-lg bg-blue-500 p-1 px-6  text-xs text-zinc-100">
                Add to cart
            </button>
        </div>
    );
}

export default AddToCart;
