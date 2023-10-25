
const AccordionItem = ({children} : {children: React.ReactNode}) => {
  return (
    <li className=" w-full relative flex justify-center items-center flex-col pb-3 last:border-b-2">
        {children}
    </li>
  )
}

export default AccordionItem