import Controller from '@ember/controller';

export default Controller.extend({
  isHowCalculatedClicked: false,
  actions: {
    //On edit click
    howCalculatedClick(){ 
      this.set('isHowCalculatedClicked', true);
    }
}
});
