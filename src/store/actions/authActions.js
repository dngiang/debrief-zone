export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

//Using firebase to create new user credentials
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then((resp) => {
            console.log(resp);
            dispatch({ type: 'LOGIN_SUCCESS'});
        }).catch ((err) => {
            dispatch({ type: 'LOGIN_ERROR', err});
        });

    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

            firebase.auth().signOut().then(() => {
                dispatch({ type: 'SIGNOUT_SUCCESS'})
            });
        }
    }

export const signUp = (newUser) => {
    console.log(newUser);
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const  firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({ type : 'SIGNUP_SUCCESS' })
        }).catch(err => {
            dispatch( { type: 'SIGNUP_ERROR', err})
        })
    }
}