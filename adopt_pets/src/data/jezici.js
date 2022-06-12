let reci =[
    {
        component: "Meni",
        pocetna: ["Почетна","Home"],
        zivotinje:["Животиње", "Animals"],
        psi:["Пси", "Dog"],
        ptice:["Птице", "Bird"],
        macke:["Мачке", "Cat"],
        izgubljeni:["Изгубљени љубимци", "Lost pets"],
        dodaj:["Додај оглас", "Add post"],
        moj:["Мој налог", "My account"],
        oNama:["О Нама", "About Us"]

    },
    {
        component: "DodajOglas",
        breadcrumbs: [
            ["Pocetna", "Home"],
            ["Dodaj oglas", "Add post"],
        ],
        greskaNaziv:["Назив је обавезан","Title is required"],
        greskaOpis:["Опис је обавезан","Description is required"],
        greskaTelefon:["Мора бити десетоцифрен","Must be 10 digit number"],
        postavi:["Постави","Submit"],
        nazivPlaceHolder: ["Назив огласа","Name of the post"],
        opisPlaceHolder: ["Назив огласа","Description"],
        brojPlaceHolder: ["Десетоцифрени број","Ten digit number"],
        
    },
    {
        component: "JedanOglas",
        opis:["Опис","Description"],
        kontakt:["Молимо контактирајте","Please contact"],
        komentarPlaceHolder: ["Оставите Ваш коментар","Leave comment"],
        dugme:["Додај","Add"]
    },
    {
        component: "MojNalogOglasi",
        breadcrumbs: [
            ["Pocetna", "Home"],
            ["Moji oglasi", "My posts"],
        ],
    },
    {
        component: "Oglasi",
        breadcrumbs: [
            ["Pocetna", "Home"],
            ["Oglasi", "Posts"],
        ],
    },
    {
        component: "MojNalogNavigation",
        komentari:["Коментари","Comments"],
        oglasi:["Огласи","Posts"]
    },
    {
        component: "MyFooter",
        opis:["Copyright 2022, Савић Иван, Одсек за софтверско инжењерство Електротехничког факултета Универзитета у Београду",
        "Copyright 2022, Savic Ivan, Software Engeneering School of Electrical Engeneering, University of Belgrade"]
    },
    {
        component: "OglasStavka",
        kontakt:["Контакт ","Contact"],
        info:["више инфо","more info"],
    },
    {
        component: "Pocetna",
        breadcrumbs: [
            ["Pocetna", "Home"],
        ],
        novosti:["Новости ","News"],
        info:["више инфо","more info"],
        pomoc:["Помози нам","Help us"],
        blog1:
            {
            naslov: ["Да ли Ваш пас зна да сте љути","Does you dog know when you are angry"],
            sadrzaj:["Чинило вам се да Вас разуме, да ли је стварно тако ...","You know he understands you, but are you sure..."]
            }

        ,
        blog2:
            {
                naslov: ["6 разлога зашто су мачке супер","Does you dog know when you are angry"],
                sadrzaj:["Мека, малена ...","Soft,small & squishy..."]
            }
        
    },
    {
        component:"ONama",
        breadcrumbs: [
            ["Pocetna", "Home"],
            ["O nama", "About us"],
        ],
        naslov:["Сазнај више о нама","Get to know us"],
        levaKolona:[
            "Година виђамо животиње свуда око нас угрожене животиње, ми смо се фокусирали да помогнемо\
            псима, птицама и мачкама, они су наши најчешћи љубимци па тако помажемо скоро па свакоме",
            "For years we've seen animals all around us endangered animals, we've focused on helping them.\
            Dogs, birds and cats, they're our most common pets so we help almost everyone"
        ],
        desnaKolona:[
            "Контактирате нас на инстаграму, снепу, твитеру или пишите директно на наш мејл support@pets.com",
            "Contact us at snap, IG, twitter or write directly to our email support@pets.com"
        ]
    },
    {
        component:"Zivotinje",
        breadcrumbs: [
            ["Pocetna", "Home"],
            ["Zivotinje", "Pets"],
        ],
        naslov:["Zivotinje","Pets"]
    },
    {
        component:"Macke",
        breadcrumbs: [
            ["Pocetna", "Home"],
            ["Zivotinje", "Pets"],
            ["Macke", "Cats"],
        ],
        naslov:["Macke","Cats"]
    },
    {
        component:"Psi",
        breadcrumbs: [
            ["Pocetna", "Home"],
            ["Zivotinje", "Pets"],
            ["Psi", "Dogs"],
        ],
        naslov:["Psi","Dogs"]
    },
    {
        component:"Ptice",
        breadcrumbs: [
            ["Pocetna", "Home"],
            ["Zivotinje", "Pets"],
            ["Ptice", "Birds"],
        ],
        naslov:["Ptice","Birds"]
    },
    {
        component:"Ljubimac",
        breadcrumbs: [
            ["Pocetna", "Home"],
            ["Zivotinje", "Pets"],
        ],
        naslov:["Ljubimac","Pet"]
    }
]
export default reci
