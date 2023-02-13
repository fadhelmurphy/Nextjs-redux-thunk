/* eslint-disable import/no-anonymous-default-export */
export default {

	// Headers
	HEADERS: {
		key: typeof process.env.SERVER_API_KEY === "undefined" ? process.env.NEXT_PUBLIC_CLIENT_API_KEY : process.env.SERVER_API_KEY,
		"content-type": "application/json",
	},
};
