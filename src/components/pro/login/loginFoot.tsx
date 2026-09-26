import React from "react";

//TODO: CHANGE THE GRADIENT TO MATCH OF THE ACTUAL LOGO COLOR

export default function LoginFoot(){
    const gradientStyle = {
        backgroundImage: 'linear-gradient(90deg, #ff007f, #7f00ff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block', // Ensures the background covers just the text
    };

    return(
        <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-neutral-400 dark:text-neutral-500 pt-6 border-t border-outline-variant/10 dark:border-neutral-900">
            <span>© 2026 Formally SaaS by <span style={gradientStyle}>ByteBloom</span>. All rights reserved.</span>
            <div className="flex gap-4 mt-2 sm:mt-0">
                <a href="#" className="hover:underline">Privacy Policy</a>
                <a href="#" className="hover:underline">Security</a>
                <a href="#" className="hover:underline">Contact</a>
            </div>
        </div>
    )
}
