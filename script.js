    
    var b2 = document.getElementsByClassName("box2");
    var b3 = document.getElementsByClassName("box3");
    var b4 = document.getElementsByClassName("box4");
    var b5 = document.getElementsByClassName("box5");
    var b6 = document.getElementsByClassName("box6");
    var b7 = document.getElementsByClassName("box7");
    var b8 = document.getElementsByClassName("box8");
    var b9 = document.getElementsByClassName("box9");
    var b10 = document.getElementsByClassName("box10");

    var ovr =   document.getElementsByClassName("overlay");
    var moves = [];

    var count = 0;
    var clicks = 0;

    var tab2 = [
        [0,1],
        [2,3]
    ]
    var tab3 = [
        [0,1,2,],
        [3,4,5],
        [6,7,8]
    ]
    var tab5 = [
        [0,1,2,3,4],
        [5,6,7,8,9],
        [10,11,12,13,14],
        [15,16,17,18,19],
        [20,21,22,23,24]
    ]
    var tab4 = [
        [0,1,2,3],
        [4,5,6,7],
        [8,9,10,11],
        [12,13,14,15]
    ]
    var tab6 = [
        [0,1,2,3,4,5],
        [6,7,8,9,10,11],
        [12,13,14,15,16,17],
        [18,19,20,21,22,23],
        [24,25,26,27,28,29],
        [30,31,32,33,34,35]
    ]
    var tab7 = [
        [0,1,2,3,4,5,6],
        [7,8,9,10,11,12,13],
        [14,15,16,17,18,19,20],
        [21,22,23,24,25,26,27],
        [28,29,30,31,32,33,34],
        [35,36,37,38,39,40,41],
        [42,43,44,45,46,47,48]
    ]
    var tab8 = [
        [0,1,2,3,4,5,6,7],
        [8,9,10,11,12,13,14,15],
        [16,17,18,19,20,21,22,23],
        [24,25,26,27,28,29,30,31],
        [32,33,34,35,36,37,38,39],
        [40,41,42,43,44,45,46,47],
        [48,49,50,51,52,53,54,55],
        [56,57,58,59,60,61,62,63]
    ]   
    var tab9 = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8], 
        [9, 10, 11, 12, 13, 14, 15, 16, 17], 
        [18, 19, 20, 21, 22, 23, 24, 25, 26], 
        [27, 28, 29, 30, 31, 32, 33, 34, 35], 
        [36, 37, 38, 39, 40, 41, 42, 43, 44], 
        [45, 46, 47, 48, 49, 50, 51, 52, 53], 
        [54, 55, 56, 57, 58, 59, 60, 61, 62],
        [63, 64, 65, 66, 67, 68, 69, 70, 71], 
        [72, 73, 74, 75, 76, 77, 78, 79, 80]
    ]
    var tab10 = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 
        [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24, 25, 26, 27, 28, 29], 
        [30, 31, 32, 33, 34, 35, 36, 37, 38, 39], 
        [40, 41, 42, 43, 44, 45, 46, 47, 48, 49], 
        [50, 51, 52, 53, 54, 55, 56, 57, 58, 59], 
        [60, 61, 62, 63, 64, 65, 66, 67, 68, 69], 
        [70, 71, 72, 73, 74, 75, 76, 77, 78, 79], 
        [80, 81, 82, 83, 84, 85, 86, 87, 88, 89], 
        [90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
    ];
    var sqCount2 = 0;
    var sqCount3 = 0;
    var sqCount4 = 0;
    var sqCount5 = 0;
    var sqCount6 = 0;
    var sqCount7 = 0;
    var sqCount8 = 0;
    var sqCount9 = 0;
    var sqCount10 = 0;

    function onLoadedPage() {
        document.getElementById("cont2").classList.toggle("active", true);
    }
    
    // Add event listener for the DOMContentLoaded event

   // window.addEventListener("beforeunload", (event) => {
   //     // Custom message
   //     event.preventDefault();
   //     event.returnValue = "You will lose your progress...";
   // });

//Inversion
function invert(boxIn, num2) {
    let sqCountKey = `sqCount${num2}`;
    // Perform the color change and update sqCount accordingly
    if (boxIn.style.background === "white") {
        boxIn.style.background = "black";
        window[sqCountKey]--; // Decrease count
    } else {
        boxIn.style.background = "white";
        window[sqCountKey]++; // Increase count
    }

    console.log(window[sqCountKey]); // Check updated value
}


//Check if all boxes are colored    

    function checkMe(cnt, num) {
        if (cnt == num**2) {
            console.log("All boxes are colored in grid " + num);
            success(num);
        }
    }

