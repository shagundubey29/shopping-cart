import {
  // BiChevronDown,   
  BiChevronUp
} from 'react-icons/bi'

interface BtnProps {
  children: React.ReactNode
  // handleClick: () => void
}

const AccordionBtn = ({ children }: BtnProps) => {
  return (
    <button className=" w-full flex flex-row justify-between items-center border-t-2 pt-3 mb-3">
      <h4 className=' text-lg font-semibold'>{children}</h4>
      {/* <BiChevronDown /> */}
      <BiChevronUp className=" text-lg"/>
    </button>
  )
}

export default AccordionBtn
