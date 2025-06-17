import classNames from 'classnames/bind'
import LoginModal from '../components/modals/Login'
import useModalStore from '../store/modal'
import style from './Home.module.css'

const cx = classNames.bind(style)

function HomePage() {
  const modalStore = useModalStore()

  function handleOpenModal() {
    modalStore.openModal('login')
  }

  return (
    <>
      <div className={cx('home')}>
        <h1 className={cx('home__title')}>Quit Now</h1>
        <p className={cx('home__text')}>一百個離職的理由</p>
        <div className="home__btns">
          <button
            type="button"
            className={cx('home__btn')}
            onClick={handleOpenModal}
          >
            使用說明
          </button>
          <button
            type="button"
            className={cx('home__btn')}
            onClick={handleOpenModal}
          >
            開始離職
          </button>
        </div>
      </div>
      <LoginModal />
    </>
  )
}

export default HomePage
