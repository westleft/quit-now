import classNames from 'classnames/bind'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { supabase } from '../api'
import useLoginStatusStore from '../store/loginStatus'
import style from './Header.module.css'

const cx = classNames.bind(style)

function Header() {
  const navigate = useNavigate()
  const { setIsLoggedOut, isLoggedIn } = useLoginStatusStore()

  function handleLogout() {
    supabase.auth.signOut()
    setIsLoggedOut()
    toast.success('登出成功')
    navigate('/')
  }

  return (
    <header className={cx('header')}>
      <ul className={cx('header__list')}>
        <li className={cx('header__item')}>
          <Link to="/" className={cx('header__link')}>
            <img
              src="https://i.meee.com.tw/4hnB8St.png"
              alt="logo"
              className={cx('header__logo')}
            />
          </Link>
        </li>
        {/* <li className={cx('header__item')}>
          <Link to="/reasons" className={cx('header__link')}>
            操作指南
          </Link>
        </li> */}
        <li className={cx('header__item')}>
          <Link to="/about" className={cx('header__link')}>
            關於作者
          </Link>
        </li>
      </ul>

      {isLoggedIn && (
        <button type="button" onClick={handleLogout} className={cx('header__btn')}>
          登出
        </button>
      )}
    </header>
  )
}

export default Header
