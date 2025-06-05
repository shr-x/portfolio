import { Container } from '../components/layout';
import { AHrefButton } from '../components';
import Meta from '../components/Meta';
import tw, { styled } from 'twin.macro';

const ErrorContainer = styled.div(() => [
  tw`
    text-center
    py-32
    px-4
  `,
]);

const ErrorTitle = styled.h1(() => [
  tw`
    text-6xl
    font-bold
    text-primary-dark
    mb-6
    font-mono
  `,
]);

const ErrorMessage = styled.p(() => [
  tw`
    text-xl
    text-primary-dark
    mb-12
    max-w-2xl
    mx-auto
    leading-relaxed
  `,
]);

const CodeBlock = styled.div(() => [
  tw`
    bg-gray-100
    p-6
    rounded-lg
    mb-12
    max-w-2xl
    mx-auto
    font-mono
    text-left
    overflow-x-auto
  `,
]);

export default function Custom404() {
  return (
    <>
      <Meta title="404 - Page Not Found" />
      <Container>
        <ErrorContainer>
          <ErrorTitle>404</ErrorTitle>
          <ErrorMessage>
            Oops! Looks like you&apos;ve stumbled upon a page that doesn&apos;t exist.
            <br />
            Maybe it&apos;s still in development, or perhaps it&apos;s been moved to a different location.
          </ErrorMessage>
          <CodeBlock>
            <pre>
              {`// Error: Page not found
if (page.exists) {
  return page;
} else {
  return <Home />;
}`}
            </pre>
          </CodeBlock>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Let&apos;s get you back on track!
          </p>
          <AHrefButton href="/">Return Home</AHrefButton>
        </ErrorContainer>
      </Container>
    </>
  );
} 