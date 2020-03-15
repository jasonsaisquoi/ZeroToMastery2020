import React from 'react';
import Card from './Card';
//css classes library
import 'tachyons';


const CardList = ({ robots }) => {
  //loop through robots json and create return an array of cards

  return (
    <div>
      {robots.map((user, index) => {
        return <Card
          key={robots[index].id}
          id={robots[index].id}
          name={robots[index].name}
          email={robots[index].email}
        />
      })
    }
    </div>
  );
}

export default CardList;
