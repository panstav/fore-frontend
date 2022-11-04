import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

if (process.env.NODE_ENV === 'production') {
	Sentry.init({
		dsn: "https://71380ef9d52d4213b6ba11854e8f0d1a@o44797.ingest.sentry.io/4504102586875904",
		integrations: [new BrowserTracing()],

		// Set tracesSampleRate to 1.0 to capture 100%
		// of transactions for performance monitoring.
		// We recommend adjusting this value in production
		tracesSampleRate: 0.1,
	});
}