import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-surface text-on-surface selection:bg-primary-container selection:text-primary">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-50/70 backdrop-blur-xl shadow-sm">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-black font-space-grotesk text-blue-700">RHEY.LAB</div>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a className="text-blue-700 font-bold border-b-2 border-blue-700 pb-1 font-space-grotesk tracking-tight" href="#">Home</a>
            <a className="text-slate-600 font-medium transition-colors hover:text-blue-600 font-space-grotesk tracking-tight" href="#about">About</a>
            <a className="text-slate-600 font-medium transition-colors hover:text-blue-600 font-space-grotesk tracking-tight" href="#projects">Projects</a>
            <a className="text-slate-600 font-medium transition-colors hover:text-blue-600 font-space-grotesk tracking-tight" href="#timeline">Timeline</a>
            <a className="text-slate-600 font-medium transition-colors hover:text-blue-600 font-space-grotesk tracking-tight" href="#skills">Skills</a>
            <a className="text-slate-600 font-medium transition-colors hover:text-blue-600 font-space-grotesk tracking-tight" href="#contact">Contact</a>
          </div>
          <button className="bg-primary text-on-primary px-5 py-2 rounded-md font-bold transition-all hover:opacity-90 active:scale-95 shadow-lg shadow-primary/20">
            Hire Me
          </button>
        </div>
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-3 py-1 bg-surface-container rounded-full text-primary font-bold text-xs uppercase tracking-widest">Available for Freelance</div>
            <h1 className="text-6xl md:text-8xl font-black font-space-grotesk text-on-surface leading-none tracking-tighter">
              Hi, I'm <span className="text-primary">Rhey</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-on-surface-variant max-w-lg leading-relaxed">
              Full-stack Developer & Data Science Student crafting atmospheric digital experiences through precision and predictive logic.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-md font-bold text-lg shadow-xl shadow-primary/30 hover:-translate-y-1 transition-transform">
                View My Work
              </button>
              <button className="bg-surface-container-highest text-on-primary-container px-8 py-4 rounded-md font-bold text-lg transition-colors hover:bg-surface-container">
                Read Resume
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-surface-container-highest rounded-xl -z-10"></div>
            <img 
              alt="Professional portrait" 
              className="w-full aspect-[4/5] object-cover rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOuCHhEQ73Iu22ID6Weh5O2SjHciBpFvGm_gProKk89Wx414LmZEpamTjhkJ2YFbX2UjtbCt5VGAkbN91DvZpmdF4cb2PMx9nWv2kkN3tcL-yUHdmwwB7amMfqs8jMjMCRmVf0eV2NAJHqV6Dgw9Z8vVralZjgdu_aF4tmX4IuE9Aw0R9LtF9dsvtBt8h51gVGEJF1hHnvkCM8Uq2wpNefKCWi-sdPOga62zvMakDM_vegmVkeYV80sfgDk-RPMCKZ7DHXdNlRy1w"
            />
          </div>
        </section>

        {/* About Me Section */}
        <section className="bg-surface-container-low py-24" id="about">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 order-2 md:order-1 space-y-6">
              <h2 className="text-4xl font-bold font-space-grotesk text-on-surface">Digital Curator & Problem Solver</h2>
              <div className="space-y-4 text-on-surface-variant leading-relaxed text-lg">
                <p>
                  Currently pursuing my studies in Informatics, my journey is a constant bridge between the structural rigor of Full-stack Development and the fluid, predictive power of Data Science.
                </p>
                <p>
                  I don't just build websites; I engineer "Atmospheric Laboratories"—digital spaces that feel physical, intuitive, and intelligently aware of user needs. My passion lies in transforming complex data patterns into seamless, user-centric web applications.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-surface-container-lowest rounded-xl">
                  <span className="text-primary font-bold text-2xl block">3+</span>
                  <span className="text-on-surface-variant text-sm">Years Experience</span>
                </div>
                <div className="p-4 bg-surface-container-lowest rounded-xl">
                  <span className="text-primary font-bold text-2xl block">12+</span>
                  <span className="text-on-surface-variant text-sm">Projects Completed</span>
                </div>
              </div>
            </div>
            <div className="flex-1 order-1 md:order-2">
              <img 
                alt="Tech Illustration" 
                className="rounded-xl shadow-lg border-l-4 border-primary" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI9H3GUQEazHlt1UXLMdMvJrziiPmaIGJzMl45BpF28hQ0D7u6RP0XVmzrOUTzHb1H5o4akofv9q-TjDr99BSoJ-1sQROlZ1ONQbvEm1uEQBROesCfH3xI46uWzwlfOrddWTiL4WOXRsP_kqSguyYGd-04roVVNHqO4n7t6SnoQRsdSseGekvJ696Swx05VG2DhfmWmFI-HfKcPehjyLaYwNgt9SGZAiwTXv0nSwAYyGrZE6GjXs8orP7H_e8GZZjJCi5A6Bw_ldw"
              />
            </div>
          </div>
        </section>

        {/* Projects & Achievements */}
        <section className="py-24 max-w-7xl mx-auto px-6" id="projects">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-5xl font-black font-space-grotesk text-on-surface tracking-tight">Featured Specimen</h2>
              <p className="text-on-surface-variant mt-2">A selection of curated engineering works.</p>
            </div>
            <a className="text-primary font-bold flex items-center gap-2 group" href="#">
              View All Projects <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-surface-container-lowest rounded-xl p-6 group hover:translate-y-[-8px] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img 
                alt="Skincare Project" 
                className="w-full aspect-video object-cover rounded-md mb-6" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtIyaanG_0DwlpfyhrL0UC3vZnCoYLTeuF5riS45c6aSygIMyKowXu4QsyLxwgE5Jfcmu9t9ZxmjmwTVJ8A74AoAEsAQIuLsUX6fJ__H7LGfMPetyLAivD3QYNZBigrls33TkIbdjqyCmS_mdz4VSHMUz9fbmR7l06wwh_GuVVZCZEkDY1twA_jF-8fyG-GObo-piR4qNDTiFX5y-BsTEvX3UhNRhIC7ZqJ_Z6jDUZXiF40WtjlOqDwJh9kI6YOCIun_YOKP-pki4"
              />
              <h3 className="text-xl font-bold font-space-grotesk mb-2">Skincare Ingredient Analyzer</h3>
              <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
                An AI-driven platform that decodes cosmetic formulations to predict skin compatibility using machine learning models.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-surface-container-low text-primary text-[10px] font-bold rounded uppercase">Python</span>
                <span className="px-2 py-1 bg-surface-container-low text-primary text-[10px] font-bold rounded uppercase">Next.js</span>
                <span className="px-2 py-1 bg-surface-container-low text-primary text-[10px] font-bold rounded uppercase">TensorFlow</span>
              </div>
            </div>
            {/* Project Card 2 */}
            <div className="bg-surface-container-lowest rounded-xl p-6 group hover:translate-y-[-8px] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img 
                alt="Data Dash" 
                className="w-full aspect-video object-cover rounded-md mb-6" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsrUpRSh-dhxzmohw9UE0Zt9vk3lPWQ0_yAZn8vU1DVnXUs24k3D_echL2Uxw3UqTl1IieDjJjZ6tlE2F5PwqYuI6M6NrxCBQ3Up_xVZCCHhKuyZJpLpWjTQqARR7iBqxUScJLtbPICsIDKecbLks9aa0F-sTwhw4t_RCV1YiO7DDfscxmycuhSTBBTEy2siX4UP8YOdVG0TaCaGUqVVEpdCGRR77m6kC37_w8IPwxEqa4_Nf6v6VPzNbgKmzmdY-X-3x2JHypmE8"
              />
              <h3 className="text-xl font-bold font-space-grotesk mb-2">Neural Fin-Track</h3>
              <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
                Real-time financial tracking dashboard with automated sentiment analysis from global news feeds.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-surface-container-low text-primary text-[10px] font-bold rounded uppercase">React</span>
                <span className="px-2 py-1 bg-surface-container-low text-primary text-[10px] font-bold rounded uppercase">PostgreSQL</span>
                <span className="px-2 py-1 bg-surface-container-low text-primary text-[10px] font-bold rounded uppercase">FastAPI</span>
              </div>
            </div>
            {/* Project Card 3 */}
            <div className="bg-surface-container-lowest rounded-xl p-6 group hover:translate-y-[-8px] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img 
                alt="Analytics" 
                className="w-full aspect-video object-cover rounded-md mb-6" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7IO96YoK1nrHQvDCTwpT1bTdOZl8sVNdQKAgeLFsuaTDa-x6tQpEZpG1X3hzLCtAolsutBx6Fzr9TDgDm_EuxRFQ6Qc9ffDs460YjvFLnvJsQiwdwYJ3fAwzkVwYz6f1TbFY_1ANHyKQwOTNOlEZ1ZPZ2nH4256zn4oDJgN5q8j1MtCLBYvmOzA011J7MBLzD79q36YxiungLvgwNtjh-3zrI0MN-d7RaJADa3lzDsim6_rTdF_V7fOugfbg0jbmCZIRRRtPl6p8"
              />
              <h3 className="text-xl font-bold font-space-grotesk mb-2">Omni-Channel CRM</h3>
              <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
                A robust management system for logistics companies featuring real-time fleet GPS tracking and route optimization.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-surface-container-low text-primary text-[10px] font-bold rounded uppercase">CodeIgniter 4</span>
                <span className="px-2 py-1 bg-surface-container-low text-primary text-[10px] font-bold rounded uppercase">Vue.js</span>
                <span className="px-2 py-1 bg-surface-container-low text-primary text-[10px] font-bold rounded uppercase">Redis</span>
              </div>
            </div>
          </div>
        </section>

        {/* Achievement Timeline */}
        <section className="bg-surface-container-low py-24" id="timeline">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black font-space-grotesk text-on-surface tracking-tight">Milestones</h2>
              <div className="w-12 h-1 bg-primary mx-auto mt-4"></div>
            </div>
            <div className="relative">
              {/* The Track */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-surface-container-high -translate-x-1/2"></div>
              {/* Milestone 1 */}
              <div className="relative flex items-center mb-16 group">
                <div className="hidden md:block w-1/2 pr-12 text-right">
                  <span className="text-primary font-bold font-space-grotesk block text-sm mb-1 uppercase tracking-widest">January 2024</span>
                  <h4 className="text-xl font-bold">Informatics Capstone</h4>
                  <p className="text-on-surface-variant text-sm mt-2">Started final year specialization in Advanced Machine Learning and Neural Networks.</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary border-4 border-surface z-10 flex-shrink-0 absolute left-4 md:static md:translate-x-0 group-hover:scale-125 transition-transform"></div>
                <div className="md:w-1/2 pl-12 md:pl-12 ml-10 md:ml-0 text-left">
                  <div className="md:hidden">
                    <span className="text-primary font-bold font-space-grotesk block text-sm mb-1 uppercase tracking-widest">January 2024</span>
                    <h4 className="text-xl font-bold">Informatics Capstone</h4>
                    <p className="text-on-surface-variant text-sm mt-2">Started final year specialization in Advanced Machine Learning and Neural Networks.</p>
                  </div>
                  <div className="hidden md:block p-4 bg-surface-container-lowest rounded-lg border-l-4 border-primary shadow-sm">
                    <p className="text-xs font-bold text-primary italic">Status: Ongoing</p>
                  </div>
                </div>
              </div>
              {/* Milestone 2 */}
              <div className="relative flex items-center mb-16 group">
                <div className="hidden md:block w-1/2 pr-12 text-right">
                  <div className="p-4 bg-surface-container-lowest rounded-lg border-r-4 border-primary shadow-sm">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                    <p className="text-xs font-bold text-primary mt-1">Certified Developer</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary border-4 border-surface z-10 flex-shrink-0 absolute left-4 md:static md:translate-x-0 group-hover:scale-125 transition-transform"></div>
                <div className="md:w-1/2 pl-12 md:pl-12 ml-10 md:ml-0 text-left">
                  <span className="text-primary font-bold font-space-grotesk block text-sm mb-1 uppercase tracking-widest">August 2023</span>
                  <h4 className="text-xl font-bold">Google Data Analytics Professional</h4>
                  <p className="text-on-surface-variant text-sm mt-2">Completed 6-month intensive specialization focusing on R programming and SQL data cleaning.</p>
                </div>
              </div>
              {/* Milestone 3 */}
              <div className="relative flex items-center group">
                <div className="hidden md:block w-1/2 pr-12 text-right">
                  <span className="text-primary font-bold font-space-grotesk block text-sm mb-1 uppercase tracking-widest">March 2023</span>
                  <h4 className="text-xl font-bold">Hackathon Winner</h4>
                  <p className="text-on-surface-variant text-sm mt-2">First place at Global Tech-for-Good challenge for building an accessibility browser extension.</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary border-4 border-surface z-10 flex-shrink-0 absolute left-4 md:static md:translate-x-0 group-hover:scale-125 transition-transform"></div>
                <div className="md:w-1/2 pl-12 md:pl-12 ml-10 md:ml-0 text-left">
                  <div className="md:hidden">
                    <span className="text-primary font-bold font-space-grotesk block text-sm mb-1 uppercase tracking-widest">March 2023</span>
                    <h4 className="text-xl font-bold">Hackathon Winner</h4>
                    <p className="text-on-surface-variant text-sm mt-2">First place at Global Tech-for-Good challenge for building an accessibility browser extension.</p>
                  </div>
                  <div className="hidden md:block p-4 bg-surface-container-lowest rounded-lg border-l-4 border-primary shadow-sm">
                    <p className="text-xs font-bold text-primary italic">Project: AccessBridge</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Tech Stack */}
        <section className="py-24 max-w-7xl mx-auto px-6" id="skills">
          <h2 className="text-center text-4xl font-black font-space-grotesk text-on-surface mb-16 tracking-tight">The Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-8 bg-surface-container rounded-xl hover:bg-primary transition-all group">
              <span className="material-symbols-outlined text-4xl text-primary group-hover:text-on-primary transition-colors">deployed_code</span>
              <h3 className="mt-4 font-bold font-space-grotesk group-hover:text-on-primary">Next.js</h3>
            </div>
            <div className="flex flex-col items-center p-8 bg-surface-container rounded-xl hover:bg-primary transition-all group">
              <span className="material-symbols-outlined text-4xl text-primary group-hover:text-on-primary transition-colors">database</span>
              <h3 className="mt-4 font-bold font-space-grotesk group-hover:text-on-primary">CodeIgniter 4</h3>
            </div>
            <div className="flex flex-col items-center p-8 bg-surface-container rounded-xl hover:bg-primary transition-all group">
              <span className="material-symbols-outlined text-4xl text-primary group-hover:text-on-primary transition-colors">terminal</span>
              <h3 className="mt-4 font-bold font-space-grotesk group-hover:text-on-primary">Python</h3>
            </div>
            <div className="flex flex-col items-center p-8 bg-surface-container rounded-xl hover:bg-primary transition-all group">
              <span className="material-symbols-outlined text-4xl text-primary group-hover:text-on-primary transition-colors">rebase</span>
              <h3 className="mt-4 font-bold font-space-grotesk group-hover:text-on-primary">Git</h3>
            </div>
          </div>
        </section>

        {/* Contact Me */}
        <section className="py-24 bg-surface-container-high" id="contact">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-black font-space-grotesk text-on-surface tracking-tighter mb-6">Let's build <br/><span className="text-primary">something new.</span></h2>
              <p className="text-lg text-on-surface-variant mb-12">I'm currently looking for full-time opportunities and collaborative projects in the web and data space.</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">mail</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-on-surface-variant uppercase">Email Me</p>
                    <p className="font-bold">hello@rhey.lab</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-on-surface-variant uppercase">Current Base</p>
                    <p className="font-bold">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-12">
                <a className="w-12 h-12 bg-surface-container-lowest rounded-full flex items-center justify-center hover:-translate-y-1 transition-transform shadow-sm" href="#">
                  <img 
                    alt="GitHub" 
                    className="w-6 h-6 grayscale" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl6x5PepfA6L1ZNmwfi-dzxTZfTldsUWzB6JNEF9riwTCUc4AVVEhIuk9HsGE5HM1QvUf5KbdDl-jFA25MYOcg7vv_NMJUjo25fOQ5GuqRzbNyDPShBcXcKoDkcdnABHwpN9kFX3yESQf_FknKcp-qXo_7Q_aXTKJ_NGjTYTO2lXTq6SLQ-pU7sjHoD7JHNM9MCLD4nJS5PR69y5rJhCn-x0Iud268u77ap19aozxtlDygNthGZ_xKYCKhiGz592FNR7VVlvjBYt8"
                  />
                </a>
                <a className="w-12 h-12 bg-surface-container-lowest rounded-full flex items-center justify-center hover:-translate-y-1 transition-transform shadow-sm" href="#">
                  <img 
                    alt="LinkedIn" 
                    className="w-6 h-6 grayscale" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbCa6ZPfNcvqbrfSeUDrNHYlOqHHaxFLfO0f1pdbEKLLi3ldOUbHhAh6YW3O80OADyIKMxxYdg-QFK3Q6Z6bcWJDfPj9ci3Naz-aU6ynR-zDgYyhy-v1qY_28jyb6UnMBO8mtr5NFmxaFPZfLtW3JU2kY-BPUY5nxvnjjC3vFrqnGRDu6n3-1D7VktMqqdjRgqY4AAmTo4RkMXkn30RunNUk8aVVh43T30exeRT2apVfUs2Rz7zixD-8xfxynbdHOTOpSAIEnZXGs"
                  />
                </a>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-xl shadow-on-surface/5">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase ml-1">Full Name</label>
                    <input className="w-full px-4 py-3 bg-surface-container-low border-none rounded-md focus:ring-2 focus:ring-primary font-medium" placeholder="John Doe" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-on-surface-variant uppercase ml-1">Email Address</label>
                    <input className="w-full px-4 py-3 bg-surface-container-low border-none rounded-md focus:ring-2 focus:ring-primary font-medium" placeholder="john@example.com" type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase ml-1">Subject</label>
                  <input className="w-full px-4 py-3 bg-surface-container-low border-none rounded-md focus:ring-2 focus:ring-primary font-medium" placeholder="Project Inquiry" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase ml-1">Message</label>
                  <textarea className="w-full px-4 py-3 bg-surface-container-low border-none rounded-md focus:ring-2 focus:ring-primary font-medium" placeholder="Your message here..." rows={5}></textarea>
                </div>
                <button className="w-full py-4 bg-primary text-on-primary font-bold rounded-md hover:opacity-95 transition-opacity shadow-lg shadow-primary/20" type="submit">
                  Send Transmission
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-100 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 max-w-7xl mx-auto gap-6">
          <div className="font-space-grotesk font-bold text-slate-900 text-xl">RHEY.LAB</div>
          <div className="font-inter text-sm text-slate-500 text-center md:text-left">
            © 2024 Rhey. Designed with Atmospheric Precision.
          </div>
          <div className="flex gap-6">
            <a className="text-slate-500 hover:text-blue-600 font-medium transition-transform hover:-translate-y-1" href="#">LinkedIn</a>
            <a className="text-slate-500 hover:text-blue-600 font-medium transition-transform hover:-translate-y-1" href="#">GitHub</a>
            <a className="text-slate-500 hover:text-blue-600 font-medium transition-transform hover:-translate-y-1" href="#">Twitter</a>
            <a className="text-slate-500 hover:text-blue-600 font-medium transition-transform hover:-translate-y-1" href="#">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
