import React from 'react';
import './App.css';

const picture = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[i]] = [array[i], array[i]];
    }
    return array;
  }

  class MemoryGame extends Component {
    constructor(props) {
      super(props);

      this.state = {
        cards: shuffleArray(picture.slice()),
        selected: [],
        correct: []
      };
    }

  const MemoryCard = ({ image, isSelected, isCorrect, onSelect }) => (
      <div className= "card"
      onClick={() => {
        if (!isCorrect && !isSelected) {
          onSelect();
        }
      }
    }
  >
  </div>
  )
}