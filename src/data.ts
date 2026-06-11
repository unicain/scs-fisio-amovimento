import { LandingPageConfig } from './types';

// O Template flexível: basta alterar este arquivo para o próximo cliente.
export const lpData: LandingPageConfig = {
  theme: {
    logoUrl: '', 
    primaryColor: '#4B8E9B', 
    secondaryColor: '#366F7A',
    backgroundColor: '#F7FAFA', 
    textColor: '#1E292B',
  },
  contact: {
    whatsappNumber: '5551997291964', // Adicione o WhatsApp real aqui
    whatsappMessage: 'Olá! Gostaria de saber mais sobre as aulas de Pilates e agendar minha avaliação.',
    address: 'R. João B de Menezes, 50 - Verena, Santa Cruz do Sul - RS, 96820-100',
    googleMapsLink: 'https://www.google.com/maps/dir//Ateli%C3%AA+do+Movimento+Fisioterapia+e+Pilates+-+R.+Jo%C3%A3o+B+de+Menezes,+50+-+Verena,+Santa+Cruz+do+Sul+-+RS,+96820-100/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x951ca3c09eaef0c7:0xf50349cd4c407171?sa=X&ved=1t:57443&ictx=111',
    workingHours: 'Atendimentos com horário previamente agendado.\nEntre em contato para consultar a disponibilidade.',
  },
  hero: {
    headline: 'Movimento Consciente, Saúde Integral',
    subheadline: 'Descubra como o Pilates e a Fisioterapia transformam a sua rotina. Oferecemos reabilitação e cuidados essenciais para todas as idades, com destaque para o Pilates na Gestação.',
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1000',
    ctaText: 'Agendar Avaliação',
  },
  services: {
    sectionTitle: 'Nossas Especialidades',
    sectionSubtitle: 'Cuidado Completo',
    items: [
      {
        id: '1',
        title: 'Pilates na Gestação',
        description: 'Fortalecimento do assoalho pélvico, melhora da postura, controle respiratório e alívio de desconfortos para a mãe e o bebê.',
        iconName: 'Heart',
      },
      {
        id: '2',
        title: 'Pilates Clássico & Contemporâneo',
        description: 'Trabalho de alinhamento corporal, flexibilidade, equilíbrio e coordenação motora para uma vida mais saudável.',
        iconName: 'Activity',
      },
      {
        id: '3',
        title: 'Terapia Manual',
        description: 'Técnicas especializadas para alívio de dores articulares e musculares, promovendo o restabelecimento das funções do corpo.',
        iconName: 'Hand',
      },
      {
        id: '4',
        title: 'Ventosaterapia',
        description: 'Estimulação da circulação sanguínea, auxiliando na redução de tensões, inchaços e dores localizadas.',
        iconName: 'Wind',
      }
    ],
  },
  about: {
    name: 'Ateliê do Movimento',
    role: 'Fisioterapia & Pilates',
    bio: 'Nosso espaço é dedicado ao cuidado com o seu corpo. A frente do Ateliê está Rochele Klafke Silveira, fisioterapeuta formada pela UNISC (2011), com especializações que garantem um tratamento seguro, focado em resultados e no seu conforto emocional e físico.',
    imageUrl: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800', 
    credentials: [
      'Rochele Klafke Silveira - CREFITO 5-170417',
      'Fisioterapeuta graduada pela UNISC (2011)',
      'Formação Completa em Pilates',
      'Especialista em Terapia Manual e Ventosaterapia'
    ],
  },
  gallery: {
    sectionTitle: 'Pilates é Autocuidado!',
    sectionSubtitle: 'Benefícios na Prática',
    instagramHandle: '@ateliedomovimento',
    instagramUrl: 'https://www.instagram.com/ateliedomovimento/',
    items: [
      {
        id: '1',
        type: 'image',
        thumbnailUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
        caption: 'O Pilates ajuda no realinhamento postural, aliviando dores nas costas e melhorando a flexibilidade.',
        postUrl: 'https://www.instagram.com/ateliedomovimento/'
      },
      {
        id: '2',
        type: 'image',
        thumbnailUrl: 'https://images.unsplash.com/photo-1499540633125-484965b60031?auto=format&fit=crop&q=80&w=800',
        caption: 'Pilates na Gestação: Conexão com o bebê, redução de inchaços e bem-estar emocional.',
        postUrl: 'https://www.instagram.com/ateliedomovimento/'
      },
      {
        id: '3',
        type: 'image',
        thumbnailUrl: 'https://images.unsplash.com/photo-1552084117-56a947fd1b40?auto=format&fit=crop&q=80&w=800',
        caption: 'Diga adeus à má postura e aumente a sua qualidade de vida com a nossa orientação.',
        postUrl: 'https://www.instagram.com/ateliedomovimento/'
      },
      {
        id: '4',
        type: 'image',
        thumbnailUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
        caption: 'Respiração profunda e consciente é chave para aliviar ansiedade e fortalecer o core.',
        postUrl: 'https://www.instagram.com/ateliedomovimento/'
      }
    ]
  },
  pricing: {
    sectionTitle: 'Planos e Valores',
    sectionSubtitle: 'Invista na sua saúde',
    observation: [
      '* Valores sujeitos a alteração. Consulte-nos pelo WhatsApp para informações atualizadas.',
      '* Os planos são personalizados conforme a necessidade do paciente (Fisioterapia ou Pilates).'
    ],
    items: [
      {
        id: '1',
        name: 'Pilates Regular',
        experimentalPrice: 'Consulte nossa equipe',
        prices: [
          { timesPerWeek: '1X', mensal: 'Sob Consulta', trimestral: '-', semestral: '-' },
          { timesPerWeek: '2X', mensal: 'Sob Consulta', trimestral: '-', semestral: '-' },
          { timesPerWeek: '3X', mensal: 'Sob Consulta', trimestral: '-', semestral: '-' }
        ]
      },
      {
        id: '2',
        name: 'Avulso / Fisioterapia',
        experimentalPrice: '-',
        prices: [
          { timesPerWeek: 'Sessão Avulsa', mensal: 'Sob Consulta', trimestral: '-', semestral: '-' },
          { timesPerWeek: 'Terapia Manual', mensal: 'Sob Consulta', trimestral: '-', semestral: '-' },
          { timesPerWeek: 'Ventosaterapia', mensal: 'Sob Consulta', trimestral: '-', semestral: '-' }
        ]
      }
    ]
  },
  space: {
    sectionTitle: 'Conheça o Ateliê',
    sectionSubtitle: 'Estrutura Completa',
    text: 'Nosso espaço foi projetado para oferecer o máximo de conforto, segurança e tranquilidade durante o seu atendimento.\n\nCom equipamentos modernos e um ambiente climatizado, aqui você encontra o refúgio ideal para focar na sua recuperação e evolução física.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1599557434151-5121bc82f808?auto=format&fit=crop&q=80&w=800',
        alt: 'Equipamentos modernos de Pilates',
        featured: true
      },
      {
        url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800',
        alt: 'Estrutura aconchegante para prática'
      },
      {
        url: 'https://images.unsplash.com/photo-1522849883584-c8c7ba286f05?auto=format&fit=crop&q=80&w=800',
        alt: 'Acessórios de Fisioterapia e Pilates'
      }
    ]
  },
  faq: {
    sectionTitle: 'Perguntas Frequentes',
    items: [
      {
        id: '1',
        question: 'Gestantes podem praticar Pilates desde o início?',
        answer: 'Sim, desde que haja liberação médica. O Pilates é altamente recomendado para preparar o assoalho pélvico e evitar dores ao longo da gestação.'
      },
      {
        id: '2',
        question: 'O Pilates ajuda com dores crônicas nas costas?',
        answer: 'Com certeza! O fortalecimento do core estrutural e o realinhamento da postura são fundamentais para aliviar dores lombares, cervicais e tensões musculares.'
      },
      {
        id: '3',
        question: 'Preciso ter experiência prévia para praticar?',
        answer: 'Não. As aulas são adaptadas e guiadas considerando o condicionamento e as limitações de cada pessoa. Começamos no seu ritmo.'
      },
      {
        id: '4',
        question: 'Como agendar a minha sessão de Fisioterapia?',
        answer: 'Basta clicar no botão do WhatsApp e nossa equipe encontrará o melhor horário para a sua avaliação inicial.'
      }
    ]
  },
  testimonials: {
    sectionTitle: 'A transformação no corpo e na mente',
    items: [
      {
        id: '1',
        name: 'Paciente Satisfeita',
        rating: 5,
        text: 'Comecei a praticar Pilates com a Dra. Rochele durante a minha gestação e foi a melhor escolha. Tive muito pouca dor nas costas e um controle respiratório excelente no parto!',
      },
      {
        id: '2',
        name: 'Aluno Feliz',
        rating: 5,
        text: 'A Fisioterapia aliada à Terapia Manual me ajudou a sair de uma crise forte de lombalgia em poucas sessões. Espaço muito acolhedor.',
      },
      {
        id: '3',
        name: 'Aluna dedicada',
        rating: 5,
        text: 'Profissionalismo e atenção em cada movimento. Sinto que ganhei uma flexibilidade e consciência corporal que eu nunca tive antes!',
      }
    ],
  },
};
