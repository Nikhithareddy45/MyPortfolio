import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, MoveRight } from "lucide-react";
// import { FaGithub , FaLinkedin} from "react-icons/fa";
import Link from "next/link";
import { Button } from './../components/ui/button';

function Hero() {
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(
        () => ["React", "React Native", "Java", "JavaScript", "Next.js"],
        []
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    return (
        <div id="home" className="w-[99%] mx-auto lg:h-[90vh] h-[90vh] rounded-4xl flex items-center justify-center">
            {/* bg-white/30 backdrop-blur-md shadow-2xl border-white/20 */}
            <div className="container mx-auto">
                <div className="flex gap-8 items-center justify-center flex-col">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="pt-6">
                        <Link href="https://drive.google.com/file/d/1ZCRx65d-OLivi4mF8y_haLlFQt7GqPWo/view?usp=sharing">
                            <Button variant="secondary" size="sm" className="gap-2">
                                Resume <MoveRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </motion.div>
                    <motion.div
                        className="flex gap-4 flex-col">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="text-5xl md:text-7xl max-w-2xl text-center font-regular">
                            <span className="text-spektr-cyan-50 tracking-tighter">Hi, I&apos;m <strong className="text-cyan-700">Nikhitha</strong>  </span>

                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center p-4">
                            A highly motivated student with strong skills in
                        </motion.p>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.8 }}
                            exit={{ opacity: 0, y: 20 }} className="relative flex w-full justify-center tracking-tight overflow-hidden text-center md:pb-1 md:pt-1 text-4xl">
                            &nbsp;
                            {titles.map((title, index) => (
                                <motion.span
                                    key={index}
                                    className="absolute font-semibold"
                                    initial={{ opacity: 0, y: "-100" }}
                                    transition={{ type: "spring", stiffness: 50 }}
                                    animate={
                                        titleNumber === index
                                            ? {
                                                y: 0,
                                                opacity: 1,
                                            }
                                            : {
                                                y: titleNumber > index ? -150 : 150,
                                                opacity: 0,
                                            }
                                    }
                                >
                                    {title}
                                </motion.span>
                            ))}
                        </motion.span>
                    </motion.div>
                    <div className="flex flex-row gap-3">
                        <motion.div className=""
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 2 }}
                            exit={{ opacity: 0, y: 20 }}>
                            <Link href="https://www.github.com/Nikhithareddy45">
                                <Button size="lg" className="gap-4" variant="outline">

                                    Github <Github className="w-4 h-4" />

                                </Button>
                            </Link>
                        </motion.div>
                        <motion.div className=""
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 2 }}
                            exit={{ opacity: 0, y: 20 }}>
                            <Link href="https://www.linkedin.com/in/perugu-nikhitha-reddy-563791247/">
                                <Button size="lg" className="gap-4">
                                    LinkedIn <Linkedin className="w-4 h-4" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>


            </div>
        </div >
    );
}

export { Hero }; 