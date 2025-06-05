import tw from 'twin.macro';
import Image from 'next/image';
import { Collapsible } from '..';
import { GridColumn, GridContainer } from '../layout';
import { EmMed, Heading, TextIcon, Paragraph, SubHeading } from '../typography';
import { FaRegGrinSquint } from 'react-icons/fa';

const Name = tw.span`
  whitespace-nowrap
  font-bold
`;

const FullStory = () => {
  return (
    <Collapsible color="teal" title="about Shr-x.">
      <GridContainer>
        <GridColumn col="span-4">
          <div className="text-center my-4 md:my-0 w-full md:grid">
            <Image
              src="/images/smile.svg"
              alt="a-sh profile illustration"
              width={250}
              height={250}
            />
          </div>
        </GridColumn>
        <GridColumn col="span-8">
          <Heading variant="sm" align="autoL">
            The story of <span className="whitespace-nowrap">SHR-X.</span>
          </Heading>
          <SubHeading align="autoL">The journey so far...</SubHeading>
          <Paragraph>
            <Name>SHR-X </Name>
            is <EmMed>Shreyas</EmMed>, also known by his ID, <Name>Poojith R</Name>
          </Paragraph>
          <Paragraph>
            <Name>Shreyas</Name> might come across as a bit <Name>irritating at first</Name>, with a seemingly <Name>carefree demeanor </Name>
            sometimes leads to misunderstandings. He's an <Name>extrovert</Name> in most settings, yet he holds a <Name>deeply introverted side</Name> that only a select few ever get to see. He speaks his mind, <Name>filterless</Name>, which he sees as both a boon and a misfortune.
          </Paragraph>
          <Paragraph>
          Don't let the initial impression fool you, though. Shreyas has been immersed in the world of <Name>coding since 2018</Name>, starting his journey in the 5th grade. While he's currently a student and hasn't yet entered the professional workforce, his extensive collection of certifications from tech giants like <Name>Google, Microsoft</Name>, and <Name>AWS</Name> speak volumes about his dedication and expertise. His core skills lie in <Name>full-stack development</Name> and <Name>DevOps</Name>, and he's even ventured into the creative realm, mastering design tools like <Name>Adobe Illustrator</Name> and <Name>3D modeling in Blender</Name>.
          </Paragraph>
          <Paragraph>
          Beyond the screen, Shreyas possesses a unique inner world. He loves to <Name>express his feelings through words</Name>, often crafting <Name>poems and writings</Name>. His quirky "love language" is <Name>irritating</Name>, a testament to his distinct personality. He finds solace in <Name>listening to music</Name> and, despite being an atheist, he enjoys <Name>decoding ancient Hindu scriptures</Name>. While he might appear outwardly "boring" to some, Shreyas is, without a doubt, <Name>damn interesting within</Name>.
            <TextIcon>
              <FaRegGrinSquint aria-hidden="true" />
            </TextIcon>
          </Paragraph>
        </GridColumn>
      </GridContainer>
    </Collapsible>
  );
};

export default FullStory;
