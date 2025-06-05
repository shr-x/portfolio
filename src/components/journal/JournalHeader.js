import tw, { styled } from 'twin.macro';
import { GridContainer, Header } from '../layout';
import { BodyIntro, Paragraph, TextIcon } from '../typography';
import { ImPointDown } from 'react-icons/im';
import { JournalIcon } from '../svgs';
import { pagesHeroMax, sectionPaddingB } from '../../../styles/stylesData';

const Wrapper = styled.div(() => [
  sectionPaddingB,
  pagesHeroMax,
  tw``,
]);

const JournalHeader = () => {
  return (
    <Wrapper>
      <Header
        title="Journal"
        subline="Coming Soon"
        sticker="Still under construction…"
        color="blue"
      >
        <JournalIcon />
      </Header>
      <GridContainer>
        <div className="col-span-10-8 xl:col-span-11">
          <BodyIntro noMargin variant="bold" size="intro">
            I'm still working on my journal page. Stay tuned for updates!
          </BodyIntro>
          <Paragraph>
            Meanwhile, feel free to explore the rest of my portfolio.
            <TextIcon>
              <ImPointDown />
            </TextIcon>
          </Paragraph>
        </div>
      </GridContainer>
    </Wrapper>
  );
};

export default JournalHeader;
