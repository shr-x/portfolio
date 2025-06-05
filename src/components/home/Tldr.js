import tw, { styled } from 'twin.macro';
import { GridColumn, Section } from '../layout';
import {
  BodyIntro,
  Paragraph,
  Heading,
  TextIcon,
  BlockQuote,
  SubHeading,
  AHref,
  Em,
} from '../typography';
import { FaRobot } from 'react-icons/fa';

const HeaderWrapper = tw.article`
  col-span-full
  mx-auto
  text-center
`;

const Tldr = () => {
  return (
    <Section layout="grid">
      <HeaderWrapper>
        <Heading variant="sm" align="center">
          TL; DR
        </Heading>
        <SubHeading align="center">(long story short...)</SubHeading>
        <BlockQuote align="center">
          Learning to Code was meant to Gain Control Over the Digital World.
        </BlockQuote>
      </HeaderWrapper>
      <GridColumn col="span-10" start="start-md-2">
      <BodyIntro>
          They said, <em>&quot;Coding is easy-peasy&quot;</em>, Spoiler: it&apos;s not. Seven years in, and I&apos;ve cried over bugs, trauma-bonded with console logs, and built a shrine for Stack Overflow. Still here. Still coding. Still (barely) sane.
        </BodyIntro>
      </GridColumn>
      <GridColumn col="span-5" start="start-md-2">
        <Paragraph align="justify-xl">
          Surprisingly, despite its challenges, I came to
          <em> really, really, really </em>
          enjoy coding. Especially the learning part. The passion has grown so
          much that I want to pursue this career
          <span className="em-dash">-----</span>not (just) as a web designer
          who can code but as a developer who understands visual communication
          design.
        </Paragraph>
      </GridColumn>
      <GridColumn col="span-5" start="start-7">
        <Paragraph align="justify-xl" smMargin>
        I don&apos;t just write code — I carve meaning into machines. I build things that speak, move, maybe even heal. I&apos;ll keep learning, keep breaking, and one day, create something that outlives me <Em size="base">( And no, I&apos;m not scared of AI&apos;s. Let them try </Em>
          <TextIcon noMargin>
            <FaRobot aria-hidden="true" />
          </TextIcon>
          ).
        </Paragraph>
      </GridColumn>
    </Section>
  );
};

export default Tldr;
