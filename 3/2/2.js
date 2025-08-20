function buttom() {
    const box1 = document.getElementById("box11");
    box1.style.display = "none";
    const box2 = document.getElementById("anser");
    box2.style.display = "block";
    const userage = Number(document.getElementById("userage").value);
    if (10 >= userage) {
        const text = document.getElementById("anstx")
        text.innerText = "بچه سال"
    }
    if (10 < userage && userage <= 20) {
        const text = document.getElementById("anstx")
        text.innerText = "نوجوان"
    }
    if (20 < userage && userage <= 30) {
        const text = document.getElementById("anstx")
        text.innerText = "بزرگسال"
    }
    if (30 < userage) {
        const text = document.getElementById("anstx")
        text.innerText = "کهنسال"
    }
}

function buttom2() {
    const box2 = document.getElementById("anser");
    box2.style.display = "none";
    const box3 = document.getElementById("box33");
    box3.style.display = "block";

}

function buttom3() {
    const box3 = document.getElementById("box33");
    box3.style.display = "none";
    const birthDate = new Date(document.getElementById("userdate").value);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }

    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
        if (months < 0) {
            years--;
            months += 12;
        }
    }
    document.getElementById("ageas").innerText = `سن شما ${years} سال، ${months} ماه و ${days} روز است`;
    document.getElementById("box44").style.display = "block";
}

