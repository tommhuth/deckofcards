import * as nameActions from "./creators/name"

function fakePostName(name) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(name), 2000)
    })
}

export async function setName(name) {
    return async function (dispatch) {
        dispatch(nameActions.loading())

        try {
            let result = await fakePostName(name)

            dispatch(nameActions.set(result))
        } catch (e) {
            dispatch(nameActions.error(e))
        } finally {
            dispatch(nameActions.loaded())
        }
    }
}
