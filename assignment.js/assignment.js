// Problem-01, Convertion of kilometerToMeter.
function kilometerToMeter(kilometer) {
    var meter = kilometer / 1;
    return meter;
}

// Problem-02, Total Cost through budgetCalculator.
function budgetCalculator(watch, mobile, laptop) {
    var watchRate = 50;
    var watchPrice = watch * watchRate;
    var mobileRate = 100;
    var mobilePrice = mobile * mobileRate;
    var laptopRate = 500;
    var laptopPrice = laptop * laptopRate;
    var totalCost = watchPrice + mobilePrice + laptopPrice;
    return totalCost;
}

// Problem-03, Calculate hotelCost.
function hotelCost(daysInHotel) {
    if (daysInHotel <= 10) {
        cost = daysInHotel * 100;
    }
    else if (daysInHotel <= 20) {
        var first10Days = 10 * 100;
        var remainingDays = daysInHotel - 10;
        var second10Days = remainingDays * 80;
        cost = first10Days + second10Days;
    }
    else {
        var first10Days = 10 * 100;
        var second10Days = 10 * 80;
        var remainingDays = daysInHotel - 20;
        var third10Days = remainingDays * 50;
        totalCost = first10Days + second10Days + third10Days;
    }
    return totalCost;
}

// Problem-04, Find out megaFriend.
function megaFriend(friendsName) {
    var longName = '';
    var names = friendsName.split(' ');
    for (var i = 0; i < names.length; i++) {
        var individualName = names[i];
        if (individualName.length > longName.length) {
            longName = individualName;
        }
    }
    return longName;
}