//Success function

    function success(num) {
        ovr[0].style.display = "flex";
        ovr[0].style.zIndex = "2";
        document.getElementById("move-count-holder").innerHTML = clicks;
        setTimeout(ovr[0].style.opacity = "0.8", 10);
    }

    function closeOverlay() {
        ovr[0].style.display = "none";
        ovr[0].style.zIndex = "-2";
        setTimeout(ovr[0].style.opacity = "0", 10);
    }

//Undo handler

    function addToUndoStack(r, c, num) {
        moves.push([r,c]);
    }

    function undo() {
        if (moves.length === 0) {
            showToast();
        } else if (moves.length > 0) {
            var lastMove = moves.pop();
            undoColor(lastMove[0], lastMove[1], count + 2);
            console.log(moves.length + " moves left");
        }
    }

    function showToast() {
        console.log("No moves left to undo");
        var toast = document.getElementById("toast");
        toast.style.transform = "translate(0px,0px)";
        setTimeout(function() {
            toast.style.transform = "translate(0px,-100px)";
        }, 2000);
    }

    function undoColor(r, c, num) {
        clicks--;
        updateClicks(clicks);
        try {
            // Dynamically get the properties based on `num`
            let tab = window[`tab${num}`]; // Access tab1, tab2,... tab10 dynamically
            let b = window[`b${num}`]; // Access b1, b2,... b10 dynamically
    
            let rows = tab.length;
            let cols = tab[0].length;
    
            // Check and invert only valid indices
            if (r >= 0 && r < rows && c >= 0 && c < cols) invert(b[tab[r][c]]    , num);
            if (r + 1 >= 0 && r + 1 < rows)               invert(b[tab[r + 1][c]], num);
            if (r - 1 >= 0 && r - 1 < rows)               invert(b[tab[r - 1][c]], num);
            if (c + 1 >= 0 && c + 1 < cols)               invert(b[tab[r][c + 1]], num);
            if (c - 1 >= 0 && c - 1 < cols)               invert(b[tab[r][c - 1]], num);
        } catch (error) {
            // console.error("Error caught:", error.message);
        }
    }

//Coloring

    function color(r, c, num) {
        clicks++
        addToUndoStack(r, c, num);
        updateClicks(clicks);
        try {
            // Dynamically get the properties based on `num`
            let tab = window[`tab${num}`]; // Access tab1, tab2,... tab10 dynamically
            let b = window[`b${num}`]; // Access b1, b2,... b10 dynamically
    
            let rows = tab.length;
            let cols = tab[0].length;
    
            // Check and invert only valid indices
            if (r >= 0 && r < rows && c >= 0 && c < cols) invert(b[tab[r][c]]    , num);
            if (r + 1 >= 0 && r + 1 < rows)               invert(b[tab[r + 1][c]], num);
            if (r - 1 >= 0 && r - 1 < rows)               invert(b[tab[r - 1][c]], num);
            if (c + 1 >= 0 && c + 1 < cols)               invert(b[tab[r][c + 1]], num);
            if (c - 1 >= 0 && c - 1 < cols)               invert(b[tab[r][c - 1]], num);
        } catch (error) {
            // console.error("Error caught:", error.message);
        }
        let sqCountKey = `sqCount${num}`;
        checkMe(window[sqCountKey], num);
    }

//reset function
function reset() {
    clicks = 0;
    var num = count + 2; // Adjusting for the grid count
    let b = window[`b${num}`]; // Access b1, b2,... b10 dynamically
    let tab = window[`tab${num}`]; // Access tab1, tab2,... tab10 dynamically
    let rows = tab.length;
    let cols = tab[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            b[tab[i][j]].style.background = "black";
        }
    }

    // Reset the count variable
    let sqCountKey = `sqCount${num}`;
    window[sqCountKey] = 0;

    //Close the overlay
    closeOverlay();
    updateClicks(clicks);
}

//Click counter
function updateClicks(clicks) {
    document.getElementById("clicks").innerHTML = clicks;
}

//Grid Navigation

    function updateGridName(number) {
        console.log("Grid number: " + (number + 2));
        document.getElementById("gridName").innerHTML = (number + 2)+" "+ "x" + " " + (number + 2);
    }

    function showGrid(direction) {
        // Get all grids
        const blck = document.getElementsByClassName("cont");
        const totalGrids = blck.length;
    
        // Update count based on direction
        count += direction;
    
        // Ensure count stays within bounds
        count = Math.max(0, Math.min(totalGrids - 1, count));
    
        // Use a single loop to toggle visibility
        for (let i = 0; i < totalGrids; i++) {
            blck[i].classList.toggle("active", i === count); // Add/remove active class
        }
        updateGridName(count);
    }
    function fore() {
        
        moves = []; // Clear the undo stack
        clicks = 0;
        updateClicks(clicks);
        closeOverlay();
        showGrid(1); // Move forward
    }
    
    function back() {
        clicks = 0;
        updateClicks(clicks);
        closeOverlay();
        showGrid(-1); // Move backward
    }