import type { ReactNode } from 'react'
import classNames from 'classnames/bind'
import { useEffect, useRef } from 'react'
import useModalStore from '../../store/modal'
import style from './Wrapper.module.css'

const cx = classNames.bind(style)

/**
 * ModalWrapperProps 介面定義 ModalWrapper 元件的 props。
 * @property {string} name - modal 的唯一名稱，用於註冊與識別。
 * @property {ReactNode} children - modal 內部要顯示的內容。
 */
interface ModalWrapperProps {
  name: string
  children: ReactNode
}

/**
 * ModalWrapper 是一個通用的 modal 包裝元件。
 *
 * 會自動將 dialog 元素註冊到 modal store，並處理 modal 的開關與點擊事件。
 *
 * @param {ModalWrapperProps} props - 傳入的 props。
 * @param {string} props.name - modal 的唯一名稱。
 * @param {ReactNode} props.children - modal 內部要顯示的內容。
 * @returns {JSX.Element} 回傳一個 dialog 元素包住 children。
 */
function ModalWrapper({ name, children }: ModalWrapperProps) {
  const modalStore = useModalStore()
  const dialogRef = useRef<HTMLDialogElement>(null)

  /**
   * 點擊 modal 外層時觸發，會關閉 modal。
   * @returns {void}
   */
  function handleOpenModal() {
    dialogRef.current?.close()
  }

  /**
   * 阻止事件冒泡，避免點擊 modal 內容時關閉 modal。
   * @param {React.MouseEvent} e - React 的滑鼠事件物件。
   * @returns {void}
   */
  function handleInnerClick(e: React.MouseEvent) {
    e.stopPropagation()
  }

  useEffect(() => {
    if (dialogRef.current) {
      modalStore.register(name, dialogRef.current)
    }
  }, [name])

  return (
    <dialog
      ref={dialogRef}
      className={cx('modal')}
      onClick={handleOpenModal}
    >
      <div
        className={cx('modal__inner')}
        onClick={handleInnerClick}
      >
        { children }
      </div>
    </dialog>
  )
}

export default ModalWrapper
