
import icon from "./assets/icon.webp";


export default function Card() {
    return(
        <div className="flex items-center bg-gray-100 p-4 rounded-lg">
        <img
            src={icon}
            alt="Icon"
            className="w-16 h-16 rounded-full object-cover"
        />
        
            <div className="ml-4 flex flex-col gap-2 w-full">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            </div>
        </div>
    );
}