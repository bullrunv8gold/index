

var myContractInstance;
var abi = [{ "constant": false, "inputs": [], "name": "buyPool1", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "pool5currUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "pool5users", "outputs": [{ "internalType": "bool", "name": "isExist", "type": "bool" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "payment_received", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "pool3userList", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "pool1userList", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "pool8userList", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pool1activeUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "pool1users", "outputs": [{ "internalType": "bool", "name": "isExist", "type": "bool" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "payment_received", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "buyPool4", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "pool5activeUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pool9currUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "pool4userList", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pool2activeUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "buyPool7", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "pool9userList", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pool1currUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pool4activeUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "pool9users", "outputs": [{ "internalType": "bool", "name": "isExist", "type": "bool" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "payment_received", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "buyPool2", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "pool7currUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pool10currUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "pool6users", "outputs": [{ "internalType": "bool", "name": "isExist", "type": "bool" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "payment_received", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "buyPool8", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "getEthBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "pool3users", "outputs": [{ "internalType": "bool", "name": "isExist", "type": "bool" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "payment_received", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "LEVEL_PRICE", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "unlimited_level_price", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "pool2userList", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pool8activeUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "pool4users", "outputs": [{ "internalType": "bool", "name": "isExist", "type": "bool" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "payment_received", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "pool6userList", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "requests", "outputs": [{ "internalType": "bool", "name": "isExist", "type": "bool" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "referrerID", "type": "uint256" }, { "internalType": "uint256", "name": "referredUsers", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "pool2users", "outputs": [{ "internalType": "bool", "name": "isExist", "type": "bool" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "payment_received", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pool8currUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "pool7users", "outputs": [{ "internalType": "bool", "name": "isExist", "type": "bool" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "payment_received", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pool9activeUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "uint256", "name": "_referrerID", "type": "uint256" }], "name": "regUser", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "ownerWallet", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pool7activeUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pool10activeUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pool4currUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "userList", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "pool8users", "outputs": [{ "internalType": "bool", "name": "isExist", "type": "bool" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "payment_received", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "currUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "buyPool9", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "users", "outputs": [{ "internalType": "bool", "name": "isExist", "type": "bool" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "referrerID", "type": "uint256" }, { "internalType": "uint256", "name": "referredUsers", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "buyPool6", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "pool2currUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "buyPool3", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "pool3currUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "pool5userList", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "pool7userList", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "pool10userList", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "pool3activeUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "buyPool10", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "pool6currUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "pool10users", "outputs": [{ "internalType": "bool", "name": "isExist", "type": "bool" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "uint256", "name": "payment_received", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "buyPool5", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "pool6activeUserID", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_user", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_referrer", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_time", "type": "uint256" }], "name": "regLevelEvent", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_user", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_referral", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_level", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_time", "type": "uint256" }], "name": "getMoneyForLevelEvent", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_level", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_time", "type": "uint256" }], "name": "regPoolEntry", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_user", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_receiver", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_level", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_time", "type": "uint256" }], "name": "getPoolPayment", "type": "event" }];
var address = "0x7a78E3D47C9E20836aca681956D8A972c0C79389";

$(document).ready(function () {   
    if (typeof web3 !== 'undefined') {

        web3 = new Web3(web3.currentProvider);
        MyContract = new web3.eth.Contract(abi, address);
        myContractInstance = MyContract;

        if (web3.currentProvider.isTrust) {

            const infura = 'https://mainnet.infura.io/v3/61725cf9c95547b8ac568e44e974e309';
            const web3 = new Web3(new Web3.providers.HttpProvider(infura));
            MyContract = new web3.eth.Contract(abi, address);
            myContractInstance = MyContract;

        }

    } else {

        const infura = 'https://mainnet.infura.io/v3/61725cf9c95547b8ac568e44e974e309';
        const web3 = new Web3(new Web3.providers.HttpProvider(infura));
        MyContract = new web3.eth.Contract(abi, address);
        myContractInstance = MyContract;
       
    }
    var level1 = parseFloat(0.01); var level2 = parseFloat(0.005); var level3 = parseFloat(0.0025); var level4 = parseFloat(0.00025);
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

    myContractInstance.methods.pool6currUserID().call().then(function (result) {

        $('.Pool6count').html(result);
        $('.Pool6amount').html(Math.round(1000000 * (result * pool6_price)) / 1000000);
    });

    myContractInstance.methods.pool7currUserID().call().then(function (result) {

        $('.Pool7count').html(result);
        $('.Pool7amount').html(Math.round(1000000 * (result * pool7_price)) / 1000000);
    });

    myContractInstance.methods.pool8currUserID().call().then(function (result) {

        $('.Pool8count').html(result);
        $('.Pool8amount').html(Math.round(1000000 * (result * pool8_price)) / 1000000);
    });

    myContractInstance.methods.pool9currUserID().call().then(function (result) {

        $('.Pool9count').html(result);
        $('.Pool9amount').html(Math.round(1000000 * (result * pool9_price)) / 1000000);
    });

    myContractInstance.methods.pool10currUserID().call().then(function (result) {

        $('.Pool10count').html(result);
        $('.Pool10amount').html(Math.round(1000000 * (result * pool10_price)) / 1000000);
    });



    myContractInstance.methods.currUserID().call().then(function (result) {


        $('.TotalUsers').html(result);
        $('.totalamount').html(Math.round(1000000 * (result * 0.05)) / 1000000);
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