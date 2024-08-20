import styles from './SelectView.module.scss'
interface SelectProps extends React.ComponentProps<'select'> {
  options: { id: string; name: string }[]
  onChange: React.ChangeEventHandler<HTMLSelectElement>
}

const Select = ({ options, ...props }: SelectProps) => {
  return (
    <select {...props} className={`${styles.select} ${props.className ?? ''}`}>
      {options.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  )
}

export default Select
