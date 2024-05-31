import React from 'react';
import { useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/index'

import {fetchDeleteScroll} from '../../store/scrollSlice'
interface IIconButtonProps {
    index: number;
}

const IconButton: React.FC<IIconButtonProps> = ({index}) => {
  const progressList = useSelector((state:RootState) => state.scroll.progressList);
console.log('')
    const dispatch = useAppDispatch();

  return (
    <button onClick={()=>dispatch(fetchDeleteScroll(progressList[index].id))} className="p-2 rounded-full hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 absolute top-1 right-1">
      <svg
        className="h-8 w-8 text-blue-500"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  );
};

export default IconButton;
