export async function fetchData<T>(url: string): Promise<T> | never {
	try {
		new URL(url);
	} catch {
		throw new Error('Невалидный URL адрес!');
	}

	try {
		const response = await fetch(url);
		if (response.ok) {
			return (await response.json()) as T;
		} else {
			throw new Error('Ошибка получения данных!');
		}
	} catch (err) {
		throw err;
	}
}
