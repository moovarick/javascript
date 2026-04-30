const usuarios = [
{"id":1,"first_name":"Virgie","last_name":"Musprat","bank":"Caixabank, S.A.","city":"Bin’an","country":"China","salary":"82369.71","expenses":72691},
{"id":2,"first_name":"Morey","last_name":"Muffin","bank":"COMMERCE BANK","city":"Pakemitan","country":"Indonesia","salary":"775210.47","expenses":893785},
{"id":3,"first_name":"Wilbur","last_name":"Fullard","bank":"Core Credit Union Limited","city":"Tsukumiura","country":"Japan","salary":"691560.67","expenses":791669},
{"id":4,"first_name":"Meir","last_name":"Muckleston","bank":"GREAT WESTERN BANK","city":"Horodok","country":"Ukraine","salary":"815329.61","expenses":202801},
{"id":5,"first_name":"Caitlin","last_name":"Paliser","bank":"WELLS FARGO BANK","city":"Houmt Souk","country":"Tunisia","salary":"418795.71","expenses":703863},
{"id":6,"first_name":"Annette","last_name":"Gaggen","bank":"CAPITAL BANK","city":"Plátanos","country":"Greece","salary":"$462131.06","expenses":564995},
{"id":7,"first_name":"Idalia","last_name":"Loud","bank":"TRUSTMARK NATIONAL BANK","city":"Paris La Défense","country":"France","salary":"$23968.79","expenses":25158},
{"id":8,"first_name":"Fleurette","last_name":"Gruszecki","bank":"COMMUNITY BANK","city":"Rimba Sekampung","country":"Indonesia","salary":"$792941.35","expenses":578631},
{"id":9,"first_name":"Konstantin","last_name":"Antognoni","bank":"Raiffeisenbank Hohe Tauern eGen","city":"Chichigalpa","country":"Nicaragua","salary":"$177530.51","expenses":339857},
{"id":10,"first_name":"Emili","last_name":"Wankling","bank":"SANTANDER BANK","city":"Ratchasan","country":"Thailand","salary":"$960052.32","expenses":206512},
{"id":11,"first_name":"Steffane","last_name":"Easterbrook","bank":"BUSEY BANK","city":"Paya Dapur","country":"Indonesia","salary":"$825708.91","expenses":567677},
{"id":12,"first_name":"Rutledge","last_name":"Dinley","bank":"Volksbank Geest eG","city":"Rybarzowice","country":"Poland","salary":"$964120.03","expenses":712561},
{"id":13,"first_name":"Morris","last_name":"Vallis","bank":"PINNACLE BANK","city":"Lop Buri","country":"Thailand","salary":"$780445.05","expenses":933867},
{"id":14,"first_name":"Maible","last_name":"Cromblehome","bank":"BANK OF AMERICA","city":"Jianlong","country":"China","salary":"$938149.47","expenses":593269},
{"id":15,"first_name":"Jackie","last_name":"Nerney","bank":"Volksbank Börßum-Hornburg eG","city":"Yuzhou","country":"China","salary":"$78349.54","expenses":901239},
{"id":16,"first_name":"Jamesy","last_name":"McGeaney","bank":"BANCA INVESTIS S.P.A.","city":"Luofang","country":"China","salary":"$139193.38","expenses":533353},
{"id":17,"first_name":"Rosetta","last_name":"Humfrey","bank":"BANCA ALETTI S.P.A.","city":"Wanhu","country":"China","salary":"$196658.48","expenses":669827},
{"id":18,"first_name":"Trescha","last_name":"Janeway","bank":"Raiffeisenbank Bidingen eG","city":"Kolape","country":"Philippines","salary":"$392984.93","expenses":456844},
{"id":19,"first_name":"Darrell","last_name":"Duffyn","bank":"NIBC Bank N.V.","city":"Impalutao","country":"Philippines","salary":"$793115.87","expenses":772185},
{"id":20,"first_name":"Judas","last_name":"Lafranconi","bank":"Tatra banka, a.s.","city":"Ratoath","country":"Ireland","salary":"$122663.96","expenses":493859},
{"id":21,"first_name":"Teodora","last_name":"Sacher","bank":"Banking Circle S.A.","city":"Bobigny","country":"France","salary":"$907586.33","expenses":372868},
{"id":22,"first_name":"Kynthia","last_name":"Ionn","bank":"HUNTINGTON NATIONAL BANK","city":"Wailebe","country":"Indonesia","salary":"$473532.97","expenses":275589},
{"id":23,"first_name":"Phillie","last_name":"Jermyn","bank":"BANCO BPM SOCIETA' PER AZIONI","city":"Gandekan","country":"Indonesia","salary":"$392001.06","expenses":359598},
{"id":24,"first_name":"Rivkah","last_name":"Dudson","bank":"GRESHAM Banque","city":"Kirove","country":"Ukraine","salary":"$56561.38","expenses":323229},
{"id":25,"first_name":"Forster","last_name":"Newbigging","bank":"BANK OF AMERICA","city":"Osa","country":"Russia","salary":"$249112.25","expenses":405186},
{"id":26,"first_name":"Izabel","last_name":"Jeffry","bank":"COLUMBIA STATE BANK","city":"Krasnoarmiys’k","country":"Ukraine","salary":"$523815.25","expenses":878168},
{"id":27,"first_name":"Otho","last_name":"Ierland","bank":"SOUTH STATE BANK","city":"Wangda","country":"China","salary":"$93492.43","expenses":266244},
{"id":28,"first_name":"Marylynne","last_name":"Chicken","bank":"DEUTSCHE BANK AKTIENGESELLSCHAFT","city":"Česká Skalice","country":"Czech Republic","salary":"$101566.30","expenses":295791},
{"id":29,"first_name":"Jervis","last_name":"Veighey","bank":"Powszechna Kasa Oszczędności Bank Polski S.A.","city":"Boracéia","country":"Brazil","salary":"$609848.52","expenses":489983},
{"id":30,"first_name":"Gianina","last_name":"Scalera","bank":"Caixa - Banco de Investimento, S.A.","city":"Rizal","country":"Philippines","salary":"$42896.92","expenses":468262},
{"id":31,"first_name":"Emmie","last_name":"Simkin","bank":"BANCO BPM SOCIETA' PER AZIONI","city":"Zongga","country":"China","salary":"$554172.06","expenses":691419},
{"id":32,"first_name":"Robinett","last_name":"Pagitt","bank":"PNC BANK","city":"Budënnovsk","country":"Russia","salary":"$709025.56","expenses":582160},
{"id":33,"first_name":"Carlyle","last_name":"Guerreau","bank":"FINANCIAL PARTNERS CREDIT UNION","city":"Prang Ku","country":"Thailand","salary":"$499152.59","expenses":271390},
{"id":34,"first_name":"Jonathon","last_name":"Heaney`","bank":"PNC BANK","city":"Cabannungan Second","country":"Philippines","salary":"$958923.95","expenses":690671},
{"id":35,"first_name":"Mohandas","last_name":"Eastcourt","bank":"IBERIABANK","city":"Budënnovsk","country":"Russia","salary":"$410043.74","expenses":513465},
{"id":36,"first_name":"Krysta","last_name":"Hearon","bank":"SANTANDER BANK","city":"Xiadu","country":"China","salary":"$137657.63","expenses":388705},
{"id":37,"first_name":"Cindee","last_name":"Botwright","bank":"JPMORGAN CHASE","city":"Long Thành","country":"Vietnam","salary":"$590875.50","expenses":902748},
{"id":38,"first_name":"Gregorius","last_name":"Girard","bank":"FIRST NATIONAL BANK","city":"Kolodenka","country":"Ukraine","salary":"$81878.74","expenses":99210},
{"id":39,"first_name":"Joellyn","last_name":"Firks","bank":"Aktiebolaget Svensk Exportkredit","city":"Tcholliré","country":"Cameroon","salary":"$552806.61","expenses":981940},
{"id":40,"first_name":"Timothea","last_name":"Lambarth","bank":"FCE bank plc","city":"Monastirákion","country":"Greece","salary":"$380975.50","expenses":746935},
{"id":41,"first_name":"Haily","last_name":"Sargeant","bank":"FIRST NATIONAL BANK","city":"Presa","country":"Portugal","salary":"$223685.89","expenses":400153},
{"id":42,"first_name":"Eleonora","last_name":"Janic","bank":"State Street Bank International GmbH","city":"Thị Trấn Tủa Chùa","country":"Vietnam","salary":"$554838.05","expenses":534206},
{"id":43,"first_name":"Karolina","last_name":"Halcro","bank":"KELER Központi Értéktár Zártkörűen Működő Részvénytársaság","city":"Ringinrejo","country":"Indonesia","salary":"$215801.57","expenses":780177},
{"id":44,"first_name":"Elvis","last_name":"Maciak","bank":"Volksbank Chemnitz eG","city":"West End","country":"Bahamas","salary":"$318675.07","expenses":482487},
{"id":45,"first_name":"Elberta","last_name":"Dinnies","bank":"FIRST STATE BANK","city":"Saltsjö-Boo","country":"Sweden","salary":"$457621.77","expenses":692813},
{"id":46,"first_name":"Karlik","last_name":"Hebditch","bank":"IBERIABANK","city":"Pampas","country":"Peru","salary":"$15300.81","expenses":296438},
{"id":47,"first_name":"Tiffie","last_name":"Iacovozzo","bank":"Raiffeisenbank Matrei am Brenner und Umgebung eGen","city":"Kuta","country":"Nigeria","salary":"$67198.00","expenses":678723},
{"id":48,"first_name":"Damien","last_name":"MacCombe","bank":"FIRST NATIONAL BANK","city":"Na Yung","country":"Thailand","salary":"$417911.84","expenses":141247},
{"id":49,"first_name":"Kari","last_name":"Bestwick","bank":"BYLINE BANK","city":"Yinglong","country":"China","salary":"$176536.57","expenses":161889},
{"id":50,"first_name":"Charlie","last_name":"Housiaux","bank":"BANCO BPM SOCIETA' PER AZIONI","city":"Krasnoarmeysk","country":"Russia","salary":"$545969.97","expenses":303973}
];


