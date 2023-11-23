// Code your solution in this file!


function distanceFromHqInBlocks(x) {
    if (x >= 42) {
        return x - 42
    } else if (x < 42) {
        return 42 - x
    }
};

function distanceFromHqInFeet(x) {
    let distanceInBlocks = distanceFromHqInBlocks(x)
    return distanceInBlocks * 264
};

function distanceTravelledInFeet(start, destination) {
    if (start >= destination) {
        return (start - destination) * 264
    } else if (start < destination) {
        return (destination - start) * 264
    }
}

function calculatesFarePrice(start, destination) {
    const over2500Feet = "cannot travel that far";
    const over2000Feet = 25;
    const under400Feet = 0;
    
    if (start >= destination) {
        const distanceInFeet = (start - destination) * 264
        if (distanceInFeet > 2500) {
            return over2500Feet;
        } else if (distanceInFeet > 2000) {
            return over2000Feet;
        } else if (distanceInFeet > 400 && distanceInFeet <=2000) {
            const chargedFeet = distanceInFeet - 400
            return (chargedFeet * 2)/100;
        } else if (distanceInFeet <= 400) {
            return under400Feet 
        }
    } else if (start < destination) {
        const distanceInFeet = (destination - start) * 264
        if (distanceInFeet > 2500) {
            return over2500Feet;
        } else if (distanceInFeet > 2000) {
            return over2000Feet;
        } else if (distanceInFeet > 400 && distanceInFeet <=2000) {
            const chargedFeet = distanceInFeet - 400
            return (chargedFeet * 2)/100;
        } else if (distanceInFeet <= 400) {
            return under400Feet 
        }
    }
}