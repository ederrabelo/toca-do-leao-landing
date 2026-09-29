import heroDesktopPoster from '../assets/hero-desktop-frameinicial.webp?url'
import heroMobilePoster from '../assets/hero-mobile-frameinicial.webp?url'
import heroDesktopVideo from '../assets/hero-desktop.webm?url'
import heroMobileVideo from '../assets/hero-mobile-lite.webm?url'
import logoImage from '../assets/logo.webp?url'
import logoCompactImage from '../assets/logo-compact.webp?url'
import mosaicOne from '../assets/foto-mosaico-1.webp?url'
import mosaicTwo from '../assets/foto-mosaico-2.webp?url'
import mosaicThree from '../assets/foto-mosaico-3.webp?url'
import mosaicFour from '../assets/foto-mosaico-4.webp?url'
import mosaicFive from '../assets/foto-mosaico-5.webp?url'
import storePhoto from '../assets/foto-loja.webp?url'
import lukasLeadership from '../assets/lideranca-lukas.webp?url'
import lukasLeadershipMobile from '../assets/lideranca-lukas-mobile.webp?url'
import yannLeadership from '../assets/lideranca-yann.webp?url'
import adultProgram from '../assets/programa-adultos.webp?url'
import kidsProgram from '../assets/programa-kids.webp?url'
import kidsProgramMobile from '../assets/programa-kids-mobile.webp?url'
import womenProgram from '../assets/programa-mulheres.webp?url'
import nogiProgram from '../assets/programa-nogi.webp?url'
import storeVideoPoster from '../assets/loja-frameinicial.webp?url'
import storeVideo from '../assets/loja.webm?url'

export { heroDesktopPoster, heroMobilePoster, heroDesktopVideo, heroMobileVideo, logoImage, logoCompactImage, mosaicOne, mosaicTwo, mosaicThree, mosaicFour, mosaicFive, storePhoto, lukasLeadership, lukasLeadershipMobile, yannLeadership, adultProgram, kidsProgram, kidsProgramMobile, womenProgram, nogiProgram, storeVideoPoster, storeVideo }

export const instagramUrl = 'https://www.instagram.com/tocadoleaojj/'

export const youtubeUrl = 'https://www.youtube.com/@Tocabjjschool'

export const whatsappNumber = '556592799166'

export const fullAddress = 'R. Padre Gerônimo Botelho, 392 - Dom Aquino, Cuiabá - MT, 78015-115'

