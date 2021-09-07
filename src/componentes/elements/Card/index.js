import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function Card({ isDragging, text }) {
  const characters = [
    {name: 'dino', id: 'dino', thumb:"https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg"}, 
    {name: 'fastEnergy', id:'fast', thumb: 'https://cdn.pixabay.com/photo/2014/02/13/07/28/security-265130_960_720.jpg'}]
  return (
    <DragDropContext>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({id, name, thumb}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <div className="characters-thumb">
                            <img src={thumb} alt={`${name} Thumb`} />
                          </div>
                          <p>
                            { name }
                          </p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
  )
}