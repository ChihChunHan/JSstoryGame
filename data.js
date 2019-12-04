let moral=0,wealth=0,reputation=0

let popEvent = [
    //1
    function(){
        $('.status').eq(0).addClass("statusUp")
        $('.status').eq(1).addClass("statusUp")
        Swal.fire({
            title:"路邊的錢袋",
            text:'你在路邊發現有路人遺落的錢袋，要檢起來嗎',
            showCancelButton: true,
            confirmButtonText:"好",
            cancelButtonText:"不要",
            allowOutsideClick: false,
            backdrop: `
            rgba(0,0,0,0)
            left top
            no-repeat
            `
        }).then((result) => {
            if(result.value) {
                Swal.fire('超爽DER，撿到100塊')
                moral--
                wealth++
                $('.status').removeClass("statusUp")
            }
            else{
                Swal.fire('你覺得自己沒有做壞事')
                moral++
                $('.status').removeClass("statusUp")
            }
        })
    },
    //2
    function(){
        $('.status').eq(0).addClass("statusUp")
        $('.status').eq(1).addClass("statusUp")
        Swal.fire({
            title:"衝出來的老頭",
            text:"有一個老頭突然衝出來：救命啊，有人要殺我，勇者請救救我",
            showCancelButton: true,
            confirmButtonText:"好",
            cancelButtonText:"不要",
            allowOutsideClick: false,
            backdrop: `
            rgba(0,0,0,0)
            left top
            no-repeat
            `
        }).then((result) => {
            if(result.value) {
                Swal.fire('老頭保護在後面，發現沒有人追來。回過頭發現老頭已經不見了...錢包也不見了...')
                wealth--
                $('.status').removeClass("statusUp")
            }
            else{
                Swal.fire('老頭到處跑來跑去，拜託大家救他。但沒有人理他...心裡覺得有點過意不去...+')
                moral--
                $('.status').removeClass("statusUp")
            }
        })
    },
    //3
    function(){
        $('.status').eq(1).addClass("statusUp") //w
        $('.status').eq(2).addClass("statusUp") //p
        Swal.fire({
            title:"學弟拜託了",
            text:"當你完成任務時，學長拜託你一件事，他希望最後一次的任務可以留下好名聲，他希望你可以聲稱這次他是最大功臣",
            showCancelButton: true,
            confirmButtonText:"好",
            cancelButtonText:"不要",
            allowOutsideClick: false,
            backdrop: `
            rgba(0,0,0,0)
            left top
            no-repeat
            `
        }).then((result) => {
            if(result.value) {
                Swal.fire('學長在這次任務中留下好名聲，光榮的卸甲歸田。他偷偷的把這次任務的酬勞都給了你')
                wealth++
                $('.status').removeClass("statusUp")
            }
            else{
                Swal.fire('你和學長順利完成任務，大家都對你們刮目相看，但是學長把大部分酬勞都拿走了，而你也沒辦法說甚麼...')
                reputation++
                $('.status').removeClass("statusUp")
            }
        })
    },
    //4
    function(){
        $('.status').eq(0).addClass("statusUp") //m
        $('.status').eq(2).addClass("statusUp") //p
        Swal.fire({
            title:"抓小偷",
            text:"村子裡出現偷雞賊，你辛苦追查發現小偷是一個小孩子。他說他妹妹快死了，求求你放他一馬。",
            showCancelButton: true,
            confirmButtonText:"快走吧當我沒看見你",
            cancelButtonText:"醒醒吧你沒有妹妹",
            allowOutsideClick: false,
            backdrop: `
            rgba(0,0,0,0)
            left top
            no-repeat
            `
        }).then((result) => {
            if(result.value) {
                Swal.fire('你被村子裡的人笑無能，不過你覺得你做了對的事')
                moral++
                $('.status').removeClass("statusUp")
            }
            else{
                Swal.fire('村莊裡的人都很感謝你')
                reputation++
                $('.status').removeClass("statusUp")
            }
        })
    },
    //5
    function(){
        $('.status').eq(0).addClass("statusUp") //m
        Swal.fire({
            title:"排隊進城",
            text:"你發現有人插隊，心理面很生氣，要勇敢站出來臭罵他一頓嗎",
            showCancelButton: true,
            confirmButtonText:"你這個插隊狗!",
            cancelButtonText:"低調一點好了",
            allowOutsideClick: false,
            backdrop: `
            rgba(0,0,0,0)
            left top
            no-repeat
            `
        }).then((result) => {
            if(result.value) {
                Swal.fire('你大喊之後，所有人一呼百應，插隊的人很厚臉皮的假裝沒聽到，但最終還是被衛兵轟出去了')
                moral++
                $('.status').removeClass("statusUp")
            }
            else{
                Swal.fire('你心中憤恨不平，怒火難平。可是多一事不是少一事，說不定人家趕著要去看醫生...')
                $('.status').removeClass("statusUp")
            }
        })
    },
    //6
    function(){
        $('.status').eq(1).addClass("statusUp") //w
        Swal.fire({
            title:"酒吧賭博",
            text:"酒吧裡有人在賭骰子，你剛拿到任務酬勞，要不要試試手氣呢",
            showCancelButton: true,
            confirmButtonText:"賭了",
            cancelButtonText:"繼續喝酒",
            allowOutsideClick: false,
            backdrop: `
            rgba(0,0,0,0)
            left top
            no-repeat
            `
        }).then((result) => {
            if(result.value) {
                Swal.fire('爽拉!今天手氣真好，發大財囉。今晚的酒我請客')
                wealth++
                $('.status').removeClass("statusUp")
            }
            else{
                Swal.fire('你喝完酒就走了，甚麼都沒發生...')
                $('.status').removeClass("statusUp")
            }
        })
    },
    //7
    function(){
        $('.status').eq(2).addClass("statusUp") //p
        Swal.fire({
            title:"有人搶劫",
            text:"你正在趕往任務結合地點，途中發現有人搶老太太的皮包，要挺身而出嗎",
            showCancelButton: true,
            confirmButtonText:"抓搶匪",
            cancelButtonText:"繼續趕路",
            allowOutsideClick: false,
            backdrop: `
            rgba(0,0,0,0)
            left top
            no-repeat
            `
        }).then((result) => {
            if(result.value) {
                Swal.fire('為了抓搶匪集合遲到被隊長罵了，不過訪間有傳言說你伸張了正義')
                reputation++
                $('.status').removeClass("statusUp")
            }
            else{
                Swal.fire('好險及時趕到，團隊都到齊了可以出發了')
                $('.status').removeClass("statusUp")
            }
        })
    },
    //8
    function(){
        $('.status').eq(0).addClass("statusUp") //m
        Swal.fire({
            title:"排隊出城",
            text:"快輪到你了前面卻有人插隊，心理面很生氣，要勇敢站出來臭罵他一頓嗎",
            showCancelButton: true,
            confirmButtonText:"你這個插隊狗!",
            cancelButtonText:"低調一點好了",
            allowOutsideClick: false,
            backdrop: `
            rgba(0,0,0,0)
            left top
            no-repeat
            `
        }).then((result) => {
            if(result.value) {
                Swal.fire('原來他是接生姥姥，所有人都白眼你說你沒有同情心')
                moral--
                $('.status').removeClass("statusUp")
            }
            else{
                Swal.fire('你心中憤恨不平，怒火難平。可是多一事不是少一事，說不定人家趕著要去看醫生...')
                $('.status').removeClass("statusUp")
            }
        })
    },
    //9
    function(){
        $('.status').eq(1).addClass("statusUp") //w
        Swal.fire({
            title:"酒吧賭博",
            text:"酒吧裡有人在賭撲克牌，你剛拿到任務酬勞，要不要試試手氣呢",
            showCancelButton: true,
            confirmButtonText:"賭了",
            cancelButtonText:"繼續喝酒",
            allowOutsideClick: false,
            backdrop: `
            rgba(0,0,0,0)
            left top
            no-repeat
            `
        }).then((result) => {
            if(result.value) {
                Swal.fire('你把賺來的錢都賠光光了，你很後悔為什麼要賭這麼大...')
                wealth--
                $('.status').removeClass("statusUp")
            }
            else{
                Swal.fire('你喝完酒就走了，甚麼都沒發生...')
                $('.status').removeClass("statusUp")
            }
        })
    },
    //10
    function(){
        $('.status').eq(2).addClass("statusUp") //p
        Swal.fire({
            title:"少女落難",
            text:"你正在趕往任務結合地點，途中發現有無賴纏著少女，要挺身而出嗎",
            showCancelButton: true,
            confirmButtonText:"抓搶匪",
            cancelButtonText:"繼續趕路",
            allowOutsideClick: false,
            backdrop: `
            rgba(0,0,0,0)
            left top
            no-repeat
            `
        }).then((result) => {
            if(result.value) {
                Swal.fire('你把無賴嚇跑之後卻集合遲到，遲到的消息在團隊中被傳開了，還被取一個"遅刻魔"的外號')
                reputation--
                $('.status').removeClass("statusUp")
            }
            else{
                Swal.fire('好險及時趕到，團隊都到齊了可以出發了')
                $('.status').removeClass("statusUp")
            }
        })
    },
]