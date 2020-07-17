function feetToMile(feet) {
    if (feet < 0) {
        return "Length can't be negative.";
    }
    return feet / 5280;
}

function woodCalculator(chair, table, bed) {
    if (chair < 0 || table < 0 || bed < 0) {
        return "Please don't provide negative numbers.";
    }
    return chair + table * 3 + bed * 5;
}

function brickCalculator(floorCount) {
    let feet = 0;
    while (floorCount > 0) {
        if (floorCount > 20) {
            feet += 10;
        }
        else if (floorCount > 10) {
            feet += 12;
        }
        else {
            feet += 15;
        }
        floorCount--;
    }
    return feet * 1000;
}

function tinyFriend(friends) {
    if (friends.length === 0) {
        return "Don't you have any friend?";
    }

    let smallestName = friends[0];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i] != "") {
            smallestName = friends[i];
            break;
        }
    }

    for (let i = 1; i < friends.length; i++) {
        if (friends[i].length < smallestName.length && friends[i] != "") {
            smallestName = friends[i];
        }
    }
    return smallestName;
}