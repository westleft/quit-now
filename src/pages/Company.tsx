import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../api'
import Header from '../components/Header'
import CreateCompanyModal from '../components/modals/CreateCompany'
import { useLogin } from '../hooks'
import useModalStore from '../store/modal'
import style from './Company.module.css'

const cx = classNames.bind(style)

function CompanyPage() {
  useLogin()
  const [companyList, setCompanyList] = useState([])

  const { openModal } = useModalStore()

  async function getCompanyList() {
    const { data, error } = await supabase.from('company_lists').select('*')
    if (error) {
      console.error(error)
    }
    setCompanyList(data)
  }

  useEffect(() => {
    getCompanyList()
  }, [])

  return (
    <>
      <Header />
      <div className={cx('company')}>
        <h1 className={cx('company__title')}>公司列表</h1>
        <ul className={cx('company__list')}>
          {companyList.map(company => (
            <li className={cx('company__list-item')} key={company.id}>
              <Link to={`/company/${company.short_id}`}>
                <h3>{company.name}</h3>
              </Link>
            </li>
          ))}
          <li
            className={cx('company__list-item', 'create-company')}
            onClick={() => openModal('createCompany')}
          >
            <button type="button" className={cx('company__list-item-btn')}>
              +
            </button>
          </li>
        </ul>
      </div>
      <CreateCompanyModal onSuccess={getCompanyList} />
    </>
  )
}

export default CompanyPage
