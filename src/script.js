var words = [
    {number:1,direction:'down',row:1,column:10,clue:'Broke football color barrier',answer:'benkelly',hint:'http://www.angelo.edu/asu_facts/history.php'},
    {number:2,direction:'down',row:2,column:16,clue:'Softball plays at this field',answer:'mayer',hint:'http://www.angelo.edu/services/ticket_office/softball.php'},
    {number:3,direction:'down',row:3,column:18,clue:'Award winning University Center',answer:'houstonharte',hint:'http://www.angelo.edu/services/specialevents/hhuc.php'},
    {number:4,direction:'across',row:5,column:1,clue:'Dominic’s breed',answer:'rambouillet',hint:'http://www.angelo.edu/asu_facts/traditions.php'},
    {number:5,direction:'across',row:6,column:15,clue:'Join this “ultimate” campus team',answer:'frisbee',hint:'http://myfuture.angelo.edu/content/news/13280-rams-ultimate-frisbee'},
    {number:6,direction:'across',row:7,column:3,clue:'Women pitched their way to World Series runner up',answer:'softball',hint:'http://www.angelosports.com/news/2017/5/20/no-1-rambelles-clinch-trip-to-college-softball-world-series-with-6-2-win-over-texas-woman-s.aspx'},
    {number:7,direction:'down',row:7,column:7,clue:'Toastiest homecoming tradition',answer:'bonfire',hint:'http://www.angelo.edu/asu_facts/traditions.php'},
    {number:8,direction:'down',row:9,column:9,clue:'Greatest state in the country',answer:'texas',hint:'https://youtu.be/VGF4ibgcHQE?t=6s'},
    {number:9,direction:'across',row:9,column:14,clue:'4-legged mascot',answer:'dominic',hint:'http://www.angelo.edu/asu_facts/traditions.php'},
    {number:10,direction:'down',row:11,column:3,clue:'Original school colors: ___ & gold',answer:'black',hint:'http://www.angelo.edu/content/profiles/6250-blue-and-gold'},
    {number:11,direction:'across',row:11,column:17,clue:'Original initials for the school',answer:'sajc',hint:'http://www.angelo.edu/content/news/15372-10000-strong'},
    {number:12,direction:'across',row:13,column:3,clue:'Champion bass fishers',answer:'anglers',hint:'http://www.angelo.edu/content/news/13930-asu-goes-clubbing/'},
    {number:13,direction:'down',row:13,column:8,clue:'Back to back state champs in this intramural sport',answer:'rugby',hint:'http://www.angelo.edu/content/news/15450-ram-rugby-football-club'},
    {number:14,direction:'down',row:13,column:13,clue:'Stickiest spot on campus',answer:'gumtree',hint:'http://www.angelo.edu/asu_facts/traditions.php'},
    {number:15,direction:'down',row:14,column:11,clue:'Tree lighting grove',answer:'oak',hint:'https://www.angelo.edu/asu_facts/traditions.php'},
    {number:16,direction:'across',row:14,column:15,clue:'2017 National champion in this track & field sport',answer:'javelin',hint:'http://www.angelosports.com/news/2017/5/27/fischer-wins-javelin-national-title-rams-place-10th-and-rambelles-tie-for-13th-at-ncaa-division-ii-track-field-championships.aspx'},
    {number:17,direction:'down',row:14,column:17,clue:'Spiked a spot in the Elite 8',answer:'volleyball',hint:'http://www.angelo.edu/content/news/15478-athletics-takes-some-big-wins'},
    {number:18,direction:'across',row:16,column:8,clue:'Dribbled to Elite 8',answer:'basketball',hint:'http://www.angelosports.com/news/2017/3/14/womens-basketball-belles-historic-season-comes-to-a-close-in-regional-championship-game.aspx?path=wbball'},
    {number:19,direction:'down',row:16,column:19,clue:'“From ___, it’s possible”',answer:'here',hint:'http://www.angelo.edu/president_welcome/'},
    {number:20,direction:'down',row:16,column:21,clue:'Newest academic building: ___ Strain',answer:'hunter',hint:'http://www.angelo.edu/content/news/15394-grand-occasion-fitting-tribute'},
    {number:21,direction:'across',row:17,column:6,clue:'April showers bring this Dr’s Flowers',answer:'may',hint:'http://www.angelo.edu/president_welcome/presbiography.php'},
    {number:21,direction:'down',row:17,column:6,clue:'New engineering degree on campus in 2018',answer:'mechanical',hint:'http://www.angelo.edu/content/news/14962-us-dept-of-education-grant-for-engineering'},
    {number:22,direction:'down',row:18,column:9,clue:'Not silver but ___',answer:'gold',hint:'https://www.angelo.edu/asu_facts/traditions.php'},
    {number:23,direction:'across',row:18,column:16,clue:'Football’s home',answer:'legrand',hint:'http://www.angelo.edu/services/ticket_office/football.php'},
    {number:24,direction:'across',row:19,column:8,clue:'Fuzzy horned mascot',answer:'roscoe',hint:'http://www.angelo.edu/asu_facts/traditions.php'},
    {number:25,direction:'down',row:20,column:15,clue:'Not ram jelly but ___',answer:'ramjam',hint:'http://www.angelo.edu/asu_facts/traditions.php'},
    {number:26,direction:'across',row:21,column:11,clue:'She gets all women’s teams ramped up',answer:'bella',hint:'http://www.angelo.edu/asu_facts/traditions.php'},
    {number:26,direction:'down',row:21,column:11,clue:'We are True ___',answer:'blue',hint:''},
    {number:27,direction:'down',row:21,column:13,clue:'Celebrating 50 years on campus',answer:'library',hint:'http://angelo.libguides.com/PHL50thAnniversary'},
    {number:28,direction:'across',row:21,column:19,clue:'Oldest residence hall on campus',answer:'carr',hint:'http://www.angelo.edu/dept/residential_programs/halls/'},
    {number:29,direction:'down',row:21,column:20,clue:'New College of Health and Human Services Building',answer:'archer',hint:'http://www.angelo.edu/content/news/15488-the-changing-face-of-campus'},
    {number:30,direction:'down',row:21,column:22,clue:'Brothers & sisters, faculty & staff',answer:'ramfam',hint:''},
    {number:31,direction:'across',row:22,column:3,clue:'Newest women’s sport',answer:'tennis',hint:'http://www.angelosports.com/news/2017/9/7/womens-tennis-belle-tennis-to-compete-for-first-time-in-30-years.aspx?path=wten'},
    {number:32,direction:'across',row:22,column:15,clue:'Not for shopping but walking',answer:'mall',hint:''}
];

