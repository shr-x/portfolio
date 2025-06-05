import {
  ProjectHeader,
  ProjectList,
  ProjectQuote,
} from '../../components/projects';
import Meta from '../../components/Meta';
import { Container } from '../../components/layout';

export default function Works() {
  return (
    <>
      <Meta title="works" />
      <Container>
        <ProjectHeader />
        <ProjectList />
        <ProjectQuote />
      </Container>
    </>
  );
}
