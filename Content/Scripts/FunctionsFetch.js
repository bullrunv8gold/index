
var totalearned = 0;
function getVariableData() {
    // get variable values
    myContractInstance.methods.pool1currUserID().call().then(function (result) {
        $('.Pool1count').html(result);
        $('.pool1_current_address').html("<a href=https://etherscan.io/address/" + result + " target=_blank>" + result + "</a>");
    });

    myContractInstance.methods.pool2currUserID().call().then(function (result) {
        
            $('.Pool2count').html(result);
        $('.pool2_current_address').html("<a href=https://etherscan.io/address/" + result + " target=_blank>" + result + "</a>");
    });

    myContractInstance.methods.pool3currUserID().call().then(function (result) {
       
            $('.Pool3count').html(result);
        $('.pool3_current_address').html("<a href=https://etherscan.io/address/" + result + " target=_blank>" + result + "</a>");
    });

    myContractInstance.methods.pool4currUserID().call().then(function (result) {
       
            $('.Pool4count').html(result);
        $('.pool4_current_address').html("<a href=https://etherscan.io/address/" + result + " target=_blank>" + result+ "</a>");
    });



    myContractInstance.methods.pool5currUserID().call().then(function (result) {
       
            $('.Pool5count').html(result);
        $('.pool5_current_address').html("<a href=https://etherscan.io/address/" + result + " target=_blank>" + result + "</a>");
    });

    myContractInstance.methods.pool6currUserID().call().then(function (result) {
        
            $('.Pool6count').html(result);
        $('.pool6_current_address').html("<a href=https://etherscan.io/address/" + result + " target=_blank>" + result + "</a>");
    });

    myContractInstance.methods.pool7currUserID().call().then(function (result) {
      
            $('.Pool7count').html(result);
        $('.pool7_current_address').html("<a href=https://etherscan.io/address/" + result + " target=_blank>" + result + "</a>");
    });

    myContractInstance.methods.pool8currUserID().call().then(function (result) {
       
            $('.Pool8count').html(result);
        $('.pool8_current_address').html("<a href=https://etherscan.io/address/" + result + " target=_blank>" + result + "</a>");
    });

    myContractInstance.methods.pool9currUserID().call().then(function (result) {
       
            $('.Pool9count').html(result);
        $('.pool9_current_address').html("<a href=https://etherscan.io/address/" + result + " target=_blank>" + result + "</a>");
    });

    myContractInstance.methods.pool10currUserID().call().then(function (result) {
        
            $('.Pool10count').html(result);
        $('.pool10_current_address').html("<a href=https://etherscan.io/address/" + result + " target=_blank>" + result + "</a>");
    });



    myContractInstance.methods.currUserID().call().then(function (result) {
    
       
            $('.TotalUsers').html(result);

    });

    myContractInstance.methods.users(account).call().then(function (result1) {
        
            $('.currentuseridlink').html("https://bullrun.live/User/signup?referralid=" + result1.id);

            $('.currentuseridlinknew').html("https://link.trustwallet.com/open_url?coin_id=60&url=https://bullrun.live/User/signup?referralid=" + result1.id);



            $('.currentuseridlink').val("https://bullrun.live/User/signup?referralid=" + result1.id);

            $('.currentuseridlinknew').val("https://link.trustwallet.com/open_url?coin_id=60&url=https://bullrun.live/User/signup?referralid=" + result1.id);



            $('.sharebutton').attr('data-url', "https://bullrun.live/User/signup?referralid=" + result1.id);
            $('.currentuserid').html(result1.id);
            $('.currentaddress').html(account);
            $('.ethaddress').attr('href', 'https://etherscan.io/address/' + account);
        
    });

    


    if (account !== 'undefined') {
        getReferralCommission();
        getPoolPaymentReceived();

   
    }
    


    

    
    
    DirectreferralCount();
}




