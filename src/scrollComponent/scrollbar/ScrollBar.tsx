

import { useSelector } from 'react-redux';
import { selectorProgressList } from '../../store/selector'
interface IScrollBarProps {
  index: number;
}
const ScrollBar: React.FC<IScrollBarProps> = ({index}) => {
  const progressList = useSelector(selectorProgressList);
  console.log('scrollbar')
    return (
      <div className="w-4/5 h-6 bg-gray-200 rounded-full dark:bg-gray-700 mb-4">
        <div className="h-6 bg-blue-600 rounded-full dark:bg-blue-500" style={{ width: `${progressList[index].value}%` }}></div>
      </div>
    );
  };

export default ScrollBar;