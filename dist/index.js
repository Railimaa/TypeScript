const spaceships = [];
const AddSpaceShip = (name, pilot, crewLimit) => {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    };
    spaceships.push(spaceship);
    alert(`A nave ${spaceship.name} foi registrada.`);
};
const findSpaceShip = (name) => {
    let spaceship;
    spaceship = spaceships.find(ship => ship.name === name);
    return spaceship;
};
const addCrewMember = (member, spaceship) => {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert(`${member} não pode ser adcionado. Limite atingido`);
    }
    else {
        spaceship.crew.push(member);
        alert(`${member} foi adicionado a tripulação da nave ${spaceship.name}`);
    }
};
const sendInMission = (spaceship) => {
    if (spaceship.inMission) {
        alert(`${spaceship.name} não pode ser enviada. Nave já em missão`);
    }
    else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        alert(`${spaceship.name} não pode ser enviada. Tripulação insuficiente.`);
    }
    else {
        spaceship.inMission = true;
        alert(`${spaceship.name} enviada para a missão`);
    }
};
const firstMednuOption = () => {
    const name = prompt('Qual é o nome da nave a ser registrada?');
    const pilot = prompt(`Qual é o nome do piloto da ${name}?`);
    const crewLimit = Number(prompt(`Quantos tripulantes a nave ${name} suporta?`));
    const confirmation = confirm(`Confirma o registro da nave ${name}\n Piloto:${pilot}\n Limite da tripulação:${crewLimit}?`);
    if (confirmation) {
        AddSpaceShip(name, pilot, crewLimit);
    }
};
const secondMenuOption = () => {
    const member = prompt('Qual é o nome do tripulante?');
    const spaceshipName = prompt(`Para qual nave ${member} deverá ser designado?`);
    const spaceship = findSpaceShip(spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`Confirma a inclusão do ${member} na tripulação da ${spaceship.name}?`);
        if (confirmation) {
            addCrewMember(member, spaceship);
        }
    }
};
const thirdMenuOption = () => {
    const spaceShipName = prompt('Qual é o nome da nave a ser enviada para missão?');
    const spaceship = findSpaceShip(spaceShipName);
    if (spaceship) {
        const confirmation = confirm(`Confirma o envio da nave ${spaceship.name} na missão?`);
        if (confirmation) {
            sendInMission(spaceship);
        }
    }
};
const fourthMenuOption = () => {
    let list = 'Naves Registradas: \n';
    spaceships.forEach((spaceship) => {
        list += `
        Nave: ${spaceship.name}
        Piloto: ${spaceship.pilot}
        Em missão: ${spaceship.inMission}
        Tamanho Máximo da tripulação: ${spaceship.crewLimit}
        Tripulantes: ${spaceship.crew.length}
      `;
        spaceship.crew.forEach(member => {
            list += `   -${member}\n`;
        });
    });
    alert(list);
};
let userOption = 0;
while (userOption !== 5) {
    const menu = `Painel Principal
    1 - Registrar uma nova nave
    2 - Adcionar membro da tripulação
    3 - Enviar nave em missão
    4 - Listar naves registradas
    5 - Encerrar
  `;
    userOption = Number(prompt(menu));
    switch (userOption) {
        case 1:
            firstMednuOption();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            alert('Encerrando aplicação...');
            break;
        default:
            alert('Nenhuma opção encontrada');
            break;
    }
}
