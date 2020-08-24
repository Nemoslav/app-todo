let culturePage = 3
let pages=Math.ceil(this.tasks.length / culturePage)
for(let i=1; i<=pages;++i){
let li = this.document.createElement('li')
li.innerHTML = i
.appendChild(li)
}
for(let p of pages){
p.addEventListener("click", function(){
let pageNum = +this.innerHTML
let start = (pageNum - 1)*culturePage
let end = start + culturePage
let newtasks = this.tasks.slice(start,end)
for(let newtask of newtasks){

}
})
}



let culturePage = 3
let items = []
this.setState(state =>{
  let {pages} = state;
  let numberPages=Math.ceil(this.tasks.length / culturePage)
  for(let i=1; i<=numberPages;++i){
    let li = document.createElement('li',[i])
    pages.number = li
    items.push(li)
  }
  for(let item of items){
    item.addEventListener('click', function(){
      let pageNum = +this.innerHTML
let start = (pageNum - 1)*culturePage
let end = start + culturePage
let newtasks = this.tasks.slice(start,end)
for(let newtask of newtasks){