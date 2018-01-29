import Controller from '@ember/controller';
import EmberObject from '@ember/object';

//Declare User EmberObject for controller use
const User = EmberObject.extend({
    firstName: 'Jessica',
    lastName: 'Alba',
    email: "jessica@honest.com",
    password: 'emberjsfun',
    newPassword: '',
    oldPassword: '',
    confirmPassword: ''
});

export default Controller.extend({
    user: null,
    //Booleans of is enabled
    isNameEditing: false,
    isPasswordEditing:false,
    isEmailEditing:false,
    init(){
        this._super(...arguments);
        this.set('user',User.create());
    },
    //Functions
    editClick(element){
        if(element == "name"){
            this.set('isNameEditing',true);
        }else if(element == "email"){
            this.set('isEmailEditing', true);
        }else if(element == "password"){
            this.set('isPasswordEditing', true);
        }
    },
    //button click event for name, email and password to show or hide edit text boxes
    buttonClick(element, state){
        if(element == "name"){
            this.set('isNameEditing',state);
        }else if(element == "email"){
            this.set('isEmailEditing', state);
        }else if(element == "password"){
            this.set('isPasswordEditing', state);
        }
    },
    //Save click for name, email and password
    saveClick(element){
        if(element == "name"){
            //Set first and lastName
            this.set('user.firstName',this.user.firstName);
            this.set('user.lastName',this.user.lastName);
            this.set('isNameEditing',false);
        }
        if(element == "email"){
            this.set('user.email',this.user.email);
            this.set('isEmailEditing',false);
        }
        if(element == "password"){
            this.set('isPasswordEditing',false);
        }
    },
    actions: {
        //On edit click
        editCancelClickEvent(input, state){ 
            this.buttonClick(input, state);
        },
        //OnSaveClick
        saveClickEvent(input){
            this.saveClick(input);
        }
    }
    

});

