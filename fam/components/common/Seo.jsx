import Head from "next/head";

const Seo = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} - Origin Famous || Konsultan Digital Marketing Agency Indonesia}`}
      </title>
      
    </Head>
  </>
);

export default Seo;
