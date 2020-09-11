const cells = document.querySelectorAll('.cell')
const position = {
  0: ['5px', '5px'], 1: ['5px', '105px'], 2: ['5px', '205px'], 3: ['5px', '305px'],
  4: ['105px', '5px'], 5: ['105px', '105px'], 6: ['105px', '205px'], 7: ['105px', '305px'],
  8: ['205px', '5px'], 9: ['205px', '105px'], 10: ['205px', '205px'], 11: ['205px', '305px'],
  12: ['305px', '5px'], 13: ['305px', '105px'], 14: ['305px', '205px'], 15: ['305px', '305px']
};
const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,15,14]

function moveCell(cellId, pos){
  const cell = document.getElementById(cellId)
  cell.style.top = position[pos][0]
  cell.style.left = position[pos][1]
  cell.setAttribute('id', pos)
}
function emptyCell(cell){
  let clickId = parseInt(cell.id ,10)
  let valid = []
  if(clickId-4>=0){valid.push(clickId-4)}
  if((clickId+1)%4 != 0){valid.push(clickId+1)}
  if(clickId+4<16){valid.push(clickId+4)}
  if(clickId%4 != 0){valid.push(clickId-1)}
  for(let i of valid){
    let empty = document.getElementById(`${i}`)
    if(empty.classList[1]=='empty'){
      moveCell(clickId, i)
      moveCell(i, clickId)
    }
  }
}

cards.sort(()=>0.5-Math.random())
for(let i =0; i<cells.length; i++){
  moveCell(i,i)
  if(i>0){cells[i].textContent = cards[i-1]}
}
cells.forEach(cell=>{
  cell.addEventListener('click',()=>{
    emptyCell(cell)
  })
})