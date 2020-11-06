const canvas2 = document.querySelector('#background')

const ctx2 = canvas2.getContext('2d')


ctx2.fillStyle = 'red'

ctx2.fillRect(100, 100, 50, 50)


ctx2.save()


// ctx2.translate(100, 0)

ctx2.fillStyle = 'blue'

ctx2.fillRect(50, 50, 50, 50)



ctx2.restore() //Right back to red

ctx2.fillRect(0, 0, 50, 50)




