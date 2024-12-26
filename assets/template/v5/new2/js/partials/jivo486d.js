function jivo_onIntroduction() {
  jivo_api?.getVisitorNumber(function(error, visitorNumber) {
    if (error) {
        console.log('Error: ', error);
        return;
    }
    if( form_jivo ) {
      let userContacts = jivo_api.getContactInfo();
      form_jivo.elements.name.value = userContacts.client_name;
      Inputmask?.remove(form_jivo.elements.phone);
      form_jivo.elements.phone.value = userContacts.phone;

      if(userContacts.description) {
        let comments = document.createElement('input');
        comments.type = 'text';
        comments.name = 'comments';
        comments.value = userContacts.description;
        form_jivo.append(comments);
      }
      form_jivo.elements.mergelead.value = `${userContacts.client_name}_${userContacts.phone.replace(/[^0-9]/g, '')}`;
      form_jivo.querySelector("[type='submit']")?.click();

      if (userContacts.phone.substr(0,2) == '89') {
        localStorage.setItem('phone', userContacts.phone.replace('8', '+7'));
      }
    }
  });

  ym(23859247, 'reachGoal', 'lead', {URL: document.location.href, form: "AI_Consultant"});
}