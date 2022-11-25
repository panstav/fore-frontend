export const regExp = /[^a-zA-Z !@#$%&*()`\-_+=\\/'"{}[\]?><.,]/g;

export default function sanitize(content) {
	return content.replaceAll(regExp, '').trim();
}