"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ChevronRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { STYLE_QUIZ_QUESTIONS, ALL_PRODUCTS } from "@/app/search/constants";

export default function ExploreStyleQuiz() {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [isFinished, setIsFinished] = useState(false);

    const handleAnswer = (questionId: string, optionId: string) => {
        setAnswers(prev => ({ ...prev, [questionId]: optionId }));
        if (step < STYLE_QUIZ_QUESTIONS.length - 1) {
            setStep(step + 1);
        } else {
            setIsFinished(true);
        }
    };

    const resetQuiz = () => {
        setIsOpen(false);
        setStep(0);
        setAnswers({});
        setIsFinished(false);
    };

    const getRecommendations = () => {
        // Simple mock recommendation logic based on tags
        const tags = Object.values(answers);
        return ALL_PRODUCTS.filter(p => tags.some(tag => p.tag === tag)).slice(0, 4);
    };

    return (
        <section>
            {/* Entry Card */}
            <button 
                onClick={() => setIsOpen(true)}
                className="w-full relative aspect-[16/6] md:aspect-[16/4] rounded-[32px] overflow-hidden group shadow-lg"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#2C2C2C] to-[#4A3728] group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 opacity-40 bg-[url('/hero_indian_accessories.png')] bg-cover bg-center mix-blend-overlay" />
                
                <div className="absolute inset-0 p-6 md:p-8 flex items-center justify-between">
                    <div className="flex flex-col text-left">
                        <div className="flex items-center gap-2 mb-2">
                            <Sparkles className="w-4 h-4 text-accent" />
                            <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Personalized</span>
                        </div>
                        <h3 className="text-xl md:text-2xl text-white font-bold mb-1">Style Soulmate Quiz</h3>
                        <p className="text-[12px] text-white/60">Find your signature look in 30 seconds</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                        <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                </div>
            </button>

            {/* Quiz Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-background/98 backdrop-blur-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="px-6 py-4 flex items-center justify-between border-b border-white/5">
                            <button onClick={resetQuiz} className="p-2 -ml-2 text-foreground/40 hover:text-foreground transition-colors">
                                <X className="w-6 h-6" />
                            </button>
                            <div className="flex gap-1.5">
                                {STYLE_QUIZ_QUESTIONS.map((_, i) => (
                                    <div 
                                        key={i} 
                                        className={`h-1 rounded-full transition-all duration-500 ${
                                            isFinished ? "w-4 bg-accent" :
                                            step === i ? "w-8 bg-accent" : 
                                            step > i ? "w-4 bg-accent/40" : "w-4 bg-white/10"
                                        }`} 
                                    />
                                ))}
                            </div>
                            <div className="w-6" /> {/* Spacer */}
                        </div>

                        <div className="flex-1 overflow-y-auto hide-scrollbar px-6 py-8 flex flex-col max-w-2xl mx-auto w-full">
                            {!isFinished ? (
                                <motion.div
                                    key={step}
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -20, opacity: 0 }}
                                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                    className="flex flex-col gap-8"
                                >
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            {step > 0 && (
                                                <button onClick={() => setStep(step - 1)} className="text-foreground/40 hover:text-accent">
                                                    <ArrowLeft className="w-4 h-4" />
                                                </button>
                                            )}
                                            <span className="text-[10px] uppercase tracking-widest text-accent font-bold">Step {step + 1} of {STYLE_QUIZ_QUESTIONS.length}</span>
                                        </div>
                                        <h2 className="text-3xl font-[family-name:var(--font-cormorant)] text-warm-white font-bold leading-tight">
                                            {STYLE_QUIZ_QUESTIONS[step].question}
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                                        {STYLE_QUIZ_QUESTIONS[step].options.map((opt) => (
                                            <button
                                                key={opt.id}
                                                onClick={() => handleAnswer(STYLE_QUIZ_QUESTIONS[step].id, opt.tag)}
                                                className="group relative flex flex-col gap-2.5 text-left active:scale-[0.98] transition-all"
                                            >
                                                <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden bg-surface">
                                                    {"image" in opt ? (
                                                        <Image src={opt.image as string} alt={opt.label} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                                    ) : (
                                                        <div className={`w-full h-full ${"color" in opt ? opt.color : "bg-accent"} opacity-40`} />
                                                    )}
                                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                                                </div>
                                                <span className="text-[13px] text-warm-white font-medium px-1 group-hover:text-accent transition-colors">{opt.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="flex flex-col items-center text-center gap-8"
                                >
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-2">
                                            <CheckCircle2 className="w-10 h-10 text-accent" />
                                        </div>
                                        <h2 className="text-3xl font-[family-name:var(--font-cormorant)] text-warm-white font-bold">
                                            Your Signature Edit
                                        </h2>
                                        <p className="text-[14px] text-foreground/45 max-w-xs">
                                            Based on your vibe, we've curated these pieces just for you.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 w-full">
                                        {getRecommendations().map((product) => (
                                            <div key={product.id} className="flex flex-col gap-2">
                                                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-surface">
                                                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                                                </div>
                                                <div className="flex flex-col gap-0.5 px-0.5 text-left">
                                                    <h4 className="text-[13px] text-warm-white font-medium truncate">{product.name}</h4>
                                                    <p className="text-[11px] text-foreground/40 font-bold">{product.price}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <button 
                                        onClick={resetQuiz}
                                        className="w-full py-4 rounded-2xl bg-accent text-white font-bold uppercase tracking-widest text-[11px] hover:shadow-xl hover:shadow-accent/20 transition-all active:scale-[0.98]"
                                    >
                                        Add Selection to Bag
                                    </button>
                                    <button 
                                        onClick={resetQuiz}
                                        className="text-[11px] text-foreground/40 font-bold uppercase tracking-widest py-2 hover:text-foreground"
                                    >
                                        Retake Quiz
                                    </button>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
