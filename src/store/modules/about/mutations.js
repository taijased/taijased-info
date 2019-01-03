
export const UPDATE_MAIN_VIDEO = (state, payload) => {
    state.videoOption.sources[0].src = payload.source;
    state.videoOption.poster = payload.poster;
    state.descriptionVideo.title = payload.name;
    state.descriptionVideo.description = payload.description;
}

export const UPDATE_NAVIGATION_PATH = (state, payload) => state.navigationPath = payload