import classNames from 'classnames/bind'
import { toast } from 'react-toastify'
import { supabase } from '../../api'
import useModalStore from '../../store/modal'
import style from './CreateCompany.module.css'
import ModalWrapper from './Wrapper'

const cx = classNames.bind(style)

interface CreateCompanyModalProps {
  refreshList: () => void
}

function CreateCompanyModal({ refreshList }: CreateCompanyModalProps) {
  const { closeModal } = useModalStore()

  async function createCompany(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const { status, error } = await supabase.from('company_lists').insert({
      name,
    })

    if (status === 201) {
      toast.success('建立成功')
      closeModal('createCompany')
      refreshList()
    } else {
      toast.error(`建立失敗: ${error?.message}`)
    }
  }

  return (
    <ModalWrapper name="createCompany">
      <form className={cx('modal-create-company')} onSubmit={createCompany}>
        <h1>建立公司</h1>
        <input required type="text" placeholder="公司名稱" name="name" />
        <button type="submit">建立</button>
      </form>
    </ModalWrapper>
  )
}

export default CreateCompanyModal
