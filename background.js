const hideClassAds = (classname) => {
    const elements = document.getElementsByClassName(classname);
    for (let i = 0; i < elements.length; i++) {
        // console.log(elements[i]);
        elements[i].parentNode.style.display = 'none';
    }
}

// yahoo
hideClassAds('sw-Card Ad js-Ad');

// google
if (document.getElementById('taw')) document.getElementById('taw').style.display = 'none';

// Bing
const elements = document.getElementsByClassName('b_ad b_adTop');
for (let i = 0; i < elements.length; i++) {
    // console.log(elements[i]);
    elements[i].style.display = 'none';
}