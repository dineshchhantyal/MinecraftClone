import React, { useCallback, useEffect, useState } from 'react'

function actionByKey(key) {
    console.log(key)
    return {
        KeyW: "moveForward",
        KeyS: "moveBackward",
        KeyA: "moveLeft",
        KeyD: "moveRight",
        Space: "jump",
        Digit1: "texture1",
        Digit2: "texture2",
        Digit3: "texture3",
        Digit4: "texture4",
        Digit5: "texture5",
        Digit6: "texture6",
    }[key]
}

const useKeyboard = () => {
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        texture1: false,
        texture2: false,
        texture3: false,
        texture4: false,
        texture5: false,
        texture6: false,
        texture7: false,
        texture8: false,
    })
    const handleKeyDown = useCallback((e) => {
        console.log("e.code", actionByKey(e.code))
        if (actionByKey(e.code)) {
            setActions({ ...actions, [actionByKey(e.code)]: true })
        }
    }, [actions])

    const handleKeyUp = useCallback((e) => {
        if (actionByKey(e.code)) {
            setActions({ ...actions, [actionByKey(e.code)]: false })
        }
    }, [actions])


    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('keyup', handleKeyUp)
        }
    }, [handleKeyDown, handleKeyUp])

    return actions
}

export default useKeyboard