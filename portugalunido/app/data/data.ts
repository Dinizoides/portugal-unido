export type Item = {
  name: string;
  url: string;
  icon: string;
  description: string;
};

export type Section = {
  category: string;
  items: Item[];
};

export const data: Section[] = [
  {
    category: "Emergência & Segurança",
    items: [
      {
        name: "Tempos de Espera (SNS)",
        url: "https://tempos.min-saude.pt/",
        icon: "⏱️",
        description: "Consultar tempos de espera nas urgências do SNS",
      },
      {
        name: "Fogos.pt",
        url: "https://fogos.pt",
        icon: "🔥",
        description: "Alertas e mapas de incêndios",
      },
      {
        name: "IPMA",
        url: "https://www.ipma.pt",
        icon: "🌦️",
        description: "Previsões do tempo e alertas meteorológicos",
      },
      {
        name: "QualAR",
        url: "https://qualar.apambiente.pt",
        icon: "🌍",
        description: "Qualidade do ar em Portugal",
      },
    ],
  },
  {
    category: "Governo & Serviços Públicos",
    items: [
      {
        name: "gov.pt",
        url: "https://www.gov.pt",
        icon: "🏛️",
        description: "Portal central de serviços públicos digitais",
      },
      {
        name: "Autenticação.gov (CMD)",
        url: "https://www.autenticacao.gov.pt",
        icon: "🔑",
        description: "Chave Móvel Digital e assinatura digital",
      },
      {
        name: "Portal das Finanças",
        url: "https://www.portaldasfinancas.gov.pt",
        icon: "💰",
        description: "Serviços fiscais e IRS",
      },
      {
        name: "Segurança Social Direta",
        url: "https://www.seg-social.pt",
        icon: "👨‍👩‍👧‍👦",
        description: "Serviços da Segurança Social",
      },
    ],
  },
  {
    category: "Saúde & Medicina",
    items: [
      {
        name: "SNS 24",
        url: "https://www.sns24.gov.pt",
        icon: "🩺",
        description: "Cuidados de saúde, receitas, exames e teleconsultas",
      },
      {
        name: "SNS",
        url: "https://www.sns.gov.pt",
        icon: "🏥",
        description: "Serviço Nacional de Saúde",
      },
      {
        name: "Infarmed",
        url: "https://www.infarmed.pt",
        icon: "💊",
        description: "Medicamentos e regulamentação",
      },
      {
        name: "DGS",
        url: "https://www.dgs.pt",
        icon: "🧬",
        description: "Direção-Geral da Saúde",
      },
    ],
  },
  {
    category: "Transportes & Mobilidade",
    items: [
      {
        name: "CP – Comboios de Portugal",
        url: "https://www.cp.pt",
        icon: "🚆",
        description: "Comboios nacionais e regionais",
      },
      {
        name: "Rede Expressos",
        url: "https://rede-expressos.pt/pt",
        icon: "🚌",
        description: "Rede nacional de autocarros",
      },
      {
        name: "Metro Lisboa",
        url: "https://www.metrolisboa.pt",
        icon: "🚇",
        description: "Metro da Área Metropolitana de Lisboa",
      },
      {
        name: "Metro Porto",
        url: "https://www.metrodoporto.pt",
        icon: "🚇",
        description: "Metro da Área Metropolitana do Porto",
      },
      {
        name: "Carris",
        url: "https://www.carris.pt",
        icon: "🚌",
        description: "Autocarros e elétricos em Lisboa",
      },
      {
        name: "STCP",
        url: "https://www.stcp.pt",
        icon: "🚌",
        description: "Transportes públicos do Porto",
      },
      {
        name: "Gira",
        url: "https://www.gira-bicicletasdelisboa.pt/",
        icon: "🚲",
        description: "Bicicletas partilhadas em Lisboa",
      },
      {
        name: "Via Verde Estacionar",
        url: "https://www.viaverde.pt",
        icon: "🅿️",
        description: "Pagamento de estacionamento",
      },
      {
        name: "Moovit",
        url: "https://www.moovit.com",
        icon: "🗺️",
        description: "Planeamento de transportes públicos",
      },
      {
        name: "Citymapper",
        url: "https://citymapper.com",
        icon: "🗺️",
        description: "Planeamento detalhado de transporte urbano",
      },
    ],
  },
  {
    category: "Finanças & Pagamentos",
    items: [
      {
        name: "MB WAY",
        url: "https://www.mbway.pt",
        icon: "💳",
        description: "Pagamentos e transferências instantâneas",
      },
      {
        name: "Banco de Portugal",
        url: "https://www.bportugal.pt",
        icon: "🏦",
        description: "Banco central de Portugal",
      },
      {
        name: "Caixa Geral de Depósitos",
        url: "https://www.cgd.pt",
        icon: "🏦",
        description: "Banco tradicional português",
      },
      {
        name: "Millennium BCP",
        url: "https://www.millenniumbcp.pt",
        icon: "🏦",
        description: "Banco português",
      },
      {
        name: "ActivoBank",
        url: "https://www.activobank.pt",
        icon: "🏦",
        description: "Banco digital português",
      },
      {
        name: "Banco CTT",
        url: "https://www.bancoctt.pt",
        icon: "🏦",
        description: "Banco dos CTT",
      },
      {
        name: "Revolut",
        url: "https://www.revolut.com/pt-PT",
        icon: "💱",
        description: "Banco digital",
      },
      {
        name: "Wise",
        url: "https://wise.com/pt",
        icon: "💸",
        description: "Transferências internacionais",
      },
    ],
  },
  {
    category: "Delivery & Mobilidade Urbana",
    items: [
      {
        name: "Uber",
        url: "https://www.uber.com/pt/pt-pt/",
        icon: "🚗",
        description: "Mobilidade urbana",
      },
      {
        name: "Bolt / Bolt Food",
        url: "https://bolt.eu/pt-pt/",
        icon: "🚗",
        description: "Mobilidade urbana",
      },
      {
        name: "Glovo",
        url: "https://glovoapp.com/pt/pt/",
        icon: "🛵",
        description: "Entrega ao domicílio",
      },
      {
        name: "Uber Eats",
        url: "https://www.ubereats.com/pt",
        icon: "🍔",
        description: "Entrega de comida",
      },
      {
        name: "CTT",
        url: "https://www.ctt.pt",
        icon: "📦",
        description: "Correios e encomendas",
      },
      {
        name: "DHL",
        url: "https://www.dhl.com/pt-pt/home.html",
        icon: "📦",
        description: "Envios internacionais",
      },
    ],
  },
  {
    category: "Notícias & Informação",
    items: [
      {
        name: "SAPO",
        url: "https://www.sapo.pt",
        icon: "📰",
        description: "Portal de notícias e serviços",
      },
      {
        name: "RTP",
        url: "https://www.rtp.pt",
        icon: "📺",
        description: "Rádio e Televisão de Portugal",
      },
      {
        name: "SIC",
        url: "https://sic.pt",
        icon: "📺",
        description: "Canal de televisão SIC",
      },
      {
        name: "TVI",
        url: "https://tvi.iol.pt",
        icon: "📺",
        description: "Canal de televisão TVI",
      },
      {
        name: "CM TV",
        url: "https://www.cmjornal.pt/cmtv",
        icon: "📺",
        description: "Canal de notícias CM",
      },
      {
        name: "Público",
        url: "https://www.publico.pt",
        icon: "📰",
        description: "Jornal Público",
      },
      {
        name: "Observador",
        url: "https://observador.pt",
        icon: "📰",
        description: "Jornal Observador",
      },
    ],
  },
  {
    category: "Emprego & Mercado de Trabalho",
    items: [
      {
        name: "IEFP",
        url: "https://www.iefp.pt",
        icon: "💼",
        description: "Instituto do Emprego e Formação Profissional",
      },
      {
        name: "Net-Empregos",
        url: "https://www.net-empregos.com",
        icon: "💼",
        description: "Ofertas de emprego",
      },
      {
        name: "Indeed Portugal",
        url: "https://pt.indeed.com",
        icon: "💼",
        description: "Pesquisa de emprego",
      },
      {
        name: "LinkedIn Jobs",
        url: "https://www.linkedin.com/jobs",
        icon: "💼",
        description: "Emprego e networking",
      },
    ],
  },
  {
    category: "Educação & Universidades",
    items: [
      {
        name: "Direção-Geral da Educação",
        url: "https://www.dge.mec.pt",
        icon: "🎓",
        description: "Educação em Portugal",
      },
      {
        name: "Universidade de Lisboa",
        url: "https://www.ulisboa.pt",
        icon: "🎓",
        description: "Universidade pública",
      },
      {
        name: "Universidade do Porto",
        url: "https://www.up.pt",
        icon: "🎓",
        description: "Universidade pública",
      },
      {
        name: "Universidade de Coimbra",
        url: "https://www.uc.pt",
        icon: "🎓",
        description: "Universidade pública",
      },
      {
        name: "Universidade do Minho",
        url: "https://www.uminho.pt",
        icon: "🎓",
        description: "Universidade pública",
      },
      {
        name: "Universidade Nova de Lisboa",
        url: "https://www.unl.pt",
        icon: "🎓",
        description: "Universidade pública",
      },
      {
        name: "Universidade da Beira Interior",
        url: "https://www.ubi.pt",
        icon: "🎓",
        description: "Universidade pública",
      },
      {
        name: "Universidade dos Açores",
        url: "https://www.uac.pt",
        icon: "🎓",
        description: "Universidade pública",
      },
      {
        name: "Universidade da Madeira",
        url: "https://www.uma.pt",
        icon: "🎓",
        description: "Universidade pública",
      },
      {
        name: "Universidade do Algarve",
        url: "https://www.ualg.pt",
        icon: "🎓",
        description: "Universidade pública",
      },
      {
        name: "Universidade de Évora",
        url: "https://www.uevora.pt",
        icon: "🎓",
        description: "Universidade pública",
      },
    ],
  },
];
