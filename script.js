// ================= STATIC PORTFOLIO DATA (MULTI-LANGUAGE) =================
const portfolioData = {
  // PORTUGUES // 
  pt: {
    publications: [
      {
        id: 3,
        title: "Secondary analysis of feed intake, calcemia, and assessment of immune function in the subsequent periparturient period of cows that responded to high- and low-energy diets during late lactation",
        authors: "T.O. Cunha, P.L.J. Monteiro, Jr., W.S. Frizzarini, N. Teixeira, L.C. Ribeiro, R.D. Shaver, M.Z. Toledo, J.P.N. Martins, M.C. Wiltbank, L.L. Hernandez",
        venue: "Journal of Dairy Science",
        year: 2026,
        category: "artigo em periódico",
        citations: 24,
        pdfUrl: "https://www.journalofdairyscience.org/action/showPdf?pii=S0022-0302%2825%2901018-5",
        doi: "https://doi.org/10.3168/jds.2025-26343",
        bibtex: `@ARTICLE{Cunha2026-il,
        title     = "Secondary analysis of feed intake, calcemia, and assessment of immune function in the subsequent periparturient period of cows that responded to high- and low-energy diets during late lactation",
        author = "Cunha, T. O. and Monteiro, Jr., P. L. J. and Frizzarini, W. S. and Teixeira, N. and Ribeiro, L. C. and Shaver, R. D. and Toledo, M. Z. and Martins, J. P. N. and Wiltbank, M. C. and Hernandez, L. L.", 
        journal   = "J. Dairy Sci.",
        publisher = "American Dairy Science Association",
        volume    =  109,
        number    =  3,
        pages     = "2989--2999",
        month     =  mar,
        year      =  2026
}`
      },
      {
        id: 1,
        title: "Near-infrared spectroscopy analysis to predict urinary allantoin in dairy cows",
        authors: "Leonardo A.C. Ribeiro, Guilherme L. Menezes, Tiago Bresolin, Sebastian I. Arriola Apelo, João R. R. Dórea",
        venue: "JDS Communications",
        year: 2025,
        category: "comunicação curta",
        citations: 3,
        pdfUrl: "https://www.jdscommun.org/action/showPdf?pii=S2666-9102%2824%2900190-X",
        doi: "https://doi.org/10.3168/jdsc.2024-0641",
        bibtex: `@ARTICLE{Ribeiro2025-ut,
          title     = "Near-infrared spectroscopy analysis to predict urinary allantoin in dairy cows",
          author    = "Ribeiro, Leonardo A C and Menezes, Guilherme L and Bresolin, Tiago and Arriola Apelo, Sebastian I and D{\'o}rea, Joao R R", 
          journal   = "JDS Commun.",
          publisher = "American Dairy Science Association",
          volume    =  6,
          number    =  2,
          pages     = "212--216",
          month     =  mar,
          year      =  2025
}`
      },
      {
        id: 2,
        title: "Disentangling data dependency using cross-validation strategies to evaluate prediction quality of cattle grazing activities using machine learning algorithms and wearable sensor data",
        authors: "Leonardo Augusto Coelho Ribeiro, Tiago Bresolin, Guilherme Jordão de Magalhães Rosa, Daniel Rume Casagrande, Marina de Arruda Camargo Danes, João Ricardo Rebouças Dórea",
        venue: "Journal of Animal Science",
        year: 2021,
        category: "artigo em periódico",
        citations: 28,
        pdfUrl: "https://academic.oup.com/jas/article-pdf/99/9/skab206/40307064/skab206.pdf",
        doi: "https://doi.org/10.1093/jas/skab206",
        bibtex: `@article{10.1093/jas/skab206,
        author = {Coelho Ribeiro, Leonardo Augusto and Bresolin, Tiago and Rosa, Guilherme Jordão de Magalhães and Rume Casagrande, Daniel and Danes, Marina de Arruda Camargo and Dórea, João Ricardo Rebouças},
        title = {Disentangling data dependency using cross-validation strategies to evaluate prediction quality of cattle grazing activities using machine learning algorithms and wearable sensor data},
        journal = {Journal of Animal Science},
        volume = {99},
        number = {9},
        pages = {skab206},
        year = {2021}
      }`
      }
    ],
    projects: [
      {
        title: "Projeto de Extensão Pré-Uni UFLA (2014-2017)",
        description: "Curso pré-vestibular gratuito em parceria com a Prefeitura Municipal de Lavras, oferecendo oportunidades para estudantes de escolas públicas em situação de vulnerabilidade socioeconômica.",
        tags: ["Pré-Uni", "ENEM", "PREUNI-UFLA"],
        link: "https://proeec.ufla.br/pre-uni",
        btnText: "Ver Repositório"
      },
      {
        title: "PROMEC - Programa de Mentoria (2014)",
        description: "Programa de mentoria para ingressantes na Universidade Federal de Lavras, desenhado para auxiliar os estudantes na adaptação acadêmica e hábitos de estudo.",
        tags: ["PROMEC", "UFLA"],
        link: "http://www.dnu.ufla.br/menu-extensao/promec",
        btnText: "Ver Repositório"
      }
    ],
    courses: [
      {
        code: ">",
        title: "Biologia",
        term: "2014-2015 (Ensino Médio)",
        description: "Aulas de biologia para o ensino médio no programa PREUNI-UFLA focado na preparação para o ENEM."
      },
      {
        code: ">",
        title: "Geografia & História",
        term: "2016-2017 (Ensino Médio)",
        description: "Aulas de geografia e história ministradas no programa PREUNI-UFLA."
      }
    ],
    news: [
      {
        date: "Fev 2025 - Atualmente",
        text: "<strong>Head de Controladoria - Grupo Umuarama, Cuiabá/MT</strong><br>Liderança da estratégia financeira, orçamentária e de controladoria do grupo, assegurando a integridade e precisão das informações financeiras.<br>Realizando a implementação de políticas de governança de dados e relatórios gerenciais avançados para suporte à tomada de decisão da diretoria executiva.<br>Com a otimização de processos contábeis e financeiros, unindo forte visão analítica (ciência de dados) à gestão de performance corporativa.</br>"
      },
      {
        date: "Fev 2024 - Ago 2024",
        text: "<strong>Agrifatto consultoria</strong> - <a href='http://agrifatto.com.br/' target='_blank' class='text-white'>http://agrifatto.com.br/</a><br>Retorno à empresa para atuar em análises avançadas de mercado bovino, elaboração de relatórios estratégicos para clientes e monitoramento de tendências de commodities.<br>Neste período, pude automatizar os relatórios com a coleta de dados desenvolendo scripts em python para a finalidade.</br>"
      },
      {
        date: "Ago 2021 - Dez 2023",
        text: "<strong>Mestrado em Ciência Animal - Universidade de Wisconsin, EUA</strong><br>Período o qual me dediquei aos estudos e desenvolvimento da minha pesquisa</br>"
      },
      {
        date: "Out 2020 - Jul 2021",
        text: "<strong>Rehagro Consultoria</strong> - <a href='https://rehagro.com.br/' target='_blank' class='text-white'>https://rehagro.com.br/</a><br>Empresa sólida de consultoria agroprecuária, no mercado há mais de 20 anos. Em que tive a oportunidade de ingressar como consultor técnico na equipe de gado de corte.</br>Durante o período na empresa pude aprimorar meus conhecimentos de gestão de propriedade rural e poder morar no Mato Grosso.</br>"
      },
      {
        date: "Jan 2018 - Fev 2020",
        text: "<strong>Mestrado em Zootecnia - UFLA</strong><br>Período o qual me dediquei aos estudos e desenvolvimento da minha pesquisa</br>"
      },
      {
        date: "Abr 2017 - Out 2017",
        text: "<strong>Agrifatto consultoria</strong> - <a href='http://agrifatto.com.br/' target='_blank' class='text-white'>http://agrifatto.com.br/</a><br>Empresa de consultoria de mercado bovino, no qual tive a oportunidade de contribuir na elaboração dos relatórios aos clientes.</br>"
      },
      {
        date: "Jan 2016 - Fev 2017",
        text: "<strong>Centro de Inteligência em Mercados - CIM/UFLA</strong> - <a href='http://www.cim.ufla.br/' target='_blank' class='text-white'>http://www.cim.ufla.br/</a><br>Centro dedicado para estudos de mercado no qual pude desenvolver minhas primeiras análises fundamentalistas e meus primeiros passos na análise gráfica, além de realizar as primeiras operaçÕes em simulador de contratos futuros. <br>Neste ambiente, pude comprendeender as varianças do mercado e as oscilações dos preços das commodities</br>"
      },
      {
        date: "Mai 2014 - Jan 2016",
        text: "<strong>Terra Jr consultoria UFLA</strong> - <a href='https://terrajr.com.br/' target='_blank' class='text-white'>https://terrajr.com.br/</a><br>Empresa júnior de consultoria da UFLA, em que tive a oportunidade de contribuir na reestruturação e de diversas consultorias aos produtores locais.</br>"
      },
      {
        date: "Abr 2012 - Jun 2014",
        text: "<strong>Grupo de Estudos em Genética e Melhoramento Animal</strong> <br>Grupo de estudo do departamento de zootecnia da UFLA no qual fui membro e coordernador de tecnologia. <br> Grupo sob supervisão da Profa. Sarah Laguna Conceição Meirelle"
      },
     {
        date: "Abr 2010 - Dez 2010",
        text: "<strong>Clinica Veterinária e Pet Shop Paraná - Goiânia/GO</strong> <br>Local onde tive o meu primeiro contato com a clinica veterinária de pequenos animais"
      }
    ],
    ui: {
      noPubs: "Nenhuma publicação encontrada.",
      citations: "Citações",
      copyAlert: "BibTeX copiado para a área de transferência!",
      msgSent: "Mensagem enviada com sucesso!",
      lang: "pt-BR"
    }
  },

  // ESPANOL // 
  es: {
    publications: [
      {
        id: 3,
        title: "Secondary analysis of feed intake, calcemia, and assessment of immune function in the subsequent periparturient period of cows that responded to high- and low-energy diets during late lactation",
        authors: "T.O. Cunha, P.L.J. Monteiro, Jr., W.S. Frizzarini, N. Teixeira, L.C. Ribeiro, R.D. Shaver, M.Z. Toledo, J.P.N. Martins, M.C. Wiltbank, L.L. Hernandez",
        venue: "Journal of Dairy Science",
        year: 2026,
        category: "artículo de revista",
        citations: 24,
        pdfUrl: "https://www.journalofdairyscience.org/action/showPdf?pii=S0022-0302%2825%2901018-5",
        doi: "https://doi.org/10.3168/jds.2025-26343",
        bibtex: `@ARTICLE{Cunha2026-il,
        title     = "Secondary analysis of feed intake, calcemia, and assessment of immune function in the subsequent periparturient period of cows that responded to high- and low-energy diets during late lactation",
        author = "Cunha, T. O. and Monteiro, Jr., P. L. J. and Frizzarini, W. S. and Teixeira, N. and Ribeiro, L. C. and Shaver, R. D. and Toledo, M. Z. and Martins, J. P. N. and Wiltbank, M. C. and Hernandez, L. L.", 
        journal   = "J. Dairy Sci.",
        publisher = "American Dairy Science Association",
        volume    =  109,
        number    =  3,
        pages     = "2989--2999",
        month     =  mar,
        year      =  2026
}`
      },
      {
        id: 1,
        title: "Near-infrared spectroscopy analysis to predict urinary allantoin in dairy cows",
        authors: "Leonardo A.C. Ribeiro, Guilherme L. Menezes, Tiago Bresolin, Sebastian I. Arriola Apelo, João R. R. Dórea",
        venue: "JDS Communications",
        year: 2025,
        category: "comunicación corta",
        citations: 3,
        pdfUrl: "https://www.jdscommun.org/action/showPdf?pii=S2666-9102%2824%2900190-X",
        doi: "https://doi.org/10.3168/jdsc.2024-0641",
        bibtex: `@ARTICLE{Ribeiro2025-ut,
          title     = "Near-infrared spectroscopy analysis to predict urinary allantoin in dairy cows",
          author    = "Ribeiro, Leonardo A C and Menezes, Guilherme L and Bresolin, Tiago and Arriola Apelo, Sebastian I and D{\'o}rea, Joao R R", 
          journal   = "JDS Commun.",
          publisher = "American Dairy Science Association",
          volume    =  6,
          number    =  2,
          pages     = "212--216",
          month     =  mar,
          year      =  2025
}`
      },
      {
        id: 2,
        title: "Disentangling data dependency using cross-validation strategies to evaluate prediction quality of cattle grazing activities using machine learning algorithms and wearable sensor data",
        authors: "Leonardo Augusto Coelho Ribeiro, Tiago Bresolin, Guilherme Jordão de Magalhães Rosa, Daniel Rume Casagrande, Marina de Arruda Camargo Danes, João Ricardo Rebouças Dórea",
        venue: "Journal of Animal Science",
        year: 2021,
        category: "artículo de revista",
        citations: 28,
        pdfUrl: "https://academic.oup.com/jas/article-pdf/99/9/skab206/40307064/skab206.pdf",
        doi: "https://doi.org/10.1093/jas/skab206",
        bibtex: `@article{10.1093/jas/skab206,
        author = {Coelho Ribeiro, Leonardo Augusto and Bresolin, Tiago and Rosa, Guilherme Jordão de Magalhães and Rume Casagrande, Daniel and Danes, Marina de Arruda Camargo and Dórea, João Ricardo Rebouças},
        title = {Disentangling data dependency using cross-validation strategies to evaluate prediction quality of cattle grazing activities using machine learning algorithms and wearable sensor data},
        journal = {Journal of Animal Science},
        volume = {99},
        number = {9},
        pages = {skab206},
        year = {2021}
      }`
      }
    ],
    projects: [
      {
        title: "Proyecto de Extensión Pré-Uni UFLA (2014-2017)",
        description: "Curso preuniversitario gratuito en asociación con la Alcaldía Municipal de Lavras, ofreciendo oportunidades a estudiantes de escuelas públicas en situación de vulnerabilidad socioeconómica.",
        tags: ["Pré-Uni", "ENEM", "PREUNI-UFLA"],
        link: "https://proeec.ufla.br/pre-uni",
        btnText: "Ver Repositorio"
      },
      {
        title: "PROMEC - Programa de Mentoría (2014)",
        description: "Programa de mentoría para ingresantes en la Universidad Federal de Lavras diseñado para ayudar a los estudiantes con la adaptación académica y hábitos de estudio.",
        tags: ["PROMEC", "UFLA"],
        link: "http://www.dnu.ufla.br/menu-extensao/promec",
        btnText: "Ver Repositorio"
      }
    ],
    courses: [
      {
        code: ">",
        title: "Biología",
        term: "2014-2015 (Escuela Secundaria)",
        description: "Clases de biología de escuela secundaria impartidas en el programa PREUNI-UFLA para la preparación del ENEM."
      },
      {
        code: ">",
        title: "Geografía e Historia",
        term: "2016-2017 (Escuela Secundaria)",
        description: "Clases de geografía e historia impartidas en el programa PREUNI-UFLA."
      }
    ],
    news: [
      {
        date: "Octubre 2026",
        text: "Seleccionado como Area Chair para NeurIPS 2026."
      }
    ],
    ui: {
      noPubs: "No se encontraron publicaciones.",
      citations: "Citas",
      copyAlert: "¡BibTeX copiado al portapapeles!",
      msgSent: "¡Mensaje enviado con éxito!",
      lang: "es-ES"
    }
  },

  // ENGLISH // 
  en: {
    publications: [
      {
        id: 3,
        title: "Secondary analysis of feed intake, calcemia, and assessment of immune function in the subsequent periparturient period of cows that responded to high- and low-energy diets during late lactation",
        authors: "T.O. Cunha, P.L.J. Monteiro, Jr., W.S. Frizzarini, N. Teixeira, L.C. Ribeiro, R.D. Shaver, M.Z. Toledo, J.P.N. Martins, M.C. Wiltbank, L.L. Hernandez",
        venue: "Journal of Dairy Science",
        year: 2026,
        category: "journal article",
        citations: 24,
        pdfUrl: "https://www.journalofdairyscience.org/action/showPdf?pii=S0022-0302%2825%2901018-5",
        doi: "https://doi.org/10.3168/jds.2025-26343",
        bibtex: `@ARTICLE{Cunha2026-il,
        title     = "Secondary analysis of feed intake, calcemia, and assessment of immune function in the subsequent periparturient period of cows that responded to high- and low-energy diets during late lactation",
        author = "Cunha, T. O. and Monteiro, Jr., P. L. J. and Frizzarini, W. S. and Teixeira, N. and Ribeiro, L. C. and Shaver, R. D. and Toledo, M. Z. and Martins, J. P. N. and Wiltbank, M. C. and Hernandez, L. L.", 
        journal   = "J. Dairy Sci.",
        publisher = "American Dairy Science Association",
        volume    =  109,
        number    =  3,
        pages     = "2989--2999",
        month     =  mar,
        year      =  2026
}`
      },
      {
        id: 1,
        title: "Near-infrared spectroscopy analysis to predict urinary allantoin in dairy cows",
        authors: "Leonardo A.C. Ribeiro, Guilherme L. Menezes, Tiago Bresolin, Sebastian I. Arriola Apelo, João R. R. Dórea",
        venue: "JDS Communications",
        year: 2025,
        category: "short communication",
        citations: 3,
        pdfUrl: "https://www.jdscommun.org/action/showPdf?pii=S2666-9102%2824%2900190-X",
        doi: "https://doi.org/10.3168/jdsc.2024-0641",
        bibtex: `@ARTICLE{Ribeiro2025-ut,
          title     = "Near-infrared spectroscopy analysis to predict urinary allantoin in dairy cows",
          author    = "Ribeiro, Leonardo A C and Menezes, Guilherme L and Bresolin, Tiago and Arriola Apelo, Sebastian I and D{\'o}rea, Joao R R", 
          journal   = "JDS Commun.",
          publisher = "American Dairy Science Association",
          volume    =  6,
          number    =  2,
          pages     = "212--216",
          month     =  mar,
          year      =  2025
}`
      },
      {
        id: 2,
        title: "Disentangling data dependency using cross-validation strategies to evaluate prediction quality of cattle grazing activities using machine learning algorithms and wearable sensor data",
        authors: "Leonardo Augusto Coelho Ribeiro, Tiago Bresolin, Guilherme Jordão de Magalhães Rosa, Daniel Rume Casagrande, Marina de Arruda Camargo Danes, João Ricardo Rebouças Dórea",
        venue: "Journal of Animal Science",
        year: 2021,
        category: "journal article",
        citations: 28,
        pdfUrl: "https://academic.oup.com/jas/article-pdf/99/9/skab206/40307064/skab206.pdf",
        doi: "https://doi.org/10.1093/jas/skab206",
        bibtex: `@article{10.1093/jas/skab206,
        author = {Coelho Ribeiro, Leonardo Augusto and Bresolin, Tiago and Rosa, Guilherme Jordão de Magalhães and Rume Casagrande, Daniel and Danes, Marina de Arruda Camargo and Dórea, João Ricardo Rebouças},
        title = {Disentangling data dependency using cross-validation strategies to evaluate prediction quality of cattle grazing activities using machine learning algorithms and wearable sensor data},
        journal = {Journal of Animal Science},
        volume = {99},
        number = {9},
        pages = {skab206},
        year = {2021}
      }`
      }
    ],
    projects: [
      {
        title: "Pré-Uni UFLA Extension Project (2014-2017)",
        description: "Free pre-university preparatory course in partnership with the Municipal Prefecture of Lavras, offering opportunities to public school students from socioeconomically vulnerable backgrounds.",
        tags: ["Pré-Uni", "ENEM", "PREUNI-UFLA"],
        link: "https://proeec.ufla.br/pre-uni",
        btnText: "View Repository"
      },
      {
        title: "PROMEC - Mentorship Program (2014)",
        description: "Freshman mentorship program at the Federal University of Lavras designed to assist students with academic adaptation, study habits, and retention.",
        tags: ["PROMEC", "UFLA"],
        link: "http://www.dnu.ufla.br/menu-extensao/promec",
        btnText: "View Repository"
      }
    ],
    courses: [
      {
        code: ">",
        title: "Biology",
        term: "2014-2015 (High School)",
        description: "Taught high school biology classes within the PREUNI-UFLA program for ENEM preparation."
      },
      {
        code: ">",
        title: "Geography & History",
        term: "2016-2017 (High School)",
        description: "Taught geography and history classes within the PREUNI-UFLA program."
      }
    ],
    news: [ // ENGLISH // 
      {
        date: "October 2026",
        text: "Selected as Area Chair for NeurIPS 2026."
      }
    ],
    ui: {
      noPubs: "No publications found.",
      citations: "Citations",
      copyAlert: "BibTeX copied to clipboard!",
      msgSent: "Message sent successfully!",
      lang: "en-US"
    }
  }
};

