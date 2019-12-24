// moral,wealth,reputation

let end={
    moralHigh:'道德魔人，出任務被夥伴氣死',
    wealthHigh:'視錢財如性命，被賊人搶劫殺死',
    reputationHigh:'人緣太好被拱，累死',
    moralLow:'道德亂喪，被檢舉關到死',
    wealthLow:'窮到脫褲，餓死',
    reputationLow:'臭名遠播，出任務被同伴背刺害死',
}

function checkEnd() {
    if(moral>1) {
        $('#test').hide()
        $('.card-text').text(end['moralHigh'])
    }
    if(wealth>1) {
        $('#test').hide()
        $('.card-text').text(end['wealthHigh'])
    } 
    if(reputation>1) {
        $('#test').hide()
        $('.card-text').text(end['reputationHigh'])
    }
    if(-1>moral) {
        $('#test').hide()
        $('.card-text').text(end['moralLow'])
    }
    if(-1>wealth) {
        $('#test').hide()
        $('.card-text').text(end['wealthLow'])
    }
    if(-1>reputation) {
        $('#test').hide()
        $('.card-text').text(end['reputationLow'])
    }
}
