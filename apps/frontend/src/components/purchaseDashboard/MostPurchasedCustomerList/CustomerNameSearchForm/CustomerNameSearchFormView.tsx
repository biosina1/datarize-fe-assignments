interface CustomerNameSearchFormViewProps {
  name: string
  onFormSubmit: React.FormEventHandler<HTMLFormElement>
  onInputChange: React.ChangeEventHandler<HTMLInputElement>
}

const CustomerNameSearchFormView = ({ name, onFormSubmit, onInputChange }: CustomerNameSearchFormViewProps) => {
  return (
    <form onSubmit={onFormSubmit}>
      <input value={name} placeholder="검색할 이름을 입력하세요" onChange={onInputChange} />
      <button type="submit">검색</button>
    </form>
  )
}

export default CustomerNameSearchFormView
