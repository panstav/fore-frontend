import Helmet from 'react-helmet';

import { meta as defaultSEO, urls } from 'constants.js';

export default function Meta({ title, description }) {

	const pageTitle = title ? `${title} · ${defaultSEO.title}` : `${defaultSEO.title} · ${defaultSEO.description}`;
	const pageDescription = description || defaultSEO.description;
	const pageUrl = `${urls.frontEnd}${window.location.pathname || ''}`;

	return <Helmet>
		<title>{pageTitle}</title>
		<meta name="title" content={pageTitle} />
		<meta name="description" content={pageDescription} />

		<meta property="og:type" content="website" />
		<meta property="og:url" content={pageUrl} />
		<meta property="og:title" content={pageTitle} />
		<meta property="og:description" content={pageDescription} />
		{/* <meta property="og:image" content={pageFeaturedImage} /> */}
		<meta property="twitter:card" content="summary_large_image" />
		<meta property="twitter:url" content={pageUrl} />
		<meta property="twitter:title" content={pageTitle} />
		<meta property="twitter:description" content={pageDescription} />
		{/* <meta property="twitter:image" content={pageFeaturedImage} /> */}
	</Helmet>;
}