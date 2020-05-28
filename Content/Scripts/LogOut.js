

    $(document).ready(function() {
        $('.logoutuser').click(function () {
        
            var account = localStorage.removeItem("address", null);
            location.href = "/user/signin";
        });
    });
