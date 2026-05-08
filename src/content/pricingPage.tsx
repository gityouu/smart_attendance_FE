import React, { useState } from 'react';
import Header from '../components/header';
import PricingHero from "../components/pricing/hero";
import PricingGrid from "../components/pricing/pricingGrid";
import Table from "../components/pricing/pricingComp";
import FAQS from "../components/pricing/faqs";
import PricingCTA from "../components/pricing/cta";
import Footer from '../components/footer';

export default function PricingPage() {
    const [ isAnnual, setIsAnnual ] = useState(true);

    return (
        <div className={"bg-surface dark:bg-neutral-950 text-on-surface dark:text-neutral-100 font-body " +
            "selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen flex flex-col transition-colors " +
            "duration-300"}>

            <Header />

            {/* Hero Section */}
            <PricingHero isAnnual={isAnnual} setIsAnnual={setIsAnnual} />

            {/* Pricing Cards Grid */}
            <PricingGrid isAnnual={isAnnual} />

            {/* Feature Comparison Matrix */}

            <Table />

            {/* FAQ Section */}
            <FAQS />

            {/* Bottom Call to Action */}
            <PricingCTA />

            <Footer />
        </div>
    );
}