function getReferralCommission() {
    

    var level1 = parseFloat(0.0075); var level2 = parseFloat(0.005); var level3 = parseFloat(0.0025); var level4 = parseFloat(0.000005);

    var referraltotal = parseFloat(0);

    var events = myContractInstance.getPastEvents('getMoneyForLevelEvent', { filter: { _user: account }, 'fromBlock': 0, 'toBlock': 'latest'}, function (error, log) {
        
        if (!error) {
            $.each(log, function (key, value) {
                var level = value.returnValues._level;

                if (level == 1) {
                    referraltotal = parseFloat(referraltotal) + parseFloat("0.01");

                }
                else if (level == 2) {

                    referraltotal = parseFloat(referraltotal) + parseFloat("0.005");
                }
                else if (level == 3) {
                    referraltotal = parseFloat(referraltotal) + parseFloat("0.0025");

                }
                else {

                    referraltotal = parseFloat(referraltotal) + parseFloat("0.00025");

                }

                $('.totalreferral').html(Math.round(1000000 * (referraltotal)) / 1000000);
            });
           
        }
    });

}


function getPoolPaymentReceived() {
    var pool1_price = 0.1;
    var pool2_price = 0.2;
    var pool3_price = 0.5;
    var pool4_price = 1;
    var pool5_price = 2;
    var pool6_price = 5;
    var pool7_price = 10;
    var pool8_price = 20;
    var pool9_price = 50;
    var pool10_price = 100;

    var referraltotal = parseFloat(0);

    var events = myContractInstance.getPastEvents('getPoolPayment', {filter : { _receiver: account },  'fromBlock': 0, 'toBlock': 'latest'}, function (error, log) {

        if (!error) {
            $.each(log, function (key, value) {
                var level = value.returnValues._level;

                if (level == 1) {
                    referraltotal = parseFloat(referraltotal) + pool1_price;
                }
                else if (level == 2) {
                    referraltotal = parseFloat(referraltotal) + pool2_price;
                }
                else if (level == 3) {
                    referraltotal = parseFloat(referraltotal) + pool3_price;
                }
                else if (level == 4) {
                    referraltotal = parseFloat(referraltotal) + pool4_price;
                }
                else if (level == 5) {
                    referraltotal = parseFloat(referraltotal) + pool5_price;
                }
                else if (level == 6) {
                    referraltotal = parseFloat(referraltotal) + pool6_price;
                }
                else if (level == 7) {
                    referraltotal = parseFloat(referraltotal) + pool7_price;
                }
                else if (level == 8) {
                    referraltotal = parseFloat(referraltotal) + pool8_price;
                }
                else if (level == 9) {
                    referraltotal = parseFloat(referraltotal) + pool9_price;
                }
                else if (level == 10) {
                    referraltotal = parseFloat(referraltotal) + pool10_price;
                }


                $('.totalpoolpayment').html(Math.round(1000000 * (referraltotal)) / 1000000);
            });
        }
    });
    

    
}

var templevel = 1, t = 1;
var employees = {
    accounting: []
};
var str = "";
//'0x78c3F84046C0a0f1D0044e25ab4898A7F9165034'
function Directreferral() {
    
    var events = myContractInstance.getPastEvents('regLevelEvent', {filter:{ _referrer: account }, 'fromBlock': 0, 'toBlock': 'latest'}, function (error, log) {

        if (!error) {

            $.each(log, function (key, value) {
                if (t == 1) {
                    t = 2;
                    $('#accordion11').html("");
                    $('#accordion11').append('<div class="panel-heading1 bg-primary ">' +
                        '<h4 class= "panel-title1">' +
                        '<a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion11" href="#collapseFour11" aria-expanded="false"><i class="fe fe-arrow-right mr-2"></i>Level 1</a>' +
                        '</h4 >' +
                        '</div >' +
                        '<div id="collapseFour11" class="panel-collapse collapse" role="tabpanel" aria-expanded="false">' +
                        '<div class= "panel-body border" ></div></div></div>')
                        ;

                }
                $('#collapseFour11 .panel-body').append('<p style=color:green>' + value.returnValues._user + '</p>');

                employees.accounting.push({

                    'address': value.returnValues._user,
                    "level": 1

                });

                InDirectreferral(value.returnValues._user, 2)
            });
        }
        else {

            $('#accordion11').append('No data');
                ;
        }
    });
}


