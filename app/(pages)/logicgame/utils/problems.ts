import { IProblem } from "./interfaces"

export const problem:IProblem[] =
[
    {
        condition:[           
            { 
                "hint": "O Inglês vive na casa Vermelha.", 
                "status": "default", 
                "type": "onSame",
                target:{
                    key: "cor", 
                    item: "vermelha", 
                },
                ref:{
                    key: "nacionalidade", 
                    item: "inglês" },
            },
            { 
                "hint": "O Sueco tem Cachorros como animais de estimação.", 
                "status": "default", 
                "type": "onSame",
                target:{
                    key: "nacionalidade", 
                    item: "sueco", 
                },
                ref:{
                    key: "animal", 
                    item: "cachorros" },
            },
            { 
                "hint": "O Dinamarquês bebe Chá.", 
                "status": "default", 
                "type": "onSame",
                target:{
                    key: "nacionalidade", 
                    item: "dinamarquês", 
                },
                ref:{
                    key: "bebida", 
                    item: "chá" },
            },
            { 
                "hint": "A casa Verde fica do lado esquerdo da casa Branca.", 
                "status": "default", 
                "type": "onLeft",
                target:{
                    key: "cor", 
                    item: "verde", 
                },
                ref:{
                    key: "cor", 
                    item: "branca" },
            },
            { 
                "hint": "O homem que vive na casa Verde bebe Café.", 
                "status": "default", 
                "type": "onSame",
                target:{
                    key: "cor", 
                    item: "verde", 
                },
                ref:{
                    key: "bebida", 
                    item: "café" },
            },
            { 
                "hint": "O homem que fuma Pall Mall cria Pássaros.", 
                "status": "default", 
                "type": "onSame",
                target:{
                    key: "cigarro", 
                    item: "pall mall", 
                },
                ref:{
                    key: "animal", 
                    item: "pássaros" },
            },
            { 
                "hint": "O homem que vive na casa Amarela fuma Dunhill.", 
                "status": "default", 
                "type": "onSame",
                target:{
                    key: "cor", 
                    item: "amarela", 
                },
                ref:{
                    key: "cigarro", 
                    item: "dunhill" },
            },
            { 
                "hint": "O homem que vive na casa do meio bebe Leite.", 
                "status": "default", 
                "type": "inPos",
                target:{
                    key: "bebida", 
                    item: "leite", 
                },
                boxNumber:3
            },
            { 
                "hint": "O Norueguês vive na primeira casa.", 
                "status": "default", 
                "type": "inPos",
                target:{
                    key: "nacionalidade", 
                    item: "norueguês", 
                },
                boxNumber:1
            },
            { 
                "hint": "O homem que fuma Blends vive ao lado do que tem Gatos.", 
                "status": "default", 
                "type": "directlyOnSide",
                target:{
                    key: "cigarro", 
                    item: "blends", 
                },
                ref:{
                    key: "animal", 
                    item: "gatos" },
            },
            { 
                "hint": "O homem que cria Cavalos vive ao lado do que fuma Dunhill.", 
                "status": "default", 
                "type": "directlyOnSide",
                target:{
                    key: "animal", 
                    item: "cavalos", 
                },
                ref:{
                    key: "cigarro", 
                    item: "dunhill" },
            },
            { 
                "hint": "O homem que fuma Blue Master bebe Cerveja.", 
                "status": "default", 
                "type": "onSame",
                target:{
                    key: "cigarro", 
                    item: "blue master", 
                },
                ref:{
                    key: "bebida", 
                    item: "cerveja" },
            },
            { 
                "hint": "O Alemão fuma Prince.", 
                "status": "default", 
                "type": "onSame",
                target:{
                    key: "nacionalidade", 
                    item: "alemão", 
                },
                ref:{
                    key: "cigarro", 
                    item: "prince" },
            },
            { 
                "hint": "O Norueguês vive ao lado da casa Azul.", 
                "status": "default", 
                "type": "directlyOnSide",
                target:{
                    key: "nacionalidade", 
                    item: "norueguês", 
                },
                ref:{
                    key: "cor", 
                    item: "azul" },
            },
            { 
                "hint": "O homem que fuma Blends é vizinho do que bebe Água.", 
                "status": "default", 
                "type": "directlyOnSide",
                target:{
                    key: "cigarro", 
                    item: "blends", 
                },
                ref:{
                    key: "bebida", 
                    item: "água" },
            },
                 
        ],
        name:"Teste de Einstein",
        descricao:"Albert Einstein criou este teste de QI (raciocínio lógico) no século passado e afirmou que 98% da população mundial não era capaz de resolvê-lo. Será que você faz parte desse seleto grupo que consegue resolvê-lo?",
        boxName:"Casa",
        items:
        {
            "cor": { 
                "amarela": { "available": true, "Xpos": "null" }, 
                "azul": { "available": true, "Xpos": "null" },
                "branca": { "available": true, "Xpos": "null" }, 
                "verde": { "available": true, "Xpos": "null" } , 
                "vermelha": { "available": true, "Xpos": "null" } 
            },
            "nacionalidade": { 
                "alemão": { "available": true, "Xpos": "null" }, 
                "dinamarquês": { "available": true, "Xpos": "null" }, 
                "inglês": { "available": true, "Xpos": "null" }, 
                "norueguês": { "available": true, "Xpos": "null" }, 
                "sueco": { "available": true, "Xpos": "null" } 
            }, 
            "bebida": { 
                "água": { "available": true, "Xpos": "null" }, 
                "café": { "available": true, "Xpos": "null" }, 
                "chá": { "available": true, "Xpos": "null" }, 
                "cerveja": { "available": true, "Xpos": "null" }, 
                "leite": { "available": true, "Xpos": "null" }
             }, 
            "cigarro": { 
                "blends": { "available": true, "Xpos": "null" }, 
                "blue master": { "available": true, "Xpos": "null" }, 
                "dunhill": { "available": true, "Xpos": "null" }, 
                "pall mall": { "available": true, "Xpos": "null" }, 
                "prince": { "available": true, "Xpos": "null" }
             },
            "animal": { 
                "cachorros": { "available": true, "Xpos": "null" }, 
                "cavalos": { "available": true, "Xpos": "null" }, 
                "gatos": { "available": true, "Xpos": "null" }, 
                "pássaros": { "available": true, "Xpos": "null" }, 
                "peixes": { "available": true, "Xpos": "null" }
             }
        }
    },
    {
        name:"Compras do mês",
        descricao:"Cinco mulheres estão fazendo as compras do mês no supermercado. Cada uma delas está acompanhada por alguém, esqueceu de algum item e está usando uma bolsa de cor diferente.",
        boxName:"Caixa",
        items:{
           blusa:{
            amarela: { "available": true, "Xpos": "null" },
            branca: { "available": true, "Xpos": "null" },
            azul: { "available": true, "Xpos": "null" },
            verde: { "available": true, "Xpos": "null" },
            vermelha: { "available": true, "Xpos": "null" }
           },
           nome:{
            aline: { "available": true, "Xpos": "null" },
            carol: { "available": true, "Xpos": "null" },
            fernanda: { "available": true, "Xpos": "null" },
            juliana: { "available": true, "Xpos": "null" },
            natalia: { "available": true, "Xpos": "null" }
           },
           esqueceu:{
            amaciante: { "available": true, "Xpos": "null" },
            frutas: { "available": true, "Xpos": "null" },
            leite: { "available": true, "Xpos": "null" },
            "pão": { "available": true, "Xpos": "null" },
            presunto: { "available": true, "Xpos": "null" }
           },
           pagamento:{
            cheque: { "available": true, "Xpos": "null" },
            "crédito": { "available": true, "Xpos": "null" },
            "débito": { "available": true, "Xpos": "null" },
            dinheiro: { "available": true, "Xpos": "null" },
            vale: { "available": true, "Xpos": "null" }
           },
           "veio com":{
                filho: { "available": true, "Xpos": "null" },
                "irmã": { "available": true, "Xpos": "null" },
                "mãe": { "available": true, "Xpos": "null" },
                marido: { "available": true, "Xpos": "null" },
                namorado: { "available": true, "Xpos": "null" }
           } 
        },
        condition:[
            {
                hint:"Quem esqueceu o Pão está exatamente à esquerda de quem veio fazer compras com a Irmã." ,
                status:"default",
                type: "directlyLeft",
                target:{
                    key:'esqueceu' ,
                    item:'pão',
                },
                ref:{
                    key:'veio com',
                    item:'irmã'
                }
            },
            {
                hint:"A mulher com a blusa Azul está em algum caixa à esquerda de quem trouxe o Filho." ,
                status:"default",
                type: "onLeft",
                target:{
                    key: 'blusa',
                    item: 'azul',
                },
                ref:{
                    key:'veio com',
                    item:'filho'
                }
            },
            {
                hint:"A moça que veio com o Marido vai pagar as compras usando Vale." ,
                status:"default",
                type:'onSame' ,
                target:{
                    key:'veio com' ,
                    item:'marido' ,
                },
                ref:{
                    key:'pagamento',
                    item:'vale'
                }
            },
            {
                hint:"O Namorado está acompanhando a mulher que está no caixa 1.",
                status:"default",
                type: 'inPos',
                target:{
                    key: 'veio com',
                    item: 'namorado',
                },
                boxNumber:1
            },
            {
                hint:"Quem vai pagar usando o cartão de Crédito está no caixa 4.",
                status:"default",
                type: 'inPos',
                target:{
                    key: 'pagamento',
                    item: 'crédito',
                },
                boxNumber:4
            },
            {
                hint:'A moça do último caixa vai pagar usando Dinheiro',
                status:"default",
                type: 'inPos',
                target:{
                    key:'pagamento' ,
                    item:'dinheiro',
                },
                boxNumber:5
            },
            {
                hint:"Quem veio com o Marido está exatamente à esquerda de quem esqueceu de comprar Pão." ,
                status:"default",
                type: 'directlyLeft',
                target:{
                    key: 'veio com',
                    item:'marido' ,
                },
                ref:{
                    key:"esqueceu",
                    item:"pão"
                }
            },
            {
                hint:"Quem vai pagar com Cheque está no primeiro caixa." ,
                status:"default",
                type:'inPos' ,
                target:{
                    key:'pagamento',
                    item:'cheque',
                },
                boxNumber:1
            },
            {
                hint:'A cliente que vai pagar com Cartão de Crédito esqueceu de comprar Presunto.' ,
                status:"default",
                type:'onSame' ,
                target:{
                    key:'pagamento' ,
                    item:'crédito' ,
                },
                ref:{
                    key:'esqueceu',
                    item:'presunto'
                }
            },
            {
                hint:'Quem esqueceu de comprar Leite vai pagar as compras com Dinheiro.' ,
                status:"default",
                type: 'onSame',
                target:{
                    key:'esqueceu' ,
                    item:'leite' ,
                },
                ref:{
                    key:'pagamento',
                    item:'dinheiro'
                }
            },
            {
                hint:'A mulher que esqueceu de comprar Amaciante está em um dos caixas das pontas.' ,
                status:"default",
                type:'onEdge' ,
                target:{
                    key:'esqueceu' ,
                    item:'amaciante',
                }
            },
            {
                hint:'A Fernanda está usando uma blusa Branca.' ,
                status:"default",
                type:'onSame' ,
                target:{
                    key:'nome' ,
                    item:'fernanda' ,
                },
                ref:{
                    key:'blusa' ,
                    item:'branca' 
                }
            },
            {
                hint:'Quem veio de blusa Verde está em algum lugar à esquerda de quem veio com a blusa Azul.' ,
                status:"default",
                type:'onLeft' ,
                target:{
                    key: 'blusa',
                    item:'verde' ,
                },
                ref:{
                    key:'blusa',
                    item:'azul'
                }
            },
            {
                hint:'A Aline veio fazer compras com o Marido.' ,
                status:"default",
                type:'onSame' ,
                target:{
                    key:'nome' ,
                    item:'aline' ,
                },
                ref:{
                    key:'veio com',
                    item:'marido'
                }
            },
            {
                hint:'A Carol está no caixa exatamente à direita de quem veio com o Marido.' ,
                status:"default",
                type:'directlyRight' ,
                target:{
                    key:'nome' ,
                    item:'carol' ,
                },
                ref:{
                    key:'veio com',
                    item:'marido'
                }
            },
            {
                hint:'A Natália está no último caixa.',
                status:"default",
                type:'inPos' ,
                target:{
                    key:'nome' ,
                    item:'natalia' ,
                },
                boxNumber:5
            },
            {
                hint:'A Juliana está exatamente à esquerda de quem veio com a blusa Amarela.' ,
                status:"default",
                type:'directlyLeft' ,
                target:{
                    key:'nome' ,
                    item:'juliana' ,
                },
                ref:{
                    key:'blusa',
                    item:'amarela'
                }
            },
            {
                hint:'A moça de blusa Branca esqueceu de comprar Presunto.' ,
                status:"default",
                type:'onSame' ,
                target:{
                    key:'blusa' ,
                    item:'branca',
                },
                ref:{
                    key:'esqueceu',
                    item:'presunto'
                }
            },
            {
                hint:'A mulher da blusa Vermelha trouxe o Filho para o supermercado.' ,
                status:"default",
                type:'onSame' ,
                target:{
                    key:'blusa' ,
                    item:'vermelha' ,
                },
                ref:{
                    key:'veio com',
                    item:'filho'
                }
            },
        ]  
    },
    {
        name:"Artes Marciais",
        descricao:"Cinco lutadoras estão lado a lado conversando sobre a arte marcial praticada por cada uma. Cada mulher nasceu em um estado brasileiro, está usando uma presilha e tem um hobby.",
        boxName:"Lutadora",
        items:{
           presilha:{
            amarela: { "available": true, "Xpos": "null" },
            azul: { "available": true, "Xpos": "null" },
            branca: { "available": true, "Xpos": "null" },
            verde: { "available": true, "Xpos": "null" },
            vermelha: { "available": true, "Xpos": "null" }
           },
           nome:{
            andressa: { "available": true, "Xpos": "null" },
            graziela: { "available": true, "Xpos": "null" },
            maria: { "available": true, "Xpos": "null" },
            'sônia': { "available": true, "Xpos": "null" },
            tamires: { "available": true, "Xpos": "null" }
           },
           luta:{
            capoeira: { "available": true, "Xpos": "null" },
            'karatê': { "available": true, "Xpos": "null" },
            'jiu-jítsu': { "available": true, "Xpos": "null" },
            "judô": { "available": true, "Xpos": "null" },
            'muay thai': { "available": true, "Xpos": "null" }
           },
           idade:{
            '20': { "available": true, "Xpos": "null" },
            "25": { "available": true, "Xpos": "null" },
            "30": { "available": true, "Xpos": "null" },
            '35': { "available": true, "Xpos": "null" },
            '40': { "available": true, "Xpos": "null" }
           },
           estado:{
            'espirito santo': { "available": true, "Xpos": "null" },
            "goiás": { "available": true, "Xpos": "null" },
            "paraná": { "available": true, "Xpos": "null" },
            pernambuco: { "available": true, "Xpos": "null" },
            tocantins: { "available": true, "Xpos": "null" }
           },
           hobby:{
                cantar: { "available": true, "Xpos": "null" },
                cozinhar: { "available": true, "Xpos": "null" },
                "dançar": { "available": true, "Xpos": "null" },
                pintar: { "available": true, "Xpos": "null" },
                ler: { "available": true, "Xpos": "null" }
           } 
        },
        condition:[
            {
                hint:"A moça de 20 anos está ao lado da lutadora de 25 anos." ,
                status:"default",
                type:'directlyOnSide' ,
                target:{
                    key:'idade' ,
                    item:'20',
                },
                ref:{
                    key:'idade',
                    item:'25'
                }
            },
            {
                hint:"A lutadora de Pernambuco está em algum lugar à direita da lutadora de presilha Vermelha." ,
                status:"default",
                type: 'onRigth',
                target:{
                    key:'estado' ,
                    item:'pernambuco',
                },
                ref:{
                    key:'presilha',
                    item:'vermelha'
                }
            },
            {
                hint:"Maria está em algum lugar entre a mulher do Espírito Santo e a mulher de presilha Vermelha, nessa ordem." ,
                status:"default",
                type: 'isBetween',
                target:{
                    key:'nome' ,
                    item:'maria',
                },
                ref:{
                    key:'estado',
                    item:'espirito santo'
                },
                secRef:{
                    key:'presilha',
                    item:'vermelha'
                }
            },
            {
                hint:"A Paranaense está em algum lugar entre a lutadora de 35 anos e a lutadora que pratica Jiu-jítsu, nessa ordem." ,
                status:"default",
                type:'isBetween' ,
                target:{
                    key:'estado' ,
                    item:'paraná',
                },
                ref:{
                    key:'idade',
                    item:'35'
                },
                secRef:{
                    key:'luta',
                    item:'jiu-jítsu'
                }
            },
            {
                hint:"A mulher de 30 anos está ao lado da mulher mais nova." ,
                status:"default",
                type: 'directlyOnSide',
                target:{
                    key:'idade' ,
                    item:'30',
                },
                ref:{
                    key:'idade',
                    item:'20'
                }
            },
            {
                hint:"Quem gosta de Cozinhar está usando uma presilha Branca." ,
                status:"default",
                type:'onSame' ,
                target:{
                    key:'hobby' ,
                    item:'cozinhar',
                },
                ref:{
                    key:'presilha',
                    item:'branca'
                }
            },
            {
                hint:"A mulher de 30 anos está usando uma presilha Verde." ,
                status:"default",
                type:'onSame' ,
                target:{
                    key:'idade' ,
                    item:'30',
                },
                ref:{
                    key:'presilha',
                    item:'verde'
                }
            },
            {
                hint:"A lutadora de Goiás está em algum lugar entre as lutadoras de Espirito Santo e Tocantins, nessa ordem." ,
                status:"default",
                type: 'isBetween',
                target:{
                    key:'estado' ,
                    item:'goiás',
                },
                ref:{
                    key:'estado',
                    item:'espirito santo'
                },
                secRef:{
                    key:'estado',
                    item:'tocantins'
                }
            },
            {
                hint:"Sônia está exatamente à esquerda da lutadora de presilha Amarela." ,
                status:"default",
                type: 'directlyLeft',
                target:{
                    key:'nome' ,
                    item:'sônia',
                },
                ref:{
                    key:'presilha',
                    item:'amarela'
                }
            },
            {
                hint:"A Judoca está em algum lugar à direita da mulher de presilha Verde." ,
                status:"default",
                type:'onRigth' ,
                target:{
                    key:'luta' ,
                    item:'judô',
                },
                ref:{
                    key:'presilha',
                    item:'verde'
                }
            },
            {
                hint:"A mulher que luta Jiu-jítsu tem 30 anos." ,
                status:"default",
                type:'onSame' ,
                target:{
                    key:'luta' ,
                    item:'jiu-jítsu',
                },
                ref:{
                    key:'idade',
                    item:'30'
                }
            },
            {
                hint:"A lutadora do Paraná está ao lado da lutadora que gosta de Ler." ,
                status:"default",
                type:'directlyOnSide' ,
                target:{
                    key:'estado' ,
                    item:'paraná',
                },
                ref:{
                    key:'hobby',
                    item:'ler'
                }
            },
            {
                hint:"Graziela está ao lado de quem gosta de Dançar." ,
                status:"default",
                type:'directlyOnSide' ,
                target:{
                    key:'nome' ,
                    item:'graziela',
                },
                ref:{
                    key:'hobby',
                    item:'dançar'
                }
            },
            {
                hint:"Quem gosta de Pintar está em uma das pontas." ,
                status:"default",
                type:'onEdge' ,
                target:{
                    key:'hobby' ,
                    item:'pintar',
                }
            },
            {
                hint:"A mulher que gosta de Dançar está ao lado da mulher que joga Capoeira." ,
                status:"default",
                type:'directlyOnSide' ,
                target:{
                    key:'hobby' ,
                    item:'dançar',
                },
                ref:{
                    key:'luta',
                    item:'capoeira'
                }
            },
            {
                hint:"A moça de 20 anos está em algum lugar à direita da lutadora de presilha Verde." ,
                status:"default",
                type: 'onRigth',
                target:{
                    key:'idade' ,
                    item:'20',
                },
                ref:{
                    key:'presilha',
                    item:'verde'
                }
            },
            {
                hint:"A lutadora da presilha Vermelha está em algum lugar à esquerda de quem pratica muay thai" ,
                status:"default",
                type:'onLeft' ,
                target:{
                    key:'presilha' ,
                    item:'vermelha',
                },
                ref:{
                    key:'luta',
                    item:'muay thai'
                }
            },
            {
                hint:"Quem gosta de Cozinhar está exatamente à esquerda de quem gosta de Ler." ,
                status:"default",
                type: 'directlyLeft',
                target:{
                    key:'hobby' ,
                    item:'cozinhar',
                },
                ref:{
                    key:'hobby',
                    item:'ler'
                }
            },
            {
                hint:"A lutadora de Goiás está exatamente à esquerda da lutadora Tocantinense." ,
                status:"default",
                type:'directlyLeft' ,
                target:{
                    key:'estado' ,
                    item:'goiás',
                },
                ref:{
                    key:'estado',
                    item:'tocantins'
                }
            },
            {
                hint:"A mulher de presilha Branca está em algum lugar entre a lutadora de Espirito Santo e a Andressa, nessa ordem." ,
                status:"default",
                type: 'isBetween',
                target:{
                    key:'presilha' ,
                    item:'branca',
                },
                ref:{
                    key:'estado',
                    item:'espirito santo'
                },
                secRef:{
                    key:'nome',
                    item:'andressa'
                }
            },
            
            
        ]  
    }
]