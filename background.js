// yahoo
const elements = document.getElementsByClassName("sw-Card Ad js-Ad");
for (let i = 0; i < elements.length; i++) {
    // console.log(elements[i]);
    elements[i].parentNode.style.display = 'none';
}

// google
if (document.getElementById('taw')) document.getElementById('taw').style.display = 'none';