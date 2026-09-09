import React from 'react';
import BrandVisuals from "../components/pro/brandVisuals";
import FormSec from "../components/pro/formSec";

export default function ProLogin() {

    return (
        <div className={"h-screen w-screen overflow-hidden flex bg-surface dark:bg-neutral-950 text-on-surface " +
            "dark:text-neutral-100 font-body transition-colors duration-200"}>

            {/* Left Side: Brand Visual & Feature Highlights */}
            <BrandVisuals />

            {/* Right Side: Credentials & Input Form */}
            <FormSec />
        </div>
    );
}
