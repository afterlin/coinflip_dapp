var web3 = new Web3(Web3.givenProvider);

var contractInstance;

$(document).ready(function() {
    window.ethereum.enable().then(function(accounts){
      contractInstance = new web3.eth.Contract(abi, "0x71B459eF462E6027AB3CaFd3695b137B5Cb0903c", {from:accounts[0]});

       console.log(contractInstance);
    });


  //  $("#playBet").change(inputBet);
    $("#head_button").click(betHead);
    $("#tail_button").click(betTail);
});

function betHead(){
  let value  = $("#bet_input").val();
//  let head_tail = parseInt($("input:checked").val());
  let config = {value: web3.utils.toWei(value, "ether")  };
//contractInstance.methods.flipHead().send(config).on("transactionHash", async ()=>{alert("Here we go!");})

  contractInstance.methods.getRandom().call().then((val)=>{alert(val);});
/*
contractInstance.methods.flipHead().send(config).on("transactionHash", async ()=>{
  await  contractInstance.methods.random().call().then((val)=>
  { if (val==0) { alert("You get double!"); }
    else {alert("You lost!");}})
 })
  // alert("choice is " + contractInstance.methods.choice );

*/
/*
  contractInstance.methods.flipping(head_tail).send(config).on("transactionHash", async ()=>{
  await contractInstance.methods.getBalance().call().then(async (bal)=>{
    alert("Here is your balance now: " + bal);
  }).then(async ()=>{ await contractInstance.methods.random().call().then((val)=>{
    alert("here is the random: " + val);
  });}
  );
 });
*/
}


function betTail(){
  let value  = $("#bet_input").val();
//  let head_tail = parseInt($("input:checked").val());
  let config = {value: web3.utils.toWei(value, "ether")  };



contractInstance.methods.flipTail().send(config).on("transactionHash", async ()=>{
  await  contractInstance.methods.random().call().then((val)=>
  { if (val==1) { alert("You get double!"); }
    else {alert("You lost!");}})
 })
  // alert("choice is " + contractInstance.methods.choice );

/*
  contractInstance.methods.flipping(head_tail).send(config).on("transactionHash", async ()=>{
  await contractInstance.methods.getBalance().call().then(async (bal)=>{
    alert("Here is your balance now: " + bal);
  }).then(async ()=>{ await contractInstance.methods.random().call().then((val)=>{
    alert("here is the random: " + val);
  });}
  );
 });
*/
}
