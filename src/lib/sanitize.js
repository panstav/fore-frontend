export const regExp = /[^0-9a-zA-Z !@#$%&*()`\-_+=\\/'"{}[\]?><.,]/g;

export default function sanitize(content) {
	return content.replaceAll(regExp, '').trim();
}