// Set global variables
var gridSize = [22,27];     // number of squares wide, number of squares tall
var direction = 'across';   // set initial direction to 'across'
var markCorrect = true;     // indicates ability for answers to be marked correct. will be set to false if "show answers" is clicked
var successShown = false;   // indicates whether the success modal has been shown
var $clueTooltip = $('<div class="clue-tooltip invisible"><div class="clue-tooltip-arrow"></div><div class="clue-tooltip-text"></div></div>').appendTo('.crossword');

// set up the base grid
var $crosswordPuzzle = $('<div class="crossword-puzzle col-md-8 col-lg-9"></div>');
var $table = $('<table class="crossword-grid"></table>');
for ( i=0; i<gridSize[1]; i++) {
    var $row = $('<tr class="grid-row"></tr>');
    for (j=0;j<gridSize[0];j++) {
        $square = $('<td class="grid-square"></td>');
        $square.appendTo($row);
    }
    $row.appendTo($table);
    $table.appendTo($crosswordPuzzle);
    $crosswordPuzzle.appendTo('.crossword');
}

// Add the fields to the grid
for (i=0;i<words.length;i++) {
    var row = words[i].row;
    var column = words[i].column;
    for (j=0;j<words[i].answer.length;j++) {
        var $square = $('.grid-row').eq(row-1).find('.grid-square').eq(column-1);
        var title = words[i].clue+', letter '+(j+1)+' of '+words[i].answer.length;
        var id = (words[i].direction == 'across' ? 'a' : 'd') + '-' + words[i].number + '-' + (j+1);
        if (j==0 && $square.find('.word-label').length == 0) {
            $('<span class="word-label">'+words[i].number+'</span>').appendTo($square);
        }
        if ($square.find('input').length == 0) {
            var $input = $('<input type="text" class="letter" title="'+title+'" id="'+id+'" maxlength="1" />');
                if (words[i].direction == 'across') {
                    $input.attr('data-across',words[i].number);
                    $input.attr('data-across-clue',words[i].clue);
                } else {
                    $input.attr('data-down',words[i].number);
                    $input.attr('data-down-clue',words[i].clue);
                }
                $input.data('letter',words[i].answer[j]);
                $input.appendTo($square);
            $square.addClass('active');
        } else {
            var $input = $square.find('input');
                $input.attr('title',$input.attr('title')+'; '+title);
                $input.attr('id',$input.attr('id')+'+'+id);
                if (words[i].direction == 'across') {
                    $input.attr('data-across',words[i].number);
                    $input.attr('data-across-clue',words[i].clue);
                } else {
                    $input.attr('data-down',words[i].number);
                    $input.attr('data-down-clue',words[i].clue);
                }
        }
        if (words[i].direction == 'down') {
            row++;
        } else {
            column++;
        }
    }
}

