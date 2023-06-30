import "./Cookies.css"

const Cookies = () => {
    return (
        <div className="cookies-container">
            <div className="cookies-title">
                <h3>Cookies</h3>
            </div>
            
            <div className="cookies-text">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Informatiile prezentate in continuare au scopul de a aduce la cunostinta utilizatorului mai multe detalii despre plasarea, utilizarea si administrarea “cookie”-urilor utilizate de site-ul https://deliciileotiliei.ro. De asemenea, sunt prezente si cateva linkuri utile legate de acest subiect.</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acest website foloseste cookie-uri proprii si de la terti pentru a furniza vizitatorilor o experienta mult mai buna de navigare si servicii adaptate nevoilor si interesului fiecaruia.</p>
                <h3>Ce este un “cookie”?</h3>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Un “Internet Cookie” (termen cunoscut si ca “browser cookie” sau “HTTP cookie” sau pur si simplu“cookie” ) este un fisier de mici dimensiuni, format din litere si numere, care va fi stocat pe computerul, terminalul mobil sau alte echipamente ale unui utilizator de pe care se acceseaza Internetul.</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cookie-ul este instalat prin solicitara emisa de catre un web-server unui browser (ex: Internet Explorer, Chrome) si este complet “pasiv” (nu contine programe software, virusi sau spyware si nu poate accesa informatiile de pe hard driveul utilizatorului).</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Un cookie este format din 2 parti: numele si continutul sau valoarea cookie-ului. Mai mult, durata de existenta a unui cookie este determinata; tehnic, doar webserverul care a trimis cookie-ul il poate accesa din nou in momentul in care un utilizator se intoarce pe website-ul asociat webserverului respectiv.</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cookie-urile in sine nu solicita informatii cu caracter personal pentru a putea fi utilizate si, in cele maimulte cazuri, nu identifica personal utilizatorii de internet.</p>
                <h3>Care sunt avantajele cookie-urilor?</h3>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Un cookie contine informatii care fac legatura intre un web-browser (utilizatorul) si un web-server anume (website-ul). Daca un browser acceseaza acel web-server din nou, acesta poate citi informatia deja stocata si reactiona in consecinta. Cookie-urile asigura userilor o experienta placuta de navigare si sustin eforturile multor website-uri pentru a oferi servicii confortabile utilizatorillor: ex – preferintele in materie de confidentialitate online, optiunile privind limba site-ului, cosuri de cumparaturi sau publicitate relevanta.</p>
                <h3>Care este durata de viata a unui cookie?</h3>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cookieurile sunt administrate de webservere. Durata de viata a unui cookie poate varia semnificativ, depinzand de scopul pentru care este plasat. Unele cookie-uri sunt folosite exclusive pentru o singura sesiune (session cookies) si nu mai sunt retinute odata de utilizatorul a parasite website-ul si unele cookie-uri sunt retinute si refolosite de fiecare data cand utilizatorul revine pe acel website (‘cookie-uri permanente‘). Cu toate aceste, cookie-urile pot fi sterse de un utilizator in orice moment prin intermediul setarilor browserului.</p>
                <h3>Ce sunt cookie-urile plasate de terti?</h3>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Anumite sectiuni de continut de pe unele site-uri pot fi furnizate prin intermediul unor terte parti/furnizori (ex: news box, un video sau o reclama). Aceste terte parti pot plasa de asemenea cookie-uri prin intermediul site-ului si ele se numesc “third party cookies” pentru ca nu sunt plasate de proprietarul website-ului respectiv. Furnizorii terti trebuie sa respecte de asemenea legea in vigoare si politicile de confidentialitate ale detinatorului site-ului.</p>
            </div>
        </div>
    )
}

export default Cookies;