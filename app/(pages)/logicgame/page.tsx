import Link from "next/link"
import { problem } from "./utils/problems"

const page = () => {
  return (
    <div className="min-h-screen mx-6">
        <h1 className="font-semibold text-2xl">Problemas de lógica:</h1>
        {
            problem.map((data,index)=>(
                <Link href={'/logicgame/'+index} key={index} className="group border-b border-gray pb-6 pt-4 cursor-pointer block">
                    <h3 className="font-semibold text-xl group-hover:underline">{data.name}</h3>
                    <p className="font-light text-zinc-700 w-200 text-sm pl-4">{data.descricao}</p>
                </Link>
            ))
        }
    </div>
  )
}

export default page