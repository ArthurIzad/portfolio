import Link from "next/link"

export default function MenuHeader(){
    return(
        <>
            <header className="flex justify-end bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ml-0">
                <Link href='/CV'>Mon CV !</Link>
                <a className="">endroit a de la page</a>
                <a>endroit b de la page</a>
                <a>endroit b de la page</a>
            </header>
        </>
    )
}