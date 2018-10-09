// Code your solution in this file!
const logDriverNames = function(arr) {
    arr.forEach(i => {
        console.log(i.name);
    })
};

const logDriversByHometown = function(arr, town) {
    arr.forEach(i => {
        if (i.hometown === town) {
            console.log(i.name);
        }
    })
};

function driversByRevenue(arr) {
    new_array = arr.slice()
    new_array.sort((a,b) => {
        return a.revenue - b.revenue;
    });
    return new_array;
};

function driversByName(arr) {
    new_array = arr.slice()
    new_array.sort((a,b) => {
        return a.name.localeCompare(b.name)
    });
    return new_array;
};

function totalRevenue(arr) {
    return arr.reduce((a,b) => {
        console.log(a,b)
        return a + b.revenue;
    },0);
};

function averageRevenue(drivers) {
    return totalRevenue(drivers) / drivers.length;
}