function InDirectreferral(address, level) {
    var events = myContractInstance.getPastEvents('regLevelEvent', {filter:{ _referrer: address },  'fromBlock': 0, 'toBlock': 'latest' }, function (error, log) {

        if (!error) {
            $.each(log, function (key, value) {
                if (templevel != level) {
                    str += '';
                }
                if (templevel != level) {
                    templevel = level;
                    $('#accordion11').append('<div class="panel-heading1 bg-primary ">' +
                        '<h4 class= "panel-title1">' +
                        '<a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion1' + level + '" href="#collapseFour1' + level + '" aria-expanded="false"><i class="fe fe-arrow-right mr-2"></i>Level ' + level + '</a>' +
                        '</h4 >' +
                        '</div >' +
                        '<div id="collapseFour1' + level + '" class="panel-collapse collapse" role="tabpanel" aria-expanded="false">' +
                        '<div class= "panel-body border" ></div></div></div>')
                        ;
                }
                $('#collapseFour1' + level + ' .panel-body').append('<p style=color:green>' + value.returnValues._user + '</p>');

                employees.accounting.push({

                    'address': value.returnValues._user,
                    "level": level

                });
                InDirectreferral(value.returnValues._user, level + 1);
            });
        }
    });
}

function DirectreferralCount() {
    
    var i = 1;
    $('.referralcount').html(0);
    $('.indirect_referralcount').html(0);
    var events = myContractInstance.getPastEvents('regLevelEvent', {filter:{ _referrer: account },  'fromBlock': 0, 'toBlock': 'latest'}, function (error, log) {
       
        if (!error) {
            $.each(log, function (key, value) {
                $('.referralcount').html(i++);

                InDirectreferralCount(value.returnValues._user, 1)
            });
        }
        else {
            $('.referralcount').html(0);
            $('.indirect_referralcount').html(0);
        }
    });
     
}
var count = 1;

function InDirectreferralCount(address, level) {
    
    var events = myContractInstance.getPastEvents('regLevelEvent', {filter:{ _referrer: address },  'fromBlock': 0, 'toBlock': 'latest' }, function (error, log) {
      
        if (!error) {
            $.each(log, function (key, value) {
                $('.indirect_referralcount').html(count++);
                InDirectreferralCount(value.returnValues._user, level + 1);
            });
        }
        else {
            $('.indirect_referralcount').html(0);
        }
    });

}


function Transaction_Register() {
    
    var events = myContractInstance.getPastEvents('getMoneyForLevelEvent', {filter:{ _user: account },  'fromBlock': 0, 'toBlock': 'latest'}, function (error, log) {
        var level1 = parseFloat(0.01); var level2 = parseFloat(0.005); var level3 = parseFloat(0.0025); var level4 = parseFloat(0.00025);

        if (!error) {
            $.each(log, function (key, value) {
                
                $('.autopool_table').append('<tr><td><a href="https://etherscan.io/tx/' + value.transactionHash + '" target="_blank">' + value.transactionHash + '</a></td><td style=color:green>' + value.returnValues._referral + '</td><td>' + value.returnValues._level + '</td><td>' + (value.returnValues._level == 1 ? level1 : value.returnValues._level == 2 ? level2 : value.returnValues._level == 3 ? level3 : level4) + ' ETH</td></tr>');
            });
        }
    });
}


function Transaction_Pool() {
    var events = myContractInstance.getPastEvents('getPoolPayment', {filter:{ _receiver: account },  'fromBlock': 0, 'toBlock': 'latest' }, function (error, log) {
        var pool1_price = 0.1;
        var pool2_price = 0.2;
        var pool3_price = 0.5;
        var pool4_price = 1;
        var pool5_price = 2;
        var pool6_price = 5;
        var pool7_price = 10;
        var pool8_price = 20;
        var pool9_price = 50;
        var pool10_price = 100;

        if (!error) {
            $.each(log, function (key, value) {
                $('.transaction_autopool').append('<tr><td><a href="https://etherscan.io/tx/' + value.transactionHash + '" target="_blank">' + value.transactionHash + '</a></td><td style=color:green>' + value.returnValues._user + '</td><td>' + value.returnValues._level + '</td><td>' + (value.returnValues._level == 1 ? pool1_price : value.returnValues._level == 2 ? pool2_price : value.returnValues._level == 3 ? pool3_price : value.returnValues._level == 4 ? pool4_price : value.returnValues._level == 5 ? pool5_price : value.returnValues._level == 6 ? pool6_price : value.returnValues._level == 7 ? pool7_price : value.returnValues._level == 8 ? pool8_price : value.returnValues._level == 9 ? pool9_price : pool10_price) + ' ETH</td></tr>');
            });
        }
    });
}
