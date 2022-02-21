export const theCheckbox = document.querySelector('.checks');


const CheckFunct = () => {
    theCheckbox.addEventListener('change', () => {
        if (theCheckbox.checked) {
          console.log("Checkbox is checked..");
        }
      });
      console.log('it works');
}

export {CheckFunct};

