import React, { useState } from 'react';
import Header from '../components/header';
import ResourceHero from "../components/resource/hero";
import QuickAccessCards from "../components/resource/cards";
import Articles from "../components/resource/articles";
import AssetsDownload from "../components/resource/assetsDwnld";
import FAQS from "../components/resource/troubfaqs";
import ResourceCTA from "../components/resource/cta";
import Footer from '../components/footer';
import { categoryFilter } from "../types/resource";

export default function ResourcesPage() {
    const [ activeFilter, setActiveFilter ] = useState<categoryFilter>('all');

    return (
        <div className={"bg-surface dark:bg-neutral-950 text-on-surface dark:text-neutral-100 font-body " +
            "selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen flex flex-col transition-colors " +
            "duration-300"}>

            <Header />

            {/* Hero */}
            <ResourceHero />

            {/* Quick-Access Persona Cards */}
            <QuickAccessCards setActiveFilter={ setActiveFilter } />

            {/* Search + Knowledge Base Section */}
            <Articles activeFilter={ activeFilter }  setActiveFilter={ setActiveFilter } />

            {/* Downloadable Assets Section */}
            <AssetsDownload />

            {/* Classroom Troubleshooting Accordion */}
            <FAQS />

            {/* Bottom Call to Action */}
            <ResourceCTA />

            <Footer />
        </div>
    );
}
