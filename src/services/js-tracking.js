import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

if (process.env.NODE_ENV === 'production') {
	Sentry.init({
		dsn: "https://71380ef9d52d4213b6ba11854e8f0d1a@o44797.ingest.sentry.io/4504102586875904",

		integrations: [
			new BrowserTracing(),
			new Sentry.Replay({
				// Additional SDK configuration goes in here, for example:
				maskAllText: true,
				blockAllMedia: true,
			})
		],

		tracesSampleRate: 0.1,
		replaysSessionSampleRate: 0.1,
		replaysOnErrorSampleRate: 1.0
	});
}