function calcularBalanceMensual() {
    let inputUsuario = prompt("Ingresa el ID del usuario que deseas consultar (1-50):");
    if (inputUsuario === null) return; 

    let idBuscado = parseInt(inputUsuario);
    let usuarioEncontrado = null; 

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].id === idBuscado) {
            usuarioEncontrado = usuarios[i]; 
            break; 
        }
    }

    if (usuarioEncontrado !== null) {
        let salarioTexto = usuarioEncontrado.salary.toString().replace('$', '');
        let salarioNumerico = parseFloat(salarioTexto);
        let ahorroMensual = salarioNumerico - usuarioEncontrado.expenses;

        let resultado = {
            nombre: usuarioEncontrado.first_name + " " + usuarioEncontrado.last_name,
            banco: usuarioEncontrado.bank,
            ahorro: ahorroMensual
        };

        console.log("Resultado de la búsqueda:", resultado);
        alert(`Nombre: ${resultado.nombre}\nBanco: ${resultado.banco}\nAhorro: $${resultado.ahorro.toFixed(2)}`);
        
       
        return resultado; 
        
    } else {
        alert("No se encontró ningún usuario con ese ID.");
    }
}


function clasificarAhorroMensual() {
    console.log("--- ACTIVIDAD 2: Clasificación de cada usuario ---");
    
    for (let i = 0; i < usuarios.length; i++) {
        let usuario = usuarios[i];
        
        let salarioTexto = usuario.salary.toString().replace('$', '');
        let salarioNumerico = parseFloat(salarioTexto);
        let ahorroMensual = salarioNumerico - usuario.expenses;

        let clasificacion = "";

        switch (true) {
            case (ahorroMensual < 500):
                clasificacion = "Ahorro bajo";
                break;
            case (ahorroMensual >= 500 && ahorroMensual <= 1500):
                clasificacion = "Ahorro medio";
                break;
            case (ahorroMensual > 1500):
                clasificacion = "Ahorro alto";
                break;
        }

        
        console.log(`ID: ${usuario.id} | Nombre: ${usuario.first_name} | Ahorro: $${ahorroMensual.toFixed(2)} -> ${clasificacion}`);
    }
}



