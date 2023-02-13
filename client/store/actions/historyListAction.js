import { GET, getGeneralApiProblem } from "@helpers/utils";

// Actions History
export const ActionsHistoryList = {
	GET_HISTORY: "get_history",
	LOAD_GET_HISTORY: "load_get_history",
	RES_GET_HISTORY: "result_get_history",
	ERR_GET_HISTORY: "error_get_history",
};

// LOCAL API History
const API_HISTORY = `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/api/history`;

export const loadHistory = () => async (dispatch) => {
	dispatch({ type: ActionsHistoryList.LOAD_GET_HISTORY });

	const result = await GET(
		API_HISTORY,
	  );
	  
	  if (result.status && !(result.status >= 200 && result.status < 300)) {
		const problem = getGeneralApiProblem(result.status, result.res);
		dispatch({ type: LOAD_USERS_ERROR, data: problem })
	  }
  
	  try {
		
		dispatch({ type: ActionsHistoryList.RES_GET_HISTORY, data: { kind: 'ok', data: result.data, message: '' } })
	  } catch {
		dispatch({ type: ActionsHistoryList.ERR_GET_HISTORY, data: { kind: 'bad-data', message: 'Not expected format' } })
	  }
 };