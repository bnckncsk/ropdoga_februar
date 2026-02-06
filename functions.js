function muvelet(szam1, szam2, callback) {
    const result = callback(szam1, szam2);
    return { result }
}

function muveletLetrehoz(jel) {
    if (jel == '*') {
        return szam1 * szam2;
    }
    if (jel == '-') {
        return szam1 - szam2;
    }
    if (jel == '+') {
        return szam1 + szam2;
    }
}

class Gomb{
    constructor(szam1, szam2, jel) {
        const button = document.createElement('button');
        eredmenyDiv.appendChild(button);

        button.addEventListener('click', function(){
            const p = document.createElement('p');
            eredmenyDiv.appendChild(p);

            p.innerText = muvelet(szam1, szam2, muveletLetrehoz(jel))
        })
    }
}


export {muvelet, muveletLetrehoz, Gomb}