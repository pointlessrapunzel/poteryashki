type Props = {
  label: string
  name: string
  className?: string
}

export default function TextInput({ label, name, className = '' }: Props) {
  return (
    <fieldset className={`text-3xl ${className}`}>
      <label htmlFor={name}>{label}</label>
      <input
        className='mt-3 block w-full rounded border-2 border-dashed  border-black bg-neutral-100 p-6 leading-none outline-none focus-visible:border-brand-800'
        type='text'
        name={name}
        id={name}
      />
    </fieldset>
  )
}