// Add the clues to the page
var $crosswordClues = $('<div class="crossword-clues col-md-4 col-lg-3"><div class="row"></div></div>');
var $acrossClues = $('<div class="across-clues col-sm-6 col-md-12"><p><strong>Across</strong></p><ol></ol></div>');
var $downClues = $('<div class="down-clues col-sm-6 col-md-12"><p><strong>Down</strong></p><ol></ol></div>');
for (i=0;i<words.length;i++) {
    var $clue = $('<li value="'+words[i].number+'" data-direction="'+words[i].direction+'" data-clue="'+words[i].number+'"><label>'+words[i].clue+' </label></li>');
        $clue.find('label').attr('for',$('[data-'+words[i].direction+'='+words[i].number+']').eq(0).attr('id'));
        $clue.on('click',function(){
            direction = $(this).data('direction');
        })
    if ( words[i].hint.length > 0 && words[i].hint != '' ) {
        $('<a class="hint" href="'+words[i].hint+'" target="_blank" title="Hint for '+words[i].number+' '+words[i].direction+'">(Hint)</a>').appendTo($clue.find('label'));
    }
    if (words[i].direction == 'across') {
        $clue.appendTo($acrossClues.find('ol'));
    } else {
        $clue.appendTo($downClues.find('ol'));
    }
}
$acrossClues.appendTo($crosswordClues.find('.row'));
$downClues.appendTo($crosswordClues.find('.row'));
$crosswordClues.appendTo('.crossword');

// Add the hints, reset, and show answers buttons
var $puzzleButtons = $('<div class="crossword-buttons"></div>');
var $hintsButton = $('<button class="btn btn-default">Show Hints</button>');
    $hintsButton.on('click',function(e){
        e.preventDefault();
        $('.crossword-clues').toggleClass('show-hints');
        $(this).text( $(this).text() == 'Show Hints' ? 'Hide Hints' : 'Show Hints' );
    });
    $hintsButton.appendTo($puzzleButtons);
var $resetButton = $('<button class="btn btn-default">Clear Puzzle</button>');
    $resetButton.on('click',function(e){
        e.preventDefault();
        $('input.letter').val('').parent('.grid-square').removeClass('correct-down correct-across');
        $('.crossword-clues li').removeClass('correct');
        markCorrect = true;
    });
    $resetButton.appendTo($puzzleButtons);
var $solveButton = $('<button class="show-answers btn btn-default">Show Answers</button>');
    $solveButton.on('click',function(e){
        e.preventDefault();
        $('input.letter').each(function(){
            $(this).val($(this).data('letter'));
        });
        markCorrect = false;
    });
    $solveButton.appendTo($puzzleButtons);
