import classNames from 'classnames/bind'
import { toast } from 'react-toastify'
import { supabase } from '../../api'
import style from './CreateCompany.module.css'
import ModalWrapper from './Wrapper'

const cx = classNames.bind(style)

function CreateCompanyModal() {
  async function createCompany(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    toast.success('建立成功')
    // const formData = new FormData(e.currentTarget)
    // const name = formData.get('name')
    // const { data: _data } = await supabase.from('company_lists').insert({
    //   name,
    // })

    // console.log(_data)
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
