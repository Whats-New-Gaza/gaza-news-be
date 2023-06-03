import Image from 'next/image'
import './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <article className='mainContent'>
    <h1>T4T Electrolysis</h1>
  <p> 

  Hi everyone! My name is Drew and I’m an electrologist located in the cap hill neighborhood of Denver. I am a newly trained electrologist who’s building her practice and committed towards serving the specific needs of the trans & gender nonconforming community as well as anyone else looking for permanent hair removal. In my experience, trans clients want permanent hair removal guaranteed and we want it done RIGHT, which I find appeals to most people in search of electrolysis. My aim is to build a safe & comfortable hair removal experience that prioritizes your unique needs. 
  
  Fill out the <Link className="formLink" href={"/Client History and Consent Form"}>client history and consent form</Link> in the menu and we will get back to you as soon as possible to schedule a consult! 
  </p>
  </article>
  )
}
