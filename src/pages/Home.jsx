import { Container, Box } from '@mui/material';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <Container>
      <Helmet>
        <title>Home page</title>
      </Helmet>

      <Box sx={{ marginTop: { xs: 12, md: 20 } }}>
        <h1>
          Phonebook welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </Box>
    </Container>
  );
}