// ================= LANGUAGE DETECTION =================
function getLanguage() {
  const langAttr = document.documentElement.lang || 'en';
  if (langAttr.startsWith('pt')) return 'pt';
  if (langAttr.startsWith('es')) return 'es';
  return 'en';
}

const currentLang = getLanguage();
const currentData = portfolioData[currentLang];

// ================= TAB SWITCHING LOGIC =================
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  
  const target = document.getElementById(`tab-${tabId}`);
  if (target) {
    target.classList.add('active');
  }

  document.querySelectorAll('.nav-tab').forEach(btn => {
    if (btn.dataset.tab === tabId) {
      btn.className = "nav-tab active px-3 py-2 rounded-md text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-slate-800 transition font-medium";
    } else {
      btn.className = "nav-tab px-3 py-2 rounded-md text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition font-medium";
    }
  });

  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) mobileMenu.classList.add('hidden');

  const mainContent = document.querySelector('section.lg\\:col-span-8');
  if (mainContent) {
    mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ================= RENDER FUNCTIONS =================
function renderPublications(filtered = currentData.publications) {
  const list = document.getElementById('publications-list');
  if (!list) return;

  if (filtered.length === 0) {
    list.innerHTML = `<p class="text-xs text-slate-400 py-4 text-center">${currentData.ui.noPubs}</p>`;
    return;
  }

  list.innerHTML = filtered.map(pub => `
    <div class="p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition bg-slate-50/50 dark:bg-slate-800/30">
      <div class="flex items-start justify-between gap-3">
        <h3 class="text-sm font-bold text-slate-900 dark:text-white leading-snug">${pub.title}</h3>
        <span class="shrink-0 px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">${pub.category}</span>
      </div>
      <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">${pub.authors}</p>
      <p class="text-xs font-semibold text-brand-600 dark:text-brand-400 mt-1"><em>${pub.venue}</em> (${pub.year})</p>
      <div class="mt-3 flex items-center justify-between text-xs pt-2 border-t border-slate-200/50 dark:border-slate-700/50">
        <div class="flex items-center gap-3">
          <a href="${pub.pdfUrl}" target="_blank" class="text-slate-600 dark:text-slate-300 hover:text-brand-600 flex items-center gap-1 font-medium"><i class="fa-regular fa-file-pdf text-rose-500"></i> PDF</a>
          <a href="${pub.doi}" target="_blank" class="text-slate-600 dark:text-slate-300 hover:text-brand-600 flex items-center gap-1 font-medium"><i class="fa-solid fa-link text-slate-700 dark:text-slate-300"></i> DOI</a>
          <button onclick="openBibtexModal(${pub.id})" class="text-slate-600 dark:text-slate-300 hover:text-brand-600 flex items-center gap-1 font-medium"><i class="fa-solid fa-quote-left text-amber-500"></i> BibTeX</button>
        </div>
        <span class="text-[11px] font-semibold text-slate-400 bg-slate-200/60 dark:bg-slate-700/60 px-2 py-0.5 rounded">${pub.citations} ${currentData.ui.citations}</span>
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = currentData.projects.map(proj => `
    <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        <h3 class="font-bold text-base text-slate-900 dark:text-white mb-2">${proj.title}</h3>
        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">${proj.description}</p>
      </div>
      <div>
        <div class="flex flex-wrap gap-1.5 mb-3">
          ${proj.tags.map(t => `<span class="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded text-[10px] font-medium">${t}</span>`).join('')}
        </div>
        <a href="${proj.link}" target="_blank" class="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:underline">${proj.btnText} <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i></a>
      </div>
    </div>
  `).join('');
}

function renderCourses() {
  const list = document.getElementById('courses-list');
  if (!list) return;
  list.innerHTML = currentData.courses.map(c => `
    <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
      <div class="flex items-center justify-between mb-1">
        <span class="font-bold text-xs bg-brand-100 dark:bg-brand-900/50 text-brand-700 dark:text-brand-300 px-2 py-0.5 rounded">${c.code}</span>
        <span class="text-[11px] text-slate-400 font-medium">${c.term}</span>
      </div>
      <h3 class="font-bold text-sm text-slate-900 dark:text-white mt-1">${c.title}</h3>
      <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">${c.description}</p>
    </div>
  `).join('');
}

function renderNews() {
  const timeline = document.getElementById('news-timeline');
  if (!timeline) return;
  timeline.innerHTML = currentData.news.map(n => `
    <div class="flex items-start gap-4">
      <span class="shrink-0 text-[11px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">${n.date}</span>
      <p class="text-xs text-slate-700 dark:text-slate-300 pt-0.5 leading-relaxed">${n.text}</p>
    </div>
  `).join('');
}

function openBibtexModal(pubId) {
  const pub = currentData.publications.find(p => p.id === pubId);
  if (pub) {
    document.getElementById('bibtex-content').innerText = pub.bibtex;
    document.getElementById('bibtex-modal').classList.remove('hidden');
  }
}

function closeBibtexModal() {
  document.getElementById('bibtex-modal').classList.add('hidden');
}

function copyBibtexText() {
  const text = document.getElementById('bibtex-content').innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert(currentData.ui.copyAlert);
  });
}

function handleContactSubmit(e) {
  e.preventDefault();
  const alertBox = document.getElementById('contact-alert');
  if (alertBox) {
    alertBox.className = "p-3 rounded-lg text-xs font-medium text-center bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200 block";
    alertBox.innerText = currentData.ui.msgSent;
  }
  document.getElementById('contact-form').reset();
}

function setLastUpdatedDate() {
  const lastUpdatedElement = document.getElementById('last-updated');
  if (lastUpdatedElement) {
    const lastModified = new Date(document.lastModified);
    lastUpdatedElement.textContent = lastModified.toLocaleDateString(currentData.ui.lang, { year: 'numeric', month: 'long', day: 'numeric' });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
  });

  document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
    document.getElementById('mobile-menu')?.classList.toggle('hidden');
  });

  renderPublications();
  renderProjects();
  renderCourses();
  renderNews();
  setLastUpdatedDate();
});
