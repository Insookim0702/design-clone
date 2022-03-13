import Card from "./components/Card";
import BillingCard from "./components/BillingCard";
import Profile from "./components/Profile";
import Categories from "./components/Categories";
import AddToCart from "./components/AddToCart";
import Scandinavian from "./components/Scandinavian";
import PaymentMethod from "./components/PaymentMethod";
import Chairwell from "./components/Chairwell";
import SwoonLounge from "./components/SwoonLounge";
import IconBox from "./components/IconBox";
import FromCopy from "./components/FromCopy";
import MadeByInsoo from "./components/MadeByInsoo";

function App() {
    return (
        <div className="App">
            <div className="flex justify-center items-center font-sans h-screen">
                <div className="flex justify-between sm:flex-col lg:flex-row lg:w-860px lg:h-600px">
                    <div className="flex flex-col justify-between">
                        <Card />
                        <IconBox />
                        <SwoonLounge />
                    </div>
                    <div className="flex flex-col justify-between">
                        <BillingCard />
                        <Profile />
                        <Categories />
                        <AddToCart />
                    </div>
                    <div className="flex flex-col justify-between">
                        <Scandinavian />
                        <Chairwell />
                        <PaymentMethod />
                    </div>
                </div>
                <FromCopy />
                <MadeByInsoo />
            </div>
        </div>
    );
}

export default App;
