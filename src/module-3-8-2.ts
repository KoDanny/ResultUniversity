interface IPostData {
	id: string;
	title: string;
	body: string;
}

interface INormalizePostsData {
	byId: {
		[key: string]: IPostData;
	};
	allIds: string[];
}

export const normalizeData = (unnormalizedData: IPostData[]) => {
	return unnormalizedData.reduce(
		(acc, postData) => {
			acc.byId[postData.id] = postData;
			acc.allIds.push(postData.id);
			return acc;
		},
		{ byId: {}, allIds: [] } as INormalizePostsData
	);
};
