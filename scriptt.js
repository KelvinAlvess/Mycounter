var a = window.document.getElementById("body")

function entrar() {
    a.style.background = 'purple'
}

function clicar() {
    a.style.background = 'orange'
}

function sair() {
    a.style.background = 'purple'
}

function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let pular = document.getElementById('pular')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || pular.value.length == 0) {
        window.alert('[ERRO] Está faltando dados!')
    } else {
        res.innerHTML = 'Contando:'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(pular.value)
        if (p <= 0) {
            window.alert('Passo invalido')
            p = 1
            window.alert('Vamos considerar que seu pulo foi 1')
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c}\u{1F998} `
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F998}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}