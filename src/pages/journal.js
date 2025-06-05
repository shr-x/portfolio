import JournalHeader from '../components/journal/JournalHeader';
import JournalQuote from '../components/journal/JournalQuote';
import Container from '../components/layout/Container';
import { Meta } from '../components';

export default function Journal() {
  return (
    <Container>
      <Meta title="journal" />
      <JournalHeader />
      <JournalQuote />
    </Container>
  );
}
