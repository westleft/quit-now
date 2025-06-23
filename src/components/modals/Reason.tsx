import classNames from 'classnames/bind'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { supabase } from '../../api'
import useModalStore from '../../store/modal'
import style from './Reason.module.css'
import ModalWrapper from './Wrapper'

const cx = classNames.bind(style)

interface Props {
  refreshItems: () => void
}

function ReasonModal({ refreshItems }: Props) {
  const { id: companyId } = useParams()

  const { closeModal } = useModalStore()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault()

      const formData = new FormData(e.currentTarget)

      const { data: _data, error } = await supabase.from('reasons').insert({
        company_id: companyId as string,
        title: formData.get('title') as string,
        reason: formData.get('reason') as string,
      })

      if (error) {
        console.error(error)
      } else {
        refreshItems()
        closeModal('reason')
        toast.success('建立成功')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <ModalWrapper name="reason">
      <form onSubmit={handleSubmit} className={cx('reason-modal')}>
        <h2 className={cx('reason-modal__title')}>建立理由</h2>
        <div className={cx('reason-modal__box')}>
          <label htmlFor="title">標題</label>
          <input required type="text" id="title" name="title" />
        </div>
        <div className={cx('reason-modal__box')}>
          <label htmlFor="reason">理由</label>
          <textarea required id="reason" name="reason" />
        </div>
        <button
          type="submit"
          className={cx('reason-modal__btn')}
        >
          建立理由
        </button>
      </form>
    </ModalWrapper>
  )
}

export default ReasonModal
