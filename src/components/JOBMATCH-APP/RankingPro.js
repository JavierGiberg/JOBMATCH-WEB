import React, { useCallback, useRef } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import { RankingContainer, RankingItem } from "../styles/RankingProStyles";

const ItemType = "ITEM";

const DraggableItem = ({ item, index, moveItem }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: ItemType,
    hover(draggedItem) {
      if (!ref.current) {
        return;
      }
      const dragIndex = draggedItem.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      moveItem(dragIndex, hoverIndex);
      draggedItem.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { type: ItemType, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <RankingItem ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {index + 1}. {item.content}
    </RankingItem>
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
      <p>יש לגרור את העדפות לסדר הרצוי</p>

      <RankingContainer>
        {rankings.map((item, index) => (
          <DraggableItem
            key={item.id}
            index={index}
            item={item}
            moveItem={moveItem}
          />
        ))}
      </RankingContainer>
    </DndProvider>
  );
};

export default RankingPro;
