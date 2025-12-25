export interface HttpResponse<T> {
	message: string;
	error?: string;
	data: T;
}

export const createSuccessResponse = <T>(
	message: string,
	data: T,
): HttpResponse<T> => {
	return {
		message,
		data,
	};
};

export const createErrorResponse = <T>(
	message: string,
	error: string,
): HttpResponse<T> => {
	return {
		message,
		error,
		data: {} as T,
	};
};
