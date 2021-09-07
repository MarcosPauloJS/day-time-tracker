import React from 'react'
import { string, number} from 'prop-types'
import { Draggable } from 'react-beautiful-dnd';

const Card = ({id, index, text}) => {
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <p>
            { text }
          </p>
        </li>
      )}
    </Draggable>
  )
}

Card.propTypes  = {
  id: string,
  index: number,
  text: string,
}

export default Card

