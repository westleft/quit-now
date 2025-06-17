import { create } from 'zustand'

interface ModalState {
  modals: Record<string, HTMLDialogElement>
  register: (modalName: string, el: HTMLDialogElement) => void
  openModal: (modalName: string) => void
  closeModal: (modalName: string) => void
}

const useModalStore = create<ModalState>((set, get) => ({
  modals: {},

  register: (modalName, el) =>
    set(state => ({
      modals: {
        ...state.modals,
        [modalName]: el,
      },
    })),

  openModal: (modalName) => {
    const el = get().modals[modalName]
    el?.showModal()
  },

  closeModal: (modalName) => {
    const el = get().modals[modalName]
    el?.close()
  },
}))

export default useModalStore
