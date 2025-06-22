import classNames from 'classnames/bind'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import LoginModal from '../components/modals/Login'
import { useLogin } from '../hooks'
import useLoginStatusStore from '../store/loginStatus'
import useModalStore from '../store/modal'
import style from './Home.module.css'

const cx = classNames.bind(style)

function HomePage() {
  useLogin()
  const { isLoggedIn } = useLoginStatusStore()
  const modalStore = useModalStore()
  const navigate = useNavigate()

  function handleOpenModal() {
    if (isLoggedIn) {
      navigate('/company')
    } else {
      modalStore.openModal('login')
    }
  }

  return (
    <>
      <Header />
      <div className={cx('home')}>
        <h1 className={cx('home__title')}>Quit Now</h1>
        <p className={cx('home__text')}>一百個離職的理由</p>
        <div className="home__btns">
          {/* <button
            type="button"
            className={cx('home__btn')}
            onClick={handleOpenModal}
          >
            使用說明
          </button> */}
          <button
            type="button"
            className={cx('home__btn')}
            onClick={handleOpenModal}
          >
            {isLoggedIn ? '開始離職' : '登入離職'}
          </button>
        </div>
      </div>
      <LoginModal />
    </>
  )
}

export default HomePage
