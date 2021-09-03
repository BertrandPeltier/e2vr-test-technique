import React from 'react';
import { Button, Card, Header, Image, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

const GameCard = ({ game }) => {
  const [open, setOpen] = React.useState(false);
  const {
    background_image, name, released, rating, ratings, genres, tags,
  } = game;
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={(
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
        </Card>
      )}
    >
      <Modal.Header>{name}</Modal.Header>
      <Modal.Content image>
        <Image className="modal__image" src={background_image} wrapped />
        <Modal.Description className="modal__description">
          <Header>Details</Header>
          <p><span className="subtitle">Release date :</span> {released}</p>
          <p><span className="subtitle">Rating :</span> {rating}</p>
          <ul>
            <li><span className="subtitle">Ratings :</span></li>
            {ratings.map((ratingItem) => (
              <li key={ratingItem.id}>{ratingItem.title} : {ratingItem.percent}%</li>
            ))}
          </ul>
          <br />
          <ul className="liste">
            <li><span className="subtitle">Genres :</span></li>
            {genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <br />
          <ul className="liste">
            <li><span className="subtitle">Tags :</span></li>
            {tags.map((tag) => (
              <li key={tag.id}>{tag.name}</li>
            ))}
          </ul>
          <br />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

GameCard.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    background_image: PropTypes.string.isRequired,
    released: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratings: PropTypes.array.isRequired,
    genres: PropTypes.array.isRequired,
    tags: PropTypes.array.isRequired,
  }).isRequired,
};

export default GameCard;
