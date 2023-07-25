type Props = {
  label: string
  name: string
  inputBg?: string
  className?: string
  required?: boolean
}

export default function TextInput({
  label,
  name,
  inputBg = 'bg-neutral-100',
  required = false,
  className = '',
}: Props) {
  return (
    <fieldset className={`text-xl lg:text-3xl 2xl:text-4xl ${className}`}>
      <label htmlFor={name}>{label}</label>
      <input
        className={`dashed-border mt-3 block w-full rounded ${inputBg} p-2 leading-none outline-none focus-visible:border-highlight lg:p-6`}
        type='text'
        name={name}
        id={name}
        required={required}
      />
    </fieldset>
  )
}
