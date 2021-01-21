const calcy = () =>{
    let wb = document.getElementById('wb').value;
    let math = document.getElementById('math').value;
    let comp = document.getElementById('comp').value;
    let phy = document.getElementById('phy').value;
    let grade = "";
    let totalGrade = parseFloat(wb) + parseFloat(math) + parseFloat(comp) + parseFloat(phy);
    let pers = (totalGrade/400) * 100;
    // conditions
    if(pers <= 100 && pers >=80){
        grade = 'First Position';
    }else if(pers <= 79 && pers >=60){
        grade = 'Second Position';
    }else if(pers <= 60 && pers >=40){
        grade = 'Third Position';
    }else if(pers <= 40 && pers >=20){
        grade = 'Fail';
    }
    document.getElementById('showData').innerHTML = ` Out of 400 your total is 
     ${totalGrade} and persentage is ${pers}%. <br> Your Grade is ${grade}. `
}