function agruparPorPropiedad(propiedad) {
    let agrupacion = {}; 

    for (let i = 0; i < usuarios.length; i++) {
        let usuario = usuarios[i];
        let valorClave = usuario[propiedad]; 

        let salarioTexto = usuario.salary.toString().replace('$', '');
        let salarioNumerico = parseFloat(salarioTexto);
        let ahorroMensual = salarioNumerico - usuario.expenses;

        if (agrupacion[valorClave] !== undefined) {
            agrupacion[valorClave].cantidadUsuarios += 1;
            agrupacion[valorClave].ahorroTotal += ahorroMensual;
        } else {
            agrupacion[valorClave] = {
                cantidadUsuarios: 1,
                ahorroTotal: ahorroMensual
            };
            agrupacion[valorClave][propiedad] = valorClave; 
        }
    }

    let resultadoFinal = [];
    for (let clave in agrupacion) {
        let item = agrupacion[clave];
        item.ahorroTotal = parseFloat(item.ahorroTotal.toFixed(2));
        resultadoFinal.push(item);
    }

    return resultadoFinal;
}


function ejecutarActividades() {
   
    let resumenBancos = agruparPorPropiedad("bank");
    console.log("--- ACTIVIDAD 3: Ahorro por Banco ---");
    console.log(resumenBancos);

    
    let resumenPaises = agruparPorPropiedad("country");
    
    
    for (let i = 0; i < resumenPaises.length; i++) {
        for (let j = 0; j < resumenPaises.length - 1; j++) {
            if (resumenPaises[j].ahorroTotal < resumenPaises[j + 1].ahorroTotal) {
                let temporal = resumenPaises[j];
                resumenPaises[j] = resumenPaises[j + 1];
                resumenPaises[j + 1] = temporal;
            }
        }
    }

    console.log("--- ACTIVIDAD 4: País con mejor ahorro (Ordenado) ---");
    console.log("El país con MEJOR ahorro es:", resumenPaises[0]); 
    console.log("Lista completa de países:", resumenPaises);
}


calcularBalanceMensual();
clasificarAhorroMensual();
ejecutarActividades();