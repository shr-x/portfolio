import { useRouter } from 'next/router';
import { Container } from '../../components/layout';
import { worksData } from '../../data/worksData';
import Meta from '../../components/Meta';
import tw, { styled } from 'twin.macro';
import { AHrefButton } from '../../components';
import { HiOutlineBookOpen, HiOutlineMail, HiArrowLeft, HiOutlineClock, HiOutlineDocumentText } from 'react-icons/hi';

const Title = styled.h1(() => [
  tw`
    text-4xl
    font-bold
    text-primary-dark
    mb-4
    font-mono
    tracking-wide
    border-b-2
    border-primary-light
    pb-4
  `,
]);

const Type = styled.span(() => [
  tw`
    inline-block
    px-4
    py-2
    bg-primary-light
    text-primary-dark
    rounded-full
    text-sm
    font-semibold
    mb-8
    font-mono
    tracking-wide
    shadow-sm
  `,
]);

const Content = styled.div(() => [
  tw`
    text-gray-700
    leading-relaxed
    font-mono
    text-lg
    space-y-6
  `,
]);

const BackButton = styled.button(() => [
  tw`
    flex
    items-center
    text-primary-dark
    hover:text-primary-darkest
    mb-8
    font-mono
    tracking-wide
    transition-colors
    duration-200
  `,
]);

const BookContainer = styled.div(() => [
  tw`
    relative
    min-h-[500px]
    bg-white
    rounded-lg
    shadow-lg
    p-8
    mb-12
    border-2
    border-primary-dark
  `,
]);

const Page = styled.div(() => [
  tw`
    relative
    z-10
    bg-white
    p-8
    rounded
  `,
]);

const CornerFold = styled.div(() => [
  tw`
    absolute
    top-0
    right-0
    w-32
    h-32
    bg-primary-light
    transform
    rotate-45
    translate-x-16
    -translate-y-16
  `,
]);

const UnderDevMessage = styled.div(() => [
  tw`
    mt-8
    p-8
    bg-white
    rounded-lg
    border-2
    border-dashed
    border-primary-dark
    text-center
    shadow-lg
    hover:shadow-xl
    transition-shadow
    duration-300
  `,
]);

const ContactButton = styled.a(() => [
  tw`
    inline-flex
    items-center
    px-6
    py-3
    bg-primary-dark
    text-white
    rounded-full
    font-semibold
    hover:bg-primary-darkest
    focus:outline-none
    focus:ring-2
    focus:ring-primary-dark
    focus:ring-offset-2
    transition-all
    duration-200
    hover:scale-105
    shadow-md
    hover:shadow-lg
  `,
]);

const ErrorContainer = styled.div(() => [
  tw`
    text-center
    py-32
    px-4
  `,
]);

const ErrorTitle = styled.h1(() => [
  tw`
    text-4xl
    font-bold
    text-primary-dark
    mb-6
  `,
]);

const ErrorMessage = styled.p(() => [
  tw`
    text-xl
    text-primary-dark
    mb-12
    max-w-2xl
    mx-auto
  `,
]);

const InfoSection = styled.div(() => [
  tw`
    flex
    items-center
    justify-center
    space-x-8
    mb-8
    text-primary-dark
    font-mono
  `,
]);

const InfoItem = styled.div(() => [
  tw`
    flex
    items-center
    space-x-2
  `,
]);

const generateSlug = (name) => {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  console.log('Generated slug for', name, ':', slug);
  return slug;
};

const WritingPage = ({ writing }) => {
  const router = useRouter();

  if (!writing) {
    return (
      <ErrorContainer>
        <ErrorTitle>404 - Writing Not Found</ErrorTitle>
        <ErrorMessage>
          The writing you&apos;re looking for doesn&apos;t exist or has been moved.
        </ErrorMessage>
        <BackButton onClick={() => router.push('/')}>
          <HiArrowLeft className="mr-2 h-5 w-5" />
          Back to Home
        </BackButton>
      </ErrorContainer>
    );
  }

  return (
    <Container>
      <Meta
        title={`${writing.name} - ${writing.type}`}
        description={writing.desc}
        image={writing.img}
      />
      <div className="max-w-4xl mx-auto">
        <BackButton onClick={() => router.push('/works')}>
          <HiArrowLeft className="mr-2 h-5 w-5" />
          Back to Works
        </BackButton>

        <UnderDevMessage>
          <div className="mb-6">
            <HiOutlineBookOpen className="mx-auto h-12 w-12 text-primary-dark mb-4" />
          </div>
          <h3 className="text-xl font-bold text-primary-dark mb-4">
            This writing is being converted to an interactive flipbook
          </h3>
          <p className="text-gray-700 mb-8">
            While we prepare the interactive version, you can request the PDF version by messaging the author. Please mention the title: &quot;{writing.name}&quot; in your message.
          </p>
          <ContactButton
            href={`https://instagram.com/_.poojithr_?message=${encodeURIComponent(`Hi, I'd like to request the PDF version of "${writing.name}"`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiOutlineMail className="mr-2 h-5 w-5" />
            Request PDF Version
          </ContactButton>
        </UnderDevMessage>
      </div>
    </Container>
  );
};

export async function getStaticPaths() {
  // Get all writings from worksData
  const writings = worksData.filter(work => 
    work.category.toLowerCase() === 'writings'
  );

  console.log('Found writings:', writings.map(w => ({ name: w.name, repo: w.repo })));

  // Generate paths for each writing using the repo field
  const paths = writings.map(writing => {
    const path = {
      params: { slug: writing.repo }
    };
    console.log('Creating path:', path);
    return path;
  });

  console.log('All generated paths:', paths);

  return {
    paths,
    fallback: false // Show 404 for non-existent paths
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  console.log('getStaticProps called with slug:', slug);
  
  // Find the writing that matches the slug using the repo field
  const writing = worksData.find(work => {
    const isMatch = work.category.toLowerCase() === 'writings' && work.repo === slug;
    console.log('Checking work:', {
      name: work.name,
      category: work.category,
      repo: work.repo,
      slug,
      isMatch
    });
    return isMatch;
  });

  console.log('Found writing:', writing ? writing.name : 'none');

  if (!writing) {
    console.log('No writing found for slug:', slug);
    return {
      notFound: true // This will show the 404 page
    };
  }

  return {
    props: {
      writing
    }
  };
}

export default WritingPage; 