import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { supabase } from '../api'
import Header from '../components/Header'
import ReasonModal from '../components/modals/Reason'
import useModalStore from '../store/modal'
import style from './Reasons.module.css'
import type { Tables } from '../types/database'
import { useParams } from 'react-router-dom'
type Reason = Tables<'reasons'>

const cx = classNames.bind(style)

function ReasonsPage() {
  const { id: companyId } = useParams()
  const [reasons, setReasons] = useState<Reason[]>([])
  const modalStore = useModalStore()

  function handleOpenModal() {
    modalStore.openModal('reason')
  }

  async function getReasons() {
    try {
      const { data: reasons } = await supabase.from('reasons').select('*').eq('company_id', companyId as string)
      setReasons(reasons || [])
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getReasons()
  }, [])

  return (
    <>
      <Header />
      <div className={cx('reasons')}>
        <div className={cx('reasons__container')}>
          <button onClick={handleOpenModal} type="button" className={cx('reasons__create-btn')}>
            建立理由
          </button>
          <h1 className={cx('reasons__title')}>
            已集滿
            {reasons.length}
            個理由
          </h1>
        </div>
        {
          reasons.length === 0 && (
            <div className={cx('reasons__empty')}>
              <p>
                還沒有任何離職理由 😥
              </p>
            </div>
          )
        }
        
        <div className={cx('reasons__list')}>
          {reasons.map((reason, index) => (
            <details key={reason.id} name="accordion" id="anchoring">
              <summary>
                <span>
                  理由
                  {index + 1}
                  ：
                  {reason.title}
                </span>
              </summary>
              <div>
                <h3>
                  日期：
                  {(reason.created_at).slice(0, 10)}
                </h3>
                <p>{reason.reason}</p>
              </div>
            </details>
          ))}
        </div>
      </div>

      <ReasonModal refreshItems={getReasons} />
    </>
  )
}

export default ReasonsPage
