import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>Shr-x{title && ` : ${title}`}</title>
      </Head>
    </>
  );
};

Meta.defaultProps = {
  title: '',
  keywords:
    'Poojith R, shr-x, personal portfolio, front-end developer, bangalore, india , fullstack developer, programmer, creative developer, personal brand, aesthetic website, indie dev, artistic web design',
  description:
    'A coding enthusiast who`s been immersed in digital realms since his early days, deeply fell in love with crafting web experiences. " Based on Earth. Mentally elsewhere!! " (I was fed up of this trend 😭). This Shows that I`m barely sane, and Mostly caffeinated.',
};

export default Meta;