$puzzleButtons.appendTo('.crossword');

// Add the success modal
var $modal = $('<div class="modal fade" id="success-modal" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">Congratulations!</h4></div><div class="modal-body"><p>You have finished the puzzle.</p></div></div></div></div>');
$modal.appendTo('body');

// When a square is focused, highlight the other squares in that word and the clue, and show the tooltip
$('input.letter').on('focus',function(){
    var $current = $(this);
    $current.select();
    $current[0].setSelectionRange(0, 10);
    getDirection($current);
    $('[data-'+direction+'='+$current.data(direction)+']').parent('.grid-square').addClass('current-word');
    $('.crossword-clues li').removeClass('active');
    $('.crossword-clues li[data-direction='+direction+'][data-clue='+$(this).data(direction)+']').addClass('active');
    $clueTooltip.css({'left':tooltipPosition($current).left+'px','top':tooltipPosition($current).top-10+'px'}).removeClass('invisible').find('.clue-tooltip-arrow').css('left',tooltipPosition($current).offset+'px');
})

// When a square is blurred, remove highlight from squares and clue
$('input.letter').on('blur',function(){
    $('.grid-square').removeClass('current-word');
    $('.crossword-clues li').removeClass('active');
    $clueTooltip.addClass('invisible');
})

// handle directional and letter keys in letter inputs
$('input.letter').on('keyup',function(e){
    var $current = $(this);
    if (e.which == 38) {      // up arrow moves to square above if it exists
        direction = 'down';
        if (getPrevLetter($current)) {
            getPrevLetter($current).focus();
        }
    } else if (e.which == 40) {      // down arrow moves to square below if it exists
        direction = 'down';
        if (getNextLetter($current)) {
            getNextLetter($current).focus();
        }
    } else if (e.which == 37) {      // left arrow moves to square to the left if it exists
        direction = 'across';
        if (getPrevLetter($current)) {
            getPrevLetter($current).focus();
        }
    } else if (e.which == 39) {      // right arrow moves to square to the right if it exists
        direction = 'across';
        if (getNextLetter($current)) {
            getNextLetter($current).focus();
        }
    } else {
        e.preventDefault();
    }
    if (markCorrect) {
        checkWord($current);
    };
})

// Tab and Shift/Tab move to next and previous words
$('input.letter').on('keydown',function(e){
    var $current = $(this);
    if (e.which == 9) {       // tab
        e.preventDefault();
        if (e.shiftKey) {       // shift/tab
            getPrevWord($current).focus();
        } else {
            getNextWord($current).focus();
        }
    } else if (e.which == 8) {        // backspace
        e.preventDefault();
        if ($(this).val().length > 0) {
            $(this).val('');
        } else {
            if (getPrevLetter($current)) {
                getPrevLetter($current).focus().val('');
            }
        }
    } else if ((e.which>=48 && e.which<=90) || (e.which>=96 && e.which<=111) || (e.which>=186 && e.which<=192) || (e.which>=219 && e.which<=222)) {    // typeable characters move to the next square in the word if it exists
        e.preventDefault();
        $current.val(String.fromCharCode(e.which));
        if (getNextLetter($current)) {
            getNextLetter($current).focus();
        }
    }
    if (markCorrect) {
        checkWord($current);
    };
})

