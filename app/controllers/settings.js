import Controller from '@ember/controller';
export default Controller.extend({
    user: {
        firstName: 'Jessica',
        lastName: 'Alba',
        email: "jessica@honest.com",
        password: 'emberjsfun'
    },
    userEdit:{
        firstName: '',
        lastName: '',
        email: '',
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    },
    //Booleans of is enabled
    isNameEditing: false,
    isPasswordEditing:false,
    isEmailEditing:false,
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
    //Cancel click
    buttonClick(element, state){
        if(element == "name"){
            this.set('isNameEditing',state);
        }else if(element == "email"){
            this.set('isEmailEditing', state);
        }else if(element == "password"){
            this.set('isPasswordEditing', state);
        }
    },
    //Save click
    saveClick(element){
        if(element == "name"){
            //Set first and lastName
            this.set('user.firstName',this.userEdit.firstName);
            this.set('user.lastName',this.userEdit.lastName);
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

