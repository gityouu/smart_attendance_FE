import React from 'react';
import Header from "../components/header";
import Hero from "../components/home/hero";
import Problem from "../components/home/problem";
import TL from "../components/home/tl";
import KFs from "../components/home/kfs";
import Footer from "../components/footer";

export default function Homepage() {

    return (
        <div className={"bg-surface dark:bg-neutral-950 text-on-surface dark:text-neutral-100 min-h-screen " +
            "transition-colors duration-300"}>
            {/* TopNavBar */}
            <Header />

            {/* Hero Section */}
            <Hero />

            {/* Problem Section */}
            <Problem />

            {/* How It Works (Timeline) */}
            <TL />

            {/* Key Features (Bento Grid Style) */}
            <KFs />

            {/* Footer */}
            <Footer />
        </div>
    );
}
