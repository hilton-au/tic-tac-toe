class Player{
    constructor(name,mark){
        this.name = name
        this.mark = mark
        this.choices = []
    }
}


function Game(player1,player2){
    this.player1 = player1
    this.player2 = player2
    this.previousPlayer = ""
    this.status = `Game not started yet`
    let board = [0,1,2,3,4,5,6,7,8]
    let winningSets = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    this.start = function () {
        console.log("Let the game begin!")
        this.status = "Playing"
        this.showBoard()
    }
    this.showBoard = function(){
        console.log(`${board.slice(0,3)}\n${board.slice(3,6)}\n${board.slice(6)}`)
    }
    this.place = function(player, element){
        if (this.status !== `Playing`){
            console.log(`${this.status}`)
        }
        else if (this.previousPlayer === player.name) {
            console.log("Not your turn!")
        }
        else if (board[element] === player1.mark || board[element] === player2.mark){
            console.log("Spot already taken. Choose another spot!")
            this.showBoard()
        }
        else{
            board[element] = player.mark
            player.choices.push(element)
            this.showBoard()
            this.previousPlayer = player.name
            this.winner(player, element)
        }
    }
    this.winner = function(player,element){
        winningSets.forEach (set => {
            set.forEach((num,idx) => num === element ? set[idx] = player.mark : num )
        })
        if (winningSets.some(set => set.every(val => val === player.mark))) {
            this.status = "Game Ended"
            console.log(`Winner: ${player.name}!`)
        }

    }
}


//Test
let hilton = new Player('Hilton','x')
let arys = new Player('Arys','y')
let firstGame = new Game(hilton,arys)
firstGame.start()
firstGame.place(hilton, 2)
firstGame.place(hilton, 2)
firstGame.place(arys, 3)
firstGame.place(hilton, 4)
firstGame.place(arys, 7)
firstGame.place(hilton, 6)
firstGame.showBoard()