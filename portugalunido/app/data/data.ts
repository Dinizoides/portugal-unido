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
      { name: "Fogos.pt", url: "https://fogos.pt", icon: "🔥", description: "Alertas e mapas de incêndios" },
      { name: "112 Portugal", url: "https://www.112.pt", icon: "📞", description: "Informação de emergência e contactos" },
      { name: "Proteção Civil", url: "https://www.prociv.pt", icon: "🛡️", description: "Portal oficial da Proteção Civil" },
      { name: "IPMA", url: "https://www.ipma.pt", icon: "⚠️", description: "Previsões e alertas meteorológicos" },
      { name: "QualAR", url: "https://qualar.apambiente.pt", icon: "🌍", description: "Qualidade do ar em Portugal" },
    ],
  },
  {
    category: "Governo & Serviços Públicos",
    items: [
      { name: "gov.pt", url: "https://www.gov.pt", icon: "🏛️", description: "Portal central de serviços públicos digitais" },
      { name: "GOV.PT (App)", url: "https://www.gov.pt/pt/gc21", icon: "📱", description: "App oficial com Chave Móvel Digital e documentos digitais" },
      { name: "Chave Móvel Digital (Autenticação.gov)", url: "https://www.autenticacao.gov.pt", icon: "🔑", description: "Ativar Chave Móvel Digital e assinar digitalmente" },
      { name: "ePortugal", url: "https://eportugal.gov.pt", icon: "🌐", description: "Portal de serviços públicos (centralizador)" },
      { name: "Portal das Finanças", url: "https://www.portaldasfinancas.gov.pt", icon: "💰", description: "Serviços fiscais e IRS" },
      { name: "Segurança Social Direta", url: "https://www.seg-social.pt", icon: "👨‍👩‍👧‍👦", description: "Serviços da Segurança Social" },
      { name: "Cartão de Cidadão (Informação)", url: "https://www.cartaodecidadao.pt", icon: "🆔", description: "Informações e apoio sobre o Cartão de Cidadão" },
    ],
  },
  {
    category: "Saúde & Medicina",
    items: [
      { name: "SNS 24 (App & Portal)", url: "https://www.sns24.gov.pt", icon: "🩺", description: "Acesso a cuidados de saúde, receitas, exames e teleconsultas" },
      { name: "SNS", url: "https://www.sns.gov.pt", icon: "🏥", description: "Serviço Nacional de Saúde" },
      { name: "Infarmed", url: "https://www.infarmed.pt", icon: "💊", description: "Medicamentos e regulamentação" },
      { name: "DGS", url: "https://www.dgs.pt", icon: "🧬", description: "Direção-Geral da Saúde" },
    ],
  },
  {
    category: "Transportes & Mobilidade",
    items: [
      { name: "CP – Comboios de Portugal", url: "https://www.cp.pt", icon: "🚆", description: "Comboios nacionais e regionais" },
      { name: "Metro Lisboa", url: "https://www.metrolisboa.pt", icon: "🚇", description: "Metro da Área Metropolitana de Lisboa" },
      { name: "Metro Porto", url: "https://www.metrodoporto.pt", icon: "🚇", description: "Metro da Área Metropolitana do Porto" },
      { name: "Carris", url: "https://www.carris.pt", icon: "🚌", description: "Autocarros e elétricos em Lisboa" },
      { name: "STCP", url: "https://www.stcp.pt", icon: "🚌", description: "Transportes públicos do Porto" },
      { name: "Navega", url: "https://navega.pt", icon: "🗺️", description: "Planeador de transportes públicos para Portugal" },
      { name: "Anda (Porto)", url: "https://anda.app", icon: "🎫", description: "Bilhetes e gestão de passes no Porto" },
      { name: "Gira", url: "https://www.gira.pt", icon: "🚲", description: "Bicicletas partilhadas em Lisboa" },
      { name: "Via Verde Estacionar", url: "https://www.viaverde.pt", icon: "🅿️", description: "Pagamento de estacionamento em várias cidades" },
      { name: "Portal Viva", url: "https://portalviva.pt", icon: "🚍", description: "Informação integrada de transportes Lisboa / região" },
    ],
  },
  {
    category: "Finanças & Pagamentos",
    items: [
      { name: "MB WAY", url: "https://www.mbway.pt", icon: "💳", description: "Pagamentos e transferências instantâneas" },
      { name: "Multibanco (informação)", url: "https://www.multibanco.pt", icon: "🏧", description: "Informações sobre a rede Multibanco" },
      { name: "Banco de Portugal", url: "https://www.bportugal.pt", icon: "🏦", description: "Banco central de Portugal" },
      { name: "Revolut (PT)", url: "https://www.revolut.com/pt-PT", icon: "💱", description: "Banco digital utilizado em PT" },
      { name: "Wise (PT)", url: "https://wise.com/pt", icon: "💸", description: "Transferências internacionais" },
      { name: "Caixa Geral de Depósitos", url: "https://www.cgd.pt", icon: "🏦", description: "Banco tradicional português" },
      { name: "Millennium BCP", url: "https://www.millenniumbcp.pt", icon: "🏦", description: "Banco português" },
      { name: "ActivoBank", url: "https://www.activobank.pt", icon: "🏦", description: "Banco digital português" },
    ],
  },
  {
    category: "Compras & Mercado",
    items: [
      { name: "Continente Online", url: "https://www.continente.pt", icon: "🛒", description: "Supermercado online" },
      { name: "Pingo Doce", url: "https://www.pingodoce.pt", icon: "🛍️", description: "Supermercado e compras online" },
      { name: "Auchan Portugal", url: "https://www.auchan.pt", icon: "🛒", description: "Supermercado e catálogo online" },
      { name: "Mercadona Portugal", url: "https://www.mercadona.pt", icon: "🛒", description: "Supermercado físico e catálogo localizado" },
      { name: "Worten", url: "https://www.worten.pt", icon: "📱", description: "Eletrónica e tecnologia" },
      { name: "Fnac Portugal", url: "https://www.fnac.pt", icon: "🎧", description: "Tecnologia, cultura e bilhetes" },
      { name: "OLX Portugal", url: "https://www.olx.pt", icon: "📦", description: "Marketplace de segunda mão" },
      { name: "Amazon Espanha (utilizado em PT)", url: "https://www.amazon.es", icon: "📦", description: "Marketplace internacional usado em Portugal" },
      { name: "AliExpress", url: "https://www.aliexpress.com", icon: "🌍", description: "Marketplace global muito usado" },
    ],
  },
  {
    category: "Delivery & Mobilidade Urbana",
    items: [
      { name: "Uber", url: "https://www.uber.com/pt/pt/", icon: "🚗", description: "Mobilidade urbana" },
      { name: "Bolt", url: "https://bolt.eu/pt/", icon: "🚗", description: "Mobilidade urbana" },
      { name: "FREE NOW", url: "https://www.free-now.com/pt/", icon: "🚕", description: "Táxis e mobilidade" },
      { name: "Glovo", url: "https://glovoapp.com/pt/pt/", icon: "🛵", description: "Entrega ao domicílio" },
      { name: "Uber Eats", url: "https://www.ubereats.com/pt", icon: "🍔", description: "Entrega de comida" },
      { name: "Bolt Food", url: "https://bolt.eu/pt/food", icon: "🍕", description: "Entrega de comida (Bolt)" },
      { name: "Quico", url: "https://quico.pt", icon: "🛍️", description: "Entrega rápida de supermercado" },
    ],
  },
  {
    category: "Cultura & Entretenimento",
    items: [
      { name: "SAPO", url: "https://www.sapo.pt", icon: "📰", description: "Portal de notícias e serviços" },
      { name: "JustWatch Portugal", url: "https://www.justwatch.com/pt", icon: "🎬", description: "Onde ver filmes e séries" },
      { name: "Blueticket", url: "https://www.blueticket.pt", icon: "🎟️", description: "Bilhetes e eventos em Portugal" },
    ],
  },
  {
    category: "Utilitários & Ferramentas",
    items: [
      { name: "CTT – Correios de Portugal", url: "https://www.ctt.pt", icon: "✉️", description: "Serviços postais e tracking" },
      { name: "Moovit", url: "https://www.moovit.com", icon: "🚌", description: "Planeamento de transportes públicos em várias cidades" },
      { name: "Citymapper (Portugal)", url: "https://citymapper.com", icon: "🗺️", description: "Planeamento detalhado de transporte urbano" },
    ],
  },
  {
    category: "Emprego & Mercado de Trabalho",
    items: [
      { name: "SAPO Emprego", url: "https://emprego.sapo.pt", icon: "💼", description: "Portal de emprego em Portugal" },
      { name: "Zaask", url: "https://www.zaask.pt", icon: "🧰", description: "Serviços e profissionais locais" },
    ],
  },
  {
    category: "Educação & Ciência",
    items: [
      { name: "Portal das Escolas", url: "https://www.portaldasescolas.pt", icon: "🎓", description: "Informações educativas em Portugal" },
      { name: "Universidade de Lisboa", url: "https://www.ulisboa.pt", icon: "🎓", description: "Universidade pública portuguesa" },
      { name: "Universidade do Porto", url: "https://www.up.pt", icon: "🎓", description: "Universidade pública portuguesa" },
    ],
  },
];
