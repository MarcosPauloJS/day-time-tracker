import React from 'react'
import {node} from 'prop-types'
import { DragDropContext } from 'react-beautiful-dnd';

const Board = ({ children }) => {
  return (
    <DragDropContext>
      {children}
    </DragDropContext>
  )
}

Board.propTypes  = {
  children: node.isRequired,
}

export default Board