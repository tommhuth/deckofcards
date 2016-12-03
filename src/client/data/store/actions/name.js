export const NameAction = {
    Set: 1,
    Loading: 2,
    Loaded: 3,
    Error: 4
}

function fakePostName(name) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(name), 2000)
    })
}

export async function setName(name) {
    return async function (dispatch) {
        dispatch({ type: NameAction.Loading })

        try {
            let result = await fakePostName(name)

            dispatch({ type: NameAction.Set, payload:  result  })
        } catch (e) {
            dispatch({ type: NameAction.Error, payload: e })
        } finally {
            dispatch({ type: NameAction.Loaded })
        }
    }
}
