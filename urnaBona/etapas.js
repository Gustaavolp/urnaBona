/*Esse código é uma lista de objetos em formato JSON. JSON (JavaScript Object Notation) é um formato leve de troca de dados que é 
fácil de ler e escrever para humanos e fácil de interpretar e gerar para máquinas. 
No caso desse código, ele está sendo utilizado para estruturar os dados dos candidatos e das etapas da eleição de uma 
forma organizada e legível para que possam ser facilmente manipulados por um programa em JavaScript. */

let etapas = [{
        titulo: 'VEREADOR',
        numeros: 5,
        candidatos: [{
                numero: '10001',
                nome: 'Venon',
                partido: 'SB - Sibionte',
                fotos: [
                    { url: 'venon.jpg', legenda: 'Vereador', small: false }
                ]
            },
            {
                numero: '10002',
                nome: 'Homem Areia',
                partido: 'CT - Construção Civil',
                fotos: [
                    { url: 'homem_areia.jpg', legenda: 'Vereador', small: false }
                ]
            },
            {
                numero: '10003',
                nome: 'Calango',
                partido: 'RP - Reptilianos',
                fotos: [
                    { url: 'lagarto.jpg', legenda: 'Vereador', small: false }
                ]
            },
            {
                numero: '10004',
                nome: 'Doende Verde',
                partido: 'AN - Alienigena',
                fotos: [
                    { url: 'doende.jpg', legenda: 'Vereador', small: false }
                ]
            },
        ]
    },
    {
        titulo: 'PREFEITO',
        numeros: 2,
        candidatos: [{
                numero: '66',
                nome: 'Tobey',
                partido: 'ARH - Aranha Humana',
                vice: 'Mary Jane',
                fotos: [
                    { url: 'tobey.webp', legenda: 'Prefeito' },
                    { url: 'mary.png', legenda: 'Vice-Prefeito', small: true },
                ]
            },
            {
                numero: '99',
                nome: 'Tom Holland',
                partido: 'AMG - Amigo Da Vizinhança',
                vice: 'MJ',
                fotos: [
                    { url: 'tom.jpg', legenda: 'Prefeito' },
                    { url: 'MJ.jpg', legenda: 'Vice-Prefeito', small: true }
                ]
            },
            {
                numero: '55',
                nome: 'Andrew Garfield',
                partido: 'CDT - Cabeça De Teia',
                vice: 'Gwen Stacy',
                fotos: [
                    { url: 'andrew.jpg', legenda: 'Prefeito' },
                    { url: 'gwen.jpg', legenda: 'Vice-Prefeito', small: true }
                ]
            },
        ]
    }
];