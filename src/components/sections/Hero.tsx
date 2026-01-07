import { motion } from "framer-motion";
import NetworkSVG from "../icons/NetworkSVG";
import YENLogo from "../icons/YENLogo";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-yen-graphite" />

      {/* Animated gradient blobs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(var(--yen-pink)) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(var(--yen-pink)) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full blur-3xl opacity-10"
        style={{
          background: "radial-gradient(circle, hsl(var(--yen-pink-glow)) 0%, transparent 70%)",
        }}
        animate={{
          x: [-100, 100, -100],
          y: [-50, 50, -50],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Animated network background with parallax */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <NetworkSVG className="w-full h-full" />
      </motion.div>

      {/* Pulsing radial glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-glow"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="yen-container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4 mb-8 mt-12"
          >
            {/* <YENLogo size={80} /> */}
            <YENLogo variant="wordmark" size={200} className="max-w-[250px] sm:max-w-xs w-full mt-12" />
          </motion.div>

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="yen-label mb-6"
          >
            Young Entrepreneurs Network
          </motion.p>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="yen-heading-xl text-foreground mb-8"
          >
            Empowering the Next Generation of{" "}
            <span className="yen-gradient-text">Entrepreneurs</span> in Kerala
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="yen-body-lg max-w-3xl mx-auto mb-12"
          >
            A vibrant community dedicated to young entrepreneurs aged 12 to 30, providing
            a platform for learning, collaboration, and empowerment to drive economic
            and social progress.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <a href="https://forms.gle/mHjKQSiPqpvqRSnE6" className="yen-button-primary">
              Join the Network
            </a>
            <a href="#about" className="yen-button-secondary">
              Explore YEN
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
