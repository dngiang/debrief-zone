const initState = {}

const caseReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_FILE':
            console.log('created file', action.file);
                return state;
        case 'CREATE_FILE_ERROR':
            console.log('create file error', action.err);
                return state;
        default:
            return state;
    }
}

export default caseReducer