import Link from "../ui-components/Link"

const Hero = () => {
  return (
    <div className=" flex flex-col gap-2">
<h1 className={`sm:text-6xl text-4xl font-bold  opacity-90`}>Leandro Méndez</h1>
<h2 className={`text-2xl font-medium  opacity-90`}>Full Stack Developer</h2>
<p className={`text-base font-light tracking-widest max-w-xs mb-6`}>Crafting inclusive and innovative web solutions.</p>
    </div>
  )
}

export default Hero