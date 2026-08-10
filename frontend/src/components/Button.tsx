interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'
}

export default function Button({
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const styles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  }
  return (
    <button
      className={`rounded-md px-4 py-2 font-medium disabled:opacity-50 ${styles[variant]} ${className}`}
      {...props}
    />
  )
}