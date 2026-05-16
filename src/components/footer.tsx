import 'react';
import { useAppNavigation } from "../utils/navigation";

const Footer = () => {
    const { handleCreateSessionNav } = useAppNavigation();

    return (
        <footer className="w-full bg-[#f6f3f2] dark:bg-neutral-900 border-t border-outline-variant/60">

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-7xl mx-auto px-6 py-16">

                <div className="col-span-2 space-y-6">

                    <div className="text-xl font-bold font-manrope text-neutral-800 dark:text-neutral-200">

                        Formally
                    </div>

                    <p className="text-sm text-neutral-500 max-w-xs">

                        Precision in attendance tracking. Modern solutions for educational and corporate environments.
                    </p>

                    <div className="flex gap-4">

                        <button onClick={handleCreateSessionNav} className={"bg-primary text-white px-5 py-2 " +
                            "rounded-lg font-bold text-sm"}>

                            Create Session
                        </button>
                    </div>
                </div>

                <div className="space-y-4">

                    <p className="text-xs uppercase tracking-widest font-semibold text-neutral-900 dark:text-white">

                        Product
                    </p>

                    <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">

                        <li><a className="hover:text-primary transition-colors" href="/solutions">Features</a></li>

                        <li><a className="hover:text-primary transition-colors" href="/pricing">Pricing</a></li>

                        <li><a className="hover:text-primary transition-colors" href="#">Security</a></li>
                    </ul>
                </div>

                <div className="space-y-4">

                    <p className="text-xs uppercase tracking-widest font-semibold text-neutral-900 dark:text-white">

                        Resources
                    </p>

                    <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">

                        <li><a className="hover:text-primary transition-colors" href="#">Documentation</a></li>

                        <li><a className="hover:text-primary transition-colors" href="#">Help Center</a></li>

                        <li><a className="hover:text-primary transition-colors" href="#">Contact Sales</a></li>
                    </ul>
                </div>

                <div className="space-y-4">

                    <p className="text-xs uppercase tracking-widest font-semibold text-neutral-900 dark:text-white">

                        Legal
                    </p>

                    <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">

                        <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>

                        <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8 border-t border-outline-variant/10">

                <p className="text-sm text-neutral-500 dark:text-neutral-400">

                    © 2026 The Family Group. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;
