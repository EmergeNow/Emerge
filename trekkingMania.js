function climbersPercent(input){
    let numberOfGroups = Number(input[0]);

    let totalClimbers = 0;
    let climbMusala = 0;
    let climbMountblant = 0;
    let climbKilimanjaro = 0;
    let climbK2 = 0;
    let climbEverest = 0;

    let musalaClimbers = 0;
    let mountblantClimbers = 0;
    let kilimanjaroClimbers = 0;
    let k2Climbers = 0;
    let everestClimbers = 0;
  

    for(let i = 0; i < numberOfGroups; i++){
        let climbersPerGroup = Number(input[i]);
        totalClimbers += climbersPerGroup;
        

        if(climbersPerGroup <= 5){
            musalaClimbers += climbersPerGroup;
            climbMusala++;
        } else if(climbersPerGroup >= 6 && climbersPerGroup <= 12){
            mountblantClimbers += climbersPerGroup;
            climbMountblant++;
        } else if(climbersPerGroup >= 13 && climbersPerGroup <= 25){
            kilimanjaroClimbers += climbersPerGroup;
            climbKilimanjaro++;
        } else if(climbersPerGroup >= 26 && climbersPerGroup <= 40){
            k2Climbers += climbersPerGroup;
            climbK2++;
        } else if(climbersPerGroup >= 41){
            everestClimbers += climbersPerGroup;
            climbEverest++;
        }
    }

    let percentClimbingMusala = ((musalaClimbers / totalClimbers * 100).toFixed(2) + "%");
    let percentClimbingMountblant = ((mountblantClimbers / totalClimbers * 100).toFixed(2) + "%");
    let percentClimbingKilimanjaro = ((kilimanjaroClimbers / totalClimbers * 100).toFixed(2) + "%");
    let percentClimbingK2 = ((k2Climbers / totalClimbers * 100).toFixed(2) + "%");
    let percentClimbingEverest = ((everestClimbers / totalClimbers * 100).toFixed(2) + "%");
    
    console.log(percentClimbingMusala);
    console.log(percentClimbingMountblant);
    console.log(percentClimbingKilimanjaro);
    console.log(percentClimbingK2);
    console.log(percentClimbingEverest);
 
}
climbersPercent(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);