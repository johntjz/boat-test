class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="fixed top-0 w-full bg-[#0c0e12]/95 backdrop-blur-md z-50 border-b border-zinc-800/80">
            <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16 gap-3">
                    
                    <!-- Brand -->
                    <a href="index.html" class="flex items-center space-x-3 shrink-0">
                        <div class="w-8 h-8 bg-zinc-900 border border-zinc-700 rounded flex items-center justify-center">
                            <svg class="w-4 h-4 text-tech-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <div class="flex flex-col whitespace-nowrap">
                            <div class="flex items-center space-x-2">
                                <span class="text-sm font-mono font-bold tracking-wider text-white">BAYWING</span>
                                <span class="text-[9px] font-mono px-1.5 py-0.5 bg-zinc-900 text-tech-cyan border border-zinc-800 rounded">D1–D5 / EF-150</span>
                            </div>
                            <span class="text-[8.5px] font-mono text-zinc-500 tracking-widest uppercase">Electric Maritime Hub</span>
                        </div>
                    </a>

                    <!-- Desktop Navigation -->
                    <nav class="hidden xl:flex items-center space-x-1.5 text-[10.5px] font-mono uppercase tracking-wider whitespace-nowrap" id="desktop-nav">
                        <a href="index.html" class="nav-link px-2.5 py-1.5 rounded text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors">01. Overview</a>
                        <a href="master-plan-fleet.html" class="nav-link px-2.5 py-1.5 rounded text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors">02. 10-Yr Plan &amp; Fleet</a>
                        <a href="routes-calculator.html" class="nav-link px-2.5 py-1.5 rounded text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors">03. 28 Routes &amp; OPEX</a>
                        <a href="engineering-rd.html" class="nav-link px-2.5 py-1.5 rounded text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors">04. R&amp;D Blueprints</a>
                        <a href="investors.html" class="nav-link px-2.5 py-1.5 rounded text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors">05. Investors</a>

                        <!-- Stakeholder Portals Dropdown -->
                        <div class="relative group">
                            <button class="px-2.5 py-1.5 rounded text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors inline-flex items-center gap-1">
                                <span>Stakeholder Portals</span>
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                            </button>
                            <div class="absolute right-0 mt-1 w-64 bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                                <a href="hkstp-itf.html" class="nav-link block px-4 py-2 text-[11px] text-zinc-300 hover:bg-zinc-900 hover:text-white">06. HKSTP / ESS / GTF / RTH</a>
                                <a href="utilities-grid.html" class="nav-link block px-4 py-2 text-[11px] text-zinc-300 hover:bg-zinc-900 hover:text-white">07. HKE / CLP / AAHK / CEDD</a>
                                <a href="regulatory-class.html" class="nav-link block px-4 py-2 text-[11px] text-zinc-300 hover:bg-zinc-900 hover:text-white">08. DNV Class &amp; HKMPB</a>
                                <a href="stakeholder-tracker.html" class="nav-link block px-4 py-2 text-[11px] text-zinc-300 hover:bg-zinc-900 hover:text-white">09. Oct 2026 Comms Log</a>
                                <div class="border-t border-zinc-800 my-1"></div>
                                <a href="hke-walkover-handout.html" class="block px-4 py-2 text-[11px] text-tech-cyan font-bold hover:bg-zinc-900" target="_blank">10. HKE Site Handout ↗</a>
                            </div>
                        </div>
                    </nav>

                    <!-- Right Action Buttons -->
                    <div class="flex items-center space-x-2 shrink-0 whitespace-nowrap">
                        <a href="hke-walkover-handout.html" target="_blank" class="hidden sm:inline-flex items-center bg-zinc-900 text-tech-cyan border border-tech-cyan/40 px-2.5 py-1 rounded text-[10px] font-mono font-bold hover:bg-tech-cyan hover:text-slate-950 transition-all">
                            HKE Walkover ↗
                        </a>
                        <span class="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400">EN • HKD</span>
                        <button onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" class="xl:hidden text-zinc-400 hover:text-white p-1.5 border border-zinc-800 rounded bg-zinc-900">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden xl:hidden bg-zinc-950 border-b border-zinc-800 px-4 py-4 space-y-1.5 font-mono text-xs uppercase tracking-wider">
                <a href="index.html" class="nav-link block p-2 text-zinc-300 hover:text-white rounded hover:bg-zinc-900">01. Overview</a>
                <a href="master-plan-fleet.html" class="nav-link block p-2 text-zinc-300 hover:text-white rounded hover:bg-zinc-900">02. 10-Yr Plan &amp; Fleet</a>
                <a href="routes-calculator.html" class="nav-link block p-2 text-zinc-300 hover:text-white rounded hover:bg-zinc-900">03. 28 Routes &amp; OPEX</a>
                <a href="engineering-rd.html" class="nav-link block p-2 text-zinc-300 hover:text-white rounded hover:bg-zinc-900">04. R&amp;D Blueprints</a>
                <a href="investors.html" class="nav-link block p-2 text-zinc-300 hover:text-white rounded hover:bg-zinc-900">05. Investors</a>
                <a href="hkstp-itf.html" class="nav-link block p-2 text-zinc-300 hover:text-white rounded hover:bg-zinc-900">06. HKSTP / ESS / GTF</a>
                <a href="utilities-grid.html" class="nav-link block p-2 text-zinc-300 hover:text-white rounded hover:bg-zinc-900">07. Utilities &amp; Grid</a>
                <a href="regulatory-class.html" class="nav-link block p-2 text-zinc-300 hover:text-white rounded hover:bg-zinc-900">08. Class &amp; Policy</a>
                <a href="stakeholder-tracker.html" class="nav-link block p-2 text-zinc-300 hover:text-white rounded hover:bg-zinc-900">09. Comms Log</a>
                <div class="border-t border-zinc-800 pt-2"></div>
                <a href="hke-walkover-handout.html" class="block p-2 text-tech-cyan font-bold" target="_blank">10. HKE Site Handout ↗</a>
            </div>
        </header>
        `;

        // Automatically highlight active page link
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const links = this.querySelectorAll('.nav-link');
        
        links.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.remove('text-zinc-300', 'hover:text-white', 'hover:bg-zinc-900');
                if (link.closest('#desktop-nav') && !link.closest('.group')) {
                    link.classList.add('bg-white', 'text-zinc-950', 'font-bold');
                } else {
                    link.classList.add('text-white', 'font-bold', 'bg-zinc-900');
                }
            }
        });
    }
}

customElements.define('site-header', SiteHeader);
