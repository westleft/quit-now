import classNames from 'classnames/bind'
import Logo from '../assets/images/logo.png'
import Header from '../components/Header'
import ReasonModal from '../components/modals/Reason'
import modalStore from '../store/modal'
import useModalStore from '../store/modal'
import style from './Reasons.module.css'

const cx = classNames.bind(style)

function ReasonsPage() {
  const modalStore = useModalStore()

  function handleOpenModal() {
    modalStore.openModal('reason')
  }

  return (
    <>
      <Header />
      <div className={cx('reasons')}>
        <div className={cx('reasons__container')}>
          <button type="button" className={cx('reasons__create-btn')}>
            建立理由
          </button>
          <h1 className={cx('reasons__title')}>已集滿 20 個理由</h1>
        </div>
        <ul className={cx('reasons__list')}>
          {/* {
            Array.from({ length: 50 }, (_, index) => (
              <li
                onClick={handleOpenModal}
                key={index}
                className={cx('reasons__item', 'done')}
              >

              </li>
            ))
          } */}
          {
            Array.from({ length: 50 }, _ => (
              <li key={Math.random()} className={cx('reasons__item')}>
                <img
                  onClick={handleOpenModal}
                  src={Logo}
                  alt="logo"
                  className={cx('reasons__item-logo')}
                />
              </li>
            ))
          }
        </ul>
      </div>
      <ReasonModal />
    </>
  )
}

export default ReasonsPage
