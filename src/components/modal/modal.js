/* Modal Component */
function openModal(){
    /* Find the target */
    let target = this.dataset.target;
    if (target == null){
        console.error('Error: target undefined!');
        return;
    }
    /* Find the modal */
    let modal = document.getElementById(target);
    if (modal == null){
        console.log('Error: target \''+modal+'\' not found!');
        return;
    }
    /* Send datasets to modal */
    let fields = ["modal-title", "modal-message"];
    fields.forEach((field) => {
        /* If attribute exists verify if exists in modal the field */
        let attributeField = this.getAttribute('data-'+field);
        let modalField = modal.getElementsByClassName(field)[0];
        /* If the attr is a modal image*/
        if(attributeField != null){
            if(modalField != null){
                modalField.innerHTML = attributeField;
            }else{
                console.error('The attribute \''+field+'\' dont exists in the modal!');
            }
        }
    });
    /* Show the modal */
    modal.style.display = 'flex';
    setTimeout(()=>{
        modal.style.opacity = '1';
        modal.querySelector('.modal-box').style.marginTop = '0px';
    }, 200);
}
function closeModal(){
    /* Find the modal parent */
    let parent = this.parentElement;
    while(true){
        if(parent.className == 'modal'){
            break;
        }
        parent = parent.parentElement;
    }
    /* Show error the modal is not found */
    if(parent == null){
        console.error("Error: button is not inside modal!");
        return;
    }
    /* Close the modal */
    parent.style.opacity = '0';
    parent.querySelector('.modal-box').style.marginTop = '-100px';
    setTimeout(()=>{
        parent.style.display = 'none';
    }, 200);
}
function modalInit(){
    /* Find the buttons to open and close the modals */
    var modalOpenButtons = document.querySelectorAll('.btn-modal');
    var modalCloseButtons = document.querySelectorAll('.btn-close');
    /* Add the events in the buttons */
    modalOpenButtons.forEach((button) => {
        button.addEventListener('click', openModal);
    });
    modalCloseButtons.forEach((button)=>{
        button.addEventListener('click', closeModal);
    });
}
modalInit();