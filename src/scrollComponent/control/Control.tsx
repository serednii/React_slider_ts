
import React from "react";
import { useDispatch } from "react-redux";
import { addScroll, subScroll, setScroll} from '../../store/scrollSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/index'

interface IControlProps {
    index: number
}

const Control: React.FC<IControlProps> = ({index})=> {

    const progressList = useSelector((state:RootState) => state.scroll.progressList);
    const dispatch = useDispatch();

    const handleAddScroll = () => dispatch(addScroll(index))
    const handleSubScroll = () => dispatch(subScroll(index))

    const handleInputProgress = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value;
        //Only numbers and a non-empty string
         if ((!value || !/^\d*$/.test(value) ) ) {
            dispatch(setScroll([index, 0]))
            return;
         }

        let IntValue = parseInt(value);
        //The range of entered numbers is from 0 to 100
        if(IntValue < 0) IntValue = 0
        else if(IntValue > 100) IntValue = 100
        
        dispatch(setScroll([index, IntValue]))
    }

    return (
    <div className="buttons flex justify-between w-1/2">
            <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handleSubScroll} >-10%</button>
            <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={handleAddScroll} >+10%</button>
        <div>
        <div>
            <label htmlFor="hs-trailing-button-add-on" className="sr-only">Label</label>
            <div className="flex rounded-lg shadow-sm">
            <input type="text" value={progressList[index]} onChange={(e)=>handleInputProgress(e)} id="hs-trailing-button-add-on" name="hs-trailing-button-add-on" className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
            </div>
        </div>
    </div>
    </div>
    )
}

export default Control;