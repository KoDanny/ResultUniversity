interface IFetchParams {
	_limit?: number;
	_page?: number;
}

export interface IPostsFetchParams extends IFetchParams {
	userId?: number;
}

export interface ICommentsFetchParams extends IFetchParams {
	postId?: number;
}
