import Link from "next/link"
// import PDF from "../asset/CV_Arthur_Izad.pdf"



export default function CV(){
    return(
        <>
            <Link href='/'>retour a l'acceuil</Link>
            {/* <img src={PDF} alt="" /> */}
            <embed src="../asset/CV_Arthur_Izad.pdf" width="800" height="500" type="application/pdf"/>


            <p>ceci est le CVCVCVCVCVCVCVCV</p>
        </>
    )

}