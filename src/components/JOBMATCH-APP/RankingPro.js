import React, { useCallback, useRef } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";

const ItemType = "ITEM";

const DraggableItem = ({ item, index, moveItem }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: ItemType,
    hover(draggedItem) {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className="ranking-item"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {item.content}
    </div>
  );
};

const RankingPro = ({ setRankings, handleGetRanking, rankings }) => {
  const moveItem = useCallback(
    (dragIndex, hoverIndex) => {
      setRankings((prevItems) =>
        update(prevItems, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevItems[dragIndex]],
          ],
        })
      );
    },
    [setRankings]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="ranking-container">
        {rankings.map((item, index) => (
          <DraggableItem
            key={item.id}
            index={index}
            item={item}
            moveItem={moveItem}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default RankingPro;
