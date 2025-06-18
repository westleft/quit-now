import classNames from 'classnames/bind'
import style from './Reason.module.css'
import ModalWrapper from './Wrapper'

const cx = classNames.bind(style)

function ReasonModal() {
  return (
    <ModalWrapper name="reason">
      <p className={cx('modal__title')}>去你的老闆</p>
      <p className={cx('modal__date')}>2025/01/01</p>
      <p className={cx('modal__reason-text')}>ㄍㄋㄋ老闆又在下班前給才給我文件</p>
    </ModalWrapper>
  )
}

export default ReasonModal
