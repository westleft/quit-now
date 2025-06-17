import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import style from './Header.module.css'

const cx = classNames.bind(style)

function Header() {
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
        <li className={cx('header__item')}>
          <Link to="/" className={cx('header__link')}>
            操作指南
          </Link>
        </li>
        <li className={cx('header__item')}>
          <Link to="/about" className={cx('header__link')}>
            關於作者
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
