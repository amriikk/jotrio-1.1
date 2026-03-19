import { HERO_CONTENT } from '../constants'
import profilePic from '../assets/JT_hero.png'
import { motion } from "framer-motion"
import { GlareCard } from "./ui/glare-card"
import { Link } from "react-router-dom" // Added Link import

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 pt-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
            
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    {/* Wrapped the Name in a Link */}
                    <Link to="/gallery" className="transition-opacity hover:opacity-80">
                        <motion.h1 
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-8 text-6xl font-thin tracking-tight lg:text-8xl"
                            >
                            Jhon Trujillo
                        </motion.h1>
                    </Link>
                    <motion.span 
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                        Full Stack Developer | UX Engineer
                    </motion.span>
                    <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className='my-6 max-w-xl font-light leading-relaxed tracking-tighter'>
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>

            <div className="flex w-full justify-center lg:w-1/2 lg:justify-center">
                <motion.div 
                    initial={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, delay: 1.3}}
                >
                    <Link to="/images" className="block cursor-pointer">
                        <GlareCard className="flex flex-col items-center justify-center">
                            <img
                                className="absolute inset-0 h-full w-full object-cover" 
                                src={profilePic} 
                                alt="Jhon Christian Trujillo" 
                            />
                        </GlareCard>
                    </Link>
                </motion.div>
            </div>
            
        </div>
    </div>
  )
}

export default Hero