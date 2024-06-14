const prompt = require('prompt-sync')();

let hoteis = [];
let reservas = [];
let hotelId = 1;
let reservaId = 1;

while (true) {
    const funcionalidade = parseInt(prompt('Digite qual funcionalidade deseja utilizar: 1 - Adicionar hotéis, 2 - Buscar hotéis por cidade, 3 - Fazer reserva, 4 - Cancelar reserva, 5 - Listar reservas, -1 - Para sair: \n\n'));

    if (funcionalidade === 1) {
        let hotel = {};
        hotel.hotelId = hotelId++;
        hotel.nome = prompt('Digite o nome do hotel: ');
        hotel.cidade = prompt('Digite a cidade do hotel: ');
        hotel.quartosTotais = parseInt(prompt('Digite o total de quartos do hotel: '));
        hotel.quartosDisponiveis = hotel.quartosTotais; 
        hoteis.push(hotel);
        console.log('Hotel criado com sucesso\n');
    } else if (funcionalidade === 2) {
        const cidade = prompt('Digite a cidade onde busca hotéis: ');
        let listagemFeita = false;
        for (const hotel of hoteis) {
            if(hotel.cidade.toLowerCase() === cidade.toLowerCase() && hotel.quartosDisponiveis > 0) {
                console.log(hotel);
                listagemFeita = true;
            }
        }

        if (!listagemFeita) {
            console.log('Não há hotéis disponíveis nesta cidade');
        }

        console.log();
    } else if (funcionalidade === 3) {
        let reserva = {};
        reserva.reservaId = reservaId++;
        const hotelReservado = parseInt(prompt('Digite o Id do hotel o qual deseja reservar: '));
        reserva.idHotel = hotelReservado; 
        const nomeCliente = prompt('Digite o nome do cliente: ');
        reserva.nomeCliente = nomeCliente;
        let reservaFeita = false;

        for (const hotel of hoteis) {
            if (hotel.hotelId === reserva.idHotel && hotel.quartosDisponiveis > 0) {
                hotel.quartosDisponiveis--;
                console.log('Hotel reservado com sucesso!\n');
                reservas.push(reserva);
                reservaFeita = true;
                break;
            }
        }

        if (!reservaFeita) {
            console.log('Este hotel não possui quartos disponíveis!');
        }

    } else if (funcionalidade === 4) {
        const idReservaCancelada = parseInt(prompt('Digite o Id da reserva a qual deseja cancelar: '));
        let reservaCancelada = false;

        for (const reserva of reservas) {
            if (reserva.reservaId === idReservaCancelada) {
                for (const hotel of hoteis) {
                    if (hotel.hotelId === reserva.idHotel) {
                        hotel.quartosDisponiveis++;
                    }                    
                }
                reservaCancelada = true;
                break;
            }
        }

        if (!reservaCancelada) {
            console.log('Não possui reservas com este Id!');
        } else {
            reservas = reservas.filter(reserva => reserva.reservaId !== idReservaCancelada);
            console.log('Reserva cancelada com sucesso!\n');
        }
    } else if (funcionalidade === 5) {
        console.log('Listagem de todas as reservas: \n\n');
        let listagemFeita = false;
        for (const reserva of reservas) {
            listagemFeita = true;
            console.log(`Id da reserva: ${reserva.reservaId}`);
            console.log(`Id do hotel referente a reserva: ${reserva.idHotel}`);
            for (const hotel of hoteis) {
                if (hotel.hotelId === reserva.idHotel) {
                    console.log(`Nome do hotel: ${hotel.nome}`);
                    console.log(`Cidade do hotel: ${hotel.cidade}`);
                    console.log(`Quartos totais do hotel: ${hotel.quartosTotais}`);
                    console.log(`Quartos disponíveis do hotel: ${hotel.quartosDisponiveis}`);
                }
            }
            console.log(`Nome do cliente: ${reserva.nomeCliente}\n`);
        }

        if (!listagemFeita) {
            console.log('Não possui reservas no momento!');
        }

    } else if (funcionalidade === -1) {
        break;
    } else {
        console.log('Esta funcionalidade não existe!\n');
    }
}
