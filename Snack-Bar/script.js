let toastBox = document.getElementById("toastBox");
let successMsg = '<i class="ri-checkbox-circle-fill"></i> Successfully Submitted';
let errorMsg = '<i class="ri-close-circle-fill"></i> Please fix th error!';
let invalidMsg = '<i class="ri-error-warning-fill"></i> Invalid input, check again';

function showToast(msg) {
    let toast = document.createElement("div");
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('error')) {
        toast.classList.add('error');
    }

    if(msg.includes('Invalid')) {
        toast.classList.add('invalid');
    }

    setTimeout(()=> {
        toast.remove();
    }, 6000);
}