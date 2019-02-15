export const createCase = (file) => {
    return (dispatch, getState, { getFirestore }) => {
// make asyn call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
    
        firestore.collection('cases').add({
            ...file,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_FILE' });
        }).catch((err) => {
            dispatch({type: 'CREATE_FILE_ERROR', err});
        })

    }
};
