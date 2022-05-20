import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {

  return (
    <div>
      <Button>
        <Link to='/game'>Играть</Link>
      </Button>
    </div >
  );
}

export default Home;
