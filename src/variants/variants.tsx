export const variants = {
    hidden: {
        y: 50,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100, staggerChildren: 0.2, delayChildren: 0.2 }

    }
}