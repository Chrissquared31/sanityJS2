import { NextStudioHead } from "next-sanity/studio/head";

export default function CustomStudioHead() {
  const basePath = process.env.BASE_PATH || "";

  return (
    <>
      <NextStudioHead favicons={false} />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://www.sanity.io/static/images/favicons/favicon-32x32.png"
      />
      <style jsx global>{`
        .header-background::before {
          background-image: url(${basePath}/nelo_classroom.png);
        }
      `}</style>
    </>
  );
}



