import classNames from 'classnames/bind'
import { useEffect, useRef } from 'react'
import useModalStore from '../../store/modal'
import style from './Reason.module.css'

const cx = classNames.bind(style)

function ReasonModal() {
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
    modalStore.register('reason', dialogRef.current)
  }, [dialogRef])

  return (
    <dialog ref={dialogRef} className={cx('modal')} onClick={handleOpenModal}>
      <div className={cx('modal__inner')} onClick={handleInnerClick}>
        <p className={cx('modal__title')}>去你的老闆</p>
        <p className={cx('modal__date')}>2025/01/01</p>
        <p className={cx('modal__reason-text')}>
          ㄍㄋㄋ老闆又在下班前給才給我文件
        </p>
      </div>
    </dialog>
  )
}

export default ReasonModal
