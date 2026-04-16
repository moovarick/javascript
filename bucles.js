const usuarios = [
{"id":1,"first_name":"Claiborne","last_name":"Gergely","email":"cgergely0@squarespace.com","gender":"Male","ip_address":"0.176.107.15"},
{"id":2,"first_name":"Liva","last_name":"Danielczyk","email":"ldanielczyk1@artisteer.com","gender":"Female","ip_address":"57.161.84.203"},
{"id":3,"first_name":"Kennie","last_name":"McGragh","email":"kmcgragh2@icio.us","gender":"Male","ip_address":"156.73.190.220"},
{"id":4,"first_name":"Price","last_name":"Staining","email":"pstaining3@photobucket.com","gender":"Male","ip_address":"249.47.21.227"},
{"id":5,"first_name":"See","last_name":"Lemme","email":"slemme4@dailymail.co.uk","gender":"Male","ip_address":"10.1.102.60"},
{"id":6,"first_name":"Gael","last_name":"Swaton","email":"gswaton5@gravatar.com","gender":"Female","ip_address":"61.85.62.227"},
{"id":7,"first_name":"Tess","last_name":"Dingsdale","email":"tdingsdale6@behance.net","gender":"Female","ip_address":"189.63.188.173"},
{"id":8,"first_name":"Sigismond","last_name":"Dilrew","email":"sdilrew7@baidu.com","gender":"Male","ip_address":"242.28.59.209"},
{"id":9,"first_name":"Natalya","last_name":"Magauran","email":"nmagauran8@thetimes.co.uk","gender":"Female","ip_address":"136.105.229.203"},
{"id":10,"first_name":"Rodger","last_name":"Altree","email":"raltree9@amazon.co.uk","gender":"Male","ip_address":"128.238.11.79"},
{"id":11,"first_name":"Nerita","last_name":"Victory","email":"nvictorya@umich.edu","gender":"Female","ip_address":"87.16.83.173"},
{"id":12,"first_name":"Vick","last_name":"Deniske","email":"vdeniskeb@apache.org","gender":"Male","ip_address":"107.100.145.47"},
{"id":13,"first_name":"Sammy","last_name":"Wickins","email":"swickinsc@google.nl","gender":"Male","ip_address":"81.166.137.208"},
{"id":14,"first_name":"Karen","last_name":"Jeenes","email":"kjeenesd@example.com","gender":"Genderqueer","ip_address":"227.219.205.46"},
{"id":15,"first_name":"Remus","last_name":"Doleman","email":"rdolemane@wikipedia.org","gender":"Male","ip_address":"21.104.18.38"},
{"id":16,"first_name":"Brigham","last_name":"Danielczyk","email":"bdanielczykf@washington.edu","gender":"Male","ip_address":"253.84.60.25"},
{"id":17,"first_name":"Osmond","last_name":"Eisig","email":"oeisigg@chron.com","gender":"Male","ip_address":"215.42.84.119"},
{"id":18,"first_name":"Alair","last_name":"Ast","email":"aasth@surveymonkey.com","gender":"Polygender","ip_address":"102.237.164.205"},
{"id":19,"first_name":"Sim","last_name":"Duplock","email":"sduplocki@printfriendly.com","gender":"Male","ip_address":"22.78.158.95"},
{"id":20,"first_name":"Kali","last_name":"Bartolomucci","email":"kbartolomuccij@desdev.cn","gender":"Genderqueer","ip_address":"48.104.41.171"},
{"id":21,"first_name":"Rene","last_name":"Radden","email":"rraddenk@mail.ru","gender":"Male","ip_address":"247.32.69.53"},
{"id":22,"first_name":"Toddie","last_name":"Etchell","email":"tetchelll@answers.com","gender":"Male","ip_address":"144.114.85.128"},
{"id":23,"first_name":"Joannes","last_name":"Placidi","email":"jplacidim@webs.com","gender":"Female","ip_address":"151.15.95.8"},
{"id":24,"first_name":"Morgen","last_name":"Caulket","email":"mcaulketn@taobao.com","gender":"Male","ip_address":"159.128.212.243"},
{"id":25,"first_name":"Zaria","last_name":"McIlharga","email":"zmcilhargao@bbb.org","gender":"Female","ip_address":"222.210.154.68"},
{"id":26,"first_name":"Shelbi","last_name":"Meni","email":"smenip@dailymotion.com","gender":"Female","ip_address":"82.192.56.101"},
{"id":27,"first_name":"Karena","last_name":"Mitchenson","email":"kmitchensonq@huffingtonpost.com","gender":"Female","ip_address":"225.185.132.34"},
{"id":28,"first_name":"Selby","last_name":"Lynd","email":"slyndr@mashable.com","gender":"Male","ip_address":"142.7.73.189"},
{"id":29,"first_name":"Staffard","last_name":"Robertacci","email":"srobertaccis@moonfruit.com","gender":"Male","ip_address":"44.48.195.243"},
{"id":30,"first_name":"Mateo","last_name":"Strang","email":"mstrangt@google.fr","gender":"Male","ip_address":"122.66.40.121"},
{"id":31,"first_name":"Raul","last_name":"Poleykett","email":"rpoleykettu@tinyurl.com","gender":"Male","ip_address":"132.253.101.55"},
{"id":32,"first_name":"Perice","last_name":"Bernocchi","email":"pbernocchiv@123-reg.co.uk","gender":"Male","ip_address":"26.46.224.149"},
{"id":33,"first_name":"Marcile","last_name":"Vasilevich","email":"mvasilevichw@senate.gov","gender":"Agender","ip_address":"17.123.67.87"},
{"id":34,"first_name":"Ines","last_name":"Currington","email":"icurringtonx@theatlantic.com","gender":"Female","ip_address":"78.237.5.147"},
{"id":35,"first_name":"Birdie","last_name":"Witcherley","email":"bwitcherleyy@thetimes.co.uk","gender":"Polygender","ip_address":"122.68.162.80"},
{"id":36,"first_name":"Kate","last_name":"Mallabon","email":"kmallabonz@issuu.com","gender":"Female","ip_address":"210.182.89.217"},
{"id":37,"first_name":"Gabriel","last_name":"Cridge","email":"gcridge10@toplist.cz","gender":"Male","ip_address":"104.172.158.77"},
{"id":38,"first_name":"Law","last_name":"Stife","email":"lstife11@drupal.org","gender":"Male","ip_address":"147.194.209.237"},
{"id":39,"first_name":"Abdel","last_name":"Awcock","email":"aawcock12@mapy.cz","gender":"Male","ip_address":"151.102.115.193"},
{"id":40,"first_name":"Ban","last_name":"Pearton","email":"bpearton13@mit.edu","gender":"Male","ip_address":"178.247.79.253"},
{"id":41,"first_name":"Genevieve","last_name":"Stitle","email":"gstitle14@hubpages.com","gender":"Female","ip_address":"106.241.163.85"},
{"id":42,"first_name":"Leonard","last_name":"Esley","email":"lesley15@icq.com","gender":"Male","ip_address":"25.229.240.182"},
{"id":43,"first_name":"Mead","last_name":"Bligh","email":"mbligh16@gmpg.org","gender":"Male","ip_address":"52.202.255.55"},
{"id":44,"first_name":"Dalli","last_name":"Bras","email":"dbras17@typepad.com","gender":"Male","ip_address":"94.17.254.50"},
{"id":45,"first_name":"Olag","last_name":"Whatley","email":"owhatley18@unblog.fr","gender":"Male","ip_address":"75.157.229.84"},
{"id":46,"first_name":"Ursala","last_name":"Bastone","email":"ubastone19@ibm.com","gender":"Female","ip_address":"181.246.101.242"},
{"id":47,"first_name":"Bret","last_name":"Caplin","email":"bcaplin1a@histats.com","gender":"Male","ip_address":"2.54.164.35"},
{"id":48,"first_name":"Marlow","last_name":"Babinski","email":"mbabinski1b@cbsnews.com","gender":"Male","ip_address":"150.40.124.190"},
{"id":49,"first_name":"Gradey","last_name":"O'Caine","email":"gocaine1c@reverbnation.com","gender":"Male","ip_address":"147.105.27.65"},
{"id":50,"first_name":"Bondon","last_name":"Cogman","email":"bcogman1d@usnews.com","gender":"Male","ip_address":"194.7.240.21"}
];
const idbuscado = parseInt(prompt("Introduce el id del usuario que quieres buscar:"));
const usuariosencontrados = usuarios.find(usuario => usuario.id === idbuscado);
if (usuariosencontrados) {
    console.log("Usuario encontrado:", usuariosencontrados);
} else {
    alert("Usuario no encontrado.");
}
const conteodegeneros = {};
for(let i = 0; i < usuarios.length; i++) {
    const genero = usuarios[i].gender;
    if (conteodegeneros[genero]) {
        conteodegeneros[genero]++;
    } else {
        conteodegeneros[genero] = 1;
    }
}
console.log("Conteo de géneros:", conteodegeneros);
