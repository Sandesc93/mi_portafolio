
const container = document.querySelector('.navbar__container')
const menu = document.getElementById('menu')

container.addEventListener('click', function (e) {
  if(e.target.matches('.menu-open')) {
    menu.classList.add('activo')
  }

  if(e.target.matches('.menu-close')) {
    menu.classList.remove('activo')
  }

  if (e.target.matches('.menu__link')) {
    menu.classList.remove('activo')
  }
})


// const secPort = document.querySelector('portafolio')
const servPrev = document.getElementById('sprev')
const servNext = document.getElementById('snext')
const porfPrev =document.getElementById('pprev')
const porfNext= document.getElementById('pnext')
const servicios = document.querySelector('.card')
const portafolio= document.querySelector('.porf__contenedor')

servPrev.addEventListener('click', ()=>{ 
       servicios.scrollLeft -= 300;
      console.log('hola')
   })
   
   servNext.addEventListener('click', () => {
       servicios.scrollLeft += 300;
       console.log('hola')
   })
   
   porfPrev.addEventListener('click' , ()=>{
       portafolio.scrollLeft -=200
       console.log('hola')
   })
   
   porfNext.addEventListener('click' , ()=>{
       portafolio.scrollLeft +=200
       console.log('hola')
   })





