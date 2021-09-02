import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import CardModal from 'src/components/CardModal';

// == Import
import './styles.scss';

const GameData = ({ game }) => {
  const { background_image, name, released, rating, genres } = game;
  return (
    <Card>
      <Image src={background_image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta><span className="subtitle">Release date :</span> {released}</Card.Meta>
        <Card.Description>
          <span className="subtitle">Rating :</span> {rating}<br />
          <ul className="liste">
            <li><span className="subtitle">Genres :</span></li>
            {genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </Card.Description>
      </Card.Content>
      <CardModal data={game} />
    </Card>
  )
};

GameData.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    background_image: PropTypes.string.isRequired,
    released: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genres: PropTypes.array.isRequired,
  }).isRequired,
};

export default GameData;
