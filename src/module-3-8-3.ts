const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

interface IAuthorData {
	id: number;
	email: string;
}

const isValidUrl = (urlString: string): boolean => {
	try {
		new URL(urlString);
		return true;
	} catch {
		return false;
	}
};

export const getData = async (url: string) => {
	if (!isValidUrl(url)) throw new Error('Невалидный адрес');
	const response = await fetch(url);
	if (!response.ok) throw new Error('Ошибка запроса');

	return (await response.json()) as IAuthorData[];
};

getData(COMMENTS_URL).then((data) => {
	data.forEach(({ id, email }) => {
		console.log(`ID: ${id}, Email: ${email}`);
	});
});