// Check if all letters in selected word are correct
function checkWord($current) {
    var correct;
    var currentWord;
    if ( $current.is('[data-across]') ) {
        correct = 0;
        currentWord = $current.data('across');
        $('[data-across='+currentWord+']').each(function(){
            if ($(this).val().toLowerCase() == $(this).data('letter').toLowerCase()) {
                correct += 1;
            }
        })
        if (correct == $('[data-across='+currentWord+']').length ) {
            $('[data-across='+currentWord+']').parent('.grid-square').addClass('correct-across');
            $('.crossword-clues li[data-direction=across][data-clue='+currentWord+']').addClass('correct');
        } else {
            $('[data-across='+currentWord+']').parent('.grid-square').removeClass('correct-across');
            $('.crossword-clues li[data-direction=across][data-clue='+currentWord+']').removeClass('correct');
        }
    }
    if ( $current.is('[data-down]') ) {
        correct = 0;
        currentWord = $current.data('down');
        $('[data-down='+currentWord+']').each(function(){
            if ($(this).val().toLowerCase() == $(this).data('letter').toLowerCase()) {
                correct += 1;
            }
        })
        if (correct == $('[data-down='+currentWord+']').length ) {
            $('[data-down='+currentWord+']').parent('.grid-square').addClass('correct-down');
            $('.crossword-clues li[data-direction=down][data-clue='+currentWord+']').addClass('correct');
        } else {
            $('[data-down='+currentWord+']').parent('.grid-square').removeClass('correct-down');
            $('.crossword-clues li[data-direction=down][data-clue='+currentWord+']').removeClass('correct');
        }
    }
    if ($('.grid-square.active:not([class*=correct])').length == 0 && !successShown) {
        $('#success-modal').modal();
        successShown = true;
    }
}

// Return the input of the first letter of the next word in the clues list
function getNextWord($current) {
    var length = $('.crossword-clues li').length;
    var index = $('.crossword-clues li').index($('.crossword-clues li.active'));
    var nextWord;
    if (index < length-1) {
        $nextWord = $('.crossword-clues li').eq(index+1);
    } else {
        $nextWord = $('.crossword-clues li').eq(0);
    }
    direction = $nextWord.data('direction');
    return $('[data-'+$nextWord.data('direction')+'='+$nextWord.data('clue')+']').eq(0);
}

// Return the input of the first letter of the previous word in the clues list
function getPrevWord($current) {
    var length = $('.crossword-clues li').length;
    var index = $('.crossword-clues li').index($('.crossword-clues li.active'));
    var prevWord;
    if (index > 0) {
        $prevWord = $('.crossword-clues li').eq(index-1);
    } else {
        $prevWord = $('.crossword-clues li').eq(length-1);
    }
    direction = $prevWord.data('direction');
    return $('[data-'+$prevWord.data('direction')+'='+$prevWord.data('clue')+']').eq(0);
}

// If there is a letter square before or after the current letter in the current direction, keep global direction the same, otherwise switch global direction
function getDirection($current) {
    if (getPrevLetter($current) || getNextLetter($current)) {
        direction = direction;
    } else {
        direction = (direction == 'across') ? 'down' : 'across';
    }
}

// Return the input of the previous letter in the current word if it exists, otherwise return false
function getPrevLetter($current) {
    var index = $('[data-'+direction+'='+$current.data(direction)+']').index($current);
    if (index > 0) {
       return $('[data-'+direction+'='+$current.data(direction)+']').eq(index-1);
    } else {
       return false;
    }
}

// Return the input of the next letter in the current word if it exists, otherwise return false
function getNextLetter($current) {
    var length = $('[data-'+direction+'='+$current.data(direction)+']').length;
    var index = $('[data-'+direction+'='+$current.data(direction)+']').index($current);
    if (index < length-1) {
       return $('[data-'+direction+'='+$current.data(direction)+']').eq(index+1);
    } else {
       return false;
    }
}

// Return the top, left, and offset positions for tooltip placement
function tooltipPosition($current) {
    var left = $('[data-'+direction+'='+$current.data(direction)+']').eq(0).offset().left - $('.crossword').offset().left;
    var top = $('[data-'+direction+'='+$current.data(direction)+']').eq(0).offset().top - $('.crossword').offset().top;
    $clueTooltip.find('.clue-tooltip-text').text($current.data(direction+'-clue'));
    var right = left + $clueTooltip.outerWidth();
    var offset = right - $('.crossword-puzzle').outerWidth();
        offset = offset > 0 ? offset : 0;
    left = left - offset;
    return {'left':left,'top':top,'offset':offset};
}

