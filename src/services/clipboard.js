export async function copy (text) {
	if (!text) return;

	const type = "text/plain";
	const data = [new ClipboardItem({ [type]: new Blob([text], { type }) })];

	return navigator.clipboard.write(data);
}