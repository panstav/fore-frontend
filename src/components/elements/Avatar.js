export default function Avatar({ userId, alt, style }) {
	return <img className="mr-2 is-round" src={userId ? `https://storage.googleapis.com/fore-www/avatars/${userId}.jpg` : 'https://thispersondoesnotexist.com/image'} {...{ alt }} {...{style}} />;
}