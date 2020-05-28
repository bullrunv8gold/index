

var myContractInstance;

var account = "";

   


function SigninPage(){
  
    if (typeof web3 !== 'undefined') {
     
        $('#lgambtn').show();
       
        web3 = new Web3(web3.currentProvider);

        web3.eth.getAccounts().then(function (result) {
            account = result[0];
          
        });
        MyContract = new web3.eth.Contract(abi, address);
        // initiate contract for an address

        myContractInstance = MyContract;



    } else {
        alert('Please connect to metamask or trust wallet');
        
        //  const web3 = new Web3(new Web3.providers.HttpProvider(infura));

        //MyContract = new web3.eth.Contract(abi, address);
        //// initiate contract for an address

        //myContractInstance = MyContract;
    }


   

}

$(document).ready(function () { 

    $('#lgambtn').click(async () => {


        try {
            await ethereum.enable();
            web3.eth.getAccounts().then(function (result) {
                account = result[0];

            });

            myContractInstance.methods.users(account).call().then(function (result) {
                if (result[0]) {
                    localStorage.setItem("address", account);
                    location.href = "/bullrun2/Home/Dashboard";
                }
                else {
                    $('.error').html('You need to register first');
                    $('.error').show();
                }


            });
        }
        catch (e) {
            console.log(e);
        }
    });

    function trackTransaction(result) {

        console.log(result);
        web3.eth.getTransactionReceipt(result, function (error, result1) {
            if (result1 == null) {
                $('.error').html('Pending : Transaction waiting for confirmation');
                $('.error').show();

                trackTransaction(result)
            }
            else {
                if (result1.status == "0x1") {
                    alert("success")
                    localStorage.setItem("address", account);
                    location.href = "/bullrun2/Home/Dashboard";
                }
                else {
                    $('.error').html('Transaction Failed');
                    $('.error').show();
                }
            }
        })
    }

    $('#lgmbtnsup').click(async () => {
      
        var add = $('[name="referral"]').val();
        if (add.length == 0) {
            $('.error').html('Enter referral code');
            $('.error').show();

            return false;
        }
      
        if (typeof web3 !== 'undefined') {
           
           
            await ethereum.enable();
            
            
            web3 = new Web3(web3.currentProvider);
  MyContract = new web3.eth.Contract(abi, address);
            // initiate contract for an address

            myContractInstance = MyContract;

        //   checkbuyLevel();
            web3.eth.getAccounts().then(function(result){
                account = result[0];
                SignUpPay(account);
            });
             
          

          

           

        }
        else {
            console.log("Metamask not found")
        }

    })


    function SignUpPay(account) {
        var add = $('[name="referral"]').val();
        myContractInstance.methods.regUser(add).send({ from: account, value: 100000000000000000, gas: 3000000 })
            .on('transactionHash', function (hash) {
                $('.error').html('Pending : Transaction waiting for confirmation');
                $('.error').show();

              //  trackTransaction(result);
            })

            .on('receipt', function (receipt) {
                // receipt example
                console.log(receipt);
               
               
                    if (receipt.status) {
                        alert("success")
                        localStorage.setItem("address", account);
                        location.href = "/bullrun2/Home/Dashboard";
                    }
                    else {
                        $('.error').html('Transaction Failed');
                        $('.error').show();
                    }
                
            })
            .on('error', console.error);

    }



    $('#lgmbtn').click(function () {
        var add = $('[name="ethaddress"]').val();
        if (add.length > 0) {
            try {
                myContractInstance.methods.users(add).call().then(function (result) {
                    
                    if (result[0]) {

                       

                            localStorage.setItem("address", add);
                        location.href = "/bullrun2/Home/Dashboard";
                        }
                        else {
                            $('.error').html('You need to register first');
                            $('.error').show();
                        }
                    

                });

            }
            catch (err) {
                console.log(err);
            }

        }
        else {
            $('.error').html('Enter Valid ETH address');
            $('.error').show();
        }
    });



})