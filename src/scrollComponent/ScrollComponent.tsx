import ScrollBar from "./scrollbar/ScrollBar";
import Control from "./control/Control";
import { selectorProgressList } from "../store/selector";
import IconButton from "../components/otherComponents/IconButton";
import {ProgressItems} from './../store/scrollSlice';
import { useSelector } from "react-redux";

const ScrollComponent: React.FC = () => {
   
    const progressList = useSelector(selectorProgressList)
    return (
        <ul>
            {progressList.map((obj:ProgressItems, index: number) => (
                <li key={obj.id} className="mb-8 block relative border-2 border-indigo-600 p-2 rounded-xl">
                    <ScrollBar  index={index}/>
                    <Control index={index}/>
                    <IconButton index={index} />
                </li>
            ))}
        </ul>
    )
}

export default ScrollComponent;