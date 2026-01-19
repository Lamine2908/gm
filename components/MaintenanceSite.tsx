
import React from 'react';

const MaintenanceSite: React.FC = () => {
  const services = [
    { name: "Mécanique", icon: "fa-gears", desc: "Expertise complète en maintenance et réparation mécanique industrielle." },
    { name: "Chaudronnerie", icon: "fa-hammer", desc: "Fabrication et réparation de structures métalliques de précision." },
    { name: "Électricité", icon: "fa-bolt", desc: "Installation, maintenance et mise en conformité électrique." },
    { name: "Tuyauterie", icon: "fa-toolbox", desc: "Maintenance de réseaux de fluides et soudure industrielle." },
    { name: "Nettoyage Industriel", icon: "fa-broom", desc: "Services de nettoyage spécialisés pour environnements techniques." },
    { name: "Génie Civil", icon: "fa-hard-hat", desc: "Interventions structurelles et travaux de construction générale." },
    { name: "Entretien Général", icon: "fa-wrench", desc: "Solutions globales pour le maintien de vos infrastructures." },
    { name: "Prestation de Services", icon: "fa-briefcase", desc: "Accompagnement sur mesure et conseil en maintenance." }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
            alt="Maintenance industrielle" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h2 className="text-amber-400 font-bold tracking-widest uppercase mb-4">Depuis 2016 au Sénégal</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">GENERAL MAINTENANCE</h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light">
            Votre partenaire de confiance pour tous travaux d'entretien et de maintenance industrielle.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg transform hover:-translate-y-1">
              Demander un Devis
            </a>
            <a href="#services" className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-bold transition-all">
              Nos Services
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-xl flex items-center border-b-4 border-amber-500">
            <div className="bg-amber-100 p-4 rounded-full mr-6 text-amber-600">
              <i className="fas fa-calendar-alt text-2xl"></i>
            </div>
            <div>
              <h4 className="text-3xl font-bold">2016</h4>
              <p className="text-slate-500 font-medium">Année de Fondation</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-xl flex items-center border-b-4 border-blue-600">
            <div className="bg-blue-100 p-4 rounded-full mr-6 text-blue-600">
              <i className="fas fa-users text-2xl"></i>
            </div>
            <div>
              <h4 className="text-3xl font-bold">L. Ndiaye</h4>
              <p className="text-slate-500 font-medium">Fondateur Expert</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-xl flex items-center border-b-4 border-slate-800">
            <div className="bg-slate-100 p-4 rounded-full mr-6 text-slate-800">
              <i className="fas fa-map-marker-alt text-2xl"></i>
            </div>
            <div>
              <h4 className="text-3xl font-bold">Thiès</h4>
              <p className="text-slate-500 font-medium">Siège Social, Sénégal</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nos Domaines d'Intervention</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-amber-400 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl">
              <div className="text-blue-600 mb-6 group-hover:text-amber-500 transition-colors">
                <i className={`fas ${service.icon} text-4xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{service.name}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">À Propos de General Maintenance</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Fondée le 07 octobre 2016 par M. **Lamine Ndiaye**, GENERAL MAINTENANCE s'est imposée comme une référence incontournable du secteur industriel à Thiès et dans tout le Sénégal.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Nous intervenons sur tous types de chantiers, de la mécanique de précision à la chaudronnerie lourde, en passant par l'électricité industrielle et le génie civil. Notre engagement repose sur la qualité, la réactivité et la sécurité.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="fas fa-check-circle text-amber-500 mt-1 mr-4"></i>
                <span className="font-semibold">Savoir-faire 100% Sénégalais</span>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-amber-500 mt-1 mr-4"></i>
                <span className="font-semibold">Respect des normes de sécurité industrielles</span>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-amber-500 mt-1 mr-4"></i>
                <span className="font-semibold">Engagement pour la satisfaction client</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1000" 
              alt="Équipe technique" 
              className="rounded-2xl shadow-2xl z-10 relative"
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-amber-500 rounded-2xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 max-w-7xl mx-auto px-4">
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/3 p-12 bg-blue-900 text-white">
            <h3 className="text-2xl font-bold mb-8">Contactez-nous</h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-amber-400 mt-1 mr-6 text-xl"></i>
                <div>
                  <h5 className="font-bold mb-1">Siège Social</h5>
                  <p className="text-blue-100">Thiès, Quartier HLM<br/>Route de Dakar, Sénégal</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-phone-alt text-amber-400 mt-1 mr-6 text-xl"></i>
                <div>
                  <h5 className="font-bold mb-1">Téléphone</h5>
                  <p className="text-blue-100">+221 33 XXX XX XX<br/>+221 77 XXX XX XX</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-envelope text-amber-400 mt-1 mr-6 text-xl"></i>
                <div>
                  <h5 className="font-bold mb-1">Email</h5>
                  <p className="text-blue-100">contact@generalmaintenance.sn</p>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-12 border-t border-blue-800">
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-all"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-all"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3 p-12 bg-white">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Nom Complet</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" placeholder="Votre nom" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" placeholder="votre@email.com" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700">Sujet de Maintenance</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all">
                  <option>Mécanique Industrielle</option>
                  <option>Électricité / Électronique</option>
                  <option>Chaudronnerie / Tuyauterie</option>
                  <option>Nettoyage Industriel</option>
                  <option>Autre Prestation</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all" placeholder="Décrivez votre besoin..."></textarea>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-amber-600 transition-all shadow-lg transform hover:-translate-y-1">
                  Envoyer ma Demande
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 text-center border-t border-slate-900">
        <p className="mb-4">© {new Date().getFullYear()} GENERAL MAINTENANCE - Tous droits réservés.</p>
        <p className="text-xs font-medium uppercase tracking-[0.2em]">Sénégal • Thiès • Excellence Industrielle</p>
      </footer>
    </div>
  );
};

export default MaintenanceSite;
