scene.setBackgroundColor(15)
story.printText("Welcome to your very own world!", 80, 60)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 3 3 . . . . . 
    . . . . . . . . 3 . 3 3 . . . . 
    . . . . . . . 3 . . . . 3 . . . 
    . . . . . . 3 3 3 3 3 3 3 . . . 
    . . . . . . 3 3 3 3 3 3 . 3 . . 
    . . . . . 3 3 3 . . . 3 . 3 . . 
    . . . . . 3 3 3 3 3 . 3 . 3 . . 
    . . . . . 3 3 3 3 3 3 3 . 3 . . 
    . . . . . . 3 3 3 3 . 3 3 . . . 
    . . . . . . . . 3 3 3 3 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
