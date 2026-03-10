import { create } from 'zustand';

export interface CartItem {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
    color?: string;
    size?: string;
}

interface CartStore {
    items: CartItem[];
    isOpen: boolean;

    // Actions
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    toggleCart: () => void;
    openCart: () => void;
    closeCart: () => void;

    // Getters (computed via function directly, or just use selectors on consumer side)
    getTotalItems: () => number;
    getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
    items: [],
    isOpen: false,

    addItem: (item) => set((state) => {
        // Check if item already exists (can also match size/color if needed)
        const existingItem = state.items.find(
            (i) => i.id === item.id && i.size === item.size && i.color === item.color
        );

        if (existingItem) {
            return {
                items: state.items.map((i) =>
                    i.id === item.id && i.size === item.size && i.color === item.color
                        ? { ...i, quantity: i.quantity + item.quantity }
                        : i
                ),
                isOpen: true // Automatically open cart on add
            };
        }

        return {
            items: [...state.items, item],
            isOpen: true // Automatically open cart on add
        };
    }),

    removeItem: (id) => set((state) => ({
        items: state.items.filter((i) => i.id !== id)
    })),

    updateQuantity: (id, quantity) => set((state) => ({
        items: state.items.map((i) =>
            i.id === id ? { ...i, quantity: Math.max(1, quantity) } : i
        )
    })),

    clearCart: () => set({ items: [] }),

    toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

    openCart: () => set({ isOpen: true }),

    closeCart: () => set({ isOpen: false }),

    getTotalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),

    getTotalPrice: () => get().items.reduce((total, item) => total + (item.price * item.quantity), 0),
}));
