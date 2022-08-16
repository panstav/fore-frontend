import { readFileSync, writeFileSync } from 'fs';

import posthtml from 'posthtml';
import expressions from 'posthtml-expressions';
import minifier from 'posthtml-minifier';

const minifierOptions = {
	removeComments: true,
	minifyCSS: true,
	minifyJS: true,
	collapseWhitespace: true,
};

export default function buildEntry(env) {
	let rawPostHtml = posthtml(expressions({ locals: { env } }));
	if (env === 'production') rawPostHtml = rawPostHtml.use(minifier(minifierOptions));

	rawPostHtml
		.process(readFileSync('index.html', 'utf8'))
		.then((result) => writeFileSync('src/index.html', result.html));
}