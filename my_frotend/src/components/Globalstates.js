import { createGlobalState } from "react-hooks-global-state";
const { setGlobalState, useGlobalState } = createGlobalState({

    homestate: false,
    signupstate: false,
    loginstate: false,
    navbarstate: true,
    infostate: true
})

export { useGlobalState, setGlobalState }