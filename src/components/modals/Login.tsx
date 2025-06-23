import classNames from 'classnames/bind'
import { supabase } from '../../api'
import Logo from '../../assets/images/logo_text.png'
import style from './Login.module.css'
import ModalWrapper from './Wrapper'

const cx = classNames.bind(style)

const url = window.location.origin

function LoginModal() {
  function handleLogin() {
    supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: url,
      },
    })
  }

  return (
    <ModalWrapper name="login">
      <div className={cx('modal-login')}>
        <img src={Logo} alt="logo" className={cx('modal__logo')} />
        <button type="button" className={cx('modal__button')} onClick={handleLogin}>
          <img src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="google" />
          使用 Google 登入
        </button>

        <button type="button" disabled className={cx('modal__button', 'btn-disabled')}>
          <img src="https://cdn-icons-png.flaticon.com/512/15047/15047435.png" alt="facebook" />
          使用 Facebook 登入
        </button>

        <p className={cx('modal__text')}>
          登入後即代表同意
          <a href="/signup" className={cx('modal__link')}>使用條款</a>
          和
          <a href="/signup" className={cx('modal__link')}>隱私政策</a>
        </p>
      </div>
    </ModalWrapper>
  )
}

export default LoginModal
