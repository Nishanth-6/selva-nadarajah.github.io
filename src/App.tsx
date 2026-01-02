import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import profilePhoto from './assets/profile.jpg';
import uicCampus from './assets/UIC-image-banner.jpeg';

export default function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white text-slate-900">
        {/* Header */}
        <header className="border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-8 py-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl">
                <span className="font-normal">Selvaprabu </span>
                <span className="font-bold">Nadarajah</span>
              </h1>
            </div>

            {/* Navigation */}
            <nav className="flex items-center gap-6">
              <button
                onClick={() => setActiveTab('about')}
                className={`transition-colors text-sm ${
                  activeTab === 'about'
                    ? 'text-slate-900'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                About
              </button>
              <button
                onClick={() => setActiveTab('research')}
                className={`transition-colors text-sm ${
                  activeTab === 'research'
                    ? 'text-slate-900'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Research
              </button>
              <button
                onClick={() => setActiveTab('publications')}
                className={`transition-colors text-sm ${
                  activeTab === 'publications'
                    ? 'text-slate-900'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Publications
              </button>
              <button
                onClick={() => setActiveTab('teaching')}
                className={`transition-colors text-sm ${
                  activeTab === 'teaching'
                    ? 'text-slate-900'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Teaching
              </button>
              <a href="#" className="text-slate-500 hover:text-slate-700 text-sm">
                CV
              </a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-slate-500 hover:text-slate-700 ml-2"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-8 py-12">
          {/* About Tab */}
          {activeTab === 'about' && (
            <div>
              {/* Full-width banner with UIC campus background */}
              <div className="relative -mx-8 -mt-12 mb-12 h-48 overflow-hidden">
                <img
                  src={uicCampus}
                  alt="UIC Campus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>
              </div>

              {/* Hero section with intro text and photo */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* Left column - intro text (2/3 width) */}
                <div className="md:col-span-2 space-y-6">
                  <h1 className="text-3xl">
                    <span className="font-normal text-slate-600">Selvaprabu (Selva) </span>
                    <span className="font-bold text-slate-900">Nadarajah</span>
                  </h1>
                  
                  <div className="text-slate-700 leading-relaxed max-w-prose space-y-4 text-base">
                    <p>
                      I am an Associate Professor (with tenure) of Information and Decision Sciences and Bielinski Family Endowed Scholar at the{' '}
                      <a href="https://business.uic.edu/" className="text-blue-600 hover:underline">
                        College of Business Administration
                      </a>
                      , University of Illinois at Chicago. I also serve as the Decision Intelligence R&D Lead at the{' '}
                      <a href="https://dpi.uillinois.edu/" className="text-blue-600 hover:underline">
                        Discovery Partners Institute
                      </a>{' '}
                      (Innovation hub of the University of Illinois System), and work with{' '}
                      <a href="https://www.anl.gov/" className="text-blue-600 hover:underline">
                        Argonne National Laboratory
                      </a>
                      . My research areas include (see{' '}
                      <a href="#" className="text-blue-600 hover:underline">
                        this link
                      </a>{' '}
                      for more details):
                    </p>
                    
                    <p>
                      I have been fortunate to be recognized as a Global Scholar for international research, scholarship, and creative activity by the University of Illinois System, the 2024 INFORMS Harvey J. Greenberg Research Award, the 2021 Commodity and Energy Markets Association (CEMA) Best Paper Award, the 2020 INFORMS ENRE Young Researcher Prize, the Best Overall Paper at the 2020 NeurIPS Workshop on Tackling Climate Change with Machine Learning, the 2014 William L. Cooper Dissertation Award, and the 2013 Egon Balas Best Paper Award.
                    </p>
                  </div>
                </div>

                {/* Right column - photo and email (1/3 width) */}
                <aside className="flex flex-col items-center md:items-start">
                  <img
                    src={profilePhoto}
                    alt="Selvaprabu Nadarajah"
                    className="w-full max-w-[240px] rounded-3xl mb-3 shadow-lg"
                  />
                  <div className="text-sm">
                    <p className="text-slate-600 mb-1 font-medium">Email:</p>
                    <a
                      href="mailto:selvan@uic.edu"
                      className="text-blue-600 hover:underline"
                    >
                      selvan@uic.edu
                    </a>
                  </div>
                </aside>
              </div>

              {/* Research Cards */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-slate-900">Research Areas</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Card 1 */}
                  <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                    <h3 className="text-lg font-semibold mb-3 text-slate-900">Self-adapting Approximations</h3>
                    <p className="text-slate-700 text-sm mb-4 leading-relaxed">
                      The solution of large scale Markov decision processes using algorithms that improve accessibility to non-technical domain experts and resource-constrained organizations by automating learning from data, underlying problem structure, and instance difficulty.
                    </p>
                    <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
                      Learn more →
                    </a>
                  </div>

                  {/* Card 2 */}
                  <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                    <h3 className="text-lg font-semibold mb-3 text-slate-900">Energy Real Options</h3>
                    <p className="text-slate-700 text-sm mb-4 leading-relaxed">
                      The operations, valuation, and risk management of commodity and energy conversion assets (e.g., production, storage, transport), including renewable energy.
                    </p>
                    <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
                      Learn more →
                    </a>
                  </div>

                  {/* Card 3 */}
                  <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                    <h3 className="text-lg font-semibold mb-3 text-slate-900">Energy and Computing Nexus</h3>
                    <p className="text-slate-700 text-sm mb-4 leading-relaxed">
                      The exploration of how energy demands intensified by computing growth (e.g., data centers) can be met, and how computing advances (e.g., LLMs) can accelerate the sustainable energy transformation.
                    </p>
                    <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
                      Learn more →
                    </a>
                  </div>
                </div>
              </div>

              {/* Note to Collaborators */}
              <div className="mb-12 pb-8 border-b border-slate-200">
                <h2 className="text-2xl font-semibold mb-4 text-slate-900">Note to Collaborators</h2>
                <p className="text-slate-700 leading-relaxed max-w-3xl">
                  I welcome collaborations from both academia and industry. Feel free to email me. If you are a graduate student (Masters or PhD) interested in working with me, please read{' '}
                  <a href="#" className="text-blue-600 hover:underline">
                    this link
                  </a>{' '}
                  before sending an email.
                </p>
              </div>

              {/* My Background Section */}
              <div className="mb-12 pb-8 border-b border-slate-200">
                <h2 className="text-2xl font-semibold mb-4 text-slate-900">My Background</h2>
                <div className="space-y-4 text-slate-700 leading-relaxed max-w-3xl">
                  <p>
                    Before joining UIC, I did my PhD and MS in Operations Research at the{' '}
                    <a href="https://www.cmu.edu/tepper/" className="text-blue-600 hover:underline">
                      Tepper School of Business, Carnegie Mellon University
                    </a>
                    . My journey to North America started at the{' '}
                    <a href="https://uwaterloo.ca/" className="text-blue-600 hover:underline">
                      University of Waterloo
                    </a>
                    , where I obtained an MASc in Operations Research and learnt the importance of asking "
                    <a href="https://en.wikipedia.org/wiki/Five_whys" className="text-blue-600 hover:underline">
                      Why Not?
                    </a>
                    ".
                  </p>
                  <p>
                    I was born in{' '}
                    <a href="https://www.incredibleindia.org/" className="text-blue-600 hover:underline">
                      incredible India
                    </a>{' '}
                    and grew up in the beautiful island of{' '}
                    <a href="https://www.srilanka.travel/" className="text-blue-600 hover:underline">
                      Sri Lanka
                    </a>{' '}
                    (a.k.a. the pearl of the Indian ocean) before heading back to Chennai for my undergraduate studies at the{' '}
                    <a href="https://www.iitm.ac.in/" className="text-blue-600 hover:underline">
                      Indian Institute of Technology Madras
                    </a>
                    . I have enjoyed consulting with companies in the retail, high technology, and energy industries along the way.
                  </p>
                </div>
              </div>

              {/* Education Section */}
              <div className="mb-12 pb-8 border-b border-slate-200">
                <h2 className="text-2xl font-semibold mb-6 text-slate-900">Education</h2>
                <div className="space-y-4 text-slate-700 max-w-3xl">
                  <div>
                    <p className="font-medium text-slate-900">PhD in Operations Research</p>
                    <p className="text-slate-600">
                      Tepper School of Business, Carnegie Mellon University
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">MS in Operations Research</p>
                    <p className="text-slate-600">
                      Tepper School of Business, Carnegie Mellon University
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">MASc in Operations Research</p>
                    <p className="text-slate-600">University of Waterloo</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">BTech</p>
                    <p className="text-slate-600">
                      Indian Institute of Technology Madras
                    </p>
                  </div>
                </div>
              </div>

              {/* Selected Awards & Honors */}
              <div className="pb-8">
                <h2 className="text-2xl font-semibold mb-6 text-slate-900">Selected Awards & Honors</h2>
                <div className="space-y-3 text-slate-700 max-w-3xl">
                  <div className="flex gap-6">
                    <span className="text-slate-500 w-16 flex-shrink-0 font-medium">2024</span>
                    <p>
                      Global Scholar for international research, scholarship, and creative activity by the University of Illinois Chicago
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <span className="text-slate-500 w-16 flex-shrink-0 font-medium">2024</span>
                    <p>INFORMS Harvey J. Greenberg Research Award</p>
                  </div>
                  <div className="flex gap-6">
                    <span className="text-slate-500 w-16 flex-shrink-0 font-medium">2021</span>
                    <p>
                      Commodity and Energy Markets Association (CEMA) Best Paper Award
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <span className="text-slate-500 w-16 flex-shrink-0 font-medium">2020</span>
                    <p>INFORMS ENRE Young Researcher Prize</p>
                  </div>
                  <div className="flex gap-6">
                    <span className="text-slate-500 w-16 flex-shrink-0 font-medium">2020</span>
                    <p>
                      Best Overall Paper at the NeurIPS Workshop on Tackling Climate Change with Machine Learning
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <span className="text-slate-500 w-16 flex-shrink-0 font-medium">2014</span>
                    <p>William L. Cooper Dissertation Award</p>
                  </div>
                  <div className="flex gap-6">
                    <span className="text-slate-500 w-16 flex-shrink-0 font-medium">2013</span>
                    <p>Egon Balas Best Paper Award</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Research Tab */}
          {activeTab === 'research' && (
            <div>
              <h1 className="text-4xl mb-8 font-semibold">
                <span className="font-normal text-slate-600">Research</span>
              </h1>

              <div className="space-y-8 text-slate-700 leading-relaxed">
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-slate-900">Research Overview</h2>
                  <p>
                    My research program operates at the intersection of large-scale
                    computing and energy. I develop self-adapting approximations
                    of Markov decision processes, which are the foundational models
                    underpinning reinforcement learning. These methods automate
                    critical steps in model selection and solution guidance and
                    have been applied to manage production and storage energy real
                    options, as well as emerging procurement and capacity
                    planning problems.
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <h2 className="text-2xl font-semibold mb-6 text-slate-900">Research Areas</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-slate-900">Self-adapting Approximations</h3>
                      <p>
                        Algorithms for large Markov decision processes that improve
                        accessibility to nontechnical domain experts and
                        resource-constrained organizations by automating learning
                        from data, underlying problem structure, and instance
                        difficulty.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-slate-900">Energy Real Options</h3>
                      <p>
                        Operations, valuation, and risk management of commodity and
                        energy conversion assets, including renewable energy and
                        storage.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-slate-900">Energy and Computing Nexus</h3>
                      <p>
                        Exploration of how energy demands intensified by computing
                        growth, such as data centers and large AI models, can be
                        met, and how computing advances can accelerate the
                        sustainable energy transformation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <h2 className="text-2xl font-semibold mb-4 text-slate-900">Collaborations</h2>
                  <p className="mb-6">
                    I welcome collaborations from both academia and industry. If
                    you are a graduate student (Masters or PhD) interested in
                    working with me, please review my current research areas and
                    recent publications before sending an email.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-slate-900">Argonne National Laboratory</p>
                      <p className="text-slate-600">
                        Energy systems research and computational methods
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Discovery Partners Institute</p>
                      <p className="text-slate-600">
                        Innovation hub of the University of Illinois System
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Publications Tab */}
          {activeTab === 'publications' && (
            <div>
              <h1 className="text-4xl mb-8 font-semibold">
                <span className="font-normal text-slate-600">Publications</span>
              </h1>

              <div className="space-y-8 text-slate-700 leading-relaxed">
                <div>
                  <p className="mb-6">
                    For a complete and up to date list of publications, please
                    visit the links below.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="#" className="text-blue-600 hover:underline">
                      Google Scholar
                    </a>
                    <span className="text-slate-300">|</span>
                    <a href="#" className="text-blue-600 hover:underline">
                      ResearchGate
                    </a>
                    <span className="text-slate-300">|</span>
                    <a href="#" className="text-blue-600 hover:underline">
                      ORCID
                    </a>
                    <span className="text-slate-300">|</span>
                    <a href="#" className="text-blue-600 hover:underline">
                      SSRN
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <h2 className="text-2xl font-semibold mb-6 text-slate-900">Research Themes</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-slate-900">
                        Decision Performance, Computational Efficiency, and Access
                      </h3>
                      <p>
                        Developing methods that balance decision quality with
                        computational tractability, making advanced decision tools
                        accessible to practitioners.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-slate-900">
                        Structuring and Selecting Approximations
                      </h3>
                      <p>
                        Guiding the selection of Markov decision process
                        approximations to improve solution quality and efficiency.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-slate-900">
                        Energy Investment and Operations
                      </h3>
                      <p>
                        Applications to renewable energy, storage, and sustainable
                        energy transformation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Teaching Tab */}
          {activeTab === 'teaching' && (
            <div>
              <h1 className="text-4xl mb-8 font-semibold">
                <span className="font-normal text-slate-600">Teaching</span>
              </h1>

              <div className="space-y-8 text-slate-700 leading-relaxed">
                <div>
                  <p className="mb-4">
                    I teach courses in decision sciences, operations research, and
                    analytics at both undergraduate and graduate levels.
                  </p>
                  <p>
                    For current course information and syllabi, please check the
                    UIC course catalog or contact me directly.
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <h2 className="text-2xl font-semibold mb-4 text-slate-900">Students</h2>
                  <p className="mb-6">
                    I welcome motivated students interested in working on problems
                    at the intersection of AI, energy systems, and sustainability.
                    If you are interested in working with me, please see the
                    information on my research page regarding collaborations.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-slate-900">PhD Students</p>
                      <p className="text-slate-600">
                        Supervising doctoral research in decision sciences and
                        operations research
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Master's Students</p>
                      <p className="text-slate-600">
                        Advising on thesis and research projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-200 mt-16">
          <div className="max-w-4xl mx-auto px-8 py-8">
            <p className="text-slate-500 text-center text-sm">
              © 2024 Selvaprabu (Selva) Nadarajah | University of Illinois Chicago
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}