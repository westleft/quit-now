import classNames from 'classnames/bind'
import style from './Home.module.css'

const cx = classNames.bind(style)

function HomePage() {
  return (
    <>
      <div className={cx('home')}>
        <h1 className={cx('home__title')}>Quit Now</h1>
        <p className={cx('home__text')}>一百個離職的理由</p>
        <button
          type="button"
          className={cx('home__btn')}
        >
          離職吧
        </button>
      </div>
    </>
  )
}

export default HomePage
