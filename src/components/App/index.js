// == Import npm
import React, { useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import Result from 'src/components/Result';
import axios from 'axios';

// == Import
import './styles.scss';

const apiKey = '123a91241f504eedb4f15b4b4ab69968';
const pageSize = 8;
const dates = '2020-01-01,2020-12-31';
const ordering = '-rating';

// == Composant
const App = () => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const loadData = () => {
    axios.get(`https://api.rawg.io/api/games?key=${apiKey}&dates=${dates}&ordering=${ordering}&page_size=${pageSize}&page=${page}`)
      .then((response) => setResults(response.data.results))
      .catch((error) => console.log('error', error))
      .finally(() => setLoading(false));
  };
  if (!loading) console.log(results);

  const onLoadMoreClick = () => {
    setPage(page + 1);
  };
  const onLoadLessClick = () => {
    if (page >= 2) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    loadData();
  }, [page]);

  return (
    <div className="app">
      {!loading && (
        <>
          <h1 className="app__title">List Popular Videos Game of 2020</h1>
          <div className="app__content">
            <Result games={results} />
          </div>
          <div className="app__footer">
            <Button
              labelPosition="left"
              icon="left arrow"
              content="Page Précédente"
              loading={loading}
              positive
              {...(page < 2 && { disabled: true })}
              onClick={onLoadLessClick}
            />
            <Button
              labelPosition="left"
              icon="right arrow"
              content="Page Suivante"
              loading={loading}
              positive
              onClick={onLoadMoreClick}
            />
          </div>
        </>
      )}
    </div>
  );
};
// == Export
export default App;
