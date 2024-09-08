export default {
  common: {
    date: 'Fecha',
    open: 'Open',
    all: 'Todo',
    in: 'in',
    more: 'Más',
    statBy: 'Estadísticas: ',
  },

  analytics: {
    title: 'Analytics',
  },

  appName: 'Finapp',

  locale: {
    toggle: 'Alternar configuración regional',
  },

  theme: {
    title: 'Tema',
    change: 'Cambiar tema',
  },

  close: 'Cerrar',

  transfer: {
    titleMoney: 'Transferencias',
  },

  trnForm: {
    transferTitle: 'Transferencia',
    saveTrnButton: 'Guardar transacción',
    calcTrnButton: 'Calcular',
    createTrn: 'Añadir transacción',
    titleEditTrn: 'Editar transacción',
    filterWalletAndCategory: 'Cuentas y Categorias',
    filterWallet: 'Cuentas solamente',
    filterAll: 'Todo',
    title: 'Formulario de transacción',
    lastUsedCats: 'Mostrar las últimas categorías utilizadas',
    description: {
      title: 'Descripción',
      placeholder: 'Escribir descripción...',
    },
    transfer: {
      from: 'Desde',
      fromLong: 'Desde la cuenta',
      to: 'A',
      toLong: 'A la cuenta',
    },
  },

  app: {
    version: 'Versión',
    desc: 'Powerful personal finance application',
    welcome: 'Bienvenido a Finapp',
    lang: {
      select: 'Elegir lenguaje',
      en: 'English',
      ru: 'Русский',
      es: 'Español',
    },
    theme: {
      select: 'Elegir estilo',
      dark: 'Oscuro',
      light: 'Claro',
    },
    madeBy: {
      text: 'Made with',
      name: 'by Ilya Komichev',
    },
  },

  userLogout: 'Salir',
  loginWithGoogle: 'Iniciar sesión con Google',
  changeTheme: 'Cambiar tema',

  base: {
    sure: '¿Estas seguro?',
    yes: 'Si',
    no: 'No',
    sort: 'Ordenar',
    save: 'Guardar',
    cancel: 'Cancelar',
    duplicate: 'Duplicar',
    setFilter: 'Filtrar por',
    on: 'On',
    ok: 'Ok',
    off: 'Off',
    add: 'Añadir',
    edit: 'Editar',
    delete: 'Eliminar',
    filter: 'Filtrar',
  },

  filter: {
    clear: 'Limpiar filtro',
  },

  welcome: {
    firstRun: {
      text: 'Comience con crear la configuración base de la aplicación',
      btn: 'Comenzar',
    },
    create: {
      text: 'Comienza a crear tus propias cuentas y categorías',
      btn: 'Vamos!',
    },
    createFirstWallet: {
      text: 'Comencemos con crear la primera cuenta',
      btn: 'Crear cuenta / billetera',
    },
    createFirstCategory: {
      text: '¡Excelente! Ahora vamos a crear la primera categoría',
      btn: 'Crear categoria',
    },
    createFirstTransaction: {
      text: 'Aquí se verán las estadísticas',
      btn: 'Crear tu primera transacción',
    },
  },

  settings: {
    title: 'Ajustes',
    account: 'Cuenta',
    lang: 'Lenguaje',
    options: 'Opciones',
    open: 'Abrir ajustes',
    app: 'Aplicación',
    caution: 'Zona peligrosa',
    deleteButton: 'Eliminar todos mis datos',
    descBase: 'Las transacciones en diferentes divisas se convertirán a esta divisa.',
  },

  wallets: {
    title: 'Cuentas',
    name: 'Cuentas',
    new: 'Nueva cuenta',
    showAll: 'Mostrar todas las cuentas',
    showOnly: 'Show only',
    sortTitle: 'Ordenar cuentas',
    createNewTitle: 'Crear cuenta',
    editTitle: 'Editar cuenta',
    form: {
      name: {
        label: 'Nombre de la Cuenta',
        placeholder: 'Escribir...',
        error: 'Escribe un nombre para la cuenta',
        exist: 'Existe una cuenta con el mismo nombre',
      },
      description: {
        label: 'Descripción de la cuenta (opcional)',
        placeholder: 'Escribir...',
      },
      colors: {
        label: 'Color',
        placeholder: 'Seleccionar color',
        error: 'Seleccione un color',
        custom: 'Color personalizado',
      },
      currencies: {
        label: 'Divisa',
        placeholder: 'Seleccione divisa',
        error: 'Seleccione una divisa',
      },
      total: {
        placeholder: 'Retiro de efectivo',
      },
      credit: {
        placeholder: 'Cuenta de crédito',
      },
      save: 'Guardar',
    },
    list: {
      all: 'Todas',
      list: 'Listar',
      currenciesBase: 'Divisa base',
    },
    stats: {
      withdrawal: 'Disponible para usar',
      credits: 'Creditos',
      withoutCredit: 'Total sin creditos',
      savings: 'Ahorros',
      total: 'Total',
    },
  },

  currency: {
    title: 'Divisa',
    selectBaseTitle: 'Seleccione la moneda base',
    notFound: 'Divisa no encontrada.',
    search: 'Buscar divisa...',
  },

  categories: {
    title: 'Categorías',
    name: 'Categorías',
    shortTitle: 'Catgs',
    new: 'Nueva categoría',
    allTitle: 'Todas',
    lastUsedCategories: 'Categorías recientes',
    lastUsedTitle: 'Reciente',
    favoriteCategories: 'Categorías favoritas',
    favoriteTitle: 'Favoritas',
    createNewTitle: 'Crear categoría',
    editTitle: 'Editar categoría',
    form: {
      name: {
        label: 'Nombre de la categoría',
        placeholder: 'Escribir nombre...',
        error: 'Escribir un nombre para la categoría',
        exist: 'Existe una categoría con el mismo nombre',
      },
      parent: {
        no: 'Categoría base',
        label: 'Categoría principal',
      },
      colors: {
        label: 'Colores',
        custom: 'Color personalizado',
      },
      icon: {
        label: 'Icono',
      },
      data: {
        label: 'Datos',
      },
      lastUsed: 'Mostrar en las últimas categorías utilizadas',
      quickSelector: 'Categoría favorita',
      childColor: 'Aplicar el color a todas las categorías secundarias',
      save: 'Guardar',
    },
  },

  stat: {
    title: 'Dashboard',
    selectedPeriod: 'Período seleccionado',
    shortTitle: 'Estadísticas',
    periods: 'Resumen',
    balanceTitle: 'Balance',
    emptyDesc: 'Cambie el filtro, el período o agregue nuevas transacciones.',
    customize: {
      showHistory: 'Mostrar historial',
      showRoundCats: 'Show round categories list',
      showCategoriesChart: 'Show categories chart',
      showCategoriesList: 'Show categories list',
      showCatsChartPie: 'Show categories pie chart',
      showPeriodsChart: 'Show periods chart',
    },
  },

  chart: {
    title: 'Chart',
    showMain: 'Show main chart',
    view: {
      add: 'Add',
      remove: 'Remove',
      toggle: 'Toggle chart view',
      showed: 'Showed',
      periodsName: 'periods',
      simpleTitle: 'Line view',
      groupedTitle: 'Column view',
      addGroupButton: 'Add group',
      addPeriodButton: 'Add period',
      removeGroupButton: 'Remove group',
      removePeriodButton: 'Remove period',
    },
  },

  trns: {
    inPeriodTitle: 'Transacciones',
    shortTitle: 'Transacciones',
    history: 'Historial',
    more: 'Mostrar más',
    filter: {
      showTrnsWithDesc: 'Solo con descripcion',
    },
    noTrns: 'Sin transacciones',
  },

  create: {
    title: 'Crear',
  },

  money: {
    income: 'Ingresos',
    expense: 'Gastos',
    total: 'Ingresos netos',
    sum: 'Ingresos netos',

    transfer: 'Transferencias',
    average: {
      base: 'Promedio',
      income: 'Promedio',
      expense: 'Promedio',
    },
    averageTotal: 'Promedio',
    also: 'Also',
    wallets: 'Wallets',
    all: 'Net income',
  },

  dates: {
    period: 'Período',
    count: 'Count',
    twoDaysAgo: 'Hace 2 días',
    day: {
      current: 'Hoy',
      today: 'Hoy',
      yesterday: 'Ayer',
      simple: 'Día',
    },
    week: {
      current: 'Esta semana',
      last: 'La semana pasada',
      simple: 'Semana',
    },
    month: {
      current: 'Este mes',
      last: 'El mes pasado',
      simple: 'Mes',
    },
    year: {
      current: 'Este año',
      simple: 'Año',
    },
    all: {
      simple: 'Todas',
    },
  },

  alerts: {
    willDeleteEverything: 'Esto eliminará todas sus cuentas, categorías y transacciones.',
  },

  buttons: {
    nextTitle: 'Siguiente',
    prevTitle: 'Anterior',
    nextStep: 'Próximo paso',
  },

  users: {
    title: 'Usuarios',
  },

  colors: 'Colores',

  about: {
    title: 'Creadores',
    author: 'Autor',
    thanks: 'Gracias por el apoyo',
  },
}
