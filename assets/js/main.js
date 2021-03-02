function check() {
    let inn = (document.getElementById("input").value);
    let innArr = inn.split('');
    let coefficient = [-1,5,7,9,4,6,10,5,7,0];
    let sum = 0;
    let gender = '';
    let feedback;

    if (innArr.length == 10) {
        console.log(innArr)

        for (let i = 0; i < innArr.length; i++) {
            sum += innArr[i] * coefficient[i];
        }

        console.log(sum);

        let controlNumber = sum % 11;
        console.log(controlNumber)

        if (controlNumber > 9) {
            controlNumber %= 10;
            console.log(controlNumber);
        }

        if (controlNumber == innArr[9]) {
            console.log('YES');
            if (innArr[8] % 2 == 0) {
                console.log('Woman')
                gender = 'Жіноча';
            }else{
                console.log('Man');
                gender = 'Чоловіча';
            }
            feedback = `Номер вірний, стать власника номера ${gender}`;
        }else{
            console.log('NO');
            feedback = `Номер не вірний`;
        }
    }else if (innArr.length == 0) {
        feedback = 'Рядок пустий'
    }
    else if (innArr.length < 10) {
        feedback = `Вы ввели номер не повністю, потрібно ввсети ще ${10 - innArr.length}`;
    }else if (innArr.length > 10) {
        feedback = `Ви ввели забагато цифер, потрібно прибрати ${innArr.length - 10}`;
    }
    document.getElementById("feedback").innerHTML = feedback;
}
