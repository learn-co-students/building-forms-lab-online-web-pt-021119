export default function manageBand(state = {
  bands: [],
}, action) {
	if (action.type === "ADD_BAND") {
		state.bands.push(action.band)
		return Object.assign({},state)
	} else {
		return state
	}
};
