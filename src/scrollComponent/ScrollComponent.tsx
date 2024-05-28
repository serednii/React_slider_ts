import ScrollBar from "./scrollbar/ScrollBar";
import Control from "./control/Control";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../store";
import IconButton from "../components/otherComponents/IconButton";

const ScrollComponent: React.FC = () => {
   
    const progressList = useSelector((state:RootState) => state.scroll.progressList)
    return (
        <ul>
            {progressList.map((_, index) => (
                <li key={index} className="mb-8 block relative border-2 border-indigo-600 p-2 rounded-xl">
                    <ScrollBar  index={index}/>
                    <Control index={index}/>
                    <IconButton index={index}/>
                </li>
            ))}
        </ul>
    )
}

export default ScrollComponent;