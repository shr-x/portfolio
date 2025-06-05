import Image from 'next/image';
import tw, { styled } from 'twin.macro';
import { AHrefButton, LinkButton, Table, TableRow } from '..';
import { paragraphMargin } from '../../../styles/stylesData';
import { GridColumn, GridContainer } from '../layout';
import { BodyIntro, Heading, Paragraph, SubHeading, Tag } from '../typography';

const Wrapper = styled.article(() => [
  tw`
    text-primary-dark
  `,
]);

const PicColumn = styled.div(({ reverse }) => [
  tw`
    relative
    col-span-full
    md:col-span-6
  `,
  reverse && tw`md:col-start-1 md:row-start-1`,
]);

const ImageWrapper = styled.div(() => [
  tw`
    rounded-2xl
    overflow-hidden
    border-4
    border-primary-dark
  `,
]);

const HeaderColumn = styled.header(({ reverse }) => [
  tw`
    border-t
    border-primary-dark

    col-span-full
    md:col-span-6
    md:border-t-0
    md:border-b
    md:border-dashed
    md:mb-1
    xl:mb-3
  `,
  reverse && tw`md:col-start-7 md:row-start-1`,
]);

const Title = styled.h1(() => [
  tw`
    tracking-tight
    font-extrabold
    text-2xl
    // capitalize
    md:text-5xl
    md:mb-4
    md:pt-4
    xl:text-7xl
    2xl:pt-32
    
  `,
]);

const Type = styled.h2(() => [
  tw`
    font-mono
    italic
    text-lg
    mb-6
    capitalize
    lg:text-xl
    xl:text-2xl
    2xl:mb-24
  `,
]);

const DescColumn = styled.div(() => [
  tw`
    col-span-full
    pt-2
  `,
]);

const Category = styled.div(() => [
  tw`
    uppercase
    font-mono
    font-bold
    tracking-widest
    pt-8
    pl-0.5

    md:mt-1
    md:border-primary-dark
    md:border-t
    md:py-4
    xl:mt-4
    xl:text-lg
    2xl:text-xl
  `,
]);

const LinkColumn = styled.div(() => [
  tw`
    col-span-full
    mb-10
    md:mb-24
    flex
  `,
  `
    a + a {
      margin-left: ${paragraphMargin};
    }
  `,
]);

const ProjectCard = ({ project, reverse }) => {
  const { category, name, type, desc, stack, repo, url, img } = project;
  const copiedSubtitle = 'main technologies';
  const isWriting = category.toLowerCase() === 'writings';

  return (
    <Wrapper>
      <GridContainer>
        <HeaderColumn {...{ reverse }}>
          <Category>{category}</Category>
          <Title>{name}</Title>
          <Type>{type}</Type>
          {!isWriting && (
            <div className="hidden lg:block">
              <TableRow subtitle={copiedSubtitle}>
                {stack.map((tech) => {
                  return <Tag key={tech}>{tech}</Tag>;
                })}
              </TableRow>
            </div>
          )}
        </HeaderColumn>

        <PicColumn {...{ reverse }}>
          <ImageWrapper>
            <Image
              src={img}
              alt={name}
              layout="responsive"
              width={1200}
              height={1160}
            />
          </ImageWrapper>
        </PicColumn>

        <DescColumn>
          <TableRow subtitle="About the Work" noDashed dense>
            <Paragraph>{desc}</Paragraph>
          </TableRow>
          {!isWriting && (
            <div className="lg:hidden">
              <TableRow subtitle={copiedSubtitle}>
                {stack.map((tech) => {
                  return <Tag key={tech}>{tech}</Tag>;
                })}
              </TableRow>
            </div>
          )}
        </DescColumn>

        <LinkColumn>
          {isWriting ? (
            <AHrefButton href={`/writings/${repo}`}>Read it</AHrefButton>
          ) : (
            <AHrefButton href={repo}>Repository</AHrefButton>
          )}
          {url && <AHrefButton href={url}>Live</AHrefButton>}
        </LinkColumn>
      </GridContainer>
    </Wrapper>
  );
};

export default ProjectCard;
