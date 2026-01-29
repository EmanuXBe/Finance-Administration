import { EraDefinition, Paper, Book, Milestone, Affiliation, ArcadeActivity } from './types';

export const MILESTONES: Milestone[] = [
  { 
    year: '1988', 
    title: 'Ingeniera Civil (UMNG)', 
    description: 'Graduación con honores. El inicio de una carrera dedicada a la infraestructura y la academia.',
    type: 'academic'
  },
  { 
    year: '2000', 
    title: 'Magíster en Educación', 
    description: 'Especialización en pedagogía didáctica en la Universidad de la Sabana.',
    type: 'academic'
  },
  { 
    year: '2015', 
    title: 'PhD en Ciencias de la Ingeniería', 
    description: 'Doctorado en la UMNG y Universidad Santiago de Chile, enfocada en Ambientes Virtuales de Aprendizaje.',
    type: 'academic'
  },
  { 
    year: 'Actualidad', 
    title: 'Directora de Investigación', 
    description: 'Liderazgo del grupo IGE (Ingeniería Geomática y Educación) con más de 290 citaciones globales.',
    type: 'professional'
  }
];

export const AFFILIATIONS: Affiliation[] = [
  { name: 'Universidad Militar Nueva Granada', role: 'Docente Titular / Investigadora', logo: 'https://www.unimilitar.edu.co/documents/20127/0/Logo-UMNG.png' },
  { name: 'Grupo de Investigación IGE', role: 'Directora', logo: 'https://via.placeholder.com/150?text=Grupo+IGE' },
  { name: 'MinCiencias', role: 'Investigadora Senior', logo: 'https://minciencias.gov.co/sites/default/files/logo_minciencias.png' }
];

export const PAPERS: Paper[] = [
  { title: "Guía para el diseño de objetos virtuales de aprendizaje (OVA)", year: 2016, topic: 'Educación', citations: 140, link: "#" },
  { title: "La estereoscopía, métodos y aplicaciones en diferentes áreas", year: 2015, topic: 'Geomática', citations: 53, link: "#" },
  { title: "Physical and mechanical properties of agglomerated panels", year: 2017, topic: 'Materiales', citations: 40, link: "#" },
  { title: "Comprensión lectora: motivación, actitud y estrategias lectoras", year: 2017, topic: 'Educación', citations: 15, link: "#" },
  { title: "Influence of moisture content on the mechanical properties of Guadua Culms", year: 2019, topic: 'Materiales', citations: 5, link: "#" }
];

export const BOOKS: Book[] = [
  { title: 'Estrategias Pedagógicas en Ingeniería', year: 2018, cover: 'https://via.placeholder.com/300x450?text=Estrategias+Pedagogicas', synopsis: 'Un compendio sobre cómo la lúdica transforma el aula técnica.' },
  { title: 'Geomática Aplicada', year: 2020, cover: 'https://via.placeholder.com/300x450?text=Geomatica+Aplicada', synopsis: 'Sistemas de información geográfica para el desarrollo sostenible.' }
];

export const ARCADE_ACTIVITIES: ArcadeActivity[] = [
  { 
    id: 'viaje-del-valor', 
    title: 'El Viaje del Valor', 
    course: 'Administración Financiera', 
    description: 'Una odisea histórica sobre la evolución del dinero.',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=600&auto=format&fit=crop',
    status: 'playable'
  },
  { 
    id: 'quiz-materiales', 
    title: 'Quiz: Resistencia', 
    course: 'Introducción a la Ingeniería', 
    description: 'Desafío de conceptos sobre materiales.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=600&auto=format&fit=crop',
    status: 'coming-soon'
  }
];

