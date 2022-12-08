import React from 'react'
import { useStore } from '../hooks/useStore'
import Cube from './Cube';

const Cubes = () => {
    const [cubes] = useStore(state => ([
        state.cubes
    ]))
    console.log(cubes);
    return cubes.map(({ key, position, texture }) => (
        <Cube position={position} key={key} texture={texture} />)
    )

}

export default Cubes