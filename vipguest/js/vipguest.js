if (Meteor.isClient) {
    Router.route('/', function () {
        this.render('dashboardAdmin');
    });

    Router.route('/cards', function () {
        this.render('cardsAdmin');
    });

    Router.route('/gifts', function () {
        this.render('giftsAdmin');
    });

    Router.route('/croquis', function () {
        this.render('croquisAdmin');
    });

    Router.route('/outfit', function () {
        this.render('outfitAdmin');
    });

    Template.topMenuAdmin.helpers({
        currentUser: function () {
            return Meteor.user();
        }
    })
}


/*
 if (Meteor.isClient) {
 // counter starts at 0
 Session.setDefault('counter', 0);
 
 Template.hello.helpers({
 counter: function () {
 return Session.get('counter');
 }
 });
 
 Template.hello.events({
 'click button': function () {
 // increment the counter when button is clicked
 Session.set('counter', Session.get('counter') + 1);
 }
 });
 }
 
 if (Meteor.isServer) {
 Meteor.startup(function () {
 // code to run on server at startup
 });
 }
 */