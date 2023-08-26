import Link from "next/link"
import Image from "next/image"
import heroPic from "../public/images/index-hero.jpg"
import profilePic from "../public/images/profile.jpg"

export const metadata = {
  title: 'Abe Hiroki',
  description: "Abe Hirokiのポートフォリオサイトです",
}

const Index = () => {
  return (
    <>
      <div classNmae="hero">
        <Image src={heroPic} alt="hero" />
        <div className="textContainer">
          <h1>I'm Abe Hiroki!</h1>
          <h3>JavaScript Developer</h3>
        </div>
      </div>
      <div className="container">
        <div className="profile">
          <div>
            <h2>JavaScript Nerd</h2>
            <p>Lorem ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ...</p>
          </div>
          <div>
            <Image src={profilePic} alt="hero" />
          </div>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <div className="skillsContainer">
            <div><img src="/images/javascript.svg" alt="javascript" /><span>JavaScript / 10 years</span></div>
            <div><img src="/images/react.svg" alt="react" /><span>React / 5 years</span></div>
            <div><img src="/images/gatsby.svg" alt="gatsby" /><span>Gatsby / 3 years</span></div>
            <div><img src="/images/next.svg" alt="next" /><span>Next.JS / 3 years</span></div>
          </div>
        </div>
        <div className="ctaButton">
          <Link href="/contact">Make it Happen!</Link>
        </div>
      </div>
    </>
  )
}

export default Index
