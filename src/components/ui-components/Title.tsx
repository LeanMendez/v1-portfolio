interface ITitle{
  children: string;
  className?: string;
}

const Title = ({children, className}:ITitle) => {
  const strings = children.split(' ')
  const firstWord = strings[0]
  const secondWord = strings[1]

  const classNameStyles = `${className} text-2xl sm:text-5xl text-slate-200 font-bold mt-1 mb-3`
  return (
    <h2 className={classNameStyles}>{firstWord}<span className={`text-yellow-200 font-normal`}>{secondWord}</span></h2>
  )
}

export default Title