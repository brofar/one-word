import React, { useState, useEffect } from 'react';
import FlashCard from './FlashCard';

export default function FlashCards({ items }) {
  const [remainingItems, setRemainingItems] = useState(items);
  const [currentItem, setCurrentItem] = useState(null);

  const getRandomItem = () => {
    if (remainingItems.length === 0) return;

    const randomIndex = Math.floor(Math.random() * remainingItems.length);
    const newItem = remainingItems[randomIndex];
    const newRemainingItems = remainingItems.filter((_, index) => index !== randomIndex);

    setCurrentItem(newItem);
    setRemainingItems(newRemainingItems);
    console.log(newItem);
  };

  useEffect(() => {
    if (items.length > 0) {
      getRandomItem();
    }
  }, [items]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      {currentItem && <FlashCard word={currentItem} onNext={getRandomItem} isLastWord={remainingItems.length == 0} />}
    </div>
  );
}