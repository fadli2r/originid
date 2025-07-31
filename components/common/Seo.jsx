import Head from "next/head";

const Seo = ({ pageTitle,metaTag }) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} - Origin Famous || Konsultan Digital Marketing Agency Indonesia}`}
      </title>
      <meta name="keywords" content={metaTag && `${metaTag}`}/>

    </Head>
  </>
);

export default Seo;
