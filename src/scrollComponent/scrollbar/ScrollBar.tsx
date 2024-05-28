

import { useSelector } from 'react-redux';
import { RootState } from '../../store/index'
interface IScrollBarProps {
  index: number;
}
const ScrollBar: React.FC<IScrollBarProps> = ({index}) => {
  const progressList = useSelector((state:RootState) => state.scroll.progressList);

    return (
      <div className="w-4/5 h-6 bg-gray-200 rounded-full dark:bg-gray-700 mb-4">
        <div className="h-6 bg-blue-600 rounded-full dark:bg-blue-500" style={{ width: `${progressList[index]}%` }}></div>
      </div>
    );
  };

export default ScrollBar;