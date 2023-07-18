// import React from 'react'
// import { PreviewData } from 'next'
// import { GetStaticProps } from 'next';

// const page = () => {
//   if(PreviewData())
//   {
//     return (
//       <div>
//         <h1>Preview Mode</h1>
//       </div>
//     )
//   }
//   return (
//     <div>
//       Not in preview mode
//     </div>
//   )
// }

// import { GetServerSideProps } from 'next';

// export default function Home({ draftModeEnabled }) {
//   if (draftModeEnabled) {
//     return <p>Draft Mode</p>;
//   }
//   return <p>Homepage</p>;
// }

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
//   const draftModeEnabled = req.url.startsWith('/api/draft');
//   return {
//     props: {
//       draftModeEnabled,
//     },
//   };
// };

import { draftMode } from "next/headers";

export default function Home() {
  const { isEnabled } = draftMode();
  if (isEnabled) {
    return (
        <p>Draft Mode</p>
  
    );
  }
  return (
      <p>Homepage</p>

  );
}