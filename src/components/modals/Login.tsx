import classNames from 'classnames/bind'
import style from './Login.module.css'
import ModalWrapper from './Wrapper'

const cx = classNames.bind(style)

function LoginModal() {
  return (
    <ModalWrapper name="login">
      <p className={cx('modal__title')}>LOGIN</p>
    </ModalWrapper>
  )
}

export default LoginModal
