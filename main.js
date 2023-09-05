let before = document.getElementById('before')
let after = document.getElementById('after')
let append = document.getElementById('append')
let content = document.getElementById('content')
let container = document.getElementById('container')

container.style.backgroundColor = 'yellow'
container.style.height = '200px'
container.style.width = '100%'
content.style.color = 'red'

after.onclick = function(){
  container.after(content)
}
before.onclick = function(){
    container.before(content)
  }

  append.onclick = function(){
    container.append(content)
  }