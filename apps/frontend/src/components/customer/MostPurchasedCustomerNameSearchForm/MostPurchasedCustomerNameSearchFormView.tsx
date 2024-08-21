import styles from './MostPurchasedCustomerNameSearchFormView.module.scss'
interface MostPurchasedCustomerNameSearchFormViewProps {
  name: string
  onFormSubmit: React.FormEventHandler<HTMLFormElement>
  onInputChange: React.ChangeEventHandler<HTMLInputElement>
}

const MostPurchasedCustomerNameSearchFormView = ({
  name,
  onFormSubmit,
  onInputChange,
}: MostPurchasedCustomerNameSearchFormViewProps) => {
  return (
    <form className={styles.mostPurchasedCustomerNameSearchForm} onSubmit={onFormSubmit}>
      <input
        className={styles.nameInput}
        value={name}
        placeholder="검색할 이름을 입력하세요"
        onChange={onInputChange}
      />
      <button className={styles.searchButton} type="submit">
        검색
      </button>
    </form>
  )
}

export default MostPurchasedCustomerNameSearchFormView
