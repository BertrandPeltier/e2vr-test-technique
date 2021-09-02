import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import GameData from './card';

function Cards({ games }) {
  return (
    <Card.Group itemsPerRow={4} stackable doubling>
      {games.map((game) => (
        <GameData key={game.id} game={game} />
      ))}
    </Card.Group>
  );
}

Cards.propTypes = {
  games: PropTypes.array.isRequired,
};

export default Cards;
