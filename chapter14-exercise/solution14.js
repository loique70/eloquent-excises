// Build a Table

const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

const createTable = (datas)=>{
    let table = document.createElement('table')
    let headerRow = document.createElement('tr')
    for(values of Object.keys(datas[0])){
        let hearderColunm = document.createElement('th')
        hearderColunm.appendChild(document.createTextNode(values))
        headerRow.appendChild(hearderColunm)
    }
    table.appendChild(headerRow)

    for(mountains of datas){
        let bodyRow = document.createElement('tr')
        for(vals of Object.keys(mountains)){
            let bodyColunm = document.createElement('td')
            bodyColunm.appendChild(document.createTextNode(mountains[vals]))
            bodyRow.appendChild(bodyColunm)
        }
        table.appendChild(bodyRow)
    }
    return table
}
function numberCellsAlignRight() {
    for (let cell of Array.from(document.getElementsByTagName('td')))
      if (!isNaN(cell.innerHTML))
        cell.style.textAlign = 'right';
  }
document.getElementById('mountains').appendChild(createTable(MOUNTAINS));
numberCellsAlignRight();

//Element by TagName
