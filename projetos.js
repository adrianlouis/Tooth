leads_cards = [
    {
        titulo: 'Titulo do projeto',
        autor: 'Autor do card',
        seguidores: 3,
        comments: 2
    },
    {
        titulo: 'Novartis - Workshop de Design Thinking',
        autor: 'João Masiero',
        seguidores: 5,
        comments: 2
    },
    {
        titulo: 'Embraer, App para Recursos Humanos',
        autor: 'Joao Baptista',
        seguidores: 8,
        comments: 12
    }]

leads_seguidos = []

function load_leads() {
    let container_leads_cards = document.querySelector('.leads_cards')
    container_leads_cards.innerHTML = ''
    template = ''

    for (let i = 0; i < leads_cards.length; i++) {

        template += `
    <div id="card${i}" class="card">

                <div class="card_title">
                    <span class="title">${leads_cards[i].titulo}</span>
                    <span class="nome">${leads_cards[i].autor}</span>
                </div>

                <div class="card_icons">

                    <span class="card_icons_tag">Quente</span>

                    <div class="card_pessoa_comentario">
                        <i class="fa-solid fa-users"><span>${leads_cards[i].seguidores}</span></i>
                        <i class="fa-solid fa-comment"><span>${leads_cards[i].comments}</span></i>
                    </div>

                </div>

                <div onclick="seguir_lead(${i})" class="card_btn">
                    <span>Seguir lead</span>
                </div>

            </div>
    `
    }
    container_leads_cards.innerHTML = template

    checar_leads_seguidos()
}

function header_abas(el) {
    let elementos = document.getElementsByClassName('header_abas_span')

    for (let i = 0; i < elementos.length; i++) {
        elementos[i].setAttribute('class', 'header_abas_span')
    }
    el.parentElement.setAttribute('class', 'header_abas_span header_abas_escolhido')
}

function seguir_lead(ind) {

    if (leads_seguidos.includes(leads_cards[ind])){
        return
    }else{
        leads_seguidos.unshift(leads_cards[ind])
        checar_leads_seguidos()
    }

}

function checar_leads_seguidos() {

    if (leads_seguidos.length != 0) {
        document.querySelector('.span_leads_seguido').style.display='block'

        document.querySelector('.leads_acompanhado').style.display='flex'

        let container_leads_seguidos = document.querySelector('.container_cards_seguidos')
        container_leads_seguidos.innerHTML = ''
        template = ''

        for (let i = 0; i < leads_seguidos.length; i++) {

            template += `
        <div class="card_seguido">
                    <div class="card_title">
                        <span class="title">${leads_seguidos[i].titulo}</span>
                        <span class="nome">${leads_seguidos[i].autor}</span>
                    </div>

                    <div class="card_icons">

                        <span class="card_icons_tag">Quente</span>

                        <div class="card_pessoa_comentario">
                            <i class="fa-solid fa-users"><span>${leads_seguidos[i].seguidores}</span></i>
                            <i class="fa-solid fa-comment"><span>${leads_seguidos[i].comments}</span></i>
                        </div>

                    </div>

                    <div class="card_btn">
                        <span>Visualizar</span>
                    </div>

                </div>
        `
            container_leads_seguidos.innerHTML = template
        }

    } else {
        return
    }
}