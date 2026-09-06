import { create } from 'zustand';

interface NavbarState {
    isOrange: boolean;
    setIsOrange: (isOrange: boolean) => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
    isOrange: true,
    setIsOrange: (isOrange) => set({ isOrange }),
}));