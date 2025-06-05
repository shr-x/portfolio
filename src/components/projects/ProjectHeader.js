import tw, { styled } from 'twin.macro';
import emoji from 'react-easy-emoji';
import { GridColumn, GridContainer, Header } from '../layout';
import { BodyIntro, Em, Paragraph, TextIcon } from '../typography';
import { FaRegGrinStars } from 'react-icons/fa';
import { HeartIcon } from '../svgs';
import { pagesHeroMax, sectionPaddingB } from '../../../styles/stylesData';

const Wrapper = styled.div(() => [
  sectionPaddingB,
  pagesHeroMax,
  tw`
    
  `,
]);

const ProjectHeader = () => {
  return (
    <Wrapper>
      <Header
        title="Selected"
        subline="Works"
        sticker="My prreciiouusss~!"
        color="purple"
      >
        <HeartIcon />
      </Header>
      <GridContainer>
        <GridColumn col="span-9">
          <BodyIntro noMargin variant="bold" size="intro">
            My journey has always been about building:
Whether crafting personal truths with words or dynamic experiences with code.
          </BodyIntro>

          <Paragraph>
          From expressing thoughts in a letter to bringing digital visions to life with Next.js, Tailwind CSS, and Framer Motion, my passion for creation has deepened. Here, you'll discover the fruits of that dedication: my published book, a deeply personal letter, and my custom-built website. It's a continuous exploration, and I'm thrilled to share it with you.
            <TextIcon>
              <FaRegGrinStars aria-hidden="true" />
            </TextIcon>
          </Paragraph>
        </GridColumn>
      </GridContainer>
    </Wrapper>
  );
};

export default ProjectHeader;
