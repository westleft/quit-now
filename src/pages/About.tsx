import classNames from 'classnames/bind'
import Header from '../components/Header'
import style from './About.module.css'

const cx = classNames.bind(style)

function AboutPage() {
  return (
    <>
      <Header />
      <div className={cx('about')}>
        <img
          className={cx('about__avatar')}
          src="https://avatars.githubusercontent.com/u/78782311?v=4"
          alt="avatar"
        />
        <div className={cx('about__social')}>
          <a rel="noreferrer noopener" target="_blank" href="https://github.com/westleft">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
              alt="github"
            />
          </a>
          <a rel="noreferrer noopener" target="_blank" href="https://seasoning.dev">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4050/4050374.png"
              alt="blog"
            />
          </a>
        </div>
        <h2 className={cx('about__title')}>westleft</h2>
        <p className={cx('about__text')}>
          一位前端工程師
          <br />
          不喜歡吃蕃茄
        </p>
      </div>
    </>
  )
}

export default AboutPage
