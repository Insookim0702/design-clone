import { BsCart4 } from "react-icons/bs";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { TiDocumentText } from "react-icons/ti";
function IconBox() {
    return (
        <div className="w-64 rounded-2xl bg-white shadow-lg flex justify-between p-4">
            <p className="pb-1  border-b-2 border-blue-500">
                <BsCart4 className="text-blue-500 h-6 w-6" />
            </p>
            <p>
                <AiOutlineHome className="text-gray-500 h-6 w-6" />
            </p>
            <p>
                <AiOutlineUser className="text-gray-500 h-6 w-6" />
            </p>
            <p>
                <TiDocumentText className="text-gray-500 h-6 w-6" />
            </p>
        </div>
    );
}

export default IconBox;
