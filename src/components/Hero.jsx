import{Link} from "react-router";
import { AnimatedGradientText } from "./ui/animated-gradient-text";
import { buttonVariants } from "./ui/button";
import { KineticText } from "@/components/ui/kinetic-text"
import { TextAnimate } from "@/components/ui/text-animate"

function Hero() {
    return (
        <section   className="relative bg-cover bg-center px-6 py-24 text-white" style={{backgroundImage: "url('/images/hero.jpg')"}}>
            <div className="mx-auto grid max-w-5xl items-left gap-50 md:grid-cols-2"> 

                <div >
                <p className="mx-auto mb-4 text-sm font-semibold tracking-widest text-orange-300"> WELCOME To SHOPWEB </p>  

                <h1 className=" max-w-5xl text-4xl text-black font-bold leading-tight md:text-6xl"> Discover Your{""} </h1>   
                <h1 className=" max-w-5xl text-5xl text-black font-bold leading-tight md:text-7xl"><AnimatedGradientText colorFrom="#f6c693" colorTo="#814b13" speed={1.5}> Next Favorite ... </AnimatedGradientText></h1>

                <p className=" mt-6 max-w-5xl text-slate-500">    <TextAnimate
                      variants={{
                        hidden: {
                          opacity: 0,
                          y: 30,
                          rotate: 45,
                          scale: 0.5,
                        },
                        show: (i) => ({
                          opacity: 1,
                          y: 0,
                          rotate: 0,
                          scale: 1,
                          transition: {
                            delay: i * 0.1,
                            duration: 0.4,
                            y: {
                              type: "spring",
                              damping: 12,
                              stiffness: 200,
                              mass: 0.8,
                            },
                            rotate: {
                              type: "spring",
                              damping: 8,
                              stiffness: 150,
                            },
                            scale: {
                              type: "spring",
                              damping: 10,
                              stiffness: 300,
                            },
                          },
                        }),
                        exit: (i) => ({
                          opacity: 0,
                          y: 30,
                          rotate: 45,
                          scale: 0.5,
                          transition: {
                            delay: i * 0.05,
                            duration: 1,
                          },
                        }),
                      }}
                      by="character"
                    >
                    Explore amazing products, 
                    and enjoy a better shopping experience.    
                    </TextAnimate>
                </p>    

                <a href="#products" className={buttonVariants({size:"lg", className:"mt-8 bg-orange-600 text-white hover:bg-orange-700"})}>Explore Products</a>
                </div>
                

            </div>
        </section>
    );
}

export default Hero;