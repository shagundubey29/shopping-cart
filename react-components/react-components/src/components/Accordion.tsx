import AccordionArea from './ui/accordion/AccordionArea'
import AccordionBtn from './ui/accordion/AccordionBtn'
import AccordionItem from './ui/accordion/AccordionItem'
import AccordionPanel from './ui/accordion/AccordionPanel'

const data = [
  {
    ques: 'select 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.',
  },
  {
    ques: 'select 2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.',
  },
  {
    ques: 'select 3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.',
  },
]

const Accordion = () => {
  return (
    <AccordionArea>
      <AccordionItem>
        <AccordionBtn>Select 1</AccordionBtn>
        <AccordionPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex eacommodo consequat.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionBtn>Select 1</AccordionBtn>
        <AccordionPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex eacommodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </AccordionArea>
  )
}

export default Accordion
