import classNames from 'classnames/bind'
import { useEffect, useRef } from 'react'
import useModalStore from '../../store/modal'
import style from './Login.module.css'

const cx = classNames.bind(style)

function LoginModal() {
  const modalStore = useModalStore()
  const dialogRef = useRef<HTMLDialogElement>(null)

  function handleOpenModal() {
    dialogRef.current?.close()
  }

  function handleInnerClick(e: React.MouseEvent) {
    e.stopPropagation()
  }

  useEffect(() => {
    if (!dialogRef.current) {
      return
    }
    modalStore.register('login', dialogRef.current)
  }, [dialogRef])

  return (
    <dialog ref={dialogRef} className={cx('modal')} onClick={handleOpenModal}>
      <div className={cx('modal__inner')} onClick={handleInnerClick}>
        LoginModal
      </div>
    </dialog>
  )
}

export default LoginModal
