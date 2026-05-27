export default function SessionFooter() {

    return(
        <footer className="w-full bg-[#f6f3f2] dark:bg-neutral-900 border-t border-outline-variant/60 transition-colors">
            <div className="flex flex-col md:flex-row justify-between items-center py-3.75 px-6 w-full max-w-5xl mx-auto">
                <div className="text-lg font-bold text-neutral-800 dark:text-white mb-4 md:mb-0">Formally</div>
                <div className="flex space-x-8">
                    <a className="text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-primary dark:hover:text-primary tracking-wider transition-colors" href="#">Support</a>
                    <a className="text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-primary dark:hover:text-primary tracking-wider transition-colors" href="#">Privacy Policy</a>
                    <a className="text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-primary dark:hover:text-primary tracking-wider transition-colors" href="#">Terms of Service</a>
                </div>
                <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400 tracking-wider mt-4 md:mt-0">
                    © 2026 Formally SaaS. All rights reserved.
                </div>
            </div>
        </footer>

    )
}
