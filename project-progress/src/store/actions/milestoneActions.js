export const createMilestone = (milestone, projectId) =>{
    return (dispatch, getState, {getFirebase, getFirestore} ) => {
        // make asynch call
        const firestore = getFirestore();
        const authorId = getState().firebase.auth.uid;

        firestore.collection('projects').doc(projectId).collection('milestones').add({
        ...milestone,
        authorId: authorId,
        createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'ADD_MILESTONE',
                milestone
            })
        }).catch((err) => {
            dispatch({
                type: 'ADD_MILESTONE_ERROR',
                err
            })
        })
 
    }
}
