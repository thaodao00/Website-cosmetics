let addButton = document.querySelector(".pay__user-info__body-add");
let changeButton = document.querySelector(".pay__user-info__body-change");
let payUsers = document.querySelectorAll(".pay__user-info");
let complete = document.querySelector(".radio-btn__complete");
let radio = document.getElementsByName("radio");
let payUser = document.querySelector(".pay__user-info.active-tab");
complete.onclick = function (){
    let userName;
    let userPhone;
    let userAddress;

    for (var i = 0; i < radio.length; i++) {

        if(radio[i].checked ==true){
            // payUsers.forEach((tab,index)=>{
            //     const pane = payUsers[index];
            //     document.querySelector(".pay__user-info.active-tab").classList.remove("active-tab")
                userName = document.querySelector(".pay__user-info__name").innerHTML;
                radio[i].value = userName;
            //     userPhone = document.querySelector(".pay__user-info__phone").innerHTML;
            //     userAddress = document.querySelector(".pay__user-info__address").innerHTML;
            //     this.classList.add('active-tab')
            //     pane.classList.add('active-tab')
            // })
            // let userName1 = document.querySelector(".pay__user-info__name")
            // let userPhone1 = document.querySelector(".pay__user-info__phone")
            // let userAddress1 = document.querySelector(".pay__user-info__address")
            // userName1 .innerHTML=userName
            // userPhone1.innerHTML=userPhone;
            // userAddress1.innerHTML=userAddress;
            console.log(userName)

        }

    }
}

addButton.onclick = function () {
    document.querySelector(".modal-address").style.display = "flex";
}
changeButton.onclick = function () {

   payUsers.forEach((tab,index)=>{
       const pane = payUsers[index];
        document.querySelector(".pay__user-info.active-tab").classList.remove("active-tab")
       this.classList.add('active-tab')
       pane.classList.add('active-tab')


   })




}
let backButton = document.querySelector(".auth-form__controls-back")

backButton.onclick = function () {
    document.querySelector(".modal-address").style.display = "none";
}

let modalOverlay = document.querySelector(".modal__overlay");

modalOverlay.onclick = function () {
    document.querySelector(".modal-address").style.display = "none";
}