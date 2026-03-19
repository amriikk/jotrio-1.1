import { HERO_CONTENT } from '../constants'
import profilePic from '../assets/JT_hero.png'
import { motion } from "framer-motion"
import { GlareCard } from "./ui/glare-card"

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
    // Standardized padding to match the rest of the site (pb-24 pt-16)
    <div className="border-b border-neutral-900 pb-24 pt-16">
        {/* Added mx-auto max-w-6xl to perfectly align edges with the About section */}
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between">
            
            <div className="w-full lg:w-1/2">
                {/* Centered on mobile, left-aligned on desktop */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-8 text-6xl font-thin tracking-tight lg:text-8xl"
                        >
                        Jhon Trujillo
                    </motion.h1>
                    <motion.span 
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                        Full Stack Developer
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

            <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
                <motion.div 
                    initial={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, delay: 1.3}}
                >
                    <GlareCard className="flex flex-col items-center justify-center">
                        <img
                            className="absolute inset-0 h-full w-full object-cover" 
                            src={profilePic} 
                            alt="Jhon Trujillo" 
                        />
                    </GlareCard>
                </motion.div>
            </div>
            
        </div>
    </div>
  )
}

export default Hero