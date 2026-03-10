"use client";

import { motion } from "framer-motion";
import MobileBottomNav from "@/components/MobileBottomNav";
import Footer from "@/components/Footer";

const variants = {
    hidden: { opacity: 0, x: 20, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
};

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <motion.main
                variants={variants}
                initial="hidden"
                animate="enter"
                transition={{ type: "spring" as const, stiffness: 260, damping: 20 }}
            >
                {children}
            </motion.main>
            <Footer />
            <MobileBottomNav />
        </>
    );
}
