import React from 'react';

// --- КОМПОНЕНТИ (тепер використовують класи Tailwind) ---

const Header = () => (
  <header className="relative bg-slate-900 text-white py-16 px-4 text-center border-b-4 border-blue-600 shadow-2xl">
    {/* Градієнтна лінія зверху */}
    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600"></div>

    <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4 drop-shadow-md">
      Котляр Дмитро
    </h1>
    <p className="text-blue-400 text-sm md:text-base font-bold uppercase tracking-[0.4em] opacity-90">
      Python Developer | Cybersecurity | OSINT
    </p>
  </header>
);

const Section = ({ title, icon, children }) => (
  <section className="p-8 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
    <div className="flex items-center gap-3 mb-6">
      <span className="text-blue-600">{icon}</span>
      <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight">{title}</h2>
    </div>
    <div className="text-slate-600 leading-relaxed space-y-4">
      {children}
    </div>
  </section>
);

const ExperienceCard = ({ title, desc }) => (
  <div className="group p-5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300">
    <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">{title}</h3>
    <p className="text-sm text-slate-500">{desc}</p>
  </div>
);

export default function App() {
  const skills = [
    { n: "Python Dev", d: "Автоматизація скриптів, робота з API, Tkinter GUI" },
    { n: "Malware Analysis", d: "Створення YARA правил, аналіз вразливостей" },
    { n: "Cybersecurity", d: "GPG шифрування, мережева безпека" },
    { n: "Web Technologies", d: "React, Tailwind CSS v4, Vite" }
  ];

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4 selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-2xl shadow-slate-300/50 overflow-hidden border border-white">

        <Header />

        <main>
          <Section
            title="Про мене"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
          >
            <p className="text-lg">
              Студент 3-го курсу <span className="font-bold text-slate-900">НУ «Львівська політехніка»</span>.
              Спеціалізуюся на розробці інструментів для кібербезпеки. Працюю над автоматизацією процесів аналізу даних та захисту інформації.
            </p>
          </Section>

          <Section
            title="Освіта"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Кібербезпека (Бакалавр)</h3>
                <p className="text-slate-500 font-medium">Група КБ-304</p>
              </div>
              <span className="px-4 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider border border-blue-100">
                2023 — Тепер
              </span>
            </div>
          </Section>

          <Section
            title="Навички"
            icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <ExperienceCard key={index} title={skill.n} desc={skill.d} />
              ))}
            </div>
          </Section>
        </main>

        <footer className="bg-slate-50 p-10 text-center border-t border-slate-100">
          <div className="mb-4 flex justify-center gap-6">
             <span className="text-slate-900 font-bold hover:text-blue-600 cursor-pointer transition-colors">dima09057@gmail.com</span>
          </div>
          <p className="text-sm text-slate-400 italic">
            © 2026 Лабораторна робота №3 • Tailwind CSS v4
          </p>
        </footer>
      </div>
    </div>
  );
}