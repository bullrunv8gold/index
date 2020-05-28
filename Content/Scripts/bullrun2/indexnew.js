

var myContractInstance;


$(document).ready(function () {   
    if (typeof web3 !== 'undefined') {

        web3 = new Web3(web3.currentProvider);
        MyContract = new web3.eth.Contract(abi, address);
        myContractInstance = MyContract;

        if (web3.currentProvider.isTrust) {

           
            const web3 = new Web3(new Web3.providers.HttpProvider(infura));
            MyContract = new web3.eth.Contract(abi, address);
            myContractInstance = MyContract;

        }

    } else {

        
        //const web3 = new Web3(new Web3.providers.HttpProvider(infura));
        //MyContract = new web3.eth.Contract(abi, address);
        //myContractInstance = MyContract;
        alert('Please connect to metamask or trust wallet');
    }
    var level1 = parseFloat(0.01); var level2 = parseFloat(0.005); var level3 = parseFloat(0.0025); var level4 = parseFloat(0.00025);
    var pool1_price = 0.2;
    var pool2_price = 0.2;
    var pool3_price = 0.2;
    var pool4_price = 0.2;
    var pool5_price = 0.2;
    var pool6_price = 1;
    var pool7_price = 10;
    var totalamount = 0;
    var totalusers = 0;
    var totalearning = 0;
   
    myContractInstance.methods.pool1currUserID().call().then(function (result) {
        $('.Pool1count').html(result);
        $('.Pool1amount').html(Math.round(1000000 * (result * pool1_price)) / 1000000);
        
    });

    myContractInstance.methods.pool2currUserID().call().then(function (result) {

        $('.Pool2count').html(result);
        $('.Pool2amount').html(Math.round(1000000 * (result * pool2_price)) / 1000000);
    });

    myContractInstance.methods.pool3currUserID().call().then(function (result) {

        $('.Pool3count').html(result);
        $('.Pool3amount').html(Math.round(1000000 * (result * pool3_price)) / 1000000);
    });

    myContractInstance.methods.pool4currUserID().call().then(function (result) {

        $('.Pool4count').html(result);
        $('.Pool4amount').html(Math.round(1000000 * (result * pool4_price)) / 1000000);
    });



    myContractInstance.methods.pool5currUserID().call().then(function (result) {

        $('.Pool5count').html(result);
        $('.Pool5amount').html(Math.round(1000000 * (result * pool5_price)) / 1000000);
    });

    myContractInstance.methods.boostercurrUserID().call().then(function (result) {

        $('.Pool6count').html(result);
        $('.Pool6amount').html(Math.round(1000000 * (result * pool6_price)) / 1000000);
    });

    myContractInstance.methods.superboostercurrUserID().call().then(function (result) {

        $('.Pool7count').html(result);
        $('.Pool7amount').html(Math.round(1000000 * (result * pool7_price)) / 1000000);
    });




    myContractInstance.methods.currUserID().call().then(function (result) {


        $('.TotalUsers').html(result);
        $('.totalamount').html(Math.round(1000000 * (result * 0.1)) / 1000000);
    });

   // var events = myContractInstance.events.allEvents({ fromBlock: "latest", toBlock: 'latest' });
    
    // watch for changes
    //events.watch(function (error, event12) {
    //    if (!error) {
    //        $.each(event12, function (key, event) {
    //            if (event.event == "getMoneyForLevelEvent") {
    //                // Notification 1
    //                setTimeout(function () {
    //                    var time = "2 minutes ago";
    //                    $.notify({
    //                        icon: '/Content/assets/img/b1.png',
    //                        title: "User " + event.returnValues._referral,
    //                        message: "Received " + event.returnValues._level == 1 ? level1 : event.returnValues._level == 2 ? level2 : event.returnValues._level == 3 ? level3 : level4 + " referral income from " + event.returnValues._user
    //                    }, {
    //                            type: 'minimalist',
    //                            placement: {
    //                                from: "bottom",
    //                                align: "right"
    //                            },
    //                            animate: {
    //                                enter: 'animated fadeInLeftBig',
    //                                exit: 'animated fadeOutLeftBig'
    //                            },
    //                            icon_type: 'image',
    //                            template: '<div data-notify="container" class="alert alert-{0}" role="alert">' +
    //                                '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
    //                                '<div id="image">' +
    //                                '<img data-notify="icon" class="rounded-circle float-left">' +
    //                                '</div><div id="text">' +
    //                                '<span data-notify="title">{1}</span>' +
    //                                '<span data-notify="message">{2}</span>' +
    //                                '</div>' +
    //                                '</div>'
    //                        });
    //                }, 1000);
    //            }

    //            if (event.event == "regLevelEvent") {
    //                // Notification 1
    //                setTimeout(function () {
    //                    var time = "2 minutes ago";
    //                    $.notify({
    //                        icon: '/Content/assets/img/b1.png',
    //                        title: "Congragulations! New User " + event.returnValues._user + " Registered ",
    //                        message: "Welcome to BullRun"
    //                    }, {
    //                            type: 'minimalist',
    //                            placement: {
    //                                from: "bottom",
    //                                align: "right"
    //                            },
    //                            animate: {
    //                                enter: 'animated fadeInLeftBig',
    //                                exit: 'animated fadeOutLeftBig'
    //                            },
    //                            icon_type: 'image',
    //                            template: '<div data-notify="container" class="alert alert-{0}" role="alert">' +
    //                                '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
    //                                '<div id="image">' +
    //                                '<img data-notify="icon" class="rounded-circle float-left">' +
    //                                '</div><div id="text">' +
    //                                '<span data-notify="title">{1}</span>' +
    //                                '<span data-notify="message">{2}</span>' +
    //                                '</div>' +
    //                                '</div>'
    //                        });
    //                }, 1000);
    //            }


    //            if (event.event == "getPoolPayment") {
    //                // Notification 1
    //                // Notification 1
    //                setTimeout(function () {
    //                    var time = "2 minutes ago";
    //                    $.notify({
    //                        icon: '/Content/assets/img/b1.png',
    //                        title: "User " + event.returnValues._receiver,
    //                        message: "Received " + event.returnValues._level == 1 ? pool1_price : event.returnValues._level == 2 ? pool2_price : event.returnValues._level == 3 ? pool3_price : event.returnValues._level == 4 ? pool4_price : event.returnValues._level == 5 ? pool5_price : event.returnValues._level == 6 ? pool6_price : event.returnValues._level == 7 ? pool7_price : event.returnValues._level == 8 ? pool8_price : event.returnValues._level == 9 ? pool9_price : pool10_price + " Pool income from " + event.returnValues._user
    //                    }, {
    //                            type: 'minimalist',
    //                            placement: {
    //                                from: "bottom",
    //                                align: "right"
    //                            },
    //                            animate: {
    //                                enter: 'animated fadeInLeftBig',
    //                                exit: 'animated fadeOutLeftBig'
    //                            },
    //                            icon_type: 'image',
    //                            template: '<div data-notify="container" class="alert alert-{0}" role="alert">' +
    //                                '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
    //                                '<div id="image">' +
    //                                '<img data-notify="icon" class="rounded-circle float-left">' +
    //                                '</div><div id="text">' +
    //                                '<span data-notify="title">{1}</span>' +
    //                                '<span data-notify="message">{2}</span>' +
    //                                '</div>' +
    //                                '</div>'
    //                        });
    //                }, 1000);
    //            }
    //        });
    //    }
    //});

});