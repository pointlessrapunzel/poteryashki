type Props = {
  label: string
  name: string
  className?: string
}

export default function TextInput({ label, name, className = '' }: Props) {
  return (
    <fieldset className={`text-xl lg:text-3xl ${className}`}>
      <label htmlFor={name}>{label}</label>
      <input
        className='dashed-border mt-3 block w-full rounded bg-neutral-100 p-2 leading-none outline-none focus-visible:border-highlight lg:p-6'
        type='text'
        name={name}
        id={name}
      />
    </fieldset>
  )
}
