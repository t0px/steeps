import {AiFillQuestionCircle} from 'react-icons/ai';
import { AiFillExclamationCircle } from "react-icons/ai";
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import {FaPoll} from 'react-icons/fa'

export const getIcons = (type) => {
  switch (type) {
    case 'question':
      return <AiFillQuestionCircle className='text-yellow-500'/>
    case 'poll':
      return <FaPoll className="text-purple-500" />;
    case 'help':
      return <AiFillExclamationCircle className="text-red-500" />;
    case 'discussion':
      return <BsFillChatSquareDotsFill className="text-green-500" />;
  }
}