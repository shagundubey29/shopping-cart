import React from 'react'

const AccordionArea = ({ children }: {children : React.ReactNode}): JSX.Element => {
  return (
    <div className=" relative w-[50rem]  flex justify-center items-center flex-col p-4 rounded-lg border-2">
      <ul className=''>
        {children}
      </ul>
    </div>
  )
}

export default AccordionArea
