import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            const target = e.target;
            setIsPointer(
                window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer'
            );
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const cursorVariants = {
        default: {
            x: position.x - 8,
            y: position.y - 8,
            scale: 1,
            backgroundColor: 'hsla(var(--primary), 0.5)',
            transition: {
                type: 'spring',
                stiffness: 700,
                damping: 30,
            },
        },
        pointer: {
            x: position.x - 24,
            y: position.y - 24,
            scale: 1.5,
            backgroundColor: 'hsla(var(--primary), 0.3)',
            borderWidth: '2px',
            borderColor: 'hsla(var(--primary), 0.7)',
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 20,
            },
        },
    };

    const dotVariants = {
        default: {
            x: position.x - 2,
            y: position.y - 2,
            backgroundColor: 'hsl(var(--primary))',
        },
    };

    return (
        <div className="hidden lg:block fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]">
            <motion.div
                className="w-16 h-16 rounded-full fixed top-0 left-0"
                variants={cursorVariants}
                animate={isPointer ? 'pointer' : 'default'}
            />
            <motion.div
                className="w-2 h-2 rounded-full fixed top-0 left-0"
                variants={dotVariants}
                animate="default"
                transition={{
                    type: 'spring',
                    stiffness: 900,
                    damping: 40,
                }}
            />
        </div>
    );
};

export default CustomCursor;