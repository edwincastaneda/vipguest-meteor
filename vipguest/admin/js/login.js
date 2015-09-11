if (Meteor.isClient) {

    Template.login.events({
        'submit form': function (event) {
            event.preventDefault();
            var emailVar = event.target.loginEmail.value;
            var passwordVar = event.target.loginPassword.value;
            Meteor.loginWithPassword(emailVar, passwordVar, function (error) {
                if (error) {
                    var errorMsg = error.reason == 'User not found' ? 'Login failed. Invalid email or password.' : error.reason;
                    alert(error);
                }
            });
        }
    });
    Template.topMenuAdmin.events({
        'click #logout': function (event) {
            event.preventDefault();
            Meteor.logout();
        }
    });
    Router.route('/register', function () {
        this.render('register');
    });
    Template.register.events({
        'submit form': function (event) {
            event.preventDefault();
            var userVar = event.target.registerUser.value;
            var emailVar = event.target.registerEmail.value;
            var passwordVar = event.target.registerPassword.value;
            var nickVar = event.target.registerNick.value;

            Accounts.createUser({
                username: userVar,
                email: emailVar,
                password: passwordVar,
                profile: nickVar}, function (error) {
                if (error) {
                    alert(error);
                } else {
                 Router.go("/");    
                }

            });
        }
    });



}


