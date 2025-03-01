let asciiContainer = document.getElementById("ascii-container");
let asciiLines = `
@@@@@@@@  @@@        @@@@@@   @@@  @@@  @@@  @@@  
@@@@@@@@  @@@       @@@@@@@@  @@@@ @@@  @@@  @@@  
@@!       @@!       @@!  @@@  @@!@!@@@  @@!  !@@  
!@!       !@!       !@!  @!@  !@!!@!@!  !@!  @!!  
@!!!:!    @!!       @!@!@!@!  @!@ !!@!  @!@@!@!   
!!!!!:    !!!       !!!@!!!!  !@!  !!!  !!@!!!    
!!:       !!:       !!:  !!!  !!:  !!!  !!: :!!   
:!:        :!:      :!:  !:!  :!:  !:!  :!:  !:!  
 ::        :: ::::  ::   :::   ::   ::   ::  :::  
 :        : :: : :   :   : :  ::    :    :   :::  
`.split("");

let index = 0;
function typeASCII() {
    if (index < asciiLines.length) {
        asciiContainer.innerHTML += asciiLines[index];
        index++;
        setTimeout(typeASCII, 10); // Adjust speed
    }
}

typeASCII();
