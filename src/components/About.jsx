import aboutImg from '../assets/about.jpg';
import { SHORT_ABOUT_TEXT } from '../constants'; 
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
        <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="my-20 text-center text-4xl font-bold tracking-tight text-neutral-200"
        >
            About <span className="text-cyan-300">Me</span>
        </motion.h2>
        
        <div className="flex flex-wrap lg:px-12">
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2 lg:p-8"
            >
                <div className="flex items-center justify-center">
                    <img className='rounded-2xl border border-neutral-800 shadow-xl' src={aboutImg} alt="About JT" />
                </div>
            </motion.div>
            
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2"
            >
                <div className="flex h-full flex-col justify-center p-8 lg:p-0 lg:justify-center">
                    <p className='mb-8 max-w-xl text-lg leading-relaxed text-neutral-400'> 
                        { SHORT_ABOUT_TEXT } 
                    </p>
                    
                    <Link 
                        to="/bio" 
                        className="group flex w-fit items-center gap-2 rounded-full border border-cyan-800 bg-cyan-900/20 px-6 py-3 text-sm font-medium text-cyan-300 transition-all hover:bg-cyan-900/40 hover:text-cyan-100"
                    >
                        Read Full Bio 
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </motion.div>
        </div>
    </div>
  );
};

export default About;