import {AiFillQuestionCircle} from 'react-icons/ai';
import { AiFillExclamationCircle } from "react-icons/ai";
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import {FaPoll} from 'react-icons/fa'

export const getIcons = (type) => {
  switch (type) {
    case 'question':
      return <AiFillQuestionCircle />
    case 'poll':
      return <FaPoll />;
    case 'help':
      return <AiFillExclamationCircle />;
    case 'discussion':
      return <BsFillChatSquareDotsFill />;
  }
}