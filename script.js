

// set table elements https://www.w3schools.com/jsref/met_node_appendchild.asp

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
const th1 = document.createElement("th");
const th2 = document.createElement("th");
const th3 = document.createElement("th");
const th4 = document.createElement("th");
const tr = document.createElement("tr");

th1.innerText = "Name";
th2.innerText = "Value";
th3.innerText = "Color";
th4.innerText = "Image";

// set buttons for sorting

const sortUpButton = document.createElement("button");
const sortDownButton = document.createElement("button");
const groupButton = document.createElement("button");

sortUpButton.innerText = "Sort value (up)";
sortDownButton.innerText = "Sort value (down)";
groupButton.innerText = "Group by color";

document.getElementById("stamps").appendChild(table);

table.appendChild(tbody);
table.appendChild(thead);
thead.appendChild(tr);
tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3);
tr.appendChild(th4);


document.getElementById("buttons").appendChild(sortUpButton);
document.getElementById("buttons").appendChild(sortDownButton);
document.getElementById("buttons").appendChild(groupButton);


function showStamps() {
    tbody.innerHTML = "";
    const startIndex = (page - 1) * 5;
    const endIndex = startIndex + 5;
    const stampsToShow = stamps.slice(startIndex, endIndex);
    for (let stamp of stampsToShow) {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const img = document.createElement("img");

        td1.innerText = stamp.name;
        td2.innerText = stamp.value;
        td3.innerText = stamp.color;
        img.src = stamp.image;
        img.alt = stamp.alt;

        td4.appendChild(img);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tbody.appendChild(tr);
    }
}

//  sorting on 'value' https://www.w3schools.com/js/js_array_sort.asp

sortUpButton.addEventListener("click", function () {
    stamps.sort(function (a, b) {
        return a.value - b.value;
    });
    showStamps();
});

sortDownButton.addEventListener("click", function () {
    stamps.sort(function (a, b) {
        return b.value - a.value;
    });
    showStamps();
});

groupButton.addEventListener("click", function () {
    const groups = {};
    for (let stamp of stamps) {
        if (!groups[stamp.color]) {
            groups[stamp.color] = [];
        }
        groups[stamp.color].push(stamp);
    }
    stamps.length = 0;
    for (let color in groups) {
        for (let stamp of groups[color]) {
            stamps.push(stamp);
        }
    }
    showStamps();
});

showStamps();