export const mapsRouteUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}&travelmode=driving`

export const mapsRouteFrom = (latitude: number, longitude: number) =>
  `${mapsRouteUrl}&origin=${encodeURIComponent(`${latitude},${longitude}`)}`

export const createWhatsappUrl = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

export const whatsappUrls = {
  schedule: createWhatsappUrl(
    'Olá, vim pelo site e gostaria de agendar uma aula experimental grátis.',
  ),
  introduction: createWhatsappUrl(
    'Olá, vim pelo site e gostaria de saber mais sobre a aula introdutória individualizada para iniciantes.',
  ),
  contact: createWhatsappUrl('Olá, vim pelo site e gostaria de mais informações.'),
}

export const navLinks = [
  { label: 'Quem somos', href: '#quem-somos' },
  { label: 'Programas', href: '#programas' },
  { label: 'Horários', href: '#horarios' },
  { label: 'Planos', href: '#planos' },
  { label: 'Loja', href: '#loja' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Contato', href: '#contato' },
]

export const galleryImages = {
  training: {
    image: mosaicOne,
    alt: 'Treino de Jiu-Jitsu com kimono na Toca do Leão',
    width: 1080,
    height: 1440,
  },
  womenTraining: {
    image: mosaicTwo,
    alt: 'Praticantes durante treino de Jiu-Jitsu feminino',
    width: 1080,
    height: 1440,
  },
  kids: {
    image: mosaicThree,
    alt: 'Criança com kimono da Toca do Leão',
    width: 1080,
    height: 1913,
  },
  women: {
    image: mosaicFour,
    alt: 'Alunas durante treino feminino de Jiu-Jitsu',
    width: 1080,
    height: 1246,
  },
  nogi: {
    image: mosaicFive,
    alt: 'Praticantes durante treino de No-gi',
    width: 1080,
    height: 1440,
  },
}

export const mosaicImages = [
  galleryImages.training,
  galleryImages.womenTraining,
  galleryImages.kids,
  galleryImages.women,
  galleryImages.nogi,
]

export const programs = [
  {
    title: 'Kids',
    image: kidsProgram,
    mobileImage: kidsProgramMobile,
    width: 1080,
    height: 1913,
    description:
      'Aulas lúdicas e progressivas para apresentar os fundamentos do Jiu-Jitsu.',
    highlights: ['Coordenação motora', 'Disciplina'],
    scheduleHref: createWhatsappUrl(
      'Olá, vim pelo site e gostaria de agendar uma aula Kids.',
    ),
    learnHref: createWhatsappUrl(
      'Olá, vim pelo site e gostaria de saber mais sobre o programa Kids.',
    ),
    scheduleLabel: 'Agendar',
    source: 'programa_kids',
  },
  {
    title: 'Adultos',
    image: adultProgram,
    width: 640,
    height: 1136,
    description:
      'Turmas separadas para iniciantes e avançados, com orientação adequada ao momento de cada aluno.',
    highlights: ['Evolução técnica', 'Treino consistente'],
    scheduleHref: createWhatsappUrl(
      'Olá, vim pelo site e gostaria de agendar uma aula de Jiu-Jitsu para adultos.',
    ),
    learnHref: createWhatsappUrl(
      'Olá, vim pelo site e gostaria de saber mais sobre o programa Adultos.',
    ),
    scheduleLabel: 'Agendar',
    source: 'programa_adultos',
  },
  {
    title: 'No-gi',
    image: nogiProgram,
    width: 1080,
    height: 1325,
    description:
      'Explore uma leitura diferente do Jiu-Jitsu em treinos dinâmicos sem kimono.',
    highlights: ['Mobilidade', 'Controle corporal'],
    scheduleHref: createWhatsappUrl(
      'Olá, vim pelo site e gostaria de agendar uma aula de No-gi.',
    ),
    learnHref: createWhatsappUrl(
      'Olá, vim pelo site e gostaria de saber mais sobre o programa No-gi.',
    ),
    scheduleLabel: 'Agendar',
    source: 'programa_nogi',
  },
  {
    title: 'Mulheres',
    image: womenProgram,
    width: 1080,
    height: 1080,
    description:
      'Uma turma exclusiva para mulheres aprenderem Jiu-Jitsu com confiança, técnica e tranquilidade.',
    highlights: ['Turma 100% feminina', 'Defesa pessoal'],
    scheduleHref: createWhatsappUrl(
      'Olá, vim pelo site e gostaria de agendar uma aula na turma feminina.',
    ),
    learnHref: createWhatsappUrl(
      'Olá, vim pelo site e gostaria de saber mais sobre o programa Mulheres.',
    ),
    scheduleLabel: 'Agendar',
    source: 'programa_mulheres',
  },
]

export const scheduleDays = [
  {
    day: 'Segunda',
    slots: [
      {
        time: '06:00',
        title: 'Iniciantes',
        detail: 'Fundamentos, base e movimentação',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
      {
        time: '07:00',
        title: 'No-gi',
        detail: 'Controle, passagens e finalizações',
        tags: [{ label: 'Sem kimono', tone: 'nogi' }],
      },
      {
        time: '11:00',
        title: 'Competição',
        detail: 'Estratégia, intensidade e simulações',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
      {
        time: '18:00',
        title: 'Kids',
        detail: 'Turma infantil com dinâmica lúdica',
        tags: [{ label: '5 a 12 anos', tone: 'kids' }],
      },
      {
        time: '19:00',
        title: 'Avançados',
        detail: 'Técnica, situações e rolas',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
      {
        time: '20:00',
        title: 'Mulheres',
        detail: 'Turma exclusiva para mulheres',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
    ],
  },
  {
    day: 'Terça',
    slots: [
      {
        time: '06:00',
        title: 'Iniciantes',
        detail: 'Base, defesa pessoal e movimentação',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
      {
        time: '07:00',
        title: 'Avançados',
        detail: 'Sequências técnicas e rounds',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
      {
        time: '11:00',
        title: 'Competição',
        detail: 'Rolas dirigidos e preparação',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
      {
        time: '18:00',
        title: 'Kids',
        detail: 'Coordenação, disciplina e técnica',
        tags: [{ label: '5 a 12 anos', tone: 'kids' }],
      },
      {
        time: '19:00',
        title: 'No-gi',
        detail: 'Quedas, controle e transições',
        tags: [{ label: 'Sem kimono', tone: 'nogi' }],
      },
      {
        time: '20:00',
        title: 'Iniciantes',
        detail: 'Aula progressiva de fundamentos',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
    ],
  },
  {
    day: 'Quarta',
    slots: [
      {
        time: '06:00',
        title: 'No-gi',
        detail: 'Mobilidade, ataques e defesa',
        tags: [{ label: 'Sem kimono', tone: 'nogi' }],
      },
      {
        time: '07:00',
        title: 'Iniciantes',
        detail: 'Aula progressiva de fundamentos',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
      {
        time: '11:00',
        title: 'Competição',
        detail: 'Estratégia, intensidade e simulações',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
      {
        time: '18:00',
        title: 'Kids',
        detail: 'Fundamentos, jogos e respeito',
        tags: [{ label: '5 a 12 anos', tone: 'kids' }],
      },
      {
        time: '19:00',
        title: 'No-gi',
        detail: 'Controle, transições e finalizações',
        tags: [{ label: 'Sem kimono', tone: 'nogi' }],
      },
      {
        time: '20:00',
        title: 'Avançados',
        detail: 'Treino técnico e específico',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
    ],
  },
  {
    day: 'Quinta',
    slots: [
      {
        time: '06:00',
        title: 'Avançados',
        detail: 'Sequências técnicas e rounds',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
      {
        time: '07:00',
        title: 'No-gi',
        detail: 'Transições, quedas e controle',
        tags: [{ label: 'Sem kimono', tone: 'nogi' }],
      },
      {
        time: '11:00',
        title: 'Competição',
        detail: 'Rolas dirigidos e preparação',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
      {
        time: '18:00',
        title: 'Kids',
        detail: 'Aula infantil por faixa etária',
        tags: [{ label: '5 a 12 anos', tone: 'kids' }],
      },
      {
        time: '19:00',
        title: 'Iniciantes',
        detail: 'Fundamentos, base e defesa pessoal',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
      {
        time: '20:00',
        title: 'Mulheres',
        detail: 'Turma exclusiva para mulheres',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
    ],
  },
  {
    day: 'Sexta',
    slots: [
      {
        time: '06:00',
        title: 'Iniciantes',
        detail: 'Revisão da semana e fundamentos',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
      {
        time: '07:00',
        title: 'Avançados',
        detail: 'Treino técnico e específico',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
      {
        time: '11:00',
        title: 'Competição',
        detail: 'Ritmo, pressão e simulações',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
      {
        time: '18:00',
        title: 'Kids',
        detail: 'Fundamentos, jogos e respeito',
        tags: [{ label: '5 a 12 anos', tone: 'kids' }],
      },
      {
        time: '19:00',
        title: 'No-gi',
        detail: 'Ritmo, scramble e controle',
        tags: [{ label: 'Sem kimono', tone: 'nogi' }],
      },
      {
        time: '20:00',
        title: 'Avançados',
        detail: 'Treino aberto orientado',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
    ],
  },
]

export const scheduleFilters = [
  'Todos',
  'Iniciantes',
  'Avançados',
  'Competição',
  'Kids',
  'Mulheres',
  'Kimono',
  'Sem kimono',
  '5 a 12 anos',
] as const

export const pricingPlans = [
  {
    name: '2x na semana',
    price: 'R$ 189',
    period: '/mês',
    description: 'Ideal para começar com consistência e encaixar o Jiu-Jitsu na rotina.',
    features: [
      '2 treinos por semana',
      'Acesso às turmas de fundamentos',
      'Reposição mediante disponibilidade',
    ],
    href: createWhatsappUrl(
      'Olá, vim pelo site e gostaria de saber mais sobre o plano 2x na semana.',
    ),
    source: 'plano_2x',
  },
  {
    name: '3x na semana',
    price: 'R$ 229',
    period: '/mês',
    description: 'O melhor equilíbrio para evoluir técnica, condicionamento e confiança.',
    features: [
      '3 treinos por semana',
      'Acesso a turmas com kimono e no-gi',
      'Ritmo recomendado para evolução',
    ],
    href: createWhatsappUrl(
      'Olá, vim pelo site e gostaria de saber mais sobre o plano 3x na semana.',
    ),
    source: 'plano_3x',
    featured: true,
  },
  {
    name: '5x na semana',
    price: 'R$ 289',
    period: '/mês',
    description: 'Para quem quer treinar com alta frequência e aproveitar a grade completa.',
    features: [
      'Até 5 treinos por semana',
      'Acesso à grade completa disponível',
      'Inclui treinos avançados e competição',
    ],
    href: createWhatsappUrl(
      'Olá, vim pelo site e gostaria de saber mais sobre o plano 5x na semana.',
    ),
    source: 'plano_5x',
  },
]

export const reviews = [
  {
    author: 'Felix Keunecke',
    rating: 5,
    text: 'Melhor academia de Jiu-Jitsu de Mato Grosso, ambiente muito acolhedor e os professores mais capacitados do estado.',
  },
  {
    author: 'Camilly Schaustz',
    rating: 5,
    text: 'As aulas são excelentes! Sinto-me muito confortável em todas as aulas, o ambiente é respeitoso e todos estão dispostos a ajudar. Nota mil!!!',
  },
  {
    author: 'Lucas De La Cruz Mota',
    rating: 5,
    text: 'Academia top de BJJ, didática excelente e nível altíssimo!',
  },
  {
    author: 'Gabriel Tavares',
    rating: 5,
    text: 'Ótima academia, bons professores, nível de treino bom e ambiente agradável.',
  },
]

export const leaders = [
  {
    name: 'Lukas Andrade',
    image: lukasLeadership,
    mobileImage: lukasLeadershipMobile,
    width: 760,
    height: 950,
    role: 'Faixa-preta de Jiu-Jitsu',
  },
  {
    name: 'Yann Cathalat',
    image: yannLeadership,
    width: 1080,
    height: 844,
    role: 'Faixa-preta de Jiu-Jitsu',
  },
]

export const logoSrcSet = `${logoCompactImage} 192w, ${logoImage} 320w`

export const logoSizes =
  '(max-width: 420px) 98px, (max-width: 980px) 108px, (max-width: 1120px) 112px, 128px'

export const leaderImageSizes =
  '(max-width: 640px) calc(100vw - 36px), (max-width: 980px) calc((100vw - 50px) / 2), 280px'

export const programImageSizes =
  '(max-width: 640px) calc(100vw - 36px), (max-width: 980px) calc((100vw - 50px) / 2), 280px'

export const storeCategories = [
  {
    icon: 'BeltIcon' as const,
    title: 'Kimonos e faixas',
    text: 'Itens essenciais para os treinos e graduações.',
  },
  {
    icon: 'ShirtIcon' as const,
    title: 'Rashguards e compressão',
    text: 'Rashguards, shorts e calças para conforto e mobilidade.',
  },
  {
    icon: 'CapIcon' as const,
    title: 'Lifestyle',
    text: 'Bonés e outros itens da academia.',
  },
]

export const faqs = [
  {
    question: 'Estou de passagem por Cuiabá. Posso fazer um treino?',
    answer:
      'Sim. Alunos visitantes são bem-vindos para treinar com a equipe. Basta chamar a recepção no WhatsApp para verificar o melhor horário e agendar sua visita ao tatame.',
  },
  {
    question: 'Preciso de kimono na primeira aula?',
    answer:
      'Não. Iniciantes podem fazer a primeira aula com ou sem kimono. Use uma roupa confortável, sem zíper ou detalhes que possam machucar, mantenha as unhas cortadas e traga uma garrafinha de água.',
  },
  {
    question: 'Preciso estar em forma para começar?',
    answer:
      'Não. A aula introdutória permite conhecer os fundamentos no seu ritmo. O condicionamento evolui gradualmente com a prática.',
  },
  {
    question: 'Tenho uma lesão ou restrição física. Posso treinar?',
    answer:
      'Depende da condição. Avise nossa equipe antes da aula e informe o professor. Em alguns casos, a orientação médica é recomendada antes de iniciar.',
  },
  {
    question: 'Preciso competir para treinar Jiu-Jitsu?',
    answer:
      'Não. Você pode treinar para melhorar o condicionamento, aprender defesa pessoal e praticar uma atividade física. A competição é uma possibilidade, não uma obrigação.',
  },
  {
    question: 'Os responsáveis podem acompanhar a aula Kids?',
    answer:
      'Sim. Os responsáveis podem acompanhar a aula dos filhos à beira do tatame.',
  },
]

export const faqColumnBreak = Math.ceil(faqs.length / 2)

export const faqColumns = [faqs.slice(0, faqColumnBreak), faqs.slice(faqColumnBreak)]
