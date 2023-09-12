function clicou() {
    var date = new Date()
    var year = date.getFullYear()
    
    var byear = window.document.getElementById('answer')
    var ano = Number(byear.value)

    s = year - ano

    if(ano >= year || s > 150) {
        window.alert('ERROR: Confirme os dados e tente novamente.')
    }

    var radsex = window.document.getElementsByName('radsex')
    var gender = ''
    var img = window.document.createElement('img')
    var res = window.document.getElementById('result')
    //var seximg = document.getElementById('gender-image')
    
    if (radsex[0].checked) {
        gender = 'man'
        if (s < 18) {
            img.setAttribute('src','./assets/homem-crianca.png')
        } else if (s < 25) {
            img.setAttribute('src','./assets/homem-jovem.png')
        } else if (s <= 50) {
            img.setAttribute('src','./assets/homem-adulto.png')
        } else {
            img.setAttribute('src','./assets/homem-idoso.png')
        }


    } else if (radsex[1].checked){
        gender = 'woman'
        if (s < 18) {
            img.setAttribute('src','./assets/mulher-crianca.png')
        } else if (s < 25) {
            img.setAttribute('src','./assets/mulher-jovem.png')
        } else if (s <= 50) {
            img.setAttribute('src','./assets/mulher-adulta.png')
        } else {
            img.setAttribute('src','./assets/mulher-idosa.png')
        }
        
    }

    res.style.textAlign = 'center'
    res.style.display = 'grid'
    res.innerHTML = `Detected: ${s} years old ${gender}!`
    res.appendChild(img)
    img.style.margin = 'auto'
    img.style.marginTop = '30px'
    
}