export const ERAS: EraDefinition[] = [
  {
    id: 'barter',
    title: 'Capítulo 1: El Dilema del Constructor',
    yearRange: 'Prehistoria - 3000 a.C.',
    story: 'Imagina a Ur-Nammu, un antiguo maestro de obras en la vieja Sumeria. Él desea construir un canal de riego y necesita herramientas de cobre. Ur-Nammu tiene cientos de ladrillos de barro de sobra, pero el herrero local no necesita ladrillos; el herrero tiene hambre y quiere trigo. Ur-Nammu se encuentra atrapado en el problema del Trueque: debe buscar a un granjero que quiera ladrillos, cambiarle los ladrillos por trigo, y luego llevar el trigo al herrero. Esta falta de Coincidencia de Necesidades hace que su proyecto se retrase semanas.',
    engineeringContext: {
      title: 'El Costo del Tiempo',
      content: 'En la ingeniería antigua, la logística dependía de acuerdos personales. Sin un medio de cambio, movilizar recursos para grandes obras era una pesadilla logística.'
    },
    definitions: [
      { term: 'Trueque', definition: 'Sistema primitivo de intercambio directo de bienes sin usar dinero.' },
      { term: 'Coincidencia de Necesidades', definition: 'La improbable situación donde dos personas tienen exactamente lo que la otra desea al mismo tiempo.' }
    ],
    didYouKnow: 'La palabra "pagar" viene del latín "pacare", que significa apaciguar o hacer las paces, originalmente intercambiando bienes para evitar conflictos.',
    reflectionQuestion: '¿Qué pasaría con el cronograma de tu obra si cada material (cemento, acero, vidrio) tuviera que negociarse con un bien diferente?',
    interactiveComponent: 'barter'
  },
  {
    id: 'commodity',
    title: 'Capítulo 2: El Salario de la Legión',
    yearRange: '3000 a.C. - 700 a.C.',
    story: 'Con el tiempo, las civilizaciones buscaron objetos que todos aceptaran. En el antiguo Egipto y Roma, la sal y el ganado se convirtieron en Dinero Mercancía. Imagina supervisar la construcción de una calzada romana. Al final del mes, no entregas un cheque, sino que repartes bolsas de sal a tus soldados y obreros. Esta sal es valiosa porque conserva la comida, pero tiene problemas: si llueve se disuelve, y es difícil de transportar en grandes cantidades. Sin embargo, por primera vez, hay algo que todos aceptan.',
    engineeringContext: {
      title: 'Logística de Pagos',
      content: 'Pagar con mercancía física requería almacenes gigantes (graneros, depósitos de sal) en lugar de cuentas bancarias.'
    },
    definitions: [
      { term: 'Dinero Mercancía', definition: 'Objetos que tienen valor por sí mismos (consumibles) y además se usan para comerciar.' },
      { term: 'Salario', definition: 'Término derivado de "sal", la ración de pago esencial para la vida en la antigüedad.' }
    ],
    didYouKnow: 'En las cárceles modernas, los cigarrillos o latas de atún a menudo resurgen como dinero mercancía espontáneo.',
    reflectionQuestion: 'Si tu presupuesto de obra estuviera en "vacas", ¿cómo calculas la depreciación cuando las vacas envejecen?',
  },
  {
    id: 'metal',
    title: 'Capítulo 3: El Sello del León',
    yearRange: '700 a.C. - Siglo XIX',
    story: 'En el reino de Lidia, el Rey Alyattes tuvo una idea brillante. En lugar de pesar pepitas de oro irregulares para cada transacción, creó discos estandarizados con la cabeza de un león estampada. Había nacido la moneda. Ahora, un arquitecto podía calcular el costo exacto de un templo gracias a la Divisibilidad de las monedas. Sin embargo, los gobernantes a veces hacían trampa: mezclaban el oro con metales baratos para crear más monedas, un fenómeno explicado siglos después por la Ley de Gresham.',
    engineeringContext: {
      title: 'Presupuestos Precisos',
      content: 'La moneda permitió la creación de las primeras licitaciones públicas precisas. Se podía definir el costo de una obra antes de empezarla.'
    },
    definitions: [
      { term: 'Divisibilidad', definition: 'La facilidad de fraccionar el dinero para pagar montos exactos, grandes o pequeños.' },
      { term: 'Ley de Gresham', definition: 'Principio donde "la moneda mala desplaza a la buena": la gente guarda las monedas de oro puro y gasta las adulteradas.' }
    ],
    didYouKnow: 'Los bordes estriados de las monedas actuales (las rayitas en el borde) se inventaron para evitar que la gente limara el oro de los bordes.',
    reflectionQuestion: '¿Cómo afecta la calidad de la moneda (o su devaluación) a la importación de maquinaria pesada?',
  },
  {
    id: 'paper',
    title: 'Capítulo 4: La Promesa de Oro',
    yearRange: 'Siglo XIX - 1971',
    story: 'Mover cofres de oro para financiar ferrocarriles era peligroso y lento. Los orfebres y banqueros comenzaron a emitir papeles: "Este papel vale por 10 onzas de oro guardadas en mi bóveda". La gente empezó a usar los papeles como si fueran oro. Este sistema, conocido como Patrón Oro, dio una estabilidad increíble. El papel actuaba como una perfecta Reserva de Valor, porque sabías que siempre podías ir al banco y reclamar el metal brillante. La ingeniería floreció con créditos masivos respaldados por metal.',
    engineeringContext: {
      title: 'Capital para Megaproyectos',
      content: 'El Canal de Panamá y la Torre Eiffel se financiaron gracias a la capacidad de los bancos de emitir crédito papel respaldado.'
    },
    definitions: [
      { term: 'Patrón Oro', definition: 'Sistema monetario donde cada billete en circulación está respaldado por una cantidad fija de oro en el banco.' },
      { term: 'Reserva de Valor', definition: 'La confianza de que el dinero guardado hoy comprará la misma cantidad de bienes en el futuro.' }
    ],
    didYouKnow: 'El billete de dólar solía decir "Pagadero al portador a la vista en plata/oro". Hoy solo dice "In God We Trust".',
    reflectionQuestion: 'Si la cantidad de dinero depende del oro minado, ¿qué pasa si la economía crece más rápido que la minería?',
  },
  {
    id: 'fiat',
    title: 'Capítulo 5: El Salto de Fe',
    yearRange: '1971 - Presente',
    story: 'En 1971, el mundo cambió. Estados Unidos rompió el vínculo entre el dólar y el oro. Nació el Dinero Fiduciario. Este dinero no vale nada como papel; vale porque confiamos en la economía del país que lo emite y porque es obligatorio por ley. Ahora, los Bancos Centrales tienen el poder de imprimir dinero a voluntad para estimular la economía, pero corren un riesgo terrible: si imprimen demasiado, se genera Inflación, destruyendo el poder de compra de los ingenieros y ciudadanos.',
    engineeringContext: {
      title: 'Gestión de Riesgos Financieros',
      content: 'En esta era, el ingeniero debe ser también economista. Debe entender las tasas de interés y la inflación para que su proyecto sea viable.'
    },
    definitions: [
      { term: 'Dinero Fiduciario', definition: 'Del latín "Fides" (Fe). Dinero que vale por decreto gubernamental y confianza, no por respaldo físico.' },
      { term: 'Inflación', definition: 'La pérdida de valor del dinero cuando hay demasiado circulante persiguiendo pocos bienes.' }
    ],
    didYouKnow: 'La hiperinflación en Hungría en 1946 fue tan alta que los precios se duplicaban cada 15 horas.',
    reflectionQuestion: '¿Cómo proteges el presupuesto de tu obra si el valor del dinero cae un 10% anual?',
    interactiveComponent: 'dam'
  },
  {
    id: 'modern',
    title: 'Capítulo 6: El Futuro Invisible',
    yearRange: 'Siglo XXI - Futuro',
    story: 'Hoy, el dinero se ha vuelto invisible. Son bits y bytes en servidores seguros. Cuando FINDETER aprueba un crédito para una autopista 4G, nadie mueve camiones con billetes; solo cambian unos números en una base de datos. Este Dinero Digital ofrece una Liquidez instantánea, permitiendo mover millones de dólares en segundos a través de fronteras. Sin embargo, requiere ciberseguridad extrema: un hacker podría robar el presupuesto de un puente entero sin levantarse de su silla.',
    engineeringContext: {
      title: 'Ingeniería Financiera Digital',
      content: 'Smart contracts y Blockchain prometen automatizar los pagos de obra según el avance físico verificado por drones.'
    },
    definitions: [
      { term: 'Dinero Digital', definition: 'Representación electrónica de valor que no tiene contrapartida física directa.' },
      { term: 'Liquidez', definition: 'La velocidad y facilidad con la que un activo se convierte en poder de compra inmediato.' }
    ],
    didYouKnow: 'Las criptomonedas intentan volver a la "escasez digital", imitando al oro pero en el mundo del software.',
    reflectionQuestion: '¿Podrían los "Contratos Inteligentes" eliminar la necesidad de interventores humanos para autorizar pagos?',
    interactiveComponent: 'inflation'
  }
];