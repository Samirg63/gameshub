import Link from 'next/link'


type Props = {
  name:string,
  description:string
}

const ProblemIntroduction = ({name,description}: Props) => {
  return (
    <>
      <div id="title" className="flex items-baseline">
        <h1 className="font-semibold text-3xl text-zinc-900">Lógica 1</h1>
        <h3 className="pl-4 font-semibold text-xl text-zinc-900">{name} - </h3>
        <Link href={'/logicgame'} className='text-zinc-700 ml-2 hover:underline'>Retornar</Link>
      </div>

      <div id="description" className="pt-4  w-8/12 text-lg">
        <p className='text-zinc-600'>{description}</p>
      </div>
    </>
  )
}

export default ProblemIntroduction