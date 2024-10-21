import {usestate} from 'react'
const professorsData = `
Abeh, Humphrey Aviation AbehHu@lewisu.edu;  
Abumoar, Dr. Sam ECAMS oabuomar@lewisu.edu SU 113;  
Al-Khassaweneh, Dr. Mahmood ECAMS malkhassaweneh@lewisu.edu AS 116A;  
Al-Sharif, Dr. Ziad ECAMS zalsharif@lewisu.edu AS 112A;  
Alsmaldi, Dr. Yazan ECAMS yalsmadi@lewisu.edu AS 114A;  
Alzoubi, Dr. Khaled ECAMS alzoubkh@lewisu.edu AS 118A;  
Armenta, Raul Aviation rarmenta@lewisu.edu;  
Bailey, Dr. Marne Science BaileyMa@lewisu.edu;  
Baker, Dr. Erik Aviation bakerer@lewisu.edu;  
Bhat, Manoj ECAMS bhatma@lewisu.edu SU 110;  
Biryukov, Vladim ECAMS vbiryukov@lewisu.edu SU 108;  
Bixby, Dr. Teresa Science bixbyte@lewisu.edu;  
Charles, Mary Wheeler Science CharleMa@lewisu.edu;  
Cho, Dr. Jake ECAMS jcho1@lewisu.edu SU 109;  
Clavelli, Matthew ECAMS mclavelli@lewisu.edu SU 105;  
Condeiu, Dr. Chris Science CondeiCh@lewisu.edu;  
Doughty, Bryan Aviation bdoughty@lewisu.edu;  
Dupre, Br. Tom ECAMS DupreTh@lewisu.edu AS 128A;  
Dybinski, Paul Aviation pdybinski@lewisu.edu;  
Franklin, Matthew Aviation franklma@lewisu.edu;  
Freeman, Louis Aviation lfreeman4@lewisu.edu;  
Harsy Ramsay, Dr. Amanda ECAMS harsyram@lewisu.edu SU 124;  
Havens, Dr. Mallory Science havensmy@lewisu.edu;  
Howard, Dr. Cindy ECAMS howardcy@lewisu.edu AS 131L;  
Jones, Eric Aviation rjones20@lewisu.edu;  
Julius, Michael Aviation juliusmi@lewisu.edu;  
Kavouras, Dr. Jerry Science KavourJe@lewisu.edu;  
Keleher, Dr. Jason Science KeleheJa@lewisu.edu;  
Kim, Dr. Paul ECAMS kimyo@lewisu.edu AS 110A;  
Kim, Dr. Sung ECAMS skim2@lewisu.edu AS 126A;  
Kissel, Dr. Daniel Science kisselda@lewisu.edu;  
Klump, Dr. Ray ECAMS KlumpRa@lewisu.edu SU 105;  
Kozak, Dr. Brian Aviation bkozak@lewisu.edu;  
Kozak, Dr. Elizabeth Science KozakEl@lewisu.edu;  
LeClaire, Yvonne Aviation LeclaiYv@lewisu.edu;  
Lewis, Dr. Michael ECAMS mlewis8@lewisu.edu AS 110A-A;  
Martinez, Dr. Gina ECAMS martingi@lewisu.edu AS 130L;  
McGill, Keith Aviation McgillKe@lewisu.edu;  
Meyer, Dr. Marie ECAMS mmeyer2@lewisu.edu SU 128;  
Misischia, Dr. Cynthia Science misisccy@lewisu.edu;  
Mlynarski, Amy Science amlynarski@lewisu.edu;  
Neville, Craig Aviation NevillCr@lewisu.edu;  
Nowak, David ECAMS dnowak2@lewisu.edu AS 026L;  
Omari, Dr. Safwan ECAMS omarisa@lewisu.edu AS 129L;  
Perillo, Louis Aviation lperillo@lewisu.edu;  
Perry, Dr. Jason ECAMS perryjn@lewisu.edu AS 127L;  
Phillips, Dr. Ryan Aviation philliry@lewisu.edu;  
Pifer, Jeanette Science PiferJe@lewisu.edu;  
Plass, Dr. Matt ECAMS plassma@lewisu.edu AS 125L;  
Pogue, Eric ECAMS epogue@lewisu.edu AS 124A;  
Powers, Dr. Sarah Science powerssa@lewisu.edu;  
Rago, Dr. James Science RagoJa@lewisu.edu;  
Reed, Jacob Aviation jreed5@lewisu.edu;  
Roberts, Dr. Jennifer Science RobertJe@lewisu.edu;  
Schultze, Dr. Adam ECAMS aschultze@lewisu.edu SU 130;  
Slutz, Charles Aviation SlutzCh@lewisu.edu;  
Smith, Dr. Michael ECAMS msmith42@lewisu.edu SU 122;  
Snyder, Dr. Holly Science snyderho@lewisu.edu;  
Spangler, Eric ECAMS espangler@lewisu.edu AS 120A;  
Speva, Jayme ECAMS spevaja@lewisu.edu AS 032L;  
St. Raymond, Dr. Pierre Science StRaymPi@lewisu.edu;  
Stephenson, Dr. Brittany ECAMS bstephenson@lewisu.edu SU 126;  
Stevens, Christopher Aviation stevench@lewisu.edu;  
Stone, Dr. Kari Science kstone1@lewisu.edu;  
Sulyok, Dr. Cara ECAMS csulyok@lewisu.edu;SU 125;  
Szczurek, Dr. Piotr ECAMS szczurpi@lewisu.edu;SU 111;  
Udagedara, Dr. Indika ECAMS iudagedara@lewisu.edu;SU 116;  
Wedyan, Dr. Fadi ECAMS fwedyan@lewisu.edu;AS 122A;  
Zimmer, Dr. Erin Science ZimmerEr@lewisu.edu;
`.trim().split(';').map(item => {
    const [name, department, email, room] = item.trim().split(';');
    return { name, department, email, room };
}).filter(item => item.name);

const Professors = () => {
    const [sortBy, setSortBy] = useState('name');

    const sortedProfessors = [...professorsData].sort((a, b) => {
    if (sortBy === 'name') {
    return a.name.localeCompare(b.name);
    }
    return a.department.localeCompare(b.department);
    });

    return (
    <div>
    <h1>Professors Directory</h1>
    <div>
    <label>
    Sort by:
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="name">Name</option>
        <option value="department">Department</option>
        </select>
    </label>
    </div>
    <ul>
    {sortedProfessors.map((professor, index) => (
    <li key={index}>
        <strong>{professor.name}</strong> ({professor.department}) - {professor.email} {professor.room && `(${professor.room})`}
    </li>
    ))}
    </ul>
    </div>
    );
};

export default Professors;
