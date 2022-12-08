import { nanoid } from "nanoid";
import create from "zustand";

export const useStore = create(set => ({
    texture: 'dirt',
    cubes: [
    ],
    addCube: (x, y, z) => set(state => ({
        cubes: [...state.cubes, {
            key: nanoid(),
            position: [x, y, z],
            texture: state.texture
        }]
    })),
    removeCube: (cube) => set(state => ({ cubes: state.cubes.filter(c => c !== cube) })),
    setTexture: (texture) => set(state => ({ texture: texture })),
    saveWorld: () => set(state => ({ cubes: state.cubes })),
    resetWorld: () => set(state => ({ cubes: [] })),

}))