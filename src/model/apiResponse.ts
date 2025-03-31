// posso creare un type ad esempio per una response di un API
// dico che deve essere un oggetto che contiene 2 proprietà: una any ed una boolean
type ApiResponse = {
  data: any;
  isError: boolean;
};

// dichiaro una const di tipo ApiResponse
// devo per forza mettere le properties data e isError per riapettare il type
const response: ApiResponse = {
  // data è di tipo any, quindi potrebbe essere qualsiasi cosa
  data: {},
  isError: true,
};

// possiamo utilizzare le generics anche in definizione di un type
// praticamente sto dicendo che quando utilizzerò questo type dovrò sempre indicare cosa sia T
// perchè questo type è una funzione generica che si aspetta un parametro che indichi il tipo
type ApiResponse2<T> = {
  data: T;
  isError: boolean;
};

// in questo modo definisco il valore di T ed a data posso passare quello che voglio ed in questo modo sarà tipizzata come proprietà e non semplicemente any
// così gli sto dicendo che T del type ApiResonse2 è un oggetto contenente 2 proprietà: name (string) ed age (number)
// quindi data dovrà essere un oggetto di questo tipo
const response2: ApiResponse2<{ name: string; age: number }> = {
  data: {
    name: 'Angelo',
    age: 45,
  },
  isError: false,
};

// la stessa cosa può essere scritta in modo più semplice
// creo un type uguale al type che ha la generica andando a definire la generica, quindi dicendogli cosa è T
// il resto sarà tutto uguale
type UserResponse = ApiResponse2<{ name: string; age: number }>;

const response3: UserResponse = {
  isError: true,
  data: {
    name: 'gianna',
    age: 56,
  },
};

// in questo modo posso mantenere la struttura principale dell'ApiResponse ma definendo ogni volta cosa è il data
// ad esempio aspetto una response da un blog con un titolo
type BlogResponse = ApiResponse2<{ title: string }>;

const response4: BlogResponse = {
  isError: false,
  data: {
    title: 'Sono un blog',
  },
};

// è possibile passare un valore di default al type della generica
type ApiResponse3<T = { status: number }> = {
  data: T;
};

// in questo modo posso assegnare il type senza definire il valore di T
// se non passo niente la property data è un oggetto contenente una property status di tipo number
const response5: ApiResponse3 = {
  data: {
    status: 400,
  },
};

// se definisco il valore di T viene sovrascritto quello di default
const response6: ApiResponse3<{ proprietà: string }> = {
  data: {
    proprietà: 'sovrascritto valore di default di T',
  },
};

// dichiaro che T deve essere per forza un object, non importa cosa contiene
type ApiResponse4<T extends object> = {
  data: T;
};

// posso definire T anche oggetto vuoto, l'importante è che data sia un object
const response7: ApiResponse4<{}> = {
  data: {
    g: 'ciao',
  },
};
