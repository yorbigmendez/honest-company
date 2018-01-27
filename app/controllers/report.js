import Controller from '@ember/controller';

export default Controller.extend({
  user:{
    name: 'Jessica Alba',
    email: 'jessica@honest.com',
    password: 'password'
  },
  isHowCalculatedClicked: false,
  actions: {
    //On edit click
    howCalculatedClick(){ 
      this.set('isHowCalculatedClicked', true);
    }
}
});
