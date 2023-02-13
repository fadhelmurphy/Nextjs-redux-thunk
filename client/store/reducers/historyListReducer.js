import { ActionsHistoryList } from "store/actions/historyListAction";

const initialState = { data: {}, status: "fetch_init", message: "" };

function storeHistory(state = initialState, action) {

	switch (action.type) {

	case ActionsHistoryList.LOAD_GET_HISTORY:
		return { ...state, data: action.data, status: "fetch_loading" };
	case ActionsHistoryList.RES_GET_HISTORY:
		return { ...state, data: action.data, status: "fetch_result" };
	case ActionsHistoryList.ERR_GET_HISTORY:
		return {
			...state, data: action.data, status: "fetch_error", message: "Error...",
		};
	default: {

		return {
			...state,
		};

	}

	}

}

export default storeHistory;
