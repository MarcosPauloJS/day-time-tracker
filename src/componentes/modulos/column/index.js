import React from 'react'
import {node} from 'prop-types'
import { Droppable } from 'react-beautiful-dnd';

const Board = ({children, ...props}) => {

  const childrenWithProvider = () => React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {});
    }

    return <></>;
  });

  return (
    <Droppable {...props}>
      {(provided) => (
        <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
          {childrenWithProvider()}
        </ul>
      )}
    </Droppable>
  )
}

Board.propTypes  = {
  children: node.isRequired,
}

export default Board