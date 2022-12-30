let click = 0, lstO = [], lstX = [],
    winSituation = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9],
        [1, 4, 7], [2, 5, 8], [3, 6, 9],
        [1, 5, 9], [3, 5, 7]
    ];


$('.mycol').off('click');
$('.mycol').on('click', displayInput); 

function displayInput() {    
    $(this).empty();
    $(this).off('click');
    $(this).css({
        'cursor': 'not-allowed',
        'background-color': '#ffcccc'
    });
    $('#winner-display').empty();

    if (click % 2 === 0) {
        $(this).append('<i class="far fa-circle fa-5x text-primary"></i>');
        lstO.push($(this).data('value'));
    } else {
        $(this).append('<i class="fas fa-times fa-6x text-danger"></i>');
        lstX.push($(this).data('value'));
    }
    click++;

    for (let i = 0; i < winSituation.length; i++) {
        let element = winSituation[i],
            winOFlag = true, winXFlag = true;

        for (let j = 0; j < element.length; j++) {
            if (!lstO.includes(element[j])) {
                winOFlag = false;
                break;
            }
        }
        for (let j = 0; j < element.length; j++) {
            if (!lstX.includes(element[j])) {
                winXFlag = false;
                break;
            }
        }

        if (winOFlag === true) {
            clearGrid();
            $('#winner-display').append(`
                <div class="text-primary neon-color d-flex justify-content-center align-items-center">
                    <h1 class="m-0 me-2">Congratulations!!</h1>
                    <i class="m-0 ms-2 me-1 far fa-circle fa-2x"></i>
                    <h1 class="m-0 ms-1">Player 1 Won</h1>
                </div>`);
            break;
        }
        if (winXFlag === true) {
            clearGrid();
            $('#winner-display').append(`
                <div class="text-danger neon-color d-flex justify-content-center align-items-center">
                    <h1 class="m-0 me-2">Congratulations!!</h1>
                    <i class="m-0 ms-2 me-1 fas fa-times fa-3x"></i>
                    <h1 class="m-0 ms-1">Player 2 Won</h1>
                </div>`);
            break;
        }
    }

    if(click === 9) {
        clearGrid();
        $('#winner-display').append(`
            <div class="text-warning neon-color d-flex justify-content-center align-items-center">
                <h1 class="m-0">---Draw Game---</h1>
            </div>`);
    }

    //console.log('Player 1->' + lstO);
    //console.log('Player 2->' + lstX);
    //console.log(click);
}

function clearGrid() {
    lstO = [];
    lstX = [];
    click = 0;
    $('.mycol').empty();
    $('.mycol').removeAttr('style');
    $('.mycol').off('click');
    $('.mycol').on('click', displayInput);
    $('#winner-display').empty();
}

// reset button
$('.reset').on('click', clearGrid);