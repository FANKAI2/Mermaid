namespace SpriteKind {
    export const LowNotes = SpriteKind.create()
    export const MiddleNotes = SpriteKind.create()
    export const HighNotes = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.LowNotes, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 200)
})
tiles.setCurrentTilemap(tilemap`level2`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . . . 
    . . . c 4 d 4 4 4 4 4 1 c . c c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
    . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
    f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
    . f 4 4 4 4 1 c 4 f 4 d f f f f 
    . . f f 4 d 4 4 f f 4 c f c . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(12, 11))
let LowNote = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . . f 1 f f f . . . . . . 
    . . . . . f f f . f f . . . . . 
    . . . . . . f . f . f . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.LowNotes)
tiles.placeOnTile(LowNote, tiles.getTileLocation(13, 11))
let MiddleNote = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . . f 1 f f f . . . . . . 
    . . . . . f f f . f f . . . . . 
    . . . . . . f . f . f . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.MiddleNotes)
tiles.placeOnTile(MiddleNote, tiles.getTileLocation(11, 11))
let HighNote = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . . f 1 f f f . . . . . . 
    . . . . . f f f . f f . . . . . 
    . . . . . . f . f . f . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.HighNotes)
tiles.placeOnTile(HighNote, tiles.getTileLocation(12, 10))
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
