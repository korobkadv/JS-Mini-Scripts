function entered_text_is_displayed_immediately() {

    const searchBody = document.querySelector(".col__article");

    const createInput = document.createElement("input");
    createInput.setAttribute("class", 'input');
    createInput.setAttribute("type", 'text');
    searchBody.append(createInput);

    const createP = document.createElement("p");
    createP.setAttribute("class", 'input-value');
    createP.textContent = 'Current input value:';
    searchBody.append(createP);

    const inputs = document.querySelector('.input');
    const results = document.querySelector('.input-value');
    
    inputs.addEventListener('focus', focusInput);
    inputs.addEventListener('input', resultInput);
    
    function focusInput ()  {
        results.textContent = 'Cool! Start typing.';
    }
    
    function resultInput ()  {
        results.textContent = 'Current input value: ' + inputs.value;
    }

}


///////////////////////////////// optional part ///////////////////////////////////////////
function cssAndDesc() {
    const style = `
  .input {
    display: inline-block;
    margin-bottom: 16px;
    border: none;
    width: 200px;
    height: 17px;
    padding: 6px;
    background-color: #e9e9e9;
    font-family: inherit;
    font-size: 18px;
    color: #2a2a2a;
    border: 1px solid #555;
    border-radius: 5px;
  }
  
  .input:focus {
    outline-color: #2a2a2a;
  }
  
  .input-value {
    color: #2a2a2a;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
  }
`;

    const description = 'When typing in a text field, its current value should be displayed in a paragraph. <a href="https://codepen.io/korobka_dv/pen/NOazwq" target=_blanc>https://codepen.io/korobka_dv/pen/NOazwq</a>';

    addCssAndDescription(style, description);
}
cssAndDesc();
entered_text_is_displayed_immediately();



