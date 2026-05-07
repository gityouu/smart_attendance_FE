import React from 'react';
import Header from "../components/header";
import SolutionHero from "../components/solution/hero";
import SelectTabs from "../components/solution/selectTabs";
import Table from "../components/solution/benchmarkComp";
import SolutionCTA from "../components/solution/cta";
import Footer from "../components/footer";

export default function SolutionsPage() {

    return (
        <div className={"bg-surface dark:bg-neutral-950 text-on-surface dark:text-neutral-100 font-body " +
            "selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen flex flex-col transition-colors " +
            "duration-300"}>

            {/* Top Navigation */}
            <Header />

            {/* Hero Section */}
            <SolutionHero />

            {/* Persona Selector Tabs */}
            <SelectTabs />

            {/* Technical Comparison Matrix */}
            <Table />

            {/* Bottom Call to Action */}
            <SolutionCTA />

            {/* Footer */}
            <Footer />
        </div>